/*
  Warnings:

  - Changed the type of `status` on the `ResumeDetails` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('pending', 'failed', 'success');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('profilePhoto', 'aadhaarCard', 'panCard', 'offerLetter', 'salarySlip', 'relievingLetter', 'declarationForm');

-- AlterTable
ALTER TABLE "ResumeDetails" DROP COLUMN "status",
ADD COLUMN     "status" "JobStatus" NOT NULL;

-- DropEnum
DROP TYPE "public"."ResumeJobStatus";

-- CreateTable
CREATE TABLE "Documents" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "type" "DocumentType" NOT NULL,
    "url" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "status" "JobStatus" NOT NULL,
    "employeeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
