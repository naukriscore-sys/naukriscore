/*
  Warnings:

  - Added the required column `status` to the `ResumeDetails` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ResumeJobStatus" AS ENUM ('pending', 'failed', 'success');

-- AlterTable
ALTER TABLE "public"."ResumeDetails" ADD COLUMN     "status" "public"."ResumeJobStatus" NOT NULL;
