
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "0a83d8541752d7582de2ebc1ece46519ce72a848"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressesScalarFieldEnum = {
  addressId: 'addressId',
  name: 'name',
  stage: 'stage',
  addressLine1: 'addressLine1',
  addressLine2: 'addressLine2',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  country: 'country',
  email: 'email',
  geoHash: 'geoHash',
  locality: 'locality',
  phone: 'phone',
  postal_code: 'postal_code',
  instituteId: 'instituteId',
  providerId: 'providerId'
};

exports.Prisma.CohortsScalarFieldEnum = {
  cohortId: 'cohortId',
  designatedStaff: 'designatedStaff',
  stage: 'stage',
  placementType: 'placementType',
  name: 'name',
  startPlacements: 'startPlacements',
  endPlacements: 'endPlacements',
  startSubmission: 'startSubmission',
  endSubmission: 'endSubmission',
  includedFiles: 'includedFiles',
  includedForms: 'includedForms',
  workflow: 'workflow',
  instituteId: 'instituteId'
};

exports.Prisma.ProviderCohortsScalarFieldEnum = {
  cohortId: 'cohortId',
  stage: 'stage',
  name: 'name',
  addressId: 'addressId',
  providerId: 'providerId'
};

exports.Prisma.ContactsScalarFieldEnum = {
  contactId: 'contactId',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  created: 'created',
  name: 'name',
  providerPhone: 'providerPhone',
  InstituteStudentUserId: 'InstituteStudentUserId',
  addressId: 'addressId',
  studentUserId: 'studentUserId'
};

exports.Prisma.InstituteFormsScalarFieldEnum = {
  formId: 'formId',
  form: 'form',
  updated: 'updated',
  instituteId: 'instituteId'
};

exports.Prisma.InstitutesScalarFieldEnum = {
  instituteId: 'instituteId',
  admin: 'admin',
  externalProviderUploads: 'externalProviderUploads',
  name: 'name',
  referral: 'referral',
  status: 'status',
  studentsFields: 'studentsFields',
  staff: 'staff',
  staffActive: 'staffActive',
  students: 'students',
  studentsActive: 'studentsActive',
  staffFields: 'staffFields',
  staffGuidance: 'staffGuidance',
  studentsGuidance: 'studentsGuidance',
  verifiedProviders: 'verifiedProviders'
};

exports.Prisma.LogsScalarFieldEnum = {
  logId: 'logId',
  provider: 'provider',
  students: 'students',
  staff: 'staff',
  uid: 'uid',
  placementId: 'placementId'
};

exports.Prisma.PlacementListingsScalarFieldEnum = {
  placementListingId: 'placementListingId',
  addressId: 'addressId',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  created: 'created',
  mapConsent: 'mapConsent',
  mapConsentDate: 'mapConsentDate',
  providerEmail: 'providerEmail',
  providerId: 'providerId',
  providerPhone: 'providerPhone',
  savedBy: 'savedBy',
  questions: 'questions',
  title: 'title',
  uploadedBy: 'uploadedBy'
};

exports.Prisma.PlacementsScalarFieldEnum = {
  placementId: 'placementId',
  activeDates: 'activeDates',
  cohortId: 'cohortId',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  created: 'created',
  draft: 'draft',
  endDate: 'endDate',
  flags: 'flags',
  geoHash: 'geoHash',
  inProgress: 'inProgress',
  leadTimes: 'leadTimes',
  name: 'name',
  parentEmailed: 'parentEmailed',
  parentExpiry: 'parentExpiry',
  parentKey: 'parentKey',
  product: 'product',
  providerEmail: 'providerEmail',
  providerEmailed: 'providerEmailed',
  providerExpiry: 'providerExpiry',
  providerKey: 'providerKey',
  providerName: 'providerName',
  providerPhone: 'providerPhone',
  nextStatus: 'nextStatus',
  status: 'status',
  startDate: 'startDate',
  title: 'title',
  forms: 'forms',
  questions: 'questions',
  uploadedBy: 'uploadedBy',
  addressId: 'addressId',
  instituteId: 'instituteId',
  instituteStudentId: 'instituteStudentId',
  providerId: 'providerId',
  studentId: 'studentId',
  userGroupId: 'userGroupId'
};

exports.Prisma.ProvidersScalarFieldEnum = {
  providerId: 'providerId',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  email: 'email',
  mapConsent: 'mapConsent',
  insurance: 'insurance',
  mapConsentDate: 'mapConsentDate',
  name: 'name',
  phone: 'phone',
  rememberConsent: 'rememberConsent',
  rememberConsentDate: 'rememberConsentDate',
  savedBy: 'savedBy',
  sector: 'sector',
  referral: 'referral',
  subsector: 'subsector',
  uploadedBy: 'uploadedBy',
  website: 'website',
  activationCode: 'activationCode',
  status: 'status'
};

