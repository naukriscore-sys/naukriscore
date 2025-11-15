/*
  Warnings:

  - A unique constraint covering the columns `[companyAddress]` on the table `Employer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Employer" ALTER COLUMN "profileImg" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employer_companyAddress_key" ON "public"."Employer"("companyAddress");
