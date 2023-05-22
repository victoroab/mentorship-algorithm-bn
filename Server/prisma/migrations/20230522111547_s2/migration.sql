/*
  Warnings:

  - You are about to drop the column `menteeId` on the `MentorshipRequests` table. All the data in the column will be lost.
  - You are about to drop the `MenteeAvailability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenteeHobbies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenteePassword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenteeSkills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MentorshipRequests" DROP CONSTRAINT "MentorshipRequests_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_availabilityId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_hobbiesId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_passwordId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_skillsId_fkey";

-- AlterTable
ALTER TABLE "MentorshipRequests" DROP COLUMN "menteeId",
ADD COLUMN     "studentId" TEXT;

-- DropTable
DROP TABLE "MenteeAvailability";

-- DropTable
DROP TABLE "MenteeHobbies";

-- DropTable
DROP TABLE "MenteePassword";

-- DropTable
DROP TABLE "MenteeSkills";

-- CreateTable
CREATE TABLE "StudentSkills" (
    "id" TEXT NOT NULL,
    "skills" TEXT NOT NULL,

    CONSTRAINT "StudentSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentHobbies" (
    "id" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,

    CONSTRAINT "StudentHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentAvailability" (
    "id" TEXT NOT NULL,
    "days" TEXT NOT NULL,

    CONSTRAINT "StudentAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentPassword" (
    "id" TEXT NOT NULL,
    "password" VARCHAR(90) NOT NULL,

    CONSTRAINT "StudentPassword_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "StudentSkills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "StudentHobbies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "StudentAvailability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "StudentPassword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
