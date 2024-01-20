-- CreateTable
CREATE TABLE "Addresses" (
    "addressId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT NOT NULL,
    "contactForename" TEXT NOT NULL,
    "contactSurname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "geoHash" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "oId" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("addressId")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "blogId" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "uploaded" TEXT NOT NULL,
    "body" JSONB NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("blogId")
);

-- CreateTable
CREATE TABLE "BugReports" (
    "bugReportId" SERIAL NOT NULL,
    "bug" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "BugReports_pkey" PRIMARY KEY ("bugReportId")
);

-- CreateTable
CREATE TABLE "BusinessInterest" (
    "businessInterestId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "forename" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "sector" TEXT,
    "subsector" TEXT,

    CONSTRAINT "BusinessInterest_pkey" PRIMARY KEY ("businessInterestId")
);

-- CreateTable
CREATE TABLE "Cohorts" (
    "cohortId" SERIAL NOT NULL,
    "designatedStaff" TEXT NOT NULL,
    "oId" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "placementType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startPlacements" TEXT NOT NULL,
    "endPlacements" TEXT NOT NULL,
    "startSubmission" TEXT NOT NULL,
    "endSubmission" TEXT NOT NULL,
    "includedFiles" TEXT[],
    "includedForms" TEXT[],
    "workflow" TEXT NOT NULL,

    CONSTRAINT "Cohorts_pkey" PRIMARY KEY ("cohortId")
);