exports.Prisma.InstituteStudentUserGroupsScalarFieldEnum = {
  userGroupId: 'userGroupId',
  default: 'default',
  name: 'name',
  updated: 'updated',
  instituteId: 'instituteId'
};

exports.Prisma.InstituteStaffUserGroupsScalarFieldEnum = {
  userGroupId: 'userGroupId',
  default: 'default',
  name: 'name',
  updated: 'updated',
  instituteId: 'instituteId'
};

exports.Prisma.ProviderUserGroupsScalarFieldEnum = {
  userGroupId: 'userGroupId',
  default: 'default',
  name: 'name',
  updated: 'updated',
  providerId: 'providerId'
};

exports.Prisma.StudentUsersScalarFieldEnum = {
  studentUserId: 'studentUserId',
  status: 'status',
  analytics: 'analytics',
  created: 'created',
  details: 'details',
  email: 'email',
  referral: 'referral',
  units: 'units',
  userType: 'userType'
};

exports.Prisma.InstituteStaffScalarFieldEnum = {
  instituteStaffId: 'instituteStaffId',
  created: 'created',
  details: 'details',
  email: 'email',
  oId: 'oId',
  status: 'status',
  userType: 'userType',
  instituteId: 'instituteId',
  userGroupId: 'userGroupId'
};

exports.Prisma.InstituteStudentsScalarFieldEnum = {
  instituteStudentId: 'instituteStudentId',
  activated: 'activated',
  created: 'created',
  cohortId: 'cohortId',
  details: 'details',
  email: 'email',
  flags: 'flags',
  oId: 'oId',
  resetExpiry: 'resetExpiry',
  status: 'status',
  userType: 'userType',
  instituteId: 'instituteId',
  userGroupId: 'userGroupId'
};

exports.Prisma.ProviderStaffScalarFieldEnum = {
  providerStaffId: 'providerStaffId',
  created: 'created',
  details: 'details',
  email: 'email',
  notes: 'notes',
  status: 'status',
  providerId: 'providerId',
  userGroupId: 'userGroupId'
};

exports.Prisma.PotentialprovidersScalarFieldEnum = {
  id: 'id',
  types: 'types',
  geoHash: 'geoHash',
  nationalPhoneNumber: 'nationalPhoneNumber',
  email: 'email',
  formattedAddress: 'formattedAddress',
  websiteUri: 'websiteUri',
  name: 'name',
  poid: 'poid'
};

