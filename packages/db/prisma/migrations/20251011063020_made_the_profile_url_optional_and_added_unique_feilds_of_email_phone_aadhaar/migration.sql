/*
  Warnings:

  - A unique constraint covering the columns `[email,number,aadharNumber]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Employee_aadharNumber_key";

-- DropIndex
DROP INDEX "public"."Employee_email_key";

-- DropIndex
DROP INDEX "public"."Employee_number_key";

-- AlterTable
ALTER TABLE "public"."Employee" ALTER COLUMN "profileImg" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_number_aadharNumber_key" ON "public"."Employee"("email", "number", "aadharNumber");
