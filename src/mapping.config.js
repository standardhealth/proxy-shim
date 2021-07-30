const setProfile = (resource, profile) => {
  resource.meta = resource.meta || {};
  resource.meta.profile = resource.meta.profile || [];
  resource.meta.profile.push(profile);
};

module.exports = {
  ignore: null,
  exclude: null,
  default: null,
  mappers: {
    Patient: {
      default: (resource) => setProfile(resource, 'us-core-patient'),
    },
    Observation: {
      default: (resource) => setProfile(resource, 'us-core-observation'),
    },
    Condition: {
      default: (resource) => setProfile(resource, 'us-core-condition'),
    },
    Device: {
      default: (resource) => setProfile(resource, 'us-core-device'),
    },
    Procedure: {
      default: (resource) => setProfile(resource, 'us-core-procedure'),
    },
    MedicationAdministration: {
      default: (resource) => setProfile(resource, 'us-core-medication-administration'),
    },
    MedicationRequest: {
      default: (resource) => setProfile(resource, 'us-core-medication-request'),
    },
  },
};
