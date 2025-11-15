-- DropForeignKey
ALTER TABLE "public"."Chats" DROP CONSTRAINT "Chats_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Feedback" DROP CONSTRAINT "Feedback_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."FeedbackSummary" DROP CONSTRAINT "FeedbackSummary_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Summary" DROP CONSTRAINT "Summary_employeeId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Feedback" ADD CONSTRAINT "Feedback_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Summary" ADD CONSTRAINT "Summary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FeedbackSummary" ADD CONSTRAINT "FeedbackSummary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chats" ADD CONSTRAINT "Chats_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
