/*
  Warnings:

  - You are about to drop the column `education` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `projectName` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `tech` on the `Project` table. All the data in the column will be lost.
  - Added the required column `degree` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenure` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Education" DROP COLUMN "education",
ADD COLUMN     "degree" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Experience" DROP COLUMN "companyName",
DROP COLUMN "role",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "tenure" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "projectName",
DROP COLUMN "tech",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "technologies" TEXT[],
ALTER COLUMN "liveLink" DROP NOT NULL;
