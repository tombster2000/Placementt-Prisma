-- CreateTable
CREATE TABLE "Potentialproviders" (
    "id" TEXT NOT NULL,
    "types" TEXT[],
    "geoHash" TEXT NOT NULL,
    "nationalPhoneNumber" TEXT NOT NULL,
    "email" TEXT[],
    "formattedAddress" TEXT NOT NULL,
    "websiteUri" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "poid" TEXT NOT NULL,

    CONSTRAINT "Potentialproviders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pointOfOrigin" (
    "poid" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "geoHash" TEXT NOT NULL,

    CONSTRAINT "pointOfOrigin_pkey" PRIMARY KEY ("poid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Potentialproviders_id_key" ON "Potentialproviders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pointOfOrigin_poid_key" ON "pointOfOrigin"("poid");

-- AddForeignKey
ALTER TABLE "Potentialproviders" ADD CONSTRAINT "Potentialproviders_poid_fkey" FOREIGN KEY ("poid") REFERENCES "pointOfOrigin"("poid") ON DELETE RESTRICT ON UPDATE CASCADE;
