/*
  Warnings:

  - You are about to drop the column `languages` on the `ResumeDetails` table. All the data in the column will be lost.
  - You are about to drop the column `profileDesc` on the `ResumeDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Employee" ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "profileDesc" TEXT;

-- AlterTable
ALTER TABLE "public"."ResumeDetails" DROP COLUMN "languages",
DROP COLUMN "profileDesc";
