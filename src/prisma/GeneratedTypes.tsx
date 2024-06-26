import {Addresses, Cohorts, Contacts,
    InstituteStudents, Institutes,
    Logs, PlacementListings, Placements, Providers,
    StudentUsers, InstituteStaff as InstituteStaffObj,
    ProviderStaff as ProviderStaffObj,
    InstituteForms,
    InstituteStudentUserGroups,
    InstituteStaffUserGroups,
    ProviderUserGroups,Potentialproviders,pointOfOrigin} from "./generated/client";

export type Address = Addresses;
export type Cohort = Cohorts;
export type Contact = Contacts;
export type Form = InstituteForms;
export type Institute = Institutes;
export type Log = Logs;
export type PlacementListing = PlacementListings;
export type Placement = Placements;
export type Provider = Providers;
export type InstituteStudentUserGroup = InstituteStudentUserGroups;
export type InstituteStaffUserGroup = InstituteStaffUserGroups;
export type ProviderUserGroup = ProviderUserGroups;

export type StudentUser = StudentUsers;
export type InstituteStaff = InstituteStaffObj;
export type InstituteStudent = InstituteStudents;
export type ProviderStaff = ProviderStaffObj;
export type PotentialProvider = Potentialproviders;
export type PointOfOrigin = pointOfOrigin;
