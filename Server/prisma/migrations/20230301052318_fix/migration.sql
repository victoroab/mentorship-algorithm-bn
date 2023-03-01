/*
  Warnings:

  - You are about to drop the `Availability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hobbies` table. If the table is not empty, all the data it contains will be lost.
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
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_mentorId_fkey";

-- DropTable
DROP TABLE "Availability";

-- DropTable
DROP TABLE "Hobbies";

-- DropTable
DROP TABLE "Skills";

-- CreateTable
CREATE TABLE "MentorSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorHobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeHobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorAvailability" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeAvailability" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeAvailability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MentorSkills" ADD CONSTRAINT "MentorSkills_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeSkills" ADD CONSTRAINT "MenteeSkills_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorHobbies" ADD CONSTRAINT "MentorHobbies_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeHobbies" ADD CONSTRAINT "MenteeHobbies_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorAvailability" ADD CONSTRAINT "MentorAvailability_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeAvailability" ADD CONSTRAINT "MenteeAvailability_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
