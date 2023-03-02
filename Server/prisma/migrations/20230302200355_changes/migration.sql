/*
  Warnings:

  - You are about to drop the column `skill` on the `MenteeSkills` table. All the data in the column will be lost.
  - You are about to drop the column `skill` on the `MentorSkills` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[skillsId]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hobbiesId]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[availabilityId]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passwordId]` on the table `Mentee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skillsId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hobbiesId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[availabilityId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passwordId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `availabilityId` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbiesId` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordId` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillsId` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `MenteeSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `availabilityId` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbiesId` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordId` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillsId` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `MentorSkills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MenteeAvailability" DROP CONSTRAINT "MenteeAvailability_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "MenteeHobbies" DROP CONSTRAINT "MenteeHobbies_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "MenteeSkills" DROP CONSTRAINT "MenteeSkills_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "MentorAvailability" DROP CONSTRAINT "MentorAvailability_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "MentorHobbies" DROP CONSTRAINT "MentorHobbies_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "MentorSkills" DROP CONSTRAINT "MentorSkills_mentorId_fkey";

-- AlterTable
ALTER TABLE "Mentee" ADD COLUMN     "availabilityId" TEXT NOT NULL,
ADD COLUMN     "hobbiesId" TEXT NOT NULL,
ADD COLUMN     "passwordId" TEXT NOT NULL,
ADD COLUMN     "skillsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MenteeSkills" DROP COLUMN "skill",
ADD COLUMN     "skills" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "availabilityId" TEXT NOT NULL,
ADD COLUMN     "hobbiesId" TEXT NOT NULL,
ADD COLUMN     "passwordId" TEXT NOT NULL,
ADD COLUMN     "skillsId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MentorSkills" DROP COLUMN "skill",
ADD COLUMN     "skills" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MentorPassword" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "MentorPassword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteePassword" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "MenteePassword_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_skillsId_key" ON "Mentee"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_hobbiesId_key" ON "Mentee"("hobbiesId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_availabilityId_key" ON "Mentee"("availabilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_passwordId_key" ON "Mentee"("passwordId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_skillsId_key" ON "Mentor"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_hobbiesId_key" ON "Mentor"("hobbiesId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_availabilityId_key" ON "Mentor"("availabilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_passwordId_key" ON "Mentor"("passwordId");

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "MentorSkills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "MentorHobbies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "MentorAvailability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "MentorPassword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "MenteeSkills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "MenteeHobbies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "MenteeAvailability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "MenteePassword"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
