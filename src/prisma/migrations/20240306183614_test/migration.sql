-- AlterTable
ALTER TABLE "Potentialproviders" ALTER COLUMN "geoHash" DROP NOT NULL,
ALTER COLUMN "nationalPhoneNumber" DROP NOT NULL,
ALTER COLUMN "formattedAddress" DROP NOT NULL,
ALTER COLUMN "websiteUri" DROP NOT NULL;
