-- AlterTable
ALTER TABLE "public"."Education" ALTER COLUMN "institution" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "degree" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Experience" ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "tenure" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Project" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Skill" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."SocialLink" ALTER COLUMN "key" DROP NOT NULL,
ALTER COLUMN "value" DROP NOT NULL;
