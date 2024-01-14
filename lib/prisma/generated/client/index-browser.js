
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
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  country: 'country',
  email: 'email',
  geoHash: 'geoHash',
  locality: 'locality',
  oId: 'oId',
  product: 'product',
  phone: 'phone',
  postal_code: 'postal_code'
};

exports.Prisma.BlogsScalarFieldEnum = {
  blogId: 'blogId',
  author: 'author',
  category: 'category',
  summary: 'summary',
  tags: 'tags',
  title: 'title',
  uploaded: 'uploaded',
  body: 'body'
};

exports.Prisma.BugReportsScalarFieldEnum = {
  bugReportId: 'bugReportId',
  bug: 'bug',
  date: 'date',
  description: 'description',
  severity: 'severity',
  status: 'status',
  uid: 'uid'
};

exports.Prisma.BusinessInterestScalarFieldEnum = {
  businessInterestId: 'businessInterestId',
  email: 'email',
  forename: 'forename',
  surname: 'surname',
  sector: 'sector',
  subsector: 'subsector'
};

exports.Prisma.CohortsScalarFieldEnum = {
  cohortId: 'cohortId',
  designatedStaff: 'designatedStaff',
  oId: 'oId',
  product: 'product',
  stage: 'stage',
  placementType: 'placementType',
  name: 'name',
  startPlacements: 'startPlacements',
  endPlacements: 'endPlacements',
  startSubmission: 'startSubmission',
  endSubmission: 'endSubmission',
  includedFiles: 'includedFiles',
  includedForms: 'includedForms',
  workflow: 'workflow'
};

exports.Prisma.ContactsScalarFieldEnum = {
  contactId: 'contactId',
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  country: 'country',
  created: 'created',
  locality: 'locality',
  name: 'name',
  providerEmail: 'providerEmail',
  providerPhone: 'providerPhone',
  postal_code: 'postal_code',
  uid: 'uid'
};

exports.Prisma.DowntimeScalarFieldEnum = {
  downtimeId: 'downtimeId',
  active: 'active',
  body: 'body',
  products: 'products',
  title: 'title'
};

exports.Prisma.FeatureRequestsScalarFieldEnum = {
  featureRequestId: 'featureRequestId',
  date: 'date',
  description: 'description',
  feature: 'feature',
  impact: 'impact',
  uid: 'uid'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  feedbackId: 'feedbackId',
  created: 'created',
  msg: 'msg',
  title: 'title',
  uid: 'uid'
};

exports.Prisma.FormsScalarFieldEnum = {
  formId: 'formId',
  form: 'form',
  oId: 'oId',
  product: 'product',
  updated: 'updated'
};

exports.Prisma.InstitutesScalarFieldEnum = {
  instituteId: 'instituteId',
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  admin: 'admin',
  country: 'country',
  externalProviderUploads: 'externalProviderUploads',
  geoHash: 'geoHash',
  locality: 'locality',
  name: 'name',
  postal_code: 'postal_code',
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

exports.Prisma.JobsScalarFieldEnum = {
  jobId: 'jobId',
  started: 'started',
  updated: 'updated',
  finished: 'finished',
  title: 'title',
  description: 'description',
  status: 'status',
  logs: 'logs',
  outputMsg: 'outputMsg',
  viewedBy: 'viewedBy',
  oId: 'oId',
  product: 'product'
};

exports.Prisma.LogsScalarFieldEnum = {
  logId: 'logId',
  oId: 'oId',
  provider: 'provider',
  students: 'students',
  staff: 'staff',
  uid: 'uid'
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
  address_line1: 'address_line1',
  address_line2: 'address_line2',
  cohortId: 'cohortId',
  contactForename: 'contactForename',
  contactSurname: 'contactSurname',
  country: 'country',
  created: 'created',
  draft: 'draft',
  endDate: 'endDate',
  flags: 'flags',
  geoHash: 'geoHash',
  inProgress: 'inProgress',
  leadTimes: 'leadTimes',
  locality: 'locality',
  name: 'name',
  oId: 'oId',
  parentEmailed: 'parentEmailed',
  parentExpiry: 'parentExpiry',
  parentKey: 'parentKey',
  postal_code: 'postal_code',
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
  uid: 'uid',
  forms: 'forms',
  questions: 'questions',
  uploadedBy: 'uploadedBy',
  userGroup: 'userGroup'
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

exports.Prisma.ReferralsScalarFieldEnum = {
  referralId: 'referralId',
  expiry: 'expiry',
  name: 'name',
  product: 'product',
  signUps: 'signUps',
  volume: 'volume'
};

exports.Prisma.UserGroupsScalarFieldEnum = {
  userGroupId: 'userGroupId',
  default: 'default',
  name: 'name',
  oId: 'oId',
  product: 'product',
  template: 'template',
  updated: 'updated'
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
  userGroup: 'userGroup',
  userType: 'userType'
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
  userGroup: 'userGroup',
  userType: 'userType'
};

exports.Prisma.ProviderStaffScalarFieldEnum = {
  providerStaffId: 'providerStaffId',
  created: 'created',
  details: 'details',
  cohortId: 'cohortId',
  email: 'email',
  notes: 'notes',
  oId: 'oId',
  status: 'status',
  userGroup: 'userGroup',
  userType: 'userType'
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

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Addresses: 'Addresses',
  Blogs: 'Blogs',
  BugReports: 'BugReports',
  BusinessInterest: 'BusinessInterest',
  Cohorts: 'Cohorts',
  Contacts: 'Contacts',
  Downtime: 'Downtime',
  FeatureRequests: 'FeatureRequests',
  Feedback: 'Feedback',
  Forms: 'Forms',
  Institutes: 'Institutes',
  Jobs: 'Jobs',
  Logs: 'Logs',
  PlacementListings: 'PlacementListings',
  Placements: 'Placements',
  Providers: 'Providers',
  Referrals: 'Referrals',
  UserGroups: 'UserGroups',
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
