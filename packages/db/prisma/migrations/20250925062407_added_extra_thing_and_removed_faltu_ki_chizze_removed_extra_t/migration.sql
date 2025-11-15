/*
  Warnings:

  - You are about to drop the column `reportId` on the `Summary` table. All the data in the column will be lost.
  - You are about to drop the column `severity` on the `Summary` table. All the data in the column will be lost.
  - You are about to drop the `FeedbackSummary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `score` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Summary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."FeedbackSummary" DROP CONSTRAINT "FeedbackSummary_reportId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Report" DROP CONSTRAINT "Report_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Summary" DROP CONSTRAINT "Summary_reportId_fkey";

-- AlterTable
ALTER TABLE "public"."Employee" ADD COLUMN     "score" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Summary" DROP COLUMN "reportId",
DROP COLUMN "severity",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."FeedbackSummary";

-- DropTable
DROP TABLE "public"."Report";

-- CreateTable
CREATE TABLE "public"."Feedback" (
    "id" TEXT NOT NULL,
    "updatedScore" INTEGER NOT NULL,
    "prevScore" INTEGER NOT NULL,
    "employeeId" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "public"."Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Summary" ADD CONSTRAINT "Summary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
