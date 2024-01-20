
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
} = require('./runtime/library')


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


  const path = require('path')

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
  address_line1: 'address_line1',
  address_line2: 'address_line2',
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
  defAddress: 'defAddress',
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
  subsector: 'subsector',
  uploadedBy: 'uploadedBy',
  website: 'website'
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
  template: 'template',
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
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
  ProviderStaff: 'ProviderStaff'
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
      "value": "/Users/thomasbarton/Documents/GitHub/Placementt-Prisma/src/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
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
  "inlineSchema": "Z2VuZXJhdG9yIGxpYiB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi8uLi9saWIvcHJpc21hL2dlbmVyYXRlZC9jbGllbnQiCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJESVJFQ1RfVVJMIikKfQoKbW9kZWwgQWRkcmVzc2VzIHsKICBhZGRyZXNzSWQgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZCBAdW5pcXVlCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgc3RhZ2UgICAgICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NfbGluZTEgICAgIFN0cmluZz8KICBhZGRyZXNzX2xpbmUyICAgICBTdHJpbmc/CiAgY29udGFjdEZvcmVuYW1lICAgU3RyaW5nPwogIGNvbnRhY3RTdXJuYW1lICAgIFN0cmluZz8KICBjb3VudHJ5ICAgICAgICAgICBTdHJpbmc/CiAgZW1haWwgICAgICAgICAgICAgU3RyaW5nPwogIGdlb0hhc2ggICAgICAgICAgIFN0cmluZz8KICBsb2NhbGl0eSAgICAgICAgICBTdHJpbmc/CiAgcGhvbmUgICAgICAgICAgICAgU3RyaW5nPwogIHBvc3RhbF9jb2RlICAgICAgIFN0cmluZz8KICBpbnN0aXR1dGVJZCAgICAgICBTdHJpbmc/CiAgcHJvdmlkZXJJZCAgICAgICAgU3RyaW5nPwogIGluc3RpdHV0ZSAgICAgICAgIEluc3RpdHV0ZXM/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2luc3RpdHV0ZUlkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZUlkXSkKICBwcm92aWRlciAgICAgICAgICBQcm92aWRlcnM/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtwcm92aWRlcklkXSwgcmVmZXJlbmNlczogW3Byb3ZpZGVySWRdKQogIENvbnRhY3RzICAgICAgICAgIENvbnRhY3RzW10KICBQbGFjZW1lbnRMaXN0aW5ncyBQbGFjZW1lbnRMaXN0aW5nc1tdCiAgUGxhY2VtZW50cyAgICAgICAgUGxhY2VtZW50c1tdCn0KCm1vZGVsIENvaG9ydHMgewogIGNvaG9ydElkICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBkZXNpZ25hdGVkU3RhZmYgICBTdHJpbmcgICAgICAgICAgICAgIEB1bmlxdWUKICBzdGFnZSAgICAgICAgICAgICBTdHJpbmcKICBwbGFjZW1lbnRUeXBlICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICBTdHJpbmcKICBzdGFydFBsYWNlbWVudHMgICBTdHJpbmcKICBlbmRQbGFjZW1lbnRzICAgICBTdHJpbmcKICBzdGFydFN1Ym1pc3Npb24gICBTdHJpbmcKICBlbmRTdWJtaXNzaW9uICAgICBTdHJpbmcKICBpbmNsdWRlZEZpbGVzICAgICBTdHJpbmdbXQogIGluY2x1ZGVkRm9ybXMgICAgIFN0cmluZ1tdCiAgd29ya2Zsb3cgICAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlSWQgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlICAgICAgICAgSW5zdGl0dXRlcyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaW5zdGl0dXRlSWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlSWRdKQogIEluc3RpdHV0ZVN0dWRlbnRzIEluc3RpdHV0ZVN0dWRlbnRzW10KfQoKbW9kZWwgQ29udGFjdHMgewogIGNvbnRhY3RJZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEB1bmlxdWUKICBjb250YWN0Rm9yZW5hbWUgICAgICAgIFN0cmluZwogIGNvbnRhY3RTdXJuYW1lICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZCAgICAgICAgICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHByb3ZpZGVyUGhvbmUgICAgICAgICAgU3RyaW5nCiAgSW5zdGl0dXRlU3R1ZGVudFVzZXJJZCBTdHJpbmcKICBhZGRyZXNzSWQgICAgICAgICAgICAgIFN0cmluZwogIHN0dWRlbnRVc2VySWQgICAgICAgICAgU3RyaW5nCiAgSW5zdGl0dXRlc3R1ZGVudFVzZXIgICBJbnN0aXR1dGVTdHVkZW50cyBAcmVsYXRpb24oZmllbGRzOiBbSW5zdGl0dXRlU3R1ZGVudFVzZXJJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVTdHVkZW50SWRdKQogIGFkZHJlc3MgICAgICAgICAgICAgICAgQWRkcmVzc2VzICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2FkZHJlc3NJZF0sIHJlZmVyZW5jZXM6IFthZGRyZXNzSWRdKQogIHN0dWRlbnRVc2VyICAgICAgICAgICAgU3R1ZGVudFVzZXJzICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3N0dWRlbnRVc2VySWRdLCByZWZlcmVuY2VzOiBbc3R1ZGVudFVzZXJJZF0pCn0KCm1vZGVsIEluc3RpdHV0ZUZvcm1zIHsKICBmb3JtSWQgICAgICBTdHJpbmcgICAgIEBpZCBAdW5pcXVlCiAgZm9ybSAgICAgICAgSnNvbgogIHVwZGF0ZWQgICAgIFN0cmluZwogIGluc3RpdHV0ZUlkIFN0cmluZwogIGluc3RpdHV0ZSAgIEluc3RpdHV0ZXMgQHJlbGF0aW9uKGZpZWxkczogW2luc3RpdHV0ZUlkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZUlkXSkKfQoKbW9kZWwgSW5zdGl0dXRlcyB7CiAgaW5zdGl0dXRlSWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogIGFkbWluICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGV4dGVybmFsUHJvdmlkZXJVcGxvYWRzIEJvb2xlYW4KICBuYW1lICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICByZWZlcnJhbCAgICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgc3R1ZGVudHNGaWVsZHMgICAgICAgICAgU3RyaW5nW10KICBzdGFmZiAgICAgICAgICAgICAgICAgICBJbnQKICBzdGFmZkFjdGl2ZSAgICAgICAgICAgICBJbnQKICBzdHVkZW50cyAgICAgICAgICAgICAgICBJbnQKICBzdHVkZW50c0FjdGl2ZSAgICAgICAgICBJbnQKICBzdGFmZkZpZWxkcyAgICAgICAgICAgICBTdHJpbmdbXQogIHN0YWZmR3VpZGFuY2UgICAgICAgICAgIEpzb24KICBzdHVkZW50c0d1aWRhbmNlICAgICAgICBKc29uCiAgdmVyaWZpZWRQcm92aWRlcnMgICAgICAgU3RyaW5nW10KICBBZGRyZXNzZXMgICAgICAgICAgICAgICBBZGRyZXNzZXNbXQogIENvaG9ydHMgICAgICAgICAgICAgICAgIENvaG9ydHNbXQogIEZvcm1zICAgICAgICAgICAgICAgICAgIEluc3RpdHV0ZUZvcm1zW10KICBJbnN0aXR1dGVTdGFmZiAgICAgICAgICBJbnN0aXR1dGVTdGFmZltdCiAgU3RhZmZVc2VyR3JvdXBzICAgICAgICAgSW5zdGl0dXRlU3RhZmZVc2VyR3JvdXBzW10KICBTdHVkZW50VXNlckdyb3VwcyAgICAgICBJbnN0aXR1dGVTdHVkZW50VXNlckdyb3Vwc1tdCiAgSW5zdGl0dXRlU3R1ZGVudHMgICAgICAgSW5zdGl0dXRlU3R1ZGVudHNbXQogIFBsYWNlbWVudHMgICAgICAgICAgICAgIFBsYWNlbWVudHNbXQp9Cgptb2RlbCBMb2dzIHsKICBsb2dJZCAgICAgICBTdHJpbmcgICAgIEBpZCBAdW5pcXVlCiAgcHJvdmlkZXIgICAgSnNvbgogIHN0dWRlbnRzICAgIEpzb24KICBzdGFmZiAgICAgICBKc29uCiAgdWlkICAgICAgICAgU3RyaW5nCiAgcGxhY2VtZW50SWQgU3RyaW5nCiAgcGxhY2VtZW50ICAgUGxhY2VtZW50cyBAcmVsYXRpb24oZmllbGRzOiBbcGxhY2VtZW50SWRdLCByZWZlcmVuY2VzOiBbcGxhY2VtZW50SWRdKQp9Cgptb2RlbCBQbGFjZW1lbnRMaXN0aW5ncyB7CiAgcGxhY2VtZW50TGlzdGluZ0lkIFN0cmluZyAgICBAaWQgQHVuaXF1ZQogIGFkZHJlc3NJZCAgICAgICAgICBTdHJpbmcKICBjb250YWN0Rm9yZW5hbWUgICAgU3RyaW5nCiAgY29udGFjdFN1cm5hbWUgICAgIFN0cmluZwogIGNyZWF0ZWQgICAgICAgICAgICBEYXRlVGltZQogIG1hcENvbnNlbnQgICAgICAgICBCb29sZWFuCiAgbWFwQ29uc2VudERhdGUgICAgIFN0cmluZwogIHByb3ZpZGVyRW1haWwgICAgICBTdHJpbmcKICBwcm92aWRlcklkICAgICAgICAgU3RyaW5nCiAgcHJvdmlkZXJQaG9uZSAgICAgIFN0cmluZwogIHNhdmVkQnkgICAgICAgICAgICBKc29uCiAgcXVlc3Rpb25zICAgICAgICAgIEpzb24KICB0aXRsZSAgICAgICAgICAgICAgU3RyaW5nCiAgdXBsb2FkZWRCeSAgICAgICAgIFN0cmluZwogIGFkZHJlc3MgICAgICAgICAgICBBZGRyZXNzZXMgQHJlbGF0aW9uKGZpZWxkczogW2FkZHJlc3NJZF0sIHJlZmVyZW5jZXM6IFthZGRyZXNzSWRdKQogIHByb3ZpZGVyICAgICAgICAgICBQcm92aWRlcnMgQHJlbGF0aW9uKGZpZWxkczogW3Byb3ZpZGVySWRdLCByZWZlcmVuY2VzOiBbcHJvdmlkZXJJZF0pCn0KCm1vZGVsIFBsYWNlbWVudHMgewogIHBsYWNlbWVudElkICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogIGFjdGl2ZURhdGVzICAgICAgICBTdHJpbmdbXQogIGNvaG9ydElkICAgICAgICAgICBTdHJpbmcKICBjb250YWN0Rm9yZW5hbWUgICAgU3RyaW5nCiAgY29udGFjdFN1cm5hbWUgICAgIFN0cmluZwogIGNyZWF0ZWQgICAgICAgICAgICBTdHJpbmcKICBkcmFmdCAgICAgICAgICAgICAgQm9vbGVhbgogIGVuZERhdGUgICAgICAgICAgICBTdHJpbmcKICBmbGFncyAgICAgICAgICAgICAgU3RyaW5nW10KICBnZW9IYXNoICAgICAgICAgICAgU3RyaW5nCiAgaW5Qcm9ncmVzcyAgICAgICAgIEJvb2xlYW4KICBsZWFkVGltZXMgICAgICAgICAgU3RyaW5nW10KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nCiAgcGFyZW50RW1haWxlZCAgICAgIERhdGVUaW1lPwogIHBhcmVudEV4cGlyeSAgICAgICBTdHJpbmc/CiAgcGFyZW50S2V5ICAgICAgICAgIFN0cmluZz8KICBwcm9kdWN0ICAgICAgICAgICAgU3RyaW5nPwogIHByb3ZpZGVyRW1haWwgICAgICBTdHJpbmc/CiAgcHJvdmlkZXJFbWFpbGVkICAgIERhdGVUaW1lPwogIHByb3ZpZGVyRXhwaXJ5ICAgICBTdHJpbmc/CiAgcHJvdmlkZXJLZXkgICAgICAgIFN0cmluZz8KICBwcm92aWRlck5hbWUgICAgICAgU3RyaW5nPwogIHByb3ZpZGVyUGhvbmUgICAgICBTdHJpbmcKICBuZXh0U3RhdHVzICAgICAgICAgSW50PwogIHN0YXR1cyAgICAgICAgICAgICBJbnQKICBzdGFydERhdGUgICAgICAgICAgU3RyaW5nCiAgdGl0bGUgICAgICAgICAgICAgIFN0cmluZwogIGZvcm1zICAgICAgICAgICAgICBKc29uCiAgcXVlc3Rpb25zICAgICAgICAgIEpzb24KICB1cGxvYWRlZEJ5ICAgICAgICAgU3RyaW5nCiAgYWRkcmVzc0lkICAgICAgICAgIFN0cmluZwogIGluc3RpdHV0ZUlkICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVTdHVkZW50SWQgU3RyaW5nCiAgcHJvdmlkZXJJZCAgICAgICAgIFN0cmluZwogIHN0dWRlbnRJZCAgICAgICAgICBTdHJpbmcKICB1c2VyR3JvdXBJZCAgICAgICAgU3RyaW5nCiAgTG9ncyAgICAgICAgICAgICAgIExvZ3NbXQogIGFkZHJlc3MgICAgICAgICAgICBBZGRyZXNzZXMgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYWRkcmVzc0lkXSwgcmVmZXJlbmNlczogW2FkZHJlc3NJZF0pCiAgaW5zdGl0dXRlICAgICAgICAgIEluc3RpdHV0ZXMgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCiAgaW5zdGl0dXRlU3R1ZGVudCAgIEluc3RpdHV0ZVN0dWRlbnRzICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVTdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlU3R1ZGVudElkXSkKICBwcm92aWRlciAgICAgICAgICAgUHJvdmlkZXJzICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb3ZpZGVySWRdLCByZWZlcmVuY2VzOiBbcHJvdmlkZXJJZF0pCiAgc3R1ZGVudCAgICAgICAgICAgIFN0dWRlbnRVc2VycyAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbc3R1ZGVudFVzZXJJZF0pCiAgdXNlckdyb3VwICAgICAgICAgIEluc3RpdHV0ZVN0dWRlbnRVc2VyR3JvdXBzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyR3JvdXBJZF0sIHJlZmVyZW5jZXM6IFt1c2VyR3JvdXBJZF0pCn0KCm1vZGVsIFByb3ZpZGVycyB7CiAgcHJvdmlkZXJJZCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogIGNvbnRhY3RGb3JlbmFtZSAgICAgU3RyaW5nCiAgY29udGFjdFN1cm5hbWUgICAgICBTdHJpbmcKICBkZWZBZGRyZXNzICAgICAgICAgIFN0cmluZwogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nCiAgbWFwQ29uc2VudCAgICAgICAgICBCb29sZWFuCiAgaW5zdXJhbmNlICAgICAgICAgICBCb29sZWFuCiAgbWFwQ29uc2VudERhdGUgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICAgIFN0cmluZwogIHBob25lICAgICAgICAgICAgICAgU3RyaW5nCiAgcmVtZW1iZXJDb25zZW50ICAgICBCb29sZWFuCiAgcmVtZW1iZXJDb25zZW50RGF0ZSBTdHJpbmcKICBzYXZlZEJ5ICAgICAgICAgICAgIEpzb24KICBzZWN0b3IgICAgICAgICAgICAgIFN0cmluZwogIHN1YnNlY3RvciAgICAgICAgICAgU3RyaW5nCiAgdXBsb2FkZWRCeSAgICAgICAgICBTdHJpbmcKICB3ZWJzaXRlICAgICAgICAgICAgIFN0cmluZwogIEFkZHJlc3NlcyAgICAgICAgICAgQWRkcmVzc2VzW10KICBQbGFjZW1lbnRMaXN0aW5ncyAgIFBsYWNlbWVudExpc3RpbmdzW10KICBQbGFjZW1lbnRzICAgICAgICAgIFBsYWNlbWVudHNbXQogIFByb3ZpZGVyU3RhZmYgICAgICAgUHJvdmlkZXJTdGFmZltdCiAgUHJvdmlkZXJVc2VyR3JvdXBzICBQcm92aWRlclVzZXJHcm91cHNbXQp9Cgptb2RlbCBJbnN0aXR1dGVTdHVkZW50VXNlckdyb3VwcyB7CiAgdXNlckdyb3VwSWQgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAaWQgQHVuaXF1ZQogIGRlZmF1bHQgICAgICAgICAgIEJvb2xlYW4KICBuYW1lICAgICAgICAgICAgICBTdHJpbmcKICB1cGRhdGVkICAgICAgICAgICBTdHJpbmcKICBpbnN0aXR1dGVJZCAgICAgICBTdHJpbmcKICBpbnN0aXR1dGUgICAgICAgICBJbnN0aXR1dGVzICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCiAgSW5zdGl0dXRlU3R1ZGVudHMgSW5zdGl0dXRlU3R1ZGVudHNbXQogIFBsYWNlbWVudHMgICAgICAgIFBsYWNlbWVudHNbXQp9Cgptb2RlbCBJbnN0aXR1dGVTdGFmZlVzZXJHcm91cHMgewogIHVzZXJHcm91cElkICAgIFN0cmluZyAgICAgICAgICAgQGlkIEB1bmlxdWUKICBkZWZhdWx0ICAgICAgICBCb29sZWFuCiAgbmFtZSAgICAgICAgICAgU3RyaW5nCiAgdXBkYXRlZCAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlSWQgICAgU3RyaW5nCiAgSW5zdGl0dXRlU3RhZmYgSW5zdGl0dXRlU3RhZmZbXQogIGluc3RpdHV0ZSAgICAgIEluc3RpdHV0ZXMgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2luc3RpdHV0ZUlkXSwgcmVmZXJlbmNlczogW2luc3RpdHV0ZUlkXSkKfQoKbW9kZWwgUHJvdmlkZXJVc2VyR3JvdXBzIHsKICB1c2VyR3JvdXBJZCAgIFN0cmluZyAgICAgICAgICBAaWQgQHVuaXF1ZQogIGRlZmF1bHQgICAgICAgQm9vbGVhbgogIG5hbWUgICAgICAgICAgU3RyaW5nCiAgdGVtcGxhdGUgICAgICBTdHJpbmcKICB1cGRhdGVkICAgICAgIFN0cmluZwogIHByb3ZpZGVySWQgICAgU3RyaW5nCiAgUHJvdmlkZXJTdGFmZiBQcm92aWRlclN0YWZmW10KICBwcm92aWRlciAgICAgIFByb3ZpZGVycyAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvdmlkZXJJZF0sIHJlZmVyZW5jZXM6IFtwcm92aWRlcklkXSkKfQoKbW9kZWwgU3R1ZGVudFVzZXJzIHsKICBzdHVkZW50VXNlcklkIFN0cmluZyAgICAgICBAdW5pcXVlCiAgc3RhdHVzICAgICAgICBTdHJpbmcKICBhbmFseXRpY3MgICAgIEpzb24KICBjcmVhdGVkICAgICAgIFN0cmluZwogIGRldGFpbHMgICAgICAgSnNvbgogIGVtYWlsICAgICAgICAgU3RyaW5nCiAgcmVmZXJyYWwgICAgICBTdHJpbmcKICB1bml0cyAgICAgICAgIFN0cmluZwogIHVzZXJUeXBlICAgICAgU3RyaW5nCiAgQ29udGFjdHMgICAgICBDb250YWN0c1tdCiAgUGxhY2VtZW50cyAgICBQbGFjZW1lbnRzW10KfQoKbW9kZWwgSW5zdGl0dXRlU3RhZmYgewogIGluc3RpdHV0ZVN0YWZmSWQgU3RyaW5nICAgICAgICAgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkICAgICAgICAgIFN0cmluZwogIGRldGFpbHMgICAgICAgICAgSnNvbgogIGVtYWlsICAgICAgICAgICAgU3RyaW5nCiAgb0lkICAgICAgICAgICAgICBTdHJpbmcKICBzdGF0dXMgICAgICAgICAgIFN0cmluZwogIHVzZXJUeXBlICAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlSWQgICAgICBTdHJpbmcKICB1c2VyR3JvdXBJZCAgICAgIFN0cmluZwogIGluc3RpdHV0ZSAgICAgICAgSW5zdGl0dXRlcyAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpbnN0aXR1dGVJZF0sIHJlZmVyZW5jZXM6IFtpbnN0aXR1dGVJZF0pCiAgdXNlckdyb3VwICAgICAgICBJbnN0aXR1dGVTdGFmZlVzZXJHcm91cHMgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJHcm91cElkXSwgcmVmZXJlbmNlczogW3VzZXJHcm91cElkXSkKfQoKbW9kZWwgSW5zdGl0dXRlU3R1ZGVudHMgewogIGluc3RpdHV0ZVN0dWRlbnRJZCBTdHJpbmcgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlCiAgYWN0aXZhdGVkICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWQgICAgICAgICAgICBTdHJpbmcKICBjb2hvcnRJZCAgICAgICAgICAgU3RyaW5nCiAgZGV0YWlscyAgICAgICAgICAgIEpzb24KICBlbWFpbCAgICAgICAgICAgICAgU3RyaW5nCiAgZmxhZ3MgICAgICAgICAgICAgIFN0cmluZ1tdCiAgb0lkICAgICAgICAgICAgICAgIFN0cmluZwogIHJlc2V0RXhwaXJ5ICAgICAgICBEYXRlVGltZQogIHN0YXR1cyAgICAgICAgICAgICBTdHJpbmcKICB1c2VyVHlwZSAgICAgICAgICAgU3RyaW5nCiAgaW5zdGl0dXRlSWQgICAgICAgIFN0cmluZwogIHVzZXJHcm91cElkICAgICAgICBTdHJpbmcKICBDb250YWN0cyAgICAgICAgICAgQ29udGFjdHNbXQogIGNvaG9ydCAgICAgICAgICAgICBDb2hvcnRzICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY29ob3J0SWRdLCByZWZlcmVuY2VzOiBbY29ob3J0SWRdKQogIGluc3RpdHV0ZSAgICAgICAgICBJbnN0aXR1dGVzICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaW5zdGl0dXRlSWRdLCByZWZlcmVuY2VzOiBbaW5zdGl0dXRlSWRdKQogIHVzZXJHcm91cCAgICAgICAgICBJbnN0aXR1dGVTdHVkZW50VXNlckdyb3VwcyBAcmVsYXRpb24oZmllbGRzOiBbdXNlckdyb3VwSWRdLCByZWZlcmVuY2VzOiBbdXNlckdyb3VwSWRdKQogIFBsYWNlbWVudHMgICAgICAgICBQbGFjZW1lbnRzW10KfQoKbW9kZWwgUHJvdmlkZXJTdGFmZiB7CiAgcHJvdmlkZXJTdGFmZklkIFN0cmluZyAgICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZCAgICAgICAgIFN0cmluZwogIGRldGFpbHMgICAgICAgICBKc29uCiAgZW1haWwgICAgICAgICAgIFN0cmluZwogIG5vdGVzICAgICAgICAgICBKc29uCiAgc3RhdHVzICAgICAgICAgIFN0cmluZwogIHByb3ZpZGVySWQgICAgICBTdHJpbmcKICB1c2VyR3JvdXBJZCAgICAgU3RyaW5nCiAgcHJvdmlkZXIgICAgICAgIFByb3ZpZGVycyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvdmlkZXJJZF0sIHJlZmVyZW5jZXM6IFtwcm92aWRlcklkXSkKICB1c2VyR3JvdXAgICAgICAgUHJvdmlkZXJVc2VyR3JvdXBzIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyR3JvdXBJZF0sIHJlZmVyZW5jZXM6IFt1c2VyR3JvdXBJZF0pCn0K",
  "inlineSchemaHash": "a4e6d2df7263f51a781d5443d52351e1ed733291134a3e1ba3976af48fd4ab2f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/prisma/generated/client",
    "prisma/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Addresses\":{\"dbName\":null,\"fields\":[{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_line1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_line2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"AddressesToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"AddressesToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"AddressesToContacts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlacementListings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlacementListings\",\"relationName\":\"AddressesToPlacementListings\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"AddressesToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cohorts\":{\"dbName\":null,\"fields\":[{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"designatedStaff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placementType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startPlacements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endPlacements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startSubmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endSubmission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"includedFiles\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"includedForms\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workflow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"CohortsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"CohortsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contacts\":{\"dbName\":null,\"fields\":[{\"name\":\"contactId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstitutestudentUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"ContactsToInstituteStudents\",\"relationFromFields\":[\"InstituteStudentUserId\"],\"relationToFields\":[\"instituteStudentId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToContacts\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentUsers\",\"relationName\":\"ContactsToStudentUsers\",\"relationFromFields\":[\"studentUserId\"],\"relationToFields\":[\"studentUserId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteForms\":{\"dbName\":null,\"fields\":[{\"name\":\"formId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"form\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteFormsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Institutes\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"externalProviderUploads\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsFields\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffFields\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffGuidance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentsGuidance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifiedProviders\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cohorts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cohorts\",\"relationName\":\"CohortsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Forms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteForms\",\"relationName\":\"InstituteFormsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaff\",\"relationName\":\"InstituteStaffToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StaffUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaffUserGroups\",\"relationName\":\"InstituteStaffUserGroupsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentsToInstitutes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstitutesToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Logs\":{\"dbName\":null,\"fields\":[{\"name\":\"logId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placementId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"placement\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"LogsToPlacements\",\"relationFromFields\":[\"placementId\"],\"relationToFields\":[\"placementId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PlacementListings\":{\"dbName\":null,\"fields\":[{\"name\":\"placementListingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToPlacementListings\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"PlacementListingsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Placements\":{\"dbName\":null,\"fields\":[{\"name\":\"placementId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activeDates\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"draft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"geoHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inProgress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leadTimes\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentEmailed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerEmailed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"forms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteStudentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Logs\",\"relationName\":\"LogsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToPlacements\",\"relationFromFields\":[\"addressId\"],\"relationToFields\":[\"addressId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstitutesToPlacements\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteStudent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentsToPlacements\",\"relationFromFields\":[\"instituteStudentId\"],\"relationToFields\":[\"instituteStudentId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"PlacementsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentUsers\",\"relationName\":\"PlacementsToStudentUsers\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"studentUserId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToPlacements\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Providers\":{\"dbName\":null,\"fields\":[{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactForename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactSurname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"defAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insurance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mapConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rememberConsent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rememberConsentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"savedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subsector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uploadedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Addresses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Addresses\",\"relationName\":\"AddressesToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlacementListings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlacementListings\",\"relationName\":\"PlacementListingsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"PlacementsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderStaff\",\"relationName\":\"ProviderStaffToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderUserGroups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderUserGroups\",\"relationName\":\"ProviderUserGroupsToProviders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStudentUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStudentUserGroupsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStudents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudents\",\"relationName\":\"InstituteStudentUserGroupsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstituteStudentUserGroupsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStaffUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InstituteStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaff\",\"relationName\":\"InstituteStaffToInstituteStaffUserGroups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStaffUserGroupsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderUserGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProviderStaff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderStaff\",\"relationName\":\"ProviderStaffToProviderUserGroups\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"ProviderUserGroupsToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentUsers\":{\"dbName\":null,\"fields\":[{\"name\":\"studentUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"analytics\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"units\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"ContactsToStudentUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"PlacementsToStudentUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteStaffId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStaffToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStaffUserGroups\",\"relationName\":\"InstituteStaffToInstituteStaffUserGroups\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InstituteStudents\":{\"dbName\":null,\"fields\":[{\"name\":\"instituteStudentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohortId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"flags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resetExpiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instituteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contacts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contacts\",\"relationName\":\"ContactsToInstituteStudents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cohort\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cohorts\",\"relationName\":\"CohortsToInstituteStudents\",\"relationFromFields\":[\"cohortId\"],\"relationToFields\":[\"cohortId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"institute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Institutes\",\"relationName\":\"InstituteStudentsToInstitutes\",\"relationFromFields\":[\"instituteId\"],\"relationToFields\":[\"instituteId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"InstituteStudentUserGroups\",\"relationName\":\"InstituteStudentUserGroupsToInstituteStudents\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Placements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Placements\",\"relationName\":\"InstituteStudentsToPlacements\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProviderStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"providerStaffId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"providerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Providers\",\"relationName\":\"ProviderStaffToProviders\",\"relationFromFields\":[\"providerId\"],\"relationToFields\":[\"providerId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userGroup\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProviderUserGroups\",\"relationName\":\"ProviderStaffToProviderUserGroups\",\"relationFromFields\":[\"userGroupId\"],\"relationToFields\":[\"userGroupId\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/prisma/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/prisma/generated/client/schema.prisma")