exports.Prisma.PointOfOriginScalarFieldEnum = {
  poid: 'poid',
  Name: 'Name',
  geoHash: 'geoHash'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  Addresses: 'Addresses',
  Cohorts: 'Cohorts',
  ProviderCohorts: 'ProviderCohorts',
  Contacts: 'Contacts',
  InstituteForms: 'InstituteForms',
  Institutes: 'Institutes',
  Logs: 'Logs',
  PlacementListings: 'PlacementListings',
  Placements: 'Placements',
  Providers: 'Providers',
  InstituteStudentUserGroups: 'InstituteStudentUserGroups',
  InstituteStaffUserGroups: 'InstituteStaffUserGroups',
  ProviderUserGroups: 'ProviderUserGroups',
  StudentUsers: 'StudentUsers',
  InstituteStaff: 'InstituteStaff',
  InstituteStudents: 'InstituteStudents',
  ProviderStaff: 'ProviderStaff',
  Potentialproviders: 'Potentialproviders',
  pointOfOrigin: 'pointOfOrigin'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/jared/Desktop/placementt/Placementt-Prisma/src/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.0",
  "engineVersion": "0a83d8541752d7582de2ebc1ece46519ce72a848",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGxpYiB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi8uLi9saWIvcHJpc21hL2dlbmVyYXRlZC9jbGllbnQiCiAgCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50IgogIGJpbmFyeVRhcmdldHMgPSBbIm5hdGl2ZSIsICJyaGVsLW9wZW5zc2wtMS4wLngiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJESVJFQ1RfVVJMIikKfQoKbW9kZWwgQWRkcmVzc2VzIHsKICBhZGRyZXNzSWQgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgc3RhZ2UgICAgICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NMaW5lMSAgICAgIFN0cmluZz8KICBhZGRyZXNzTGluZTIgICAgICBTdHJpbmc/CiAgY29udGFjdEZvcmVuYW1lICAgU3RyaW5nPwogIGNvbnRhY3RTdXJuYW1lICAgIFN0cmluZz8KICBjb3VudHJ5ICAgICAgICAgICBTdHJpbmc/CiAgZW1haWwgICAgICAgICAgICAgU3RyaW5nPwogIGdlb0hhc2ggICAgICAgICAgIFN0cmluZz8KICBsb2NhbGl0eSAgICAgICAgICBTdHJpbmc/CiAgcGhvbmUgICAgICAgICAgICAgU3RyaW5nPwogIHBvc3RhbF9jb2RlICAgICAgIFN0cmluZz8KICBpbnN0aXR1dGVJZCAgICAgICBTdHJpbmc/CiAgcHJvdmlkZXJJZCAgICAgICAgU3RyaW5nPwogIGluc3RpdHV0ZSAgICAgICAgIEluc3RpdHV0ZXM/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2luc3RpdHV0ZUlkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZUlkXSkKICBwcm92aWRlciAgICAgICAgICBQcm92aWRlcnM/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm92aWRlcklkXSwgcmVmZXJlbmNlczogW3Byb3ZpZGVySWRdKQogIENvbnRhY3RzICAgICAgICAgIENvbnRhY3RzW10KICBQbGFjZW1lbnRMaXN0aW5ncyBQbGFjZW1lbnRMaXN0aW5nc1tdCiAgUGxhY2VtZW50cyAgICAgICAgUGxhY2VtZW50c1tdCiAgUHJvdmlkZXJDb2hvcnRzICAgUHJvdmlkZXJDb2hvcnRzW10KfQoKbW9kZWwgQ29ob3J0cyB7CiAgY29ob3J0SWQgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogIGRlc2lnbmF0ZWRTdGFmZiAgIFN0cmluZwogIHN0YWdlICAgICAgICAgICAgIFN0cmluZwogIHBsYWNlbWVudFR5cGUgICAgIFN0cmluZwogIG5hbWUgICAgICAgICAgICAgIFN0cmluZwogIHN0YXJ0UGxhY2VtZW50cyAgIFN0cmluZwogIGVuZFBsYWNlbWVudHMgICAgIFN0cmluZwogIHN0YXJ0U3VibWlzc2lvbiAgIFN0cmluZwogIGVuZFN1Ym1pc3Npb24gICAgIFN0cmluZwogIGluY2x1ZGVkRmlsZXMgICAgIFN0cmluZ1tdCiAgaW5jbHVkZWRGb3JtcyAgICAgU3RyaW5nW10KICB3b3JrZmxvdyAgICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCAgICAgICBTdHJpbmcKICBpbnN0aXR1dGUgICAgICAgICBJbnN0aXR1dGVzICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCiAgSW5zdGl0dXRlU3R1ZGVudHMgSW5zdGl0dXRlU3R1ZGVudHNbXQp9Cgptb2RlbCBQcm92aWRlckNvaG9ydHMgewogIGNvaG9ydElkICAgU3RyaW5nICAgIEBpZCBAdW5pcXVlCiAgc3RhZ2UgICAgICBTdHJpbmcKICBuYW1lICAgICAgIFN0cmluZwogIGFkZHJlc3MgICAgQWRkcmVzc2VzIEByZWxhdGlvbihmaWVsZHM6IFthZGRyZXNzSWRdLCByZWZlcmVuY2VzOiBbYWRkcmVzc0lkXSkKICBhZGRyZXNzSWQgIFN0cmluZwogIHByb3ZpZGVySWQgU3RyaW5nCiAgcHJvdmlkZXIgICBQcm92aWRlcnMgQHJlbGF0aW9uKGZpZWxkczogW3Byb3ZpZGVySWRdLCByZWZlcmVuY2VzOiBbcHJvdmlkZXJJZF0pCn0KCm1vZGVsIENvbnRhY3RzIHsKICBjb250YWN0SWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgY29udGFjdEZvcmVuYW1lICAgICAgICBTdHJpbmcKICBjb250YWN0U3VybmFtZSAgICAgICAgIFN0cmluZwogIGNyZWF0ZWQgICAgICAgICAgICAgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBwcm92aWRlclBob25lICAgICAgICAgIFN0cmluZwogIEluc3RpdHV0ZVN0dWRlbnRVc2VySWQgU3RyaW5nCiAgYWRkcmVzc0lkICAgICAgICAgICAgICBTdHJpbmcKICBzdHVkZW50VXNlcklkICAgICAgICAgIFN0cmluZwogIEluc3RpdHV0ZXN0dWRlbnRVc2VyICAgSW5zdGl0dXRlU3R1ZGVudHMgQHJlbGF0aW9uKGZpZWxkczogW0luc3RpdHV0ZVN0dWRlbnRVc2VySWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlU3R1ZGVudElkXSkKICBhZGRyZXNzICAgICAgICAgICAgICAgIEFkZHJlc3NlcyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthZGRyZXNzSWRdLCByZWZlcmVuY2VzOiBbYWRkcmVzc0lkXSkKICBzdHVkZW50VXNlciAgICAgICAgICAgIFN0dWRlbnRVc2VycyAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50VXNlcklkXSwgcmVmZXJlbmNlczogW3N0dWRlbnRVc2VySWRdKQp9Cgptb2RlbCBJbnN0aXR1dGVGb3JtcyB7CiAgZm9ybUlkICAgICAgU3RyaW5nICAgICBAaWQgQHVuaXF1ZQogIGZvcm0gICAgICAgIEpzb24KICB1cGRhdGVkICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCBTdHJpbmcKICBpbnN0aXR1dGUgICBJbnN0aXR1dGVzIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCn0KCm1vZGVsIEluc3RpdHV0ZXMgewogIGluc3RpdHV0ZUlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBhZG1pbiAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBleHRlcm5hbFByb3ZpZGVyVXBsb2FkcyBCb29sZWFuCiAgbmFtZSAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgcmVmZXJyYWwgICAgICAgICAgICAgICAgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgICAgIFN0cmluZwogIHN0dWRlbnRzRmllbGRzICAgICAgICAgIFN0cmluZ1tdCiAgc3RhZmYgICAgICAgICAgICAgICAgICAgSW50CiAgc3RhZmZBY3RpdmUgICAgICAgICAgICAgSW50CiAgc3R1ZGVudHMgICAgICAgICAgICAgICAgSW50CiAgc3R1ZGVudHNBY3RpdmUgICAgICAgICAgSW50CiAgc3RhZmZGaWVsZHMgICAgICAgICAgICAgU3RyaW5nW10KICBzdGFmZkd1aWRhbmNlICAgICAgICAgICBKc29uCiAgc3R1ZGVudHNHdWlkYW5jZSAgICAgICAgSnNvbgogIHZlcmlmaWVkUHJvdmlkZXJzICAgICAgIFN0cmluZ1tdCiAgQWRkcmVzc2VzICAgICAgICAgICAgICAgQWRkcmVzc2VzW10KICBDb2hvcnRzICAgICAgICAgICAgICAgICBDb2hvcnRzW10KICBGb3JtcyAgICAgICAgICAgICAgICAgICBJbnN0aXR1dGVGb3Jtc1tdCiAgSW5zdGl0dXRlU3RhZmYgICAgICAgICAgSW5zdGl0dXRlU3RhZmZbXQogIFN0YWZmVXNlckdyb3VwcyAgICAgICAgIEluc3RpdHV0ZVN0YWZmVXNlckdyb3Vwc1tdCiAgU3R1ZGVudFVzZXJHcm91cHMgICAgICAgSW5zdGl0dXRlU3R1ZGVudFVzZXJHcm91cHNbXQogIEluc3RpdHV0ZVN0dWRlbnRzICAgICAgIEluc3RpdHV0ZVN0dWRlbnRzW10KICBQbGFjZW1lbnRzICAgICAgICAgICAgICBQbGFjZW1lbnRzW10KfQoKbW9kZWwgTG9ncyB7CiAgbG9nSWQgICAgICAgU3RyaW5nICAgICBAaWQgQHVuaXF1ZQogIHByb3ZpZGVyICAgIEpzb24KICBzdHVkZW50cyAgICBKc29uCiAgc3RhZmYgICAgICAgSnNvbgogIHVpZCAgICAgICAgIFN0cmluZwogIHBsYWNlbWVudElkIFN0cmluZwogIHBsYWNlbWVudCAgIFBsYWNlbWVudHMgQHJlbGF0aW9uKGZpZWxkczogW3BsYWNlbWVudElkXSwgcmVmZXJlbmNlczogW3BsYWNlbWVudElkXSkKfQoKbW9kZWwgUGxhY2VtZW50TGlzdGluZ3MgewogIHBsYWNlbWVudExpc3RpbmdJZCBTdHJpbmcgICAgQGlkIEB1bmlxdWUKICBhZGRyZXNzSWQgICAgICAgICAgU3RyaW5nCiAgY29udGFjdEZvcmVuYW1lICAgIFN0cmluZwogIGNvbnRhY3RTdXJuYW1lICAgICBTdHJpbmcKICBjcmVhdGVkICAgICAgICAgICAgRGF0ZVRpbWUKICBtYXBDb25zZW50ICAgICAgICAgQm9vbGVhbgogIG1hcENvbnNlbnREYXRlICAgICBTdHJpbmcKICBwcm92aWRlckVtYWlsICAgICAgU3RyaW5nCiAgcHJvdmlkZXJJZCAgICAgICAgIFN0cmluZwogIHByb3ZpZGVyUGhvbmUgICAgICBTdHJpbmcKICBzYXZlZEJ5ICAgICAgICAgICAgSnNvbgogIHF1ZXN0aW9ucyAgICAgICAgICBKc29uCiAgdGl0bGUgICAgICAgICAgICAgIFN0cmluZwogIHVwbG9hZGVkQnkgICAgICAgICBTdHJpbmcKICBhZGRyZXNzICAgICAgICAgICAgQWRkcmVzc2VzIEByZWxhdGlvbihmaWVsZHM6IFthZGRyZXNzSWRdLCByZWZlcmVuY2VzOiBbYWRkcmVzc0lkXSkKICBwcm92aWRlciAgICAgICAgICAgUHJvdmlkZXJzIEByZWxhdGlvbihmaWVsZHM6IFtwcm92aWRlcklkXSwgcmVmZXJlbmNlczogW3Byb3ZpZGVySWRdKQp9Cgptb2RlbCBQbGFjZW1lbnRzIHsKICBwbGFjZW1lbnRJZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBhY3RpdmVEYXRlcyAgICAgICAgU3RyaW5nW10KICBjb2hvcnRJZCAgICAgICAgICAgU3RyaW5nCiAgY29udGFjdEZvcmVuYW1lICAgIFN0cmluZwogIGNvbnRhY3RTdXJuYW1lICAgICBTdHJpbmcKICBjcmVhdGVkICAgICAgICAgICAgU3RyaW5nCiAgZHJhZnQgICAgICAgICAgICAgIEJvb2xlYW4KICBlbmREYXRlICAgICAgICAgICAgU3RyaW5nCiAgZmxhZ3MgICAgICAgICAgICAgIFN0cmluZ1tdCiAgZ2VvSGFzaCAgICAgICAgICAgIFN0cmluZwogIGluUHJvZ3Jlc3MgICAgICAgICBCb29sZWFuCiAgbGVhZFRpbWVzICAgICAgICAgIFN0cmluZ1tdCiAgbmFtZSAgICAgICAgICAgICAgIFN0cmluZwogIHBhcmVudEVtYWlsZWQgICAgICBEYXRlVGltZT8KICBwYXJlbnRFeHBpcnkgICAgICAgU3RyaW5nPwogIHBhcmVudEtleSAgICAgICAgICBTdHJpbmc/CiAgcHJvZHVjdCAgICAgICAgICAgIFN0cmluZz8KICBwcm92aWRlckVtYWlsICAgICAgU3RyaW5nPwogIHByb3ZpZGVyRW1haWxlZCAgICBEYXRlVGltZT8KICBwcm92aWRlckV4cGlyeSAgICAgU3RyaW5nPwogIHByb3ZpZGVyS2V5ICAgICAgICBTdHJpbmc/CiAgcHJvdmlkZXJOYW1lICAgICAgIFN0cmluZz8KICBwcm92aWRlclBob25lICAgICAgU3RyaW5nCiAgbmV4dFN0YXR1cyAgICAgICAgIEludD8KICBzdGF0dXMgICAgICAgICAgICAgSW50CiAgc3RhcnREYXRlICAgICAgICAgIFN0cmluZwogIHRpdGxlICAgICAgICAgICAgICBTdHJpbmcKICBmb3JtcyAgICAgICAgICAgICAgSnNvbgogIHF1ZXN0aW9ucyAgICAgICAgICBKc29uCiAgdXBsb2FkZWRCeSAgICAgICAgIFN0cmluZwogIGFkZHJlc3NJZCAgICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlU3R1ZGVudElkIFN0cmluZwogIHByb3ZpZGVySWQgICAgICAgICBTdHJpbmcKICBzdHVkZW50SWQgICAgICAgICAgU3RyaW5nCiAgdXNlckdyb3VwSWQgICAgICAgIFN0cmluZwogIExvZ3MgICAgICAgICAgICAgICBMb2dzW10KICBhZGRyZXNzICAgICAgICAgICAgQWRkcmVzc2VzICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2FkZHJlc3NJZF0sIHJlZmVyZW5jZXM6IFthZGRyZXNzSWRdKQogIGluc3RpdHV0ZSAgICAgICAgICBJbnN0aXR1dGVzICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaW5zdGl0dXRlSWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlSWRdKQogIGluc3RpdHV0ZVN0dWRlbnQgICBJbnN0aXR1dGVTdHVkZW50cyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaW5zdGl0dXRlU3R1ZGVudElkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZVN0dWRlbnRJZF0pCiAgcHJvdmlkZXIgICAgICAgICAgIFByb3ZpZGVycyAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm92aWRlcklkXSwgcmVmZXJlbmNlczogW3Byb3ZpZGVySWRdKQogIHN0dWRlbnQgICAgICAgICAgICBTdHVkZW50VXNlcnMgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3R1ZGVudElkXSwgcmVmZXJlbmNlczogW3N0dWRlbnRVc2VySWRdKQogIHVzZXJHcm91cCAgICAgICAgICBJbnN0aXR1dGVTdHVkZW50VXNlckdyb3VwcyBAcmVsYXRpb24oZmllbGRzOiBbdXNlckdyb3VwSWRdLCByZWZlcmVuY2VzOiBbdXNlckdyb3VwSWRdKQp9Cgptb2RlbCBQcm92aWRlcnMgewogIHByb3ZpZGVySWQgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBjb250YWN0Rm9yZW5hbWUgICAgIFN0cmluZwogIGNvbnRhY3RTdXJuYW1lICAgICAgU3RyaW5nCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmcKICBtYXBDb25zZW50ICAgICAgICAgIEJvb2xlYW4/CiAgaW5zdXJhbmNlICAgICAgICAgICBCb29sZWFuPwogIG1hcENvbnNlbnREYXRlICAgICAgU3RyaW5nPwogIG5hbWUgICAgICAgICAgICAgICAgU3RyaW5nCiAgcGhvbmUgICAgICAgICAgICAgICBTdHJpbmcKICByZW1lbWJlckNvbnNlbnQgICAgIEJvb2xlYW4/CiAgcmVtZW1iZXJDb25zZW50RGF0ZSBTdHJpbmc/CiAgc2F2ZWRCeSAgICAgICAgICAgICBKc29uPwogIHNlY3RvciAgICAgICAgICAgICAgU3RyaW5nCiAgcmVmZXJyYWwgICAgICAgICAgICBTdHJpbmc/CiAgc3Vic2VjdG9yICAgICAgICAgICBTdHJpbmcKICB1cGxvYWRlZEJ5ICAgICAgICAgIFN0cmluZwogIHdlYnNpdGUgICAgICAgICAgICAgU3RyaW5nPwogIGFjdGl2YXRpb25Db2RlICAgICAgSW50ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzdGF0dXMgICAgICAgICAgICAgIFN0cmluZwogIEFkZHJlc3NlcyAgICAgICAgICAgQWRkcmVzc2VzW10KICBQbGFjZW1lbnRMaXN0aW5ncyAgIFBsYWNlbWVudExpc3RpbmdzW10KICBQbGFjZW1lbnRzICAgICAgICAgIFBsYWNlbWVudHNbXQogIFByb3ZpZGVyU3RhZmYgICAgICAgUHJvdmlkZXJTdGFmZltdCiAgUHJvdmlkZXJVc2VyR3JvdXBzICBQcm92aWRlclVzZXJHcm91cHNbXQogIFByb3ZpZGVyQ29ob3J0cyAgICAgUHJvdmlkZXJDb2hvcnRzW10KfQoKbW9kZWwgSW5zdGl0dXRlU3R1ZGVudFVzZXJHcm91cHMgewogIHVzZXJHcm91cElkICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBkZWZhdWx0ICAgICAgICAgICBCb29sZWFuCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgdXBkYXRlZCAgICAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlSWQgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlICAgICAgICAgSW5zdGl0dXRlcyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaW5zdGl0dXRlSWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlSWRdKQogIEluc3RpdHV0ZVN0dWRlbnRzIEluc3RpdHV0ZVN0dWRlbnRzW10KICBQbGFjZW1lbnRzICAgICAgICBQbGFjZW1lbnRzW10KfQoKbW9kZWwgSW5zdGl0dXRlU3RhZmZVc2VyR3JvdXBzIHsKICB1c2VyR3JvdXBJZCAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgZGVmYXVsdCAgICAgICAgQm9vbGVhbgogIG5hbWUgICAgICAgICAgIFN0cmluZwogIHVwZGF0ZWQgICAgICAgIFN0cmluZwogIGluc3RpdHV0ZUlkICAgIFN0cmluZwogIEluc3RpdHV0ZVN0YWZmIEluc3RpdHV0ZVN0YWZmW10KICBpbnN0aXR1dGUgICAgICBJbnN0aXR1dGVzICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCn0KCm1vZGVsIFByb3ZpZGVyVXNlckdyb3VwcyB7CiAgdXNlckdyb3VwSWQgICBTdHJpbmcgICAgICAgICAgQGlkIEB1bmlxdWUKICBkZWZhdWx0ICAgICAgIEJvb2xlYW4KICBuYW1lICAgICAgICAgIFN0cmluZwogIHVwZGF0ZWQgICAgICAgU3RyaW5nCiAgcHJvdmlkZXJJZCAgICBTdHJpbmcKICBQcm92aWRlclN0YWZmIFByb3ZpZGVyU3RhZmZbXQogIHByb3ZpZGVyICAgICAgUHJvdmlkZXJzICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm92aWRlcklkXSwgcmVmZXJlbmNlczogW3Byb3ZpZGVySWRdKQp9Cgptb2RlbCBTdHVkZW50VXNlcnMgewogIHN0dWRlbnRVc2VySWQgU3RyaW5nICAgICAgIEB1bmlxdWUKICBzdGF0dXMgICAgICAgIFN0cmluZwogIGFuYWx5dGljcyAgICAgSnNvbgogIGNyZWF0ZWQgICAgICAgU3RyaW5nCiAgZGV0YWlscyAgICAgICBKc29uCiAgZW1haWwgICAgICAgICBTdHJpbmcKICByZWZlcnJhbCAgICAgIFN0cmluZwogIHVuaXRzICAgICAgICAgU3RyaW5nCiAgdXNlclR5cGUgICAgICBTdHJpbmcKICBDb250YWN0cyAgICAgIENvbnRhY3RzW10KICBQbGFjZW1lbnRzICAgIFBsYWNlbWVudHNbXQp9Cgptb2RlbCBJbnN0aXR1dGVTdGFmZiB7CiAgaW5zdGl0dXRlU3RhZmZJZCBTdHJpbmcgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGNyZWF0ZWQgICAgICAgICAgU3RyaW5nCiAgZGV0YWlscyAgICAgICAgICBKc29uCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcKICBvSWQgICAgICAgICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgU3RyaW5nCiAgdXNlclR5cGUgICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCAgICAgIFN0cmluZwogIHVzZXJHcm91cElkICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlICAgICAgICBJbnN0aXR1dGVzICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2luc3RpdHV0ZUlkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZUlkXSkKICB1c2VyR3JvdXAgICAgICAgIEluc3RpdHV0ZVN0YWZmVXNlckdyb3VwcyBAcmVsYXRpb24oZmllbGRzOiBbdXNlckdyb3VwSWRdLCByZWZlcmVuY2VzOiBbdXNlckdyb3VwSWRdKQp9Cgptb2RlbCBJbnN0aXR1dGVTdHVkZW50cyB7CiAgaW5zdGl0dXRlU3R1ZGVudElkIFN0cmluZyAgICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBhY3RpdmF0ZWQgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZCAgICAgICAgICAgIFN0cmluZwogIGNvaG9ydElkICAgICAgICAgICBTdHJpbmcKICBkZXRhaWxzICAgICAgICAgICAgSnNvbgogIGVtYWlsICAgICAgICAgICAgICBTdHJpbmcKICBmbGFncyAgICAgICAgICAgICAgU3RyaW5nW10KICBvSWQgICAgICAgICAgICAgICAgU3RyaW5nCiAgcmVzZXRFeHBpcnkgICAgICAgIERhdGVUaW1lCiAgc3RhdHVzICAgICAgICAgICAgIFN0cmluZwogIHVzZXJUeXBlICAgICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCAgICAgICAgU3RyaW5nCiAgdXNlckdyb3VwSWQgICAgICAgIFN0cmluZwogIENvbnRhY3RzICAgICAgICAgICBDb250YWN0c1tdCiAgY29ob3J0ICAgICAgICAgICAgIENvaG9ydHMgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjb2hvcnRJZF0sIHJlZmVyZW5jZXM6IFtjb2hvcnRJZF0pCiAgaW5zdGl0dXRlICAgICAgICAgIEluc3RpdHV0ZXMgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCiAgdXNlckdyb3VwICAgICAgICAgIEluc3RpdHV0ZVN0dWRlbnRVc2VyR3JvdXBzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyR3JvdXBJZF0sIHJlZmVyZW5jZXM6IFt1c2VyR3JvdXBJZF0pCiAgUGxhY2VtZW50cyAgICAgICAgIFBsYWNlbWVudHNbXQp9Cgptb2RlbCBQcm92aWRlclN0YWZmIHsKICBwcm92aWRlclN0YWZmSWQgU3RyaW5nICAgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkICAgICAgICAgU3RyaW5nCiAgZGV0YWlscyAgICAgICAgIEpzb24KICBlbWFpbCAgICAgICAgICAgU3RyaW5nCiAgbm90ZXMgICAgICAgICAgIEpzb24/CiAgc3RhdHVzICAgICAgICAgIFN0cmluZwogIHByb3ZpZGVySWQgICAgICBTdHJpbmcKICB1c2VyR3JvdXBJZCAgICAgU3RyaW5nCiAgcHJvdmlkZXIgICAgICAgIFByb3ZpZGVycyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvdmlkZXJJZF0sIHJlZmVyZW5jZXM6IFtwcm92aWRlcklkXSkKICB1c2VyR3JvdXAgICAgICAgUHJvdmlkZXJVc2VyR3JvdXBzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyR3JvdXBJZF0sIHJlZmVyZW5jZXM6IFt1c2VyR3JvdXBJZF0pCn0KCm1vZGVsIFBvdGVudGlhbHByb3ZpZGVycyB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQHVuaXF1ZQogIHR5cGVzICAgICAgICAgICAgICAgU3RyaW5nW10KICBnZW9IYXNoICAgICAgICAgICAgIFN0cmluZz8KICBuYXRpb25hbFBob25lTnVtYmVyIFN0cmluZz8KICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZ1tdCiAgZm9ybWF0dGVkQWRkcmVzcyAgICBTdHJpbmc/CiAgd2Vic2l0ZVVyaSAgICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcG9pbnRPZk9yaWdpbiAgICAgICBwb2ludE9mT3JpZ2luPyBAcmVsYXRpb24oZmllbGRzOiBbcG9pZF0sIHJlZmVyZW5jZXM6IFtwb2lkXSkKICBwb2lkICAgICAgICAgICAgICAgIFN0cmluZz8KfQoKbW9kZWwgcG9pbnRPZk9yaWdpbiB7CiAgcG9pZCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBOYW1lICAgICAgICAgICAgICAgU3RyaW5nPwogIGdlb0hhc2ggICAgICAgICAgICBTdHJpbmc/CiAgUG90ZW50aWFscHJvdmlkZXJzIFBvdGVudGlhbHByb3ZpZGVyc1tdCn0K",
  "inlineSchemaHash": "d5208f02818532b7cf622230439d27167d19ccaae59a8b1c439bc89dec5e0594",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Addresses\":{\"dbName\":null,\"fields\":[{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressLine2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"AddressesToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"AddressesToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"AddressesToContacts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlacementListings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlacementListings\",\"relationName\":\"AddressesToPlacementListings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"AddressesToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderCohorts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderCohorts\",\"relationName\":\"AddressesToProviderCohorts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cohorts\":{\"dbName\":null,\"fields\":[{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"designatedStaff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placementType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startPlacements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endPlacements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startSubmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endSubmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"includedFiles\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"includedForms\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"CohortsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"CohortsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderCohorts\":{\"dbName\":null,\"fields\":[{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToProviderCohorts\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"ProviderCohortsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contacts\":{\"dbName\":null,\"fields\":[{\"name\":\"contactId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstitutestudentUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"ContactsToInstituteStudents\",\"relationFromFields\":[\"InstituteStudentUserId\"],\"relationToFields\":[\"instituteStudentId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToContacts\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentUsers\",\"relationName\":\"ContactsToStudentUsers\",\"relationFromFields\":[\"studentUserId\"],\"relationToFields\":[\"studentUserId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteForms\":{\"dbName\":null,\"fields\":[{\"name\":\"formId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"form\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteFormsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Institutes\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"externalProviderUploads\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsFields\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffFields\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffGuidance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsGuidance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedProviders\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cohorts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cohorts\",\"relationName\":\"CohortsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Forms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteForms\",\"relationName\":\"InstituteFormsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaff\",\"relationName\":\"InstituteStaffToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StaffUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaffUserGroups\",\"relationName\":\"InstituteStaffUserGroupsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstitutesToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Logs\":{\"dbName\":null,\"fields\":[{\"name\":\"logId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placementId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placement\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"LogsToPlacements\",\"relationFromFields\":[\"placementId\"],\"relationToFields\":[\"placementId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PlacementListings\":{\"dbName\":null,\"fields\":[{\"name\":\"placementListingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToPlacementListings\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"PlacementListingsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Placements\":{\"dbName\":null,\"fields\":[{\"name\":\"placementId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activeDates\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"draft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inProgress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leadTimes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentEmailed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmailed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"forms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteStudentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Logs\",\"relationName\":\"LogsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToPlacements\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstitutesToPlacements\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteStudent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentsToPlacements\",\"relationFromFields\":[\"instituteStudentId\"],\"relationToFields\":[\"instituteStudentId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"PlacementsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentUsers\",\"relationName\":\"PlacementsToStudentUsers\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"studentUserId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToPlacements\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Providers\":{\"dbName\":null,\"fields\":[{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rememberConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rememberConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subsector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlacementListings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlacementListings\",\"relationName\":\"PlacementListingsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"PlacementsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderStaff\",\"relationName\":\"ProviderStaffToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderUserGroups\",\"relationName\":\"ProviderUserGroupsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderCohorts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderCohorts\",\"relationName\":\"ProviderCohortsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStudentUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStudentUserGroupsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentUserGroupsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstituteStudentUserGroupsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStaffUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaff\",\"relationName\":\"InstituteStaffToInstituteStaffUserGroups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStaffUserGroupsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderStaff\",\"relationName\":\"ProviderStaffToProviderUserGroups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"ProviderUserGroupsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentUsers\":{\"dbName\":null,\"fields\":[{\"name\":\"studentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"analytics\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"units\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"ContactsToStudentUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"PlacementsToStudentUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteStaffId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStaffToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaffUserGroups\",\"relationName\":\"InstituteStaffToInstituteStaffUserGroups\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStudents\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteStudentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resetExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"ContactsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohort\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cohorts\",\"relationName\":\"CohortsToInstituteStudents\",\"relationFromFields\":[\"cohortId\"],\"relationToFields\":[\"cohortId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStudentsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToInstituteStudents\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstituteStudentsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"providerStaffId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"ProviderStaffToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderUserGroups\",\"relationName\":\"ProviderStaffToProviderUserGroups\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Potentialproviders\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"types\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationalPhoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formattedAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"websiteUri\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pointOfOrigin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pointOfOrigin\",\"relationName\":\"PotentialprovidersTopointOfOrigin\",\"relationFromFields\":[\"poid\"],\"relationToFields\":[\"poid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"pointOfOrigin\":{\"dbName\":null,\"fields\":[{\"name\":\"poid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Potentialproviders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Potentialproviders\",\"relationName\":\"PotentialprovidersTopointOfOrigin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

