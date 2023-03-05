/*
  Warnings:

  - You are about to drop the column `menteeId` on the `MenteeAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `menteeId` on the `MenteeHobbies` table. All the data in the column will be lost.
  - You are about to drop the column `menteeId` on the `MenteePassword` table. All the data in the column will be lost.
  - You are about to drop the column `menteeId` on the `MenteeSkills` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorHobbies` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorPassword` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `MentorSkills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MenteeAvailability" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MenteeHobbies" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MenteePassword" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MenteeSkills" DROP COLUMN "menteeId";

-- AlterTable
ALTER TABLE "MentorAvailability" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorHobbies" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorPassword" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorPreferences" DROP COLUMN "mentorId";

-- AlterTable
ALTER TABLE "MentorSkills" DROP COLUMN "mentorId";
