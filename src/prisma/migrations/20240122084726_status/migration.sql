/*
  Warnings:

  - Added the required column `status` to the `Providers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Providers" ADD COLUMN     "status" TEXT NOT NULL;
