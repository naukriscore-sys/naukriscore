-- CreateTable
CREATE TABLE "public"."FeedbackSummary" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "updatedScore" INTEGER NOT NULL,
    "prevScore" INTEGER NOT NULL,
    "severity" "public"."Severity" NOT NULL,
    "employeeId" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "FeedbackSummary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."FeedbackSummary" ADD CONSTRAINT "FeedbackSummary_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FeedbackSummary" ADD CONSTRAINT "FeedbackSummary_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "public"."Feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
