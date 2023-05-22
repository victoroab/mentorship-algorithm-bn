/*
  Warnings:

  - You are about to drop the column `class` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `matricNo` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `passwordId` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `passwordId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `MentorPassword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StudentPassword` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[areasOfIntrestId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `department` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffNo` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `areasOfIntrestId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mentor" DROP CONSTRAINT "Mentor_passwordId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_passwordId_fkey";

-- DropIndex
DROP INDEX "Mentor_passwordId_key";

-- DropIndex
DROP INDEX "Student_passwordId_key";

-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "class",
DROP COLUMN "course",
DROP COLUMN "level",
DROP COLUMN "matricNo",
DROP COLUMN "passwordId",
ADD COLUMN     "cv" TEXT,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "rank" TEXT NOT NULL,
ADD COLUMN     "staffNo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "course",
DROP COLUMN "level",
DROP COLUMN "passwordId",
ADD COLUMN     "areasOfIntrestId" TEXT NOT NULL,
ADD COLUMN     "program" TEXT,
ALTER COLUMN "class" DROP NOT NULL;

-- DropTable
DROP TABLE "MentorPassword";

-- DropTable
DROP TABLE "StudentPassword";

-- CreateTable
CREATE TABLE "AreasOfInterest" (
    "id" TEXT NOT NULL,
    "aoi" TEXT NOT NULL,

    CONSTRAINT "AreasOfInterest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_areasOfIntrestId_key" ON "Student"("areasOfIntrestId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_areasOfIntrestId_fkey" FOREIGN KEY ("areasOfIntrestId") REFERENCES "AreasOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
