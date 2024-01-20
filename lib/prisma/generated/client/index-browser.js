
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
