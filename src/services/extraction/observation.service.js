const BaseExtractionService = require('./base.service');

const observationConfig = {
  patientIdCsvPath: './test/sample-extraction-data/patient-mrns.csv',
  extractors: [
    {
      label: 'patient',
      type: 'CSVPatientExtractor',
      constructorArgs: {
        url: 'https://raw.githubusercontent.com/mcode/mcode-extraction-framework/main/test/sample-client-data/patient-information.csv',
      },
    },
    {
      label: 'observation',
      type: 'CSVObservationExtractor',
      constructorArgs: {
        url: 'https://raw.githubusercontent.com/mcode/mcode-extraction-framework/main/test/sample-client-data/observation-information.csv',
      },
    },
  ],
};

class ObservationService extends BaseExtractionService {
  constructor() {
    super('Observation', observationConfig);
  }
}

module.exports = new ObservationService();
