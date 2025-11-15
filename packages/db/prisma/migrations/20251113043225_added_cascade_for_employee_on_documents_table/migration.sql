-- DropForeignKey
ALTER TABLE "public"."Documents" DROP CONSTRAINT "Documents_employeeId_fkey";

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
