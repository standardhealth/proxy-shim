module.exports = {
  'resourceType': 'Conformance',
  'publisher': 'Not provided',
  'date': '2019-01-02T14:46:37+00:00',
  'kind': 'instance',
  'software': {
    'name': 'HAPI FHIR Server',
    'version': '3.2.0'
  },
  'implementation': {
    'description': 'Example Server'
  },
  'fhirVersion': '1.0.2',
  'acceptUnknown': 'extensions',
  'format': ['application/xml+fhir', 'application/json+fhir'],
  'rest': [{
    'mode': 'server',
    'resource': [{
      'type': 'Account',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Account'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Account:owner', 'Account:patient', 'Account:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'balance',
        'type': 'quantity'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'owner',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'period',
        'type': 'date'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 100
      }],
      'type': 'AllergyIntolerance',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/AllergyIntolerance'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'AllergyIntolerance:patient', 'AllergyIntolerance:recorder', 'AllergyIntolerance:reporter'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token'
      }, {
        'name': 'criticality',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'last-date',
        'type': 'date'
      }, {
        'name': 'manifestation',
        'type': 'token'
      }, {
        'name': 'onset',
        'type': 'date'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'recorder',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'reporter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'route',
        'type': 'token'
      }, {
        'name': 'severity',
        'type': 'token'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'substance',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'type': 'Appointment',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Appointment'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Appointment:actor', 'Appointment:location', 'Appointment:patient', 'Appointment:practitioner'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actor',
        'type': 'reference',
        'documentation': 'Any one of the individuals participating in the appointment',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'Appointment date/time.'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'An Identifier of the Appointment'
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'This location is listed in the participants of the appointment',
        'chain': ['*']
      }, {
        'name': 'part-status',
        'type': 'token',
        'documentation': 'The Participation status of the subject, or other participant on the appointment. Can be used to locate participants that have not responded to meeting requests.'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'One of the individuals of the appointment is this patient',
        'chain': ['*']
      }, {
        'name': 'practitioner',
        'type': 'reference',
        'documentation': 'One of the individuals of the appointment is this practitioner',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The overall status of the appointment'
      }]
    }, {
      'type': 'AppointmentResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/AppointmentResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'AppointmentResponse:actor', 'AppointmentResponse:appointment', 'AppointmentResponse:location', 'AppointmentResponse:patient', 'AppointmentResponse:practitioner'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actor',
        'type': 'reference',
        'documentation': 'The Person, Location/HealthcareService or Device that this appointment response replies for',
        'chain': ['*']
      }, {
        'name': 'appointment',
        'type': 'reference',
        'documentation': 'The appointment that the response is attached to',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'An Identifier in this appointment response'
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'This Response is for this Location',
        'chain': ['*']
      }, {
        'name': 'part-status',
        'type': 'token',
        'documentation': 'The participants acceptance status for this appointment'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'This Response is for this Patient',
        'chain': ['*']
      }, {
        'name': 'practitioner',
        'type': 'reference',
        'documentation': 'This Response is for this Practitioner',
        'chain': ['*']
      }]
    }, {
      'type': 'AuditEvent',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/AuditEvent'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'AuditEvent:participant', 'AuditEvent:patient', 'AuditEvent:reference'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'action',
        'type': 'token'
      }, {
        'name': 'address',
        'type': 'token'
      }, {
        'name': 'altid',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'desc',
        'type': 'string'
      }, {
        'name': 'identity',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'object-type',
        'type': 'token'
      }, {
        'name': 'participant',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'policy',
        'type': 'uri'
      }, {
        'name': 'reference',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'site',
        'type': 'token'
      }, {
        'name': 'source',
        'type': 'token'
      }, {
        'name': 'subtype',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'user',
        'type': 'token'
      }]
    }, {
      'type': 'Basic',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Basic'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Basic:author', 'Basic:patient', 'Basic:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'created',
        'type': 'date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 18
      }],
      'type': 'Binary',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Binary'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'contenttype',
        'type': 'token'
      }]
    }, {
      'type': 'BodySite',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/BodySite'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'BodySite:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Named anatomical location'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Identifier for this instance of the anatomical location'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Patient to whom bodysite belongs',
        'chain': ['*']
      }]
    }, {
      'type': 'Bundle',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Bundle'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Bundle:composition', 'Bundle:message'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'composition',
        'type': 'reference',
        'documentation': 'The first resource in the bundle, if the bundle type is "document" - this is a composition, and this parameter provides access to searches its contents',
        'chain': ['*']
      }, {
        'name': 'message',
        'type': 'reference',
        'documentation': 'The first resource in the bundle, if the bundle type is "message" - this is a message header, and this parameter provides access to search its contents',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 269
      }],
      'type': 'CarePlan',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/CarePlan'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'CarePlan:activityreference', 'CarePlan:condition', 'CarePlan:goal', 'CarePlan:participant', 'CarePlan:patient', 'CarePlan:performer', 'CarePlan:relatedplan', 'CarePlan:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'activitycode',
        'type': 'token'
      }, {
        'name': 'activitydate',
        'type': 'date',
        'documentation': 'Specified date occurs within period specified by CarePlan.activity.timingSchedule'
      }, {
        'name': 'activityreference',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'condition',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'goal',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'participant',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'documentation': 'Matches if the practitioner is listed as a performer in any of the "simple" activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.)',
        'chain': ['*']
      }, {
        'name': 'relatedcode',
        'type': 'token'
      }, {
        'name': 'relatedcode-relatedplan',
        'type': 'composite',
        'documentation': 'A combination of the type of relationship and the related plan'
      }, {
        'name': 'relatedplan',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 3317
      }],
      'type': 'Claim',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Claim'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Claim:patient', 'Claim:provider'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The primary identifier of the financial resource'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Patient',
        'chain': ['*']
      }, {
        'name': 'priority',
        'type': 'token',
        'documentation': 'Processing priority requested'
      }, {
        'name': 'provider',
        'type': 'reference',
        'documentation': 'Provider responsible for the claim',
        'chain': ['*']
      }, {
        'name': 'use',
        'type': 'token',
        'documentation': 'The kind of financial resource'
      }]
    }, {
      'type': 'ClaimResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ClaimResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identity of the insurer'
      }]
    }, {
      'type': 'ClinicalImpression',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ClinicalImpression'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ClinicalImpression:action', 'ClinicalImpression:assessor', 'ClinicalImpression:investigation', 'ClinicalImpression:patient', 'ClinicalImpression:plan', 'ClinicalImpression:previous', 'ClinicalImpression:problem', 'ClinicalImpression:trigger'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'action',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'assessor',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'finding',
        'type': 'token'
      }, {
        'name': 'investigation',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'plan',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'previous',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'problem',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'resolved',
        'type': 'token'
      }, {
        'name': 'ruledout',
        'type': 'token'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'trigger',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'trigger-code',
        'type': 'token'
      }]
    }, {
      'type': 'Communication',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Communication'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Communication:encounter', 'Communication:patient', 'Communication:recipient', 'Communication:request', 'Communication:sender', 'Communication:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'medium',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'received',
        'type': 'date'
      }, {
        'name': 'recipient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'request',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'sender',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'sent',
        'type': 'date'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'CommunicationRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/CommunicationRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'CommunicationRequest:encounter', 'CommunicationRequest:patient', 'CommunicationRequest:recipient', 'CommunicationRequest:requester', 'CommunicationRequest:sender', 'CommunicationRequest:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'medium',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'priority',
        'type': 'token'
      }, {
        'name': 'recipient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'requested',
        'type': 'date'
      }, {
        'name': 'requester',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'sender',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'time',
        'type': 'date'
      }]
    }, {
      'type': 'Composition',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Composition'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Composition:attester', 'Composition:author', 'Composition:encounter', 'Composition:entry', 'Composition:patient', 'Composition:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'attester',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'class',
        'type': 'token'
      }, {
        'name': 'confidentiality',
        'type': 'token'
      }, {
        'name': 'context',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'entry',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'period',
        'type': 'date'
      }, {
        'name': 'section',
        'type': 'token'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'title',
        'type': 'string'
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'type': 'ConceptMap',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ConceptMap'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ConceptMap:source', 'ConceptMap:sourceuri', 'ConceptMap:target'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'context',
        'type': 'token',
        'documentation': 'A use context assigned to the concept map'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The concept map publication date'
      }, {
        'name': 'dependson',
        'type': 'uri'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the concept map'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Additional identifier for the concept map'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'Name of the concept map'
      }, {
        'name': 'product',
        'type': 'uri'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the concept map'
      }, {
        'name': 'source',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'sourcecode',
        'type': 'token'
      }, {
        'name': 'sourcesystem',
        'type': 'uri'
      }, {
        'name': 'sourceuri',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Status of the concept map'
      }, {
        'name': 'target',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'targetcode',
        'type': 'token'
      }, {
        'name': 'targetsystem',
        'type': 'uri'
      }, {
        'name': 'url',
        'type': 'uri',
        'documentation': 'The URL of the concept map'
      }, {
        'name': 'version',
        'type': 'token',
        'documentation': 'The version identifier of the concept map'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 1243
      }],
      'type': 'Condition',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Condition'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Condition:asserter', 'Condition:encounter', 'Condition:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'asserter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'body-site',
        'type': 'token'
      }, {
        'name': 'category',
        'type': 'token',
        'documentation': 'The category of the condition'
      }, {
        'name': 'clinicalstatus',
        'type': 'token',
        'documentation': 'The clinical status of the condition'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Code for the condition'
      }, {
        'name': 'date-recorded',
        'type': 'date',
        'documentation': 'A date, when the Condition statement was documented'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'evidence',
        'type': 'token'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A unique identifier of the condition record'
      }, {
        'name': 'onset',
        'type': 'date',
        'documentation': 'Date related onsets (dateTime and Period)'
      }, {
        'name': 'onset-info',
        'type': 'string',
        'documentation': 'Other onsets (boolean, age, range, string)'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'severity',
        'type': 'token',
        'documentation': 'The severity of the condition'
      }, {
        'name': 'stage',
        'type': 'token'
      }]
    }, {
      'type': 'Conformance',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Conformance'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Conformance:profile', 'Conformance:supported-profile'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The conformance statement publication date'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the conformance statement'
      }, {
        'name': 'event',
        'type': 'token',
        'documentation': 'Event code in a conformance statement'
      }, {
        'name': 'fhirversion',
        'type': 'token',
        'documentation': 'The version of FHIR'
      }, {
        'name': 'format',
        'type': 'token'
      }, {
        'name': 'mode',
        'type': 'token',
        'documentation': 'Mode - restful (server/client) or messaging (sender/receiver)'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'Name of the conformance statement'
      }, {
        'name': 'profile',
        'type': 'reference',
        'documentation': 'A profile id invoked in a conformance statement',
        'chain': ['*']
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the conformance statement'
      }, {
        'name': 'resource',
        'type': 'token',
        'documentation': 'Name of a resource mentioned in a conformance statement'
      }, {
        'name': 'security',
        'type': 'token'
      }, {
        'name': 'software',
        'type': 'string',
        'documentation': 'Part of a the name of a software application'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The current status of the conformance statement'
      }, {
        'name': 'supported-profile',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'url',
        'type': 'uri',
        'documentation': 'The uri that identifies the conformance statement'
      }, {
        'name': 'version',
        'type': 'token',
        'documentation': 'The version identifier of the conformance statement'
      }]
    }, {
      'type': 'Contract',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Contract'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Contract:actor', 'Contract:patient', 'Contract:signer', 'Contract:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actor',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identity of the contract'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of the target of the contract (if a patient)',
        'chain': ['*']
      }, {
        'name': 'signer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The identity of the target of the contract',
        'chain': ['*']
      }]
    }, {
      'type': 'Coverage',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Coverage'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Coverage:issuer'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'dependent',
        'type': 'token',
        'documentation': 'Dependent number'
      }, {
        'name': 'group',
        'type': 'token',
        'documentation': 'Group identifier'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The primary identifier of the insured'
      }, {
        'name': 'issuer',
        'type': 'reference',
        'documentation': 'The identity of the insurer',
        'chain': ['*']
      }, {
        'name': 'plan',
        'type': 'token',
        'documentation': 'A plan or policy identifier'
      }, {
        'name': 'sequence',
        'type': 'token',
        'documentation': 'Sequence number'
      }, {
        'name': 'subplan',
        'type': 'token',
        'documentation': 'Sub-plan identifier'
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The kind of coverage'
      }]
    }, {
      'type': 'DataElement',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DataElement'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A code for the data element (server may choose to do subsumption)'
      }, {
        'name': 'context',
        'type': 'token',
        'documentation': 'A use context assigned to the data element'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The data element publication date'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the data element.  This corresponds to the definition of the first DataElement.element.'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identifier of the data element'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'Name of the data element'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the data element'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The current status of the data element'
      }, {
        'name': 'stringency',
        'type': 'token',
        'documentation': 'The stringency of the data element definition'
      }, {
        'name': 'url',
        'type': 'uri',
        'documentation': 'The official URL for the data element'
      }, {
        'name': 'version',
        'type': 'string',
        'documentation': 'The version identifier of the data element'
      }]
    }, {
      'type': 'DetectedIssue',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DetectedIssue'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DetectedIssue:author', 'DetectedIssue:implicated', 'DetectedIssue:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'category',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'implicated',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'Device',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Device'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Device:location', 'Device:organization', 'Device:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Instance id from manufacturer, owner, and others'
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'A location, where the resource is found',
        'chain': ['*']
      }, {
        'name': 'manufacturer',
        'type': 'string',
        'documentation': 'The manufacturer of the device'
      }, {
        'name': 'model',
        'type': 'string',
        'documentation': 'The model of the device'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization responsible for the device',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Patient information, if the resource is affixed to a person',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The type of the device'
      }, {
        'name': 'udi',
        'type': 'string',
        'documentation': 'FDA mandated Unique Device Identifier'
      }, {
        'name': 'url',
        'type': 'uri',
        'documentation': 'Network address to contact device'
      }]
    }, {
      'type': 'DeviceComponent',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DeviceComponent'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DeviceComponent:parent', 'DeviceComponent:source'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'parent',
        'type': 'reference',
        'documentation': 'The parent DeviceComponent resource',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'documentation': 'The device source',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The device component type'
      }]
    }, {
      'type': 'DeviceMetric',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DeviceMetric'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DeviceMetric:parent', 'DeviceMetric:source'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token',
        'documentation': 'The category of the metric'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identifier of the metric'
      }, {
        'name': 'parent',
        'type': 'reference',
        'documentation': 'The parent DeviceMetric resource',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'documentation': 'The device resource',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The component type'
      }]
    }, {
      'type': 'DeviceUseRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DeviceUseRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DeviceUseRequest:device', 'DeviceUseRequest:patient', 'DeviceUseRequest:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'device',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Search by subject - a patient',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'Search by subject',
        'chain': ['*']
      }]
    }, {
      'type': 'DeviceUseStatement',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DeviceUseStatement'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DeviceUseStatement:device', 'DeviceUseStatement:patient', 'DeviceUseStatement:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'device',
        'type': 'reference',
        'documentation': 'Search by device',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Search by subject - a patient',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'Search by subject',
        'chain': ['*']
      }]
    }, {
      'type': 'DiagnosticOrder',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DiagnosticOrder'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DiagnosticOrder:actor', 'DiagnosticOrder:encounter', 'DiagnosticOrder:orderer', 'DiagnosticOrder:patient', 'DiagnosticOrder:specimen', 'DiagnosticOrder:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actor',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'bodysite',
        'type': 'token'
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'event-date',
        'type': 'date'
      }, {
        'name': 'event-status',
        'type': 'token'
      }, {
        'name': 'event-status-event-date',
        'type': 'composite',
        'documentation': 'A combination of past-status and date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'item-date',
        'type': 'date'
      }, {
        'name': 'item-past-status',
        'type': 'token'
      }, {
        'name': 'item-past-status-item-date',
        'type': 'composite',
        'documentation': 'A combination of item-past-status and item-date'
      }, {
        'name': 'item-status',
        'type': 'token'
      }, {
        'name': 'orderer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'specimen',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 869
      }],
      'type': 'DiagnosticReport',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DiagnosticReport'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DiagnosticReport:encounter', 'DiagnosticReport:image', 'DiagnosticReport:patient', 'DiagnosticReport:performer', 'DiagnosticReport:request', 'DiagnosticReport:result', 'DiagnosticReport:specimen', 'DiagnosticReport:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token',
        'documentation': 'Which diagnostic discipline/department created the report'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The clinically relevant time of the report'
      }, {
        'name': 'diagnosis',
        'type': 'token',
        'documentation': 'A coded diagnosis on the report'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'The Encounter when the order was made',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'An identifier for the report'
      }, {
        'name': 'image',
        'type': 'reference',
        'documentation': 'A reference to the image source.',
        'chain': ['*']
      }, {
        'name': 'issued',
        'type': 'date',
        'documentation': 'When the report was issued'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The subject of the report if a patient',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'documentation': 'Who was the source of the report (organization)',
        'chain': ['*']
      }, {
        'name': 'request',
        'type': 'reference',
        'documentation': 'Reference to the test or procedure request.',
        'chain': ['*']
      }, {
        'name': 'result',
        'type': 'reference',
        'documentation': 'Link to an atomic result (observation resource)',
        'chain': ['*']
      }, {
        'name': 'specimen',
        'type': 'reference',
        'documentation': 'The specimen details',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the report'
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The subject of the report',
        'chain': ['*']
      }]
    }, {
      'type': 'DocumentManifest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DocumentManifest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DocumentManifest:author', 'DocumentManifest:content-ref', 'DocumentManifest:patient', 'DocumentManifest:recipient', 'DocumentManifest:related-ref', 'DocumentManifest:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'content-ref',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'created',
        'type': 'date'
      }, {
        'name': 'description',
        'type': 'string'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'recipient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'related-id',
        'type': 'token'
      }, {
        'name': 'related-ref',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'uri'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 7
      }],
      'type': 'DocumentReference',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/DocumentReference'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'DocumentReference:authenticator', 'DocumentReference:author', 'DocumentReference:custodian', 'DocumentReference:encounter', 'DocumentReference:patient', 'DocumentReference:related-ref', 'DocumentReference:relatesto', 'DocumentReference:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'authenticator',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'class',
        'type': 'token'
      }, {
        'name': 'created',
        'type': 'date'
      }, {
        'name': 'custodian',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'description',
        'type': 'string'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'event',
        'type': 'token'
      }, {
        'name': 'facility',
        'type': 'token'
      }, {
        'name': 'format',
        'type': 'token'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'indexed',
        'type': 'date'
      }, {
        'name': 'language',
        'type': 'token'
      }, {
        'name': 'location',
        'type': 'uri'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'period',
        'type': 'date'
      }, {
        'name': 'related-id',
        'type': 'token'
      }, {
        'name': 'related-ref',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'relatesto',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'relatesto-relation',
        'type': 'composite',
        'documentation': 'Combination of relation and relatesTo'
      }, {
        'name': 'relation',
        'type': 'token'
      }, {
        'name': 'securitylabel',
        'type': 'token'
      }, {
        'name': 'setting',
        'type': 'token'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'type': 'EligibilityRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/EligibilityRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Eligibility'
      }]
    }, {
      'type': 'EligibilityResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/EligibilityResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Explanation of Benefit'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 3911
      }],
      'type': 'Encounter',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Encounter'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Encounter:appointment', 'Encounter:condition', 'Encounter:episodeofcare', 'Encounter:incomingreferral', 'Encounter:indication', 'Encounter:location', 'Encounter:part-of', 'Encounter:participant', 'Encounter:patient', 'Encounter:practitioner', 'Encounter:procedure'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'appointment',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'condition',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'A date within the period the Encounter lasted'
      }, {
        'name': 'episodeofcare',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'incomingreferral',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'indication',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'length',
        'type': 'number',
        'documentation': 'Length of encounter in days'
      }, {
        'name': 'location',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'location-period',
        'type': 'date'
      }, {
        'name': 'part-of',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'participant',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'participant-type',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'practitioner',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'procedure',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'reason',
        'type': 'token'
      }, {
        'name': 'special-arrangement',
        'type': 'token'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'type': 'EnrollmentRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/EnrollmentRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'EnrollmentRequest:patient', 'EnrollmentRequest:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Enrollment'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The party to be enrolled',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The party to be enrolled',
        'chain': ['*']
      }]
    }, {
      'type': 'EnrollmentResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/EnrollmentResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Explanation of Benefit'
      }]
    }, {
      'type': 'EpisodeOfCare',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/EpisodeOfCare'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'EpisodeOfCare:care-manager', 'EpisodeOfCare:condition', 'EpisodeOfCare:incomingreferral', 'EpisodeOfCare:organization', 'EpisodeOfCare:patient', 'EpisodeOfCare:team-member'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'care-manager',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'condition',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': "The provided date search value falls within the episode of care's period"
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'incomingreferral',
        'type': 'reference',
        'documentation': 'Incoming Referral Request',
        'chain': ['*']
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization that has assumed the specific responsibilities of this EpisodeOfCare',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The current status of the Episode of Care as provided (does not check the status history collection)'
      }, {
        'name': 'team-member',
        'type': 'reference',
        'documentation': 'A Practitioner or Organization allocated to the care team for this EpisodeOfCare',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token'
      }]
    }, {
      'type': 'ExplanationOfBenefit',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ExplanationOfBenefit'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Explanation of Benefit'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 16
      }],
      'type': 'FamilyMemberHistory',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/FamilyMemberHistory'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'FamilyMemberHistory:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A search by a condition code'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'gender',
        'type': 'token',
        'documentation': 'A search by a gender code of a family member'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A search by a record identifier'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a subject to list family member history items for',
        'chain': ['*']
      }, {
        'name': 'relationship',
        'type': 'token',
        'documentation': 'A search by a relationship type'
      }]
    }, {
      'type': 'Flag',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Flag'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Flag:author', 'Flag:encounter', 'Flag:patient', 'Flag:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a subject to list flags for',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The identity of a subject to list flags for',
        'chain': ['*']
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 170
      }],
      'type': 'Goal',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Goal'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Goal:patient', 'Goal:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'targetdate',
        'type': 'date'
      }]
    }, {
      'type': 'Group',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Group'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Group:member'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actual',
        'type': 'token'
      }, {
        'name': 'characteristic',
        'type': 'token'
      }, {
        'name': 'characteristic-value',
        'type': 'composite',
        'documentation': 'A composite of both characteristic and value'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'The kind of resources contained'
      }, {
        'name': 'exclude',
        'type': 'token'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'member',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The type of resources the group contains'
      }, {
        'name': 'value',
        'type': 'token'
      }]
    }, {
      'type': 'HealthcareService',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/HealthcareService'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'HealthcareService:location', 'HealthcareService:organization'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'characteristic',
        'type': 'token',
        'documentation': "One of the HealthcareService's characteristics"
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'The location of the Healthcare Service',
        'chain': ['*']
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A portion of the Healthcare service name'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization that provides this Healthcare Service',
        'chain': ['*']
      }, {
        'name': 'programname',
        'type': 'string',
        'documentation': 'One of the Program Names serviced by this HealthcareService'
      }, {
        'name': 'servicecategory',
        'type': 'token',
        'documentation': 'Service Category of the Healthcare Service'
      }, {
        'name': 'servicetype',
        'type': 'token',
        'documentation': 'The type of service provided by this healthcare service'
      }]
    }, {
      'type': 'ImagingObjectSelection',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ImagingObjectSelection'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ImagingObjectSelection:author', 'ImagingObjectSelection:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'documentation': 'Author of key DICOM object selection',
        'chain': ['*']
      }, {
        'name': 'authoring-time',
        'type': 'date',
        'documentation': 'Time of key DICOM object selection authoring'
      }, {
        'name': 'identifier',
        'type': 'uri',
        'documentation': 'UID of key DICOM object selection'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Subject of key DICOM object selection',
        'chain': ['*']
      }, {
        'name': 'selected-study',
        'type': 'uri',
        'documentation': 'Study selected in key DICOM object selection'
      }, {
        'name': 'title',
        'type': 'token',
        'documentation': 'Title of key DICOM object selection'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 28
      }],
      'type': 'ImagingStudy',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ImagingStudy'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ImagingStudy:order', 'ImagingStudy:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'accession',
        'type': 'token',
        'documentation': 'The accession identifier for the study'
      }, {
        'name': 'bodysite',
        'type': 'token',
        'documentation': 'The body site studied'
      }, {
        'name': 'dicom-class',
        'type': 'uri',
        'documentation': 'The type of the instance'
      }, {
        'name': 'modality',
        'type': 'token',
        'documentation': 'The modality of the series'
      }, {
        'name': 'order',
        'type': 'reference',
        'documentation': 'The order for the image',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Who the study is about',
        'chain': ['*']
      }, {
        'name': 'series',
        'type': 'uri',
        'documentation': 'The identifier of the series of images'
      }, {
        'name': 'started',
        'type': 'date',
        'documentation': 'When the study was started'
      }, {
        'name': 'study',
        'type': 'uri',
        'documentation': 'The study identifier for the image'
      }, {
        'name': 'uid',
        'type': 'uri',
        'documentation': 'The instance unique identifier'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 1458
      }],
      'type': 'Immunization',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Immunization'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Immunization:location', 'Immunization:manufacturer', 'Immunization:patient', 'Immunization:performer', 'Immunization:reaction', 'Immunization:requester'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'Vaccination  (non)-Administration Date'
      }, {
        'name': 'dose-sequence',
        'type': 'number'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'The service delivery location or facility in which the vaccine was / was to be administered',
        'chain': ['*']
      }, {
        'name': 'lot-number',
        'type': 'string',
        'documentation': 'Vaccine Lot Number'
      }, {
        'name': 'manufacturer',
        'type': 'reference',
        'documentation': 'Vaccine Manufacturer',
        'chain': ['*']
      }, {
        'name': 'notgiven',
        'type': 'token',
        'documentation': 'Administrations which were not given'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The patient for the vaccination record',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'documentation': 'The practitioner who administered the vaccination',
        'chain': ['*']
      }, {
        'name': 'reaction',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'reaction-date',
        'type': 'date'
      }, {
        'name': 'reason',
        'type': 'token'
      }, {
        'name': 'reason-not-given',
        'type': 'token',
        'documentation': 'Explanation of reason vaccination was not administered'
      }, {
        'name': 'requester',
        'type': 'reference',
        'documentation': 'The practitioner who ordered the vaccination',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Immunization event status'
      }, {
        'name': 'vaccine-code',
        'type': 'token',
        'documentation': 'Vaccine Product Administered'
      }]
    }, {
      'type': 'ImmunizationRecommendation',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ImmunizationRecommendation'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ImmunizationRecommendation:information', 'ImmunizationRecommendation:patient', 'ImmunizationRecommendation:support'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'dose-number',
        'type': 'number'
      }, {
        'name': 'dose-sequence',
        'type': 'number'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'information',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'support',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'vaccine-type',
        'type': 'token'
      }]
    }, {
      'type': 'ImplementationGuide',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ImplementationGuide'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'context',
        'type': 'token',
        'documentation': 'A use context assigned to the structure'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The implementation guide publication date'
      }, {
        'name': 'dependency',
        'type': 'uri'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the implementation guide'
      }, {
        'name': 'experimental',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'Name of the implementation guide'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the implementation guide'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The current status of the implementation guide'
      }, {
        'name': 'url',
        'type': 'uri'
      }, {
        'name': 'version',
        'type': 'token',
        'documentation': 'The version identifier of the implementation guide'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 45
      }],
      'type': 'List',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/List'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'List:encounter', 'List:item', 'List:patient', 'List:source', 'List:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'empty-reason',
        'type': 'token'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'item',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'notes',
        'type': 'string'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'title',
        'type': 'string'
      }]
    }, {
      'type': 'Location',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Location'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Location:organization', 'Location:partof'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'A (part of the) address of the location'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postal code specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A (portion of the) name of the location'
      }, {
        'name': 'near',
        'type': 'token',
        'documentation': 'The coordinates expressed as [lat],[long] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)'
      }, {
        'name': 'near-distance',
        'type': 'token',
        'documentation': 'A distance quantity to limit the near search to locations within a specific distance'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'Searches for locations that are managed by the provided organization',
        'chain': ['*']
      }, {
        'name': 'partof',
        'type': 'reference',
        'documentation': 'The location of which this location is a part',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Searches for locations with a specific kind of status'
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'A code for the type of location'
      }]
    }, {
      'type': 'Media',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Media'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Media:operator', 'Media:patient', 'Media:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'created',
        'type': 'date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'operator',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subtype',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'view',
        'type': 'token'
      }]
    }, {
      'type': 'Medication',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Medication'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Medication:content', 'Medication:ingredient', 'Medication:manufacturer'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'container',
        'type': 'token'
      }, {
        'name': 'content',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'form',
        'type': 'token'
      }, {
        'name': 'ingredient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'manufacturer',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'MedicationAdministration',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/MedicationAdministration'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'MedicationAdministration:device', 'MedicationAdministration:encounter', 'MedicationAdministration:medication', 'MedicationAdministration:patient', 'MedicationAdministration:practitioner', 'MedicationAdministration:prescription'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Return administrations of this medication code'
      }, {
        'name': 'device',
        'type': 'reference',
        'documentation': 'Return administrations with this administration device identity',
        'chain': ['*']
      }, {
        'name': 'effectivetime',
        'type': 'date',
        'documentation': 'Date administration happened (or did not happen)'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Return administrations that share this encounter',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return administrations with this external identifier'
      }, {
        'name': 'medication',
        'type': 'reference',
        'documentation': 'Return administrations of this medication resource',
        'chain': ['*']
      }, {
        'name': 'notgiven',
        'type': 'token',
        'documentation': 'Administrations that were not made'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a patient to list administrations  for',
        'chain': ['*']
      }, {
        'name': 'practitioner',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'prescription',
        'type': 'reference',
        'documentation': 'The identity of a prescription to list administrations from',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'MedicationAdministration event status (for example one of active/paused/completed/nullified)'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 1107
      }],
      'type': 'MedicationDispense',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/MedicationDispense'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'MedicationDispense:destination', 'MedicationDispense:dispenser', 'MedicationDispense:medication', 'MedicationDispense:patient', 'MedicationDispense:prescription', 'MedicationDispense:receiver', 'MedicationDispense:responsibleparty'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Return dispenses of this medicine code'
      }, {
        'name': 'destination',
        'type': 'reference',
        'documentation': 'Return dispenses that should be sent to a specific destination',
        'chain': ['*']
      }, {
        'name': 'dispenser',
        'type': 'reference',
        'documentation': 'Return all dispenses performed by a specific individual',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return dispenses with this external identifier'
      }, {
        'name': 'medication',
        'type': 'reference',
        'documentation': 'Return dispenses of this medicine resource',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a patient to list dispenses  for',
        'chain': ['*']
      }, {
        'name': 'prescription',
        'type': 'reference',
        'documentation': 'The identity of a prescription to list dispenses from',
        'chain': ['*']
      }, {
        'name': 'receiver',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'responsibleparty',
        'type': 'reference',
        'documentation': 'Return all dispenses with the specified responsible party',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Status of the dispense'
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'Return all dispenses of a specific type'
      }, {
        'name': 'whenhandedover',
        'type': 'date',
        'documentation': 'Date when medication handed over to patient (outpatient setting), or supplied to ward or clinic (inpatient setting)'
      }, {
        'name': 'whenprepared',
        'type': 'date',
        'documentation': 'Date when medication prepared'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 847
      }],
      'type': 'MedicationOrder',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/MedicationOrder'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'MedicationOrder:encounter', 'MedicationOrder:medication', 'MedicationOrder:patient', 'MedicationOrder:prescriber'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Return administrations of this medication code'
      }, {
        'name': 'datewritten',
        'type': 'date',
        'documentation': 'Return prescriptions written on this date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Return prescriptions with this encounter identifier',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return prescriptions with this external identifier'
      }, {
        'name': 'medication',
        'type': 'reference',
        'documentation': 'Return administrations of this medication reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a patient to list orders  for',
        'chain': ['*']
      }, {
        'name': 'prescriber',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Status of the prescription'
      }]
    }, {
      'type': 'MedicationStatement',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/MedicationStatement'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'MedicationStatement:medication', 'MedicationStatement:patient', 'MedicationStatement:source'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'Return administrations of this medication code'
      }, {
        'name': 'effectivedate',
        'type': 'date',
        'documentation': 'Date when patient was taking (or not taking) the medication'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return statements with this external identifier'
      }, {
        'name': 'medication',
        'type': 'reference',
        'documentation': 'Return administrations of this medication reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a patient to list statements  for',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'documentation': 'Who the information in the statement came from',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Return statements that match the given status'
      }]
    }, {
      'type': 'MessageHeader',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/MessageHeader'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'MessageHeader:author', 'MessageHeader:data', 'MessageHeader:enterer', 'MessageHeader:receiver', 'MessageHeader:responsible', 'MessageHeader:target'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'data',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'destination',
        'type': 'string'
      }, {
        'name': 'destination-uri',
        'type': 'uri'
      }, {
        'name': 'enterer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'event',
        'type': 'token'
      }, {
        'name': 'receiver',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'response-id',
        'type': 'token'
      }, {
        'name': 'responsible',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'string'
      }, {
        'name': 'source-uri',
        'type': 'uri'
      }, {
        'name': 'target',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'timestamp',
        'type': 'date'
      }]
    }, {
      'type': 'NamingSystem',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/NamingSystem'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'NamingSystem:replaced-by'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'contact',
        'type': 'string'
      }, {
        'name': 'context',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'id-type',
        'type': 'token'
      }, {
        'name': 'kind',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'period',
        'type': 'date'
      }, {
        'name': 'publisher',
        'type': 'string'
      }, {
        'name': 'replaced-by',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'responsible',
        'type': 'string'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'telecom',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'value',
        'type': 'string'
      }]
    }, {
      'type': 'NutritionOrder',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/NutritionOrder'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'NutritionOrder:encounter', 'NutritionOrder:patient', 'NutritionOrder:provider'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'additive',
        'type': 'token',
        'documentation': 'Type of module component to add to the feeding'
      }, {
        'name': 'datetime',
        'type': 'date',
        'documentation': 'Return nutrition orders requested on this date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Return nutrition orders with this encounter identifier',
        'chain': ['*']
      }, {
        'name': 'formula',
        'type': 'token',
        'documentation': 'Type of enteral or infant formula'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return nutrition orders with this external identifier'
      }, {
        'name': 'oraldiet',
        'type': 'token',
        'documentation': 'Type of diet that can be consumed orally (i.e., take via the mouth).'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of the person who requires the diet, formula or nutritional supplement',
        'chain': ['*']
      }, {
        'name': 'provider',
        'type': 'reference',
        'documentation': 'The identify of the provider who placed the nutrition order',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'Status of the nutrition order.'
      }, {
        'name': 'supplement',
        'type': 'token',
        'documentation': 'Type of supplement product requested'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 24824
      }],
      'type': 'Observation',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Observation'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Observation:device', 'Observation:encounter', 'Observation:patient', 'Observation:performer', 'Observation:related-target', 'Observation:specimen', 'Observation:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token',
        'documentation': 'The classification of the type of observation'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'The code of the observation type'
      }, {
        'name': 'code-value-concept',
        'type': 'composite',
        'documentation': 'Both code and one of the value parameters'
      }, {
        'name': 'code-value-date',
        'type': 'composite',
        'documentation': 'Both code and one of the value parameters'
      }, {
        'name': 'code-value-quantity',
        'type': 'composite',
        'documentation': 'Both code and one of the value parameters'
      }, {
        'name': 'code-value-string',
        'type': 'composite',
        'documentation': 'Both code and one of the value parameters'
      }, {
        'name': 'component-code',
        'type': 'token',
        'documentation': 'The component code of the observation type'
      }, {
        'name': 'component-code-component-value-concept',
        'type': 'composite',
        'documentation': 'Both component code and one of the component value parameters'
      }, {
        'name': 'component-code-component-value-quantity',
        'type': 'composite',
        'documentation': 'Both component code and one of the component value parameters'
      }, {
        'name': 'component-code-component-value-string',
        'type': 'composite',
        'documentation': 'Both component code and one of the component value parameters'
      }, {
        'name': 'component-data-absent-reason',
        'type': 'token',
        'documentation': 'The reason why the expected value in the element Observation.component.value[x] is missing.'
      }, {
        'name': 'component-value-concept',
        'type': 'token',
        'documentation': 'The value of the component observation, if the value is a CodeableConcept'
      }, {
        'name': 'component-value-quantity',
        'type': 'quantity',
        'documentation': 'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)'
      }, {
        'name': 'component-value-string',
        'type': 'string',
        'documentation': 'The value of the component observation, if the value is a string, and also searches in CodeableConcept.text'
      }, {
        'name': 'data-absent-reason',
        'type': 'token',
        'documentation': 'The reason why the expected value in the element Observation.value[x] is missing.'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'Obtained date/time. If the obtained element is a period, a date that falls in the period'
      }, {
        'name': 'device',
        'type': 'reference',
        'documentation': 'The Device that generated the observation data.',
        'chain': ['*']
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Healthcare event related to the observation',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The unique id for a particular observation'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The subject that the observation is about (if patient)',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'documentation': 'Who performed the observation',
        'chain': ['*']
      }, {
        'name': 'related-target',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'related-target-related-type',
        'type': 'composite',
        'documentation': 'Related Observations - search on related-type and related-target together'
      }, {
        'name': 'related-type',
        'type': 'token'
      }, {
        'name': 'specimen',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the observation'
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The subject that the observation is about',
        'chain': ['*']
      }, {
        'name': 'value-concept',
        'type': 'token',
        'documentation': 'The value of the observation, if the value is a CodeableConcept'
      }, {
        'name': 'value-date',
        'type': 'date',
        'documentation': 'The value of the observation, if the value is a date or period of time'
      }, {
        'name': 'value-quantity',
        'type': 'quantity',
        'documentation': 'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)'
      }, {
        'name': 'value-string',
        'type': 'string',
        'documentation': 'The value of the observation, if the value is a string, and also searches in CodeableConcept.text'
      }]
    }, {
      'type': 'OperationDefinition',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/OperationDefinition'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'OperationDefinition:base', 'OperationDefinition:profile'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'base',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'instance',
        'type': 'token'
      }, {
        'name': 'kind',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'profile',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'publisher',
        'type': 'string'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'system',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'url',
        'type': 'uri'
      }, {
        'name': 'version',
        'type': 'token'
      }]
    }, {
      'type': 'OperationOutcome',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/OperationOutcome'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }]
    }, {
      'type': 'Order',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Order'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Order:detail', 'Order:patient', 'Order:source', 'Order:subject', 'Order:target'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'detail',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Instance id from source, target, and/or  others'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'target',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'when',
        'type': 'date'
      }, {
        'name': 'when_code',
        'type': 'token'
      }]
    }, {
      'type': 'OrderResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/OrderResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'OrderResponse:fulfillment', 'OrderResponse:request', 'OrderResponse:who'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'fulfillment',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Identifiers assigned to this order by the orderer or by the receiver'
      }, {
        'name': 'request',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'who',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 189
      }],
      'type': 'Organization',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Organization'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Organization:partof'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'active',
        'type': 'token',
        'documentation': "Whether the organization's record is active"
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'A (part of the) address of the Organization'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postal code specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': "Any identifier for the organization (not the accreditation issuer's identifier)"
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': "A portion of the organization's name"
      }, {
        'name': 'partof',
        'type': 'reference',
        'documentation': 'Search all organizations that are part of the given organization',
        'chain': ['*']
      }, {
        'name': 'phonetic',
        'type': 'string',
        'documentation': "A portion of the organization's name using some kind of phonetic matching algorithm"
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'A code for the type of organization'
      }]
    }, {
      'type': 'Parameters',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Parameters'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 187
      }],
      'type': 'Patient',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Patient'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Patient:careprovider', 'Patient:link', 'Patient:organization'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'active',
        'type': 'token',
        'documentation': 'Whether the patient record is active'
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'An address in any kind of address/part of the patient'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postalCode specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'animal-breed',
        'type': 'token',
        'documentation': 'The breed for animal patients'
      }, {
        'name': 'animal-species',
        'type': 'token',
        'documentation': 'The species for animal patients'
      }, {
        'name': 'birthdate',
        'type': 'date',
        'documentation': "The patient's date of birth"
      }, {
        'name': 'careprovider',
        'type': 'reference',
        'documentation': "Patient's nominated care provider, could be a care manager, not the organization that manages the record",
        'chain': ['*']
      }, {
        'name': 'deathdate',
        'type': 'date',
        'documentation': 'The date of death has been provided and satisfies this search value'
      }, {
        'name': 'deceased',
        'type': 'token',
        'documentation': 'This patient has been marked as deceased, or as a death date entered'
      }, {
        'name': 'email',
        'type': 'token',
        'documentation': 'A value in an email contact'
      }, {
        'name': 'family',
        'type': 'string',
        'documentation': 'A portion of the family name of the patient'
      }, {
        'name': 'gender',
        'type': 'token',
        'documentation': 'Gender of the patient'
      }, {
        'name': 'given',
        'type': 'string',
        'documentation': 'A portion of the given name of the patient'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A patient identifier'
      }, {
        'name': 'language',
        'type': 'token',
        'documentation': 'Language code (irrespective of use value)'
      }, {
        'name': 'link',
        'type': 'reference',
        'documentation': 'All patients linked to the given patient',
        'chain': ['*']
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A portion of either family or given name of the patient'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization at which this person is a patient',
        'chain': ['*']
      }, {
        'name': 'phone',
        'type': 'token',
        'documentation': 'A value in a phone contact'
      }, {
        'name': 'phonetic',
        'type': 'string',
        'documentation': 'A portion of either family or given name using some kind of phonetic matching algorithm'
      }, {
        'name': 'telecom',
        'type': 'token',
        'documentation': 'The value in any kind of telecom details of the patient'
      }]
    }, {
      'type': 'PaymentNotice',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/PaymentNotice'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Eligibility'
      }]
    }, {
      'type': 'PaymentReconciliation',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/PaymentReconciliation'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Explanation of Benefit'
      }]
    }, {
      'type': 'Person',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Person'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Person:link', 'Person:organization', 'Person:patient', 'Person:practitioner', 'Person:relatedperson'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'An address in any kind of address/part'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postal code specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'birthdate',
        'type': 'date',
        'documentation': "The person's date of birth"
      }, {
        'name': 'email',
        'type': 'token',
        'documentation': 'A value in an email contact'
      }, {
        'name': 'gender',
        'type': 'token',
        'documentation': 'The gender of the person'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A person Identifier'
      }, {
        'name': 'link',
        'type': 'reference',
        'documentation': 'Any link has this Patient, Person, RelatedPerson or Practitioner reference',
        'chain': ['*']
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A portion of name in any name part'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization at which this person record is being managed',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The Person links to this Patient',
        'chain': ['*']
      }, {
        'name': 'phone',
        'type': 'token',
        'documentation': 'A value in a phone contact'
      }, {
        'name': 'phonetic',
        'type': 'string',
        'documentation': 'A portion of name using some kind of phonetic matching algorithm'
      }, {
        'name': 'practitioner',
        'type': 'reference',
        'documentation': 'The Person links to this Practitioner',
        'chain': ['*']
      }, {
        'name': 'relatedperson',
        'type': 'reference',
        'documentation': 'The Person links to this RelatedPerson',
        'chain': ['*']
      }, {
        'name': 'telecom',
        'type': 'token',
        'documentation': 'The value in any kind of contact'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 1
      }],
      'type': 'Practitioner',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Practitioner'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Practitioner:location', 'Practitioner:organization'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'An address in any kind of address/part'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postalCode specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'communication',
        'type': 'token',
        'documentation': 'One of the languages that the practitioner can communicate with'
      }, {
        'name': 'email',
        'type': 'token',
        'documentation': 'A value in an email contact'
      }, {
        'name': 'family',
        'type': 'string',
        'documentation': 'A portion of the family name'
      }, {
        'name': 'gender',
        'type': 'token',
        'documentation': 'Gender of the practitioner'
      }, {
        'name': 'given',
        'type': 'string',
        'documentation': 'A portion of the given name'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': "A practitioner's Identifier"
      }, {
        'name': 'location',
        'type': 'reference',
        'documentation': 'One of the locations at which this practitioner provides care',
        'chain': ['*']
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A portion of either family or given name'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The identity of the organization the practitioner represents / acts on behalf of',
        'chain': ['*']
      }, {
        'name': 'phone',
        'type': 'token',
        'documentation': 'A value in a phone contact'
      }, {
        'name': 'phonetic',
        'type': 'string',
        'documentation': 'A portion of either family or given name using some kind of phonetic matching algorithm'
      }, {
        'name': 'role',
        'type': 'token',
        'documentation': 'The practitioner can perform this role at for the organization'
      }, {
        'name': 'specialty',
        'type': 'token',
        'documentation': 'The practitioner has this specialty at an organization'
      }, {
        'name': 'telecom',
        'type': 'token',
        'documentation': 'The value in any kind of contact'
      }]
    }, {
      'extension': [{
        'url': 'http://hl7api.sourceforge.net/hapi-fhir/res/extdefs.html#resourceCount',
        'valueDecimal': 2543
      }],
      'type': 'Procedure',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Procedure'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Procedure:encounter', 'Procedure:location', 'Procedure:patient', 'Procedure:performer', 'Procedure:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A code to identify a  procedure'
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A unique identifier for a procedure'
      }, {
        'name': 'location',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Search by subject - a patient',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'Search by subject',
        'chain': ['*']
      }]
    }, {
      'type': 'ProcedureRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ProcedureRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ProcedureRequest:encounter', 'ProcedureRequest:orderer', 'ProcedureRequest:patient', 'ProcedureRequest:performer', 'ProcedureRequest:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A unique identifier of the Procedure Request'
      }, {
        'name': 'orderer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Search by subject - a patient',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'Search by subject',
        'chain': ['*']
      }]
    }, {
      'type': 'ProcessRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ProcessRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ProcessRequest:organization', 'ProcessRequest:provider'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'action',
        'type': 'token',
        'documentation': 'The action requested by this resource'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the ProcessRequest'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization who generated this request',
        'chain': ['*']
      }, {
        'name': 'provider',
        'type': 'reference',
        'documentation': 'The provider who regenerated this request',
        'chain': ['*']
      }]
    }, {
      'type': 'ProcessResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ProcessResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ProcessResponse:organization', 'ProcessResponse:request', 'ProcessResponse:requestorganization', 'ProcessResponse:requestprovider'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The business identifier of the Explanation of Benefit'
      }, {
        'name': 'organization',
        'type': 'reference',
        'documentation': 'The organization who generated this resource',
        'chain': ['*']
      }, {
        'name': 'request',
        'type': 'reference',
        'documentation': 'The reference to the claim',
        'chain': ['*']
      }, {
        'name': 'requestorganization',
        'type': 'reference',
        'documentation': 'The Organization who is responsible the request transaction',
        'chain': ['*']
      }, {
        'name': 'requestprovider',
        'type': 'reference',
        'documentation': 'The Provider who is responsible the request transaction',
        'chain': ['*']
      }]
    }, {
      'type': 'Provenance',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Provenance'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Provenance:agent', 'Provenance:location', 'Provenance:patient', 'Provenance:target'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'agent',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'end',
        'type': 'date'
      }, {
        'name': 'entity',
        'type': 'uri'
      }, {
        'name': 'entitytype',
        'type': 'token'
      }, {
        'name': 'location',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'sigtype',
        'type': 'token'
      }, {
        'name': 'start',
        'type': 'date'
      }, {
        'name': 'target',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'userid',
        'type': 'token'
      }]
    }, {
      'type': 'Questionnaire',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Questionnaire'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A code that corresponds to the questionnaire or one of its groups'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'When the questionnaire was last changed'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'An identifier for the questionnaire'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'The author of the questionnaire'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the questionnaire'
      }, {
        'name': 'title',
        'type': 'string',
        'documentation': 'All or part of the name of the questionnaire (title for the root group of the questionnaire)'
      }, {
        'name': 'version',
        'type': 'string',
        'documentation': 'The business version of the questionnaire'
      }]
    }, {
      'type': 'QuestionnaireResponse',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/QuestionnaireResponse'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'QuestionnaireResponse:author', 'QuestionnaireResponse:encounter', 'QuestionnaireResponse:patient', 'QuestionnaireResponse:questionnaire', 'QuestionnaireResponse:source', 'QuestionnaireResponse:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'author',
        'type': 'reference',
        'documentation': 'The author of the questionnaire',
        'chain': ['*']
      }, {
        'name': 'authored',
        'type': 'date',
        'documentation': 'When the questionnaire was authored'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Encounter during which questionnaire was authored',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The patient that is the subject of the questionnaire',
        'chain': ['*']
      }, {
        'name': 'questionnaire',
        'type': 'reference',
        'documentation': 'The questionnaire the answers are provided for',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the questionnaire response'
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The subject of the questionnaire',
        'chain': ['*']
      }]
    }, {
      'type': 'ReferralRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ReferralRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'ReferralRequest:patient', 'ReferralRequest:recipient', 'ReferralRequest:requester'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'Creation or activation date'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'Who the referral is about',
        'chain': ['*']
      }, {
        'name': 'priority',
        'type': 'token',
        'documentation': 'The priority assigned to the referral'
      }, {
        'name': 'recipient',
        'type': 'reference',
        'documentation': 'The person that the referral was sent to',
        'chain': ['*']
      }, {
        'name': 'requester',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'specialty',
        'type': 'token',
        'documentation': 'The specialty that the referral is for'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the referral'
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The type of the referral'
      }]
    }, {
      'type': 'RelatedPerson',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/RelatedPerson'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'RelatedPerson:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'address',
        'type': 'string',
        'documentation': 'An address in any kind of address/part'
      }, {
        'name': 'address-city',
        'type': 'string',
        'documentation': 'A city specified in an address'
      }, {
        'name': 'address-country',
        'type': 'string',
        'documentation': 'A country specified in an address'
      }, {
        'name': 'address-postalcode',
        'type': 'string',
        'documentation': 'A postal code specified in an address'
      }, {
        'name': 'address-state',
        'type': 'string',
        'documentation': 'A state specified in an address'
      }, {
        'name': 'address-use',
        'type': 'token',
        'documentation': 'A use code specified in an address'
      }, {
        'name': 'birthdate',
        'type': 'date',
        'documentation': "The Related Person's date of birth"
      }, {
        'name': 'email',
        'type': 'token',
        'documentation': 'A value in an email contact'
      }, {
        'name': 'gender',
        'type': 'token',
        'documentation': 'Gender of the person'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A patient Identifier'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'A portion of name in any name part'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The patient this person is related to',
        'chain': ['*']
      }, {
        'name': 'phone',
        'type': 'token',
        'documentation': 'A value in a phone contact'
      }, {
        'name': 'phonetic',
        'type': 'string',
        'documentation': 'A portion of name using some kind of phonetic matching algorithm'
      }, {
        'name': 'telecom',
        'type': 'token',
        'documentation': 'The value in any kind of contact'
      }]
    }, {
      'type': 'RiskAssessment',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/RiskAssessment'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'RiskAssessment:condition', 'RiskAssessment:encounter', 'RiskAssessment:patient', 'RiskAssessment:performer', 'RiskAssessment:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'condition',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'method',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'performer',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'Schedule',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Schedule'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Schedule:actor'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'actor',
        'type': 'reference',
        'documentation': 'The individual(HealthcareService, Practitioner, Location, ...) to find a Schedule for',
        'chain': ['*']
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'Search for Schedule resources that have a period that contains this date specified'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A Schedule Identifier'
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The type of appointments that can be booked into associated slot(s)'
      }]
    }, {
      'type': 'SearchParameter',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/SearchParameter'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'base',
        'type': 'token'
      }, {
        'name': 'code',
        'type': 'token'
      }, {
        'name': 'description',
        'type': 'string'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'target',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'url',
        'type': 'uri'
      }]
    }, {
      'type': 'Slot',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Slot'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Slot:schedule'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'fb-type',
        'type': 'token',
        'documentation': 'The free/busy status of the appointment'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'A Slot Identifier'
      }, {
        'name': 'schedule',
        'type': 'reference',
        'documentation': 'The Schedule Resource that we are seeking a slot within',
        'chain': ['*']
      }, {
        'name': 'slot-type',
        'type': 'token',
        'documentation': 'The type of appointments that can be booked into the slot'
      }, {
        'name': 'start',
        'type': 'date',
        'documentation': 'Appointment date/time.'
      }]
    }, {
      'type': 'Specimen',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Specimen'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Specimen:collector', 'Specimen:parent', 'Specimen:patient', 'Specimen:subject'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'accession',
        'type': 'token',
        'documentation': 'The accession number associated with the specimen'
      }, {
        'name': 'bodysite',
        'type': 'token',
        'documentation': 'The code for the body site from where the specimen originated'
      }, {
        'name': 'collected',
        'type': 'date',
        'documentation': 'The date the specimen was collected'
      }, {
        'name': 'collector',
        'type': 'reference',
        'documentation': 'Who collected the specimen',
        'chain': ['*']
      }, {
        'name': 'container',
        'type': 'token',
        'documentation': 'The kind of specimen container'
      }, {
        'name': 'container-id',
        'type': 'token',
        'documentation': 'The unique identifier associated with the specimen container'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The unique identifier associated with the specimen'
      }, {
        'name': 'parent',
        'type': 'reference',
        'documentation': 'The parent of the specimen',
        'chain': ['*']
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The patient the specimen comes from',
        'chain': ['*']
      }, {
        'name': 'subject',
        'type': 'reference',
        'documentation': 'The subject of the specimen',
        'chain': ['*']
      }, {
        'name': 'type',
        'type': 'token',
        'documentation': 'The specimen type'
      }]
    }, {
      'type': 'StructureDefinition',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/StructureDefinition'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'StructureDefinition:valueset'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'abstract',
        'type': 'token'
      }, {
        'name': 'base',
        'type': 'uri'
      }, {
        'name': 'base-path',
        'type': 'token'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A code for the profile'
      }, {
        'name': 'context',
        'type': 'token',
        'documentation': 'A use context assigned to the structure'
      }, {
        'name': 'context-type',
        'type': 'token'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The profile publication date'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the profile'
      }, {
        'name': 'display',
        'type': 'string'
      }, {
        'name': 'experimental',
        'type': 'token'
      }, {
        'name': 'ext-context',
        'type': 'string'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identifier of the profile'
      }, {
        'name': 'kind',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'Name of the profile'
      }, {
        'name': 'path',
        'type': 'token',
        'documentation': 'A path that is constrained in the profile'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the profile'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The current status of the profile'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'url',
        'type': 'uri'
      }, {
        'name': 'valueset',
        'type': 'reference',
        'documentation': 'A vocabulary binding reference',
        'chain': ['*']
      }, {
        'name': 'version',
        'type': 'token',
        'documentation': 'The version identifier of the profile'
      }]
    }, {
      'type': 'Subscription',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Subscription'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'contact',
        'type': 'token'
      }, {
        'name': 'criteria',
        'type': 'string'
      }, {
        'name': 'payload',
        'type': 'string'
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'tag',
        'type': 'token'
      }, {
        'name': 'type',
        'type': 'token'
      }, {
        'name': 'url',
        'type': 'uri'
      }]
    }, {
      'type': 'Substance',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/Substance'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'Substance:substance'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'category',
        'type': 'token',
        'documentation': 'The category of the substance'
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'The code of the substance'
      }, {
        'name': 'container-identifier',
        'type': 'token',
        'documentation': 'Identifier of the package/container'
      }, {
        'name': 'expiry',
        'type': 'date',
        'documentation': 'Expiry date of package or container of substance'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Unique identifier for the substance'
      }, {
        'name': 'quantity',
        'type': 'quantity',
        'documentation': 'Amount of substance in the package'
      }, {
        'name': 'substance',
        'type': 'reference',
        'documentation': 'A component of the substance',
        'chain': ['*']
      }]
    }, {
      'type': 'SupplyDelivery',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/SupplyDelivery'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'SupplyDelivery:patient', 'SupplyDelivery:receiver', 'SupplyDelivery:supplier'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'receiver',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'supplier',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'SupplyRequest',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/SupplyRequest'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'SupplyRequest:patient', 'SupplyRequest:source', 'SupplyRequest:supplier'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'date',
        'type': 'date'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'kind',
        'type': 'token'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'source',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'status',
        'type': 'token'
      }, {
        'name': 'supplier',
        'type': 'reference',
        'chain': ['*']
      }]
    }, {
      'type': 'TestScript',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/TestScript'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'description',
        'type': 'string'
      }, {
        'name': 'identifier',
        'type': 'token'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'testscript-capability',
        'type': 'string',
        'documentation': 'TestScript required and validated capability'
      }, {
        'name': 'testscript-setup-capability',
        'type': 'string',
        'documentation': 'TestScript setup required and validated capability'
      }, {
        'name': 'testscript-test-capability',
        'type': 'string',
        'documentation': 'TestScript test required and validated capability'
      }, {
        'name': 'url',
        'type': 'uri'
      }]
    }, {
      'type': 'User',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/User'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'User:patient'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'level',
        'type': 'token'
      }, {
        'name': 'login',
        'type': 'string'
      }, {
        'name': 'name',
        'type': 'string'
      }, {
        'name': 'patient',
        'type': 'reference',
        'chain': ['*']
      }, {
        'name': 'provider',
        'type': 'token'
      }]
    }, {
      'type': 'ValueSet',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/ValueSet'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'code',
        'type': 'token',
        'documentation': 'A code defined in the value set'
      }, {
        'name': 'context',
        'type': 'token',
        'documentation': 'A use context assigned to the value set'
      }, {
        'name': 'date',
        'type': 'date',
        'documentation': 'The value set publication date'
      }, {
        'name': 'description',
        'type': 'string',
        'documentation': 'Text search in the description of the value set'
      }, {
        'name': 'expansion',
        'type': 'uri'
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'The identifier for the value set'
      }, {
        'name': 'name',
        'type': 'string',
        'documentation': 'The name of the value set'
      }, {
        'name': 'publisher',
        'type': 'string',
        'documentation': 'Name of the publisher of the value set'
      }, {
        'name': 'reference',
        'type': 'uri',
        'documentation': 'A code system included or excluded in the value set or an imported value set'
      }, {
        'name': 'status',
        'type': 'token',
        'documentation': 'The status of the value set'
      }, {
        'name': 'system',
        'type': 'uri',
        'documentation': 'The system for any codes defined by this value set'
      }, {
        'name': 'url',
        'type': 'uri',
        'documentation': 'The logical URL for the value set'
      }, {
        'name': 'version',
        'type': 'token',
        'documentation': 'The version identifier of the value set'
      }]
    }, {
      'type': 'VisionPrescription',
      'profile': {
        'reference': 'http://hl7.org/fhir/profiles/VisionPrescription'
      },
      'interaction': [{
        'code': 'read'
      }, {
        'code': 'vread'
      }, {
        'code': 'update'
      }, {
        'code': 'delete'
      }, {
        'code': 'history-instance'
      }, {
        'code': 'history-type'
      }, {
        'code': 'create'
      }, {
        'code': 'search-type'
      }],
      'conditionalCreate': true,
      'conditionalUpdate': true,
      'conditionalDelete': 'multiple',
      'searchInclude': ['*', 'VisionPrescription:encounter', 'VisionPrescription:patient', 'VisionPrescription:prescriber'],
      'searchParam': [{
        'name': '_content',
        'type': 'string',
        'documentation': "Search the contents of the resource's data using a fulltext search"
      }, {
        'name': '_has',
        'type': 'string',
        'documentation': 'Return resources linked to by the given target'
      }, {
        'name': '_id',
        'type': 'string',
        'documentation': 'The ID of the resource'
      }, {
        'name': '_language',
        'type': 'string',
        'documentation': 'The language of the resource'
      }, {
        'name': '_lastUpdated',
        'type': 'date',
        'documentation': 'Only return resources which were last updated as specified by the given range'
      }, {
        'name': '_profile',
        'type': 'uri',
        'documentation': 'Search for resources which have the given profile'
      }, {
        'name': '_security',
        'type': 'token',
        'documentation': 'Search for resources which have the given security labels'
      }, {
        'name': '_tag',
        'type': 'token',
        'documentation': 'Search for resources which have the given tag'
      }, {
        'name': '_text',
        'type': 'string',
        'documentation': "Search the contents of the resource's narrative using a fulltext search"
      }, {
        'name': 'datewritten',
        'type': 'date',
        'documentation': 'Return prescriptions written on this date'
      }, {
        'name': 'encounter',
        'type': 'reference',
        'documentation': 'Return prescriptions with this encounter identifier',
        'chain': ['*']
      }, {
        'name': 'identifier',
        'type': 'token',
        'documentation': 'Return prescriptions with this external identifier'
      }, {
        'name': 'patient',
        'type': 'reference',
        'documentation': 'The identity of a patient to list dispenses for',
        'chain': ['*']
      }, {
        'name': 'prescriber',
        'type': 'reference',
        'chain': ['*']
      }]
    }],
    'interaction': [{
      'code': 'history-system'
    }, {
      'code': 'transaction'
    }],
    'operation': [{
      'name': 'mark-all-resources-for-reindexing',
      'definition': {
        'reference': 'OperationDefinition/-s-mark-all-resources-for-reindexing'
      }
    }, {
      'name': 'perform-reindexing-pass',
      'definition': {
        'reference': 'OperationDefinition/-s-perform-reindexing-pass'
      }
    }, {
      'name': 'suggest-keywords',
      'definition': {
        'reference': 'OperationDefinition/-s-suggest-keywords'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/-s-meta'
      }
    }, {
      'name': 'get-resource-counts',
      'definition': {
        'reference': 'OperationDefinition/-s-get-resource-counts'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Account-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Account--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Account-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Account-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Account-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Account--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AllergyIntolerance--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Appointment-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Appointment--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Appointment-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Appointment-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Appointment-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Appointment--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AppointmentResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/AuditEvent--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Basic-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Basic--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Basic-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Basic-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Basic-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Basic--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Binary-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Binary--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Binary-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Binary-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Binary-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Binary--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/BodySite-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/BodySite--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/BodySite-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/BodySite-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/BodySite-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/BodySite--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Bundle-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Bundle--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Bundle-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Bundle-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Bundle-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Bundle--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/CarePlan-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/CarePlan--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/CarePlan-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/CarePlan-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/CarePlan-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/CarePlan--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Claim-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Claim--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Claim-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Claim-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Claim-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Claim--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ClaimResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ClinicalImpression--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Communication-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Communication--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Communication-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Communication-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Communication-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Communication--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/CommunicationRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Composition-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Composition--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Composition-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Composition-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Composition-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Composition--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ConceptMap--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Condition-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Condition--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Condition-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Condition-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Condition-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Condition--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Conformance-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Conformance--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Conformance-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Conformance-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Conformance-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Conformance--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Contract-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Contract--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Contract-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Contract-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Contract-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Contract--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Coverage-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Coverage--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Coverage-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Coverage-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Coverage-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Coverage--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DataElement-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DataElement--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DataElement-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DataElement-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DataElement-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DataElement--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DetectedIssue--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Device-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Device--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Device-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Device-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Device-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Device--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceComponent--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceMetric--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DeviceUseStatement--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticOrder--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DiagnosticReport--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DocumentManifest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/DocumentReference--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EligibilityRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EligibilityResponse--meta'
      }
    }, {
      'name': 'everything',
      'definition': {
        'reference': 'OperationDefinition/Encounter-i-everything'
      }
    }, {
      'name': 'everything',
      'definition': {
        'reference': 'OperationDefinition/Encounter--everything'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Encounter-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Encounter--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Encounter-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Encounter-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Encounter-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Encounter--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EnrollmentResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/EpisodeOfCare--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ExplanationOfBenefit--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/FamilyMemberHistory--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Flag-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Flag--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Flag-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Flag-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Flag-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Flag--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Goal-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Goal--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Goal-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Goal-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Goal-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Goal--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Group-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Group--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Group-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Group-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Group-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Group--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/HealthcareService--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImagingObjectSelection--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImagingStudy--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Immunization-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Immunization--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Immunization-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Immunization-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Immunization-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Immunization--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImmunizationRecommendation--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ImplementationGuide--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/List-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/List--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/List-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/List-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/List-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/List--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Location-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Location--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Location-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Location-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Location-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Location--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Media-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Media--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Media-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Media-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Media-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Media--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Medication-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Medication--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Medication-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Medication-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Medication-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Medication--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationAdministration--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationDispense--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationOrder--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MedicationStatement--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/MessageHeader--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/NamingSystem--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/NutritionOrder--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Observation-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Observation--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Observation-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Observation-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Observation-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Observation--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OperationDefinition--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OperationOutcome--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Order-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Order--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Order-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Order-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Order-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Order--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/OrderResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Organization-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Organization--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Organization-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Organization-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Organization-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Organization--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Parameters-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Parameters--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Parameters-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Parameters-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Parameters-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Parameters--meta'
      }
    }, {
      'name': 'everything',
      'definition': {
        'reference': 'OperationDefinition/Patient-i-everything'
      }
    }, {
      'name': 'everything',
      'definition': {
        'reference': 'OperationDefinition/Patient--everything'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Patient-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Patient--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Patient-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Patient-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Patient-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Patient--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/PaymentNotice--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/PaymentReconciliation--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Person-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Person--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Person-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Person-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Person-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Person--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Practitioner-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Practitioner--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Practitioner-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Practitioner-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Practitioner-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Practitioner--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Procedure-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Procedure--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Procedure-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Procedure-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Procedure-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Procedure--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcedureRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcessRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ProcessResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Provenance-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Provenance--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Provenance-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Provenance-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Provenance-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Provenance--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Questionnaire--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/QuestionnaireResponse--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ReferralRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/RelatedPerson--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/RiskAssessment--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Schedule-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Schedule--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Schedule-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Schedule-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Schedule-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Schedule--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SearchParameter--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Slot-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Slot--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Slot-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Slot-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Slot-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Slot--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Specimen-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Specimen--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Specimen-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Specimen-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Specimen-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Specimen--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/StructureDefinition--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Subscription-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Subscription--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Subscription-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Subscription-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Subscription-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Subscription--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Substance-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/Substance--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/Substance-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/Substance-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Substance-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/Substance--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SupplyDelivery--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/SupplyRequest--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/TestScript-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/TestScript--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/TestScript-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/TestScript-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/TestScript-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/TestScript--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/User-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/User--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/User-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/User-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/User-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/User--meta'
      }
    }, {
      'name': 'validate-code',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-validate-code'
      }
    }, {
      'name': 'expand',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-expand'
      }
    }, {
      'name': 'lookup',
      'definition': {
        'reference': 'OperationDefinition/ValueSet--lookup'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/ValueSet--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ValueSet-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/ValueSet--meta'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription-i-validate'
      }
    }, {
      'name': 'validate',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription--validate'
      }
    }, {
      'name': 'meta-add',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription-i-meta-add'
      }
    }, {
      'name': 'meta-delete',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription-i-meta-delete'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription-i-meta'
      }
    }, {
      'name': 'meta',
      'definition': {
        'reference': 'OperationDefinition/VisionPrescription--meta'
      }
    }],
    'security': {
      'extension': [{
        'url': 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
        'extension': [{
          'url': 'authorize',
          'valueUri': 'http://localhost:4001/v/r2/auth/authorize'
        }, {
          'url': 'token',
          'valueUri': 'http://localhost:4001/v/r2/auth/token'
        }]
      }]
    }
  }]
};
