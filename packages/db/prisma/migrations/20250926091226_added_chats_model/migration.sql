-- CreateEnum
CREATE TYPE "public"."chatRole" AS ENUM ('user', 'assistant');

-- CreateEnum
CREATE TYPE "public"."chatType" AS ENUM ('feedback', 'profile');

-- CreateTable
CREATE TABLE "public"."Chats" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "role" "public"."chatRole" NOT NULL,
    "type" "public"."chatType" NOT NULL,
    "employeeId" TEXT,
    "employerId" TEXT,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Chats" ADD CONSTRAINT "Chats_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chats" ADD CONSTRAINT "Chats_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "public"."Employer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
