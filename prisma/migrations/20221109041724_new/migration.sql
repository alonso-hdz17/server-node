/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Company` table. All the data in the column will be lost.
  - The required column `companyId` was added to the `Company` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "id",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;
