/*
  Warnings:

  - The primary key for the `Addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `oId` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Addresses` table. All the data in the column will be lost.
  - The primary key for the `Cohorts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `oId` on the `Cohorts` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Cohorts` table. All the data in the column will be lost.
  - The primary key for the `Contacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_line1` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `address_line2` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `locality` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `postal_code` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `providerEmail` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `Contacts` table. All the data in the column will be lost.
  - You are about to drop the column `userGroup` on the `InstituteStaff` table. All the data in the column will be lost.
  - You are about to drop the column `userGroup` on the `InstituteStudents` table. All the data in the column will be lost.
  - The primary key for the `Institutes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_line1` on the `Institutes` table. All the data in the column will be lost.
  - You are about to drop the column `address_line2` on the `Institutes` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Institutes` table. All the data in the column will be lost.
  - You are about to drop the column `geoHash` on the `Institutes` table. All the data in the column will be lost.
  - You are about to drop the column `locality` on the `Institutes` table. All the data in the column will be lost.
  - You are about to drop the column `postal_code` on the `Institutes` table. All the data in the column will be lost.
  - The primary key for the `Logs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `oId` on the `Logs` table. All the data in the column will be lost.
  - The primary key for the `PlacementListings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Placements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_line1` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `address_line2` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `locality` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `oId` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `postal_code` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `uid` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `userGroup` on the `Placements` table. All the data in the column will be lost.
  - You are about to drop the column `cohortId` on the `ProviderStaff` table. All the data in the column will be lost.
  - You are about to drop the column `oId` on the `ProviderStaff` table. All the data in the column will be lost.
  - You are about to drop the column `userGroup` on the `ProviderStaff` table. All the data in the column will be lost.
  - You are about to drop the column `userType` on the `ProviderStaff` table. All the data in the column will be lost.
  - The primary key for the `Providers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Forms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserGroups` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Addresses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cohortId]` on the table `Cohorts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contactId]` on the table `Contacts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instituteId]` on the table `Institutes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[logId]` on the table `Logs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placementListingId]` on the table `PlacementListings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[placementId]` on the table `Placements` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[providerId]` on the table `Providers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `instituteId` to the `Cohorts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `InstituteStudentUserId` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentUserId` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteId` to the `InstituteStaff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupId` to the `InstituteStaff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteId` to the `InstituteStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupId` to the `InstituteStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placementId` to the `Logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteStudentId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupId` to the `Placements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerId` to the `ProviderStaff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userGroupId` to the `ProviderStaff` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cohorts_oId_key";

-- DropIndex
DROP INDEX "PlacementListings_addressId_key";

-- DropIndex
DROP INDEX "PlacementListings_providerId_key";

-- AlterTable
ALTER TABLE "Addresses" DROP CONSTRAINT "Addresses_pkey",
DROP COLUMN "oId",
DROP COLUMN "product",
ADD COLUMN     "instituteId" TEXT,
ADD COLUMN     "providerId" TEXT,
ALTER COLUMN "addressId" DROP DEFAULT,
ALTER COLUMN "addressId" SET DATA TYPE TEXT,
ALTER COLUMN "stage" DROP NOT NULL,
ALTER COLUMN "address_line1" DROP NOT NULL,
ALTER COLUMN "address_line2" DROP NOT NULL,
ALTER COLUMN "contactForename" DROP NOT NULL,
ALTER COLUMN "contactSurname" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "geoHash" DROP NOT NULL,
ALTER COLUMN "locality" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "postal_code" DROP NOT NULL,
ADD CONSTRAINT "Addresses_pkey" PRIMARY KEY ("addressId");
DROP SEQUENCE "Addresses_addressId_seq";

-- AlterTable
ALTER TABLE "Cohorts" DROP CONSTRAINT "Cohorts_pkey",
DROP COLUMN "oId",
DROP COLUMN "product",
ADD COLUMN     "instituteId" TEXT NOT NULL,
ALTER COLUMN "cohortId" DROP DEFAULT,
ALTER COLUMN "cohortId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cohorts_pkey" PRIMARY KEY ("cohortId");
DROP SEQUENCE "Cohorts_cohortId_seq";

-- AlterTable
ALTER TABLE "Contacts" DROP CONSTRAINT "Contacts_pkey",
DROP COLUMN "address_line1",
DROP COLUMN "address_line2",
DROP COLUMN "country",
DROP COLUMN "locality",
DROP COLUMN "postal_code",
DROP COLUMN "providerEmail",
DROP COLUMN "uid",
ADD COLUMN     "InstituteStudentUserId" TEXT NOT NULL,
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "studentUserId" TEXT NOT NULL,
ALTER COLUMN "contactId" DROP DEFAULT,
ALTER COLUMN "contactId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Contacts_pkey" PRIMARY KEY ("contactId");
DROP SEQUENCE "Contacts_contactId_seq";

-- AlterTable
ALTER TABLE "InstituteStaff" DROP COLUMN "userGroup",
ADD COLUMN     "instituteId" TEXT NOT NULL,
ADD COLUMN     "userGroupId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "InstituteStudents" DROP COLUMN "userGroup",
ADD COLUMN     "instituteId" TEXT NOT NULL,
ADD COLUMN     "userGroupId" TEXT NOT NULL,
ALTER COLUMN "cohortId" SET DATA TYPE TEXT,
ALTER COLUMN "oId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Institutes" DROP CONSTRAINT "Institutes_pkey",
DROP COLUMN "address_line1",
DROP COLUMN "address_line2",
DROP COLUMN "country",
DROP COLUMN "geoHash",
DROP COLUMN "locality",
DROP COLUMN "postal_code",
ALTER COLUMN "instituteId" DROP DEFAULT,
ALTER COLUMN "instituteId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Institutes_pkey" PRIMARY KEY ("instituteId");
DROP SEQUENCE "Institutes_instituteId_seq";

-- AlterTable
ALTER TABLE "Logs" DROP CONSTRAINT "Logs_pkey",
DROP COLUMN "oId",
ADD COLUMN     "placementId" TEXT NOT NULL,
ALTER COLUMN "logId" DROP DEFAULT,
ALTER COLUMN "logId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Logs_pkey" PRIMARY KEY ("logId");
DROP SEQUENCE "Logs_logId_seq";

-- AlterTable
ALTER TABLE "PlacementListings" DROP CONSTRAINT "PlacementListings_pkey",
ALTER COLUMN "placementListingId" DROP DEFAULT,
ALTER COLUMN "placementListingId" SET DATA TYPE TEXT,
ADD CONSTRAINT "PlacementListings_pkey" PRIMARY KEY ("placementListingId");
DROP SEQUENCE "PlacementListings_placementListingId_seq";

-- AlterTable
ALTER TABLE "Placements" DROP CONSTRAINT "Placements_pkey",
DROP COLUMN "address_line1",
DROP COLUMN "address_line2",
DROP COLUMN "country",
DROP COLUMN "locality",
DROP COLUMN "oId",
DROP COLUMN "postal_code",
DROP COLUMN "uid",
DROP COLUMN "userGroup",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "instituteId" TEXT NOT NULL,
ADD COLUMN     "instituteStudentId" TEXT NOT NULL,
ADD COLUMN     "providerId" TEXT NOT NULL,
ADD COLUMN     "studentId" TEXT NOT NULL,
ADD COLUMN     "userGroupId" TEXT NOT NULL,
ALTER COLUMN "placementId" DROP DEFAULT,
ALTER COLUMN "placementId" SET DATA TYPE TEXT,
ALTER COLUMN "cohortId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Placements_pkey" PRIMARY KEY ("placementId");
DROP SEQUENCE "Placements_placementId_seq";

-- AlterTable
ALTER TABLE "ProviderStaff" DROP COLUMN "cohortId",
DROP COLUMN "oId",
DROP COLUMN "userGroup",
DROP COLUMN "userType",
ADD COLUMN     "providerId" TEXT NOT NULL,
ADD COLUMN     "userGroupId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Providers" DROP CONSTRAINT "Providers_pkey",
ALTER COLUMN "providerId" DROP DEFAULT,
ALTER COLUMN "providerId" SET DATA TYPE TEXT,
ALTER COLUMN "defAddress" SET DATA TYPE TEXT,
ADD CONSTRAINT "Providers_pkey" PRIMARY KEY ("providerId");
DROP SEQUENCE "Providers_providerId_seq";

-- DropTable
DROP TABLE "Forms";

-- DropTable
DROP TABLE "UserGroups";

-- CreateTable
CREATE TABLE "InstituteForms" (
    "formId" TEXT NOT NULL,
    "form" JSONB NOT NULL,
    "updated" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,

    CONSTRAINT "InstituteForms_pkey" PRIMARY KEY ("formId")
);

-- CreateTable
CREATE TABLE "InstituteStudentUserGroups" (
    "userGroupId" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "updated" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,

    CONSTRAINT "InstituteStudentUserGroups_pkey" PRIMARY KEY ("userGroupId")
);

-- CreateTable
CREATE TABLE "InstituteStaffUserGroups" (
    "userGroupId" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "updated" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,

    CONSTRAINT "InstituteStaffUserGroups_pkey" PRIMARY KEY ("userGroupId")
);

-- CreateTable
CREATE TABLE "ProviderUserGroups" (
    "userGroupId" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "updated" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "ProviderUserGroups_pkey" PRIMARY KEY ("userGroupId")
);

-- CreateIndex
CREATE UNIQUE INDEX "InstituteForms_formId_key" ON "InstituteForms"("formId");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteStudentUserGroups_userGroupId_key" ON "InstituteStudentUserGroups"("userGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteStaffUserGroups_userGroupId_key" ON "InstituteStaffUserGroups"("userGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderUserGroups_userGroupId_key" ON "ProviderUserGroups"("userGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "Addresses_addressId_key" ON "Addresses"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Cohorts_cohortId_key" ON "Cohorts"("cohortId");

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_contactId_key" ON "Contacts"("contactId");

-- CreateIndex
CREATE UNIQUE INDEX "Institutes_instituteId_key" ON "Institutes"("instituteId");

-- CreateIndex
CREATE UNIQUE INDEX "Logs_logId_key" ON "Logs"("logId");

-- CreateIndex
CREATE UNIQUE INDEX "PlacementListings_placementListingId_key" ON "PlacementListings"("placementListingId");

-- CreateIndex
CREATE UNIQUE INDEX "Placements_placementId_key" ON "Placements"("placementId");

-- CreateIndex
CREATE UNIQUE INDEX "Providers_providerId_key" ON "Providers"("providerId");

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cohorts" ADD CONSTRAINT "Cohorts_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses"("addressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_InstituteStudentUserId_fkey" FOREIGN KEY ("InstituteStudentUserId") REFERENCES "InstituteStudents"("instituteStudentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_studentUserId_fkey" FOREIGN KEY ("studentUserId") REFERENCES "StudentUsers"("studentUserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteForms" ADD CONSTRAINT "InstituteForms_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logs" ADD CONSTRAINT "Logs_placementId_fkey" FOREIGN KEY ("placementId") REFERENCES "Placements"("placementId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacementListings" ADD CONSTRAINT "PlacementListings_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses"("addressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacementListings" ADD CONSTRAINT "PlacementListings_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses"("addressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_instituteStudentId_fkey" FOREIGN KEY ("instituteStudentId") REFERENCES "InstituteStudents"("instituteStudentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentUsers"("studentUserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Placements" ADD CONSTRAINT "Placements_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "InstituteStudentUserGroups"("userGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStudentUserGroups" ADD CONSTRAINT "InstituteStudentUserGroups_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStaffUserGroups" ADD CONSTRAINT "InstituteStaffUserGroups_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderUserGroups" ADD CONSTRAINT "ProviderUserGroups_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStaff" ADD CONSTRAINT "InstituteStaff_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "InstituteStaffUserGroups"("userGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStaff" ADD CONSTRAINT "InstituteStaff_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStudents" ADD CONSTRAINT "InstituteStudents_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Cohorts"("cohortId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStudents" ADD CONSTRAINT "InstituteStudents_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "InstituteStudentUserGroups"("userGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteStudents" ADD CONSTRAINT "InstituteStudents_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "Institutes"("instituteId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderStaff" ADD CONSTRAINT "ProviderStaff_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderStaff" ADD CONSTRAINT "ProviderStaff_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "ProviderUserGroups"("userGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;
