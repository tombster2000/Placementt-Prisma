import {Addresses, Blogs, BugReports, Cohorts, Contacts,
    FeatureRequests, Forms, InstituteStudents, Institutes,
    Jobs, Logs, PlacementListings, Placements, Providers,
    Referrals, StudentUsers, UserGroups, BusinessInterest as BusinessInterestObj,
    Downtime as DowntimeObj, Feedback as FeedbackObj, InstituteStaff as InstituteStaffObj,
    ProviderStaff as ProviderStaffObj} from "./generated/client";


export type BugReport = BugReports;
export type Addresse = Addresses;
export type Blog = Blogs;
export type BusinessInterest = BusinessInterestObj;
export type Cohort = Cohorts;
export type Contact = Contacts;
export type Downtime = DowntimeObj;
export type FeatureRequest = FeatureRequests;
export type Feedback = FeedbackObj;
export type Form = Forms;
export type Institute = Institutes;
export type Job = Jobs;
export type Log = Logs;
export type PlacementListing = PlacementListings;
export type Placement = Placements;
export type Provider = Providers;
export type Referral = Referrals;
export type UserGroup = UserGroups;
export type StudentUser = StudentUsers;
export type InstituteStaff = InstituteStaffObj;
export type InstituteStudent = InstituteStudents;
export type ProviderStaff = ProviderStaffObj;