-- CreateTable
CREATE TABLE "Contacts" (
    "contactId" SERIAL NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT NOT NULL,
    "contactForename" TEXT NOT NULL,
    "contactSurname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "providerEmail" TEXT NOT NULL,
    "providerPhone" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "Downtime" (
    "downtimeId" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL,
    "body" TEXT NOT NULL,
    "products" TEXT[],
    "title" TEXT NOT NULL,

    CONSTRAINT "Downtime_pkey" PRIMARY KEY ("downtimeId")
);

-- CreateTable
CREATE TABLE "FeatureRequests" (
    "featureRequestId" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "feature" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "FeatureRequests_pkey" PRIMARY KEY ("featureRequestId")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "feedbackId" SERIAL NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "msg" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("feedbackId")
);

-- CreateTable
CREATE TABLE "Forms" (
    "formId" SERIAL NOT NULL,
    "form" JSONB NOT NULL,
    "oId" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "updated" TEXT NOT NULL,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("formId")
);

-- CreateTable
CREATE TABLE "Institutes" (
    "instituteId" SERIAL NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT NOT NULL,
    "admin" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "externalProviderUploads" BOOLEAN NOT NULL,
    "geoHash" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "referral" TEXT,
    "status" TEXT NOT NULL,
    "studentsFields" TEXT[],
    "staff" INTEGER NOT NULL,
    "staffActive" INTEGER NOT NULL,
    "students" INTEGER NOT NULL,
    "studentsActive" INTEGER NOT NULL,
    "staffFields" TEXT[],
    "staffGuidance" JSONB NOT NULL,
    "studentsGuidance" JSONB NOT NULL,
    "verifiedProviders" TEXT[],

    CONSTRAINT "Institutes_pkey" PRIMARY KEY ("instituteId")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "jobId" SERIAL NOT NULL,
    "started" TEXT NOT NULL,
    "updated" TEXT,
    "finished" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "logs" JSONB NOT NULL,
    "outputMsg" TEXT,
    "viewedBy" TEXT[],
    "oId" INTEGER NOT NULL,
    "product" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("jobId")
);

-- CreateTable
CREATE TABLE "Logs" (
    "logId" SERIAL NOT NULL,
    "oId" INTEGER NOT NULL,
    "provider" JSONB NOT NULL,
    "students" JSONB NOT NULL,
    "staff" JSONB NOT NULL,
    "uid" TEXT NOT NULL,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("logId")
);

-- CreateTable
CREATE TABLE "PlacementListings" (
    "placementListingId" SERIAL NOT NULL,
    "addressId" TEXT NOT NULL,
    "contactForename" TEXT NOT NULL,
    "contactSurname" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "mapConsent" BOOLEAN NOT NULL,
    "mapConsentDate" TEXT NOT NULL,
    "providerEmail" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "providerPhone" TEXT NOT NULL,
    "savedBy" JSONB NOT NULL,
    "questions" JSONB NOT NULL,
    "title" TEXT NOT NULL,
    "uploadedBy" TEXT NOT NULL,

    CONSTRAINT "PlacementListings_pkey" PRIMARY KEY ("placementListingId")
);

-- CreateTable
CREATE TABLE "Placements" (
    "placementId" SERIAL NOT NULL,
    "activeDates" TEXT[],
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT NOT NULL,
    "cohortId" INTEGER NOT NULL,
    "contactForename" TEXT NOT NULL,
    "contactSurname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "draft" BOOLEAN NOT NULL,
    "endDate" TEXT NOT NULL,
    "flags" TEXT[],
    "geoHash" TEXT NOT NULL,
    "inProgress" BOOLEAN NOT NULL,
    "leadTimes" TEXT[],
    "locality" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "oId" INTEGER,
    "parentEmailed" TIMESTAMP(3),
    "parentExpiry" TEXT,
    "parentKey" TEXT,
    "postal_code" TEXT NOT NULL,
    "product" TEXT,
    "providerEmail" TEXT,
    "providerEmailed" TIMESTAMP(3),
    "providerExpiry" TEXT,
    "providerKey" TEXT,
    "providerName" TEXT,
    "providerPhone" TEXT NOT NULL,
    "nextStatus" INTEGER,
    "status" INTEGER NOT NULL,
    "startDate" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "forms" JSONB NOT NULL,
    "questions" JSONB NOT NULL,
    "uploadedBy" TEXT NOT NULL,
    "userGroup" INTEGER,

    CONSTRAINT "Placements_pkey" PRIMARY KEY ("placementId")
);

-- CreateTable
CREATE TABLE "Providers" (
    "providerId" SERIAL NOT NULL,
    "contactForename" TEXT NOT NULL,
    "contactSurname" TEXT NOT NULL,
    "defAddress" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "mapConsent" BOOLEAN NOT NULL,
    "insurance" BOOLEAN NOT NULL,
    "mapConsentDate" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "rememberConsent" BOOLEAN NOT NULL,
    "rememberConsentDate" TEXT NOT NULL,
    "savedBy" JSONB NOT NULL,
    "sector" TEXT NOT NULL,
    "subsector" TEXT NOT NULL,
    "uploadedBy" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("providerId")
);

-- CreateTable
CREATE TABLE "Referrals" (
    "referralId" SERIAL NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "signUps" INTEGER NOT NULL,
    "volume" INTEGER NOT NULL,

    CONSTRAINT "Referrals_pkey" PRIMARY KEY ("referralId")
);

-- CreateTable
CREATE TABLE "UserGroups" (
    "userGroupId" SERIAL NOT NULL,
    "default" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "oId" INTEGER NOT NULL,
    "product" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "updated" TEXT NOT NULL,

    CONSTRAINT "UserGroups_pkey" PRIMARY KEY ("userGroupId")
);

-- CreateTable
CREATE TABLE "StudentUsers" (
    "studentUserId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "analytics" JSONB NOT NULL,
    "created" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "email" TEXT NOT NULL,
    "referral" TEXT NOT NULL,
    "units" TEXT NOT NULL,
    "userType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InstituteStaff" (
    "instituteStaffId" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "email" TEXT NOT NULL,
    "oId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userGroup" TEXT NOT NULL,
    "userType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InstituteStudents" (
    "instituteStudentId" TEXT NOT NULL,
    "activated" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "cohortId" INTEGER NOT NULL,
    "details" JSONB NOT NULL,
    "email" TEXT NOT NULL,
    "flags" TEXT[],
    "oId" INTEGER NOT NULL,
    "resetExpiry" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "userGroup" INTEGER NOT NULL,
    "userType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProviderStaff" (
    "providerStaffId" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "cohortId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "notes" JSONB NOT NULL,
    "oId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userGroup" TEXT NOT NULL,
    "userType" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cohorts_designatedStaff_key" ON "Cohorts"("designatedStaff");

-- CreateIndex
CREATE UNIQUE INDEX "Cohorts_oId_key" ON "Cohorts"("oId");

-- CreateIndex
CREATE UNIQUE INDEX "PlacementListings_addressId_key" ON "PlacementListings"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "PlacementListings_providerId_key" ON "PlacementListings"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentUsers_studentUserId_key" ON "StudentUsers"("studentUserId");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteStaff_instituteStaffId_key" ON "InstituteStaff"("instituteStaffId");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteStudents_instituteStudentId_key" ON "InstituteStudents"("instituteStudentId");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderStaff_providerStaffId_key" ON "ProviderStaff"("providerStaffId");
