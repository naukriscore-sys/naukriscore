/*
  Warnings:

  - Added the required column `remarks` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documents" ADD COLUMN     "remarks" TEXT NOT NULL,
ALTER COLUMN "data" DROP NOT NULL;
