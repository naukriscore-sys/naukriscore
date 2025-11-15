-- AlterTable
ALTER TABLE "public"."Education" ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "public"."Employee" ALTER COLUMN "score" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."Experience" ADD COLUMN     "description" TEXT,
ADD COLUMN     "liveLink" TEXT;

-- AlterTable
ALTER TABLE "public"."ResumeDetails" ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "profileDesc" TEXT;
