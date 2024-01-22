/*
  Warnings:

  - You are about to drop the column `address_line1` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `address_line2` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `defAddress` on the `Providers` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Cohorts_designatedStaff_key";

-- AlterTable
ALTER TABLE "Addresses" DROP COLUMN "address_line1",
DROP COLUMN "address_line2",
ADD COLUMN     "addressLine1" TEXT,
ADD COLUMN     "addressLine2" TEXT;

-- AlterTable
ALTER TABLE "ProviderStaff" ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Providers" DROP COLUMN "defAddress",
ALTER COLUMN "mapConsent" DROP NOT NULL,
ALTER COLUMN "insurance" DROP NOT NULL,
ALTER COLUMN "mapConsentDate" DROP NOT NULL,
ALTER COLUMN "rememberConsent" DROP NOT NULL,
ALTER COLUMN "rememberConsentDate" DROP NOT NULL,
ALTER COLUMN "savedBy" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProviderCohorts" (
    "cohortId" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "ProviderCohorts_pkey" PRIMARY KEY ("cohortId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProviderCohorts_cohortId_key" ON "ProviderCohorts"("cohortId");

-- AddForeignKey
ALTER TABLE "ProviderCohorts" ADD CONSTRAINT "ProviderCohorts_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Addresses"("addressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderCohorts" ADD CONSTRAINT "ProviderCohorts_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("providerId") ON DELETE RESTRICT ON UPDATE CASCADE;
