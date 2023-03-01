/*
  Warnings:

  - You are about to drop the `Availability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hobbies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mentee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mentor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MentorPreferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "Hobbies" DROP CONSTRAINT "Hobbies_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "Hobbies" DROP CONSTRAINT "Hobbies_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "MentorPreferences" DROP CONSTRAINT "MentorPreferences_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_mentorId_fkey";

-- DropTable
DROP TABLE "Availability";

-- DropTable
DROP TABLE "Hobbies";

-- DropTable
DROP TABLE "Mentee";

-- DropTable
DROP TABLE "Mentor";

-- DropTable
DROP TABLE "MentorPreferences";

-- DropTable
DROP TABLE "Skills";
