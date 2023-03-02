/*
  Warnings:

  - You are about to drop the column `menteeId` on the `MenteeAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `menteeId` on the `MenteeHobbies` table. All the data in the column will be lost.
  - You are about to drop the column `menteeId` on the `MenteeSkills` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorHobbies` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorSkills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_mentorId_fkey";

-- AlterTable
ALTER TABLE "Mentee" ALTER COLUMN "mentorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MenteeAvailability" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MenteeHobbies" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MenteeSkills" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MentorAvailability" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorHobbies" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorPreferences" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorSkills" DROP COLUMN "mentorId";

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
