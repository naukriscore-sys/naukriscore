-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('employee', 'employer', 'admin');

-- CreateEnum
CREATE TYPE "public"."Severity" AS ENUM ('veryLow', 'low', 'belowAverage', 'medium', 'aboveModerate', 'high', 'veryHigh', 'elite');

-- CreateTable
CREATE TABLE "public"."Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "aadharNumber" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Report" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "employeeId" TEXT NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Summary" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "severity" "public"."Severity" NOT NULL,
    "reportId" TEXT NOT NULL,

    CONSTRAINT "Summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FeedbackSummary" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "severity" "public"."Severity" NOT NULL,
    "reportId" TEXT NOT NULL,

    CONSTRAINT "FeedbackSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Employer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "positionInCompany" TEXT NOT NULL,
    "companyWebsite" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyCinNumber" TEXT NOT NULL,
    "companyPanNumber" TEXT NOT NULL,
    "companyGstNumber" TEXT,
    "role" "public"."Role" NOT NULL DEFAULT 'employer',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "public"."Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_number_key" ON "public"."Employee"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_aadharNumber_key" ON "public"."Employee"("aadharNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Report_employeeId_key" ON "public"."Report"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_email_key" ON "public"."Employer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_number_key" ON "public"."Employer"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyName_key" ON "public"."Employer"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyWebsite_key" ON "public"."Employer"("companyWebsite");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyCinNumber_key" ON "public"."Employer"("companyCinNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyPanNumber_key" ON "public"."Employer"("companyPanNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyGstNumber_key" ON "public"."Employer"("companyGstNumber");

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Summary" ADD CONSTRAINT "Summary_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FeedbackSummary" ADD CONSTRAINT "FeedbackSummary_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
