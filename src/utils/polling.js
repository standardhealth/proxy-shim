const { loggers } = require('@asymmetrik/node-fhir-server-core');
const mkFhir = require('fhir.js');
const config = require('config');
const db = require('../storage/DataAccess');
const topiclist = require('../../public/topiclist.json');

const logger = loggers.get('default');
const SUBSCRIPTION = 'subscriptions';
const fhirClientConfig = config.fhirClientConfig;

const TOPIC_URL = 'http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-topic-canonical';

/**
 *
 * @param {String} topic - Subscription topic from topiclist
 * @returns {Object} - returns a FHIR search query object
 */
function getSearchQuery(topic) {
  if (topic.includes('encounter')) { return { type: 'Encounter' }; }
  if (topic.includes('diagnosis')) { return { type: 'Condition' }; }
  if (topic.includes('medication')) { return { type: 'Medication' }; }
  if (topic.includes('labresult')) { return { type: 'Observation', query: { category: 'laboratory' } }; }
  if (topic.includes('order')) { return { type: 'ServiceRequest' }; }
  if (topic.includes('procedure')) { return { type: 'Procedure' }; }
  if (topic.includes('immunization')) { return { type: 'Immunization' }; }
  if (topic === 'demographic-change') { return { type: 'Patient' }; }
}

function pollSubscriptionTopics() {
  logger.info('Polling Subscription topics');

  // Get subscriptions with topics
  const subscriptions = db.select(
    SUBSCRIPTION,
    (s) => s.extension && s.extension.some((e) => e.url === TOPIC_URL)
  );

  // Remove duplicates with Set so we don't poll twice for same topic
  const topicsToPoll = [
    ...new Set(
      subscriptions.map((s) => {
        const topicExtension = s.extension.find((e) => e.url === TOPIC_URL);

        return topiclist.parameter.find(p => p.valueCanonical === topicExtension.valueUri).name;
      })
    ),
  ];

  if (topicsToPoll.length === 0) {
    logger.info('No subscription topics to poll.');
    return;
  }

  topicsToPoll.forEach((topic) => {
    logger.info(`Polling EHR for ${topic}.`);
    const options = {
      baseUrl: fhirClientConfig.baseUrl,
      auth: {
        bearer: 'admin'
      }
    };

    const fhirClient = mkFhir(options);
    fhirClient
      .search(getSearchQuery(topic))
      .then((response) => {
        const { data } = response;

        // Store fetched resources in local database
        if (data.total > 0) {
          logger.info('Storing fetched resources into database.');
          const resources = data.entry.map(entry => entry.resource);

          resources.forEach((resource) => {
            const collection = `${resource.resourceType.toLowerCase()}s`;
            db.upsert(collection, resource, r => r.id === resource.id);
          });
        }
      })
      .catch((err) => logger.error(err));
  });

}

module.exports = { pollSubscriptionTopics };
