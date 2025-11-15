/*
  Warnings:

  - Added the required column `resumeUrl` to the `ResumeDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ResumeDetails" ADD COLUMN     "resumeUrl" TEXT NOT NULL;
