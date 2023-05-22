/*
  Warnings:

  - You are about to drop the `Mentee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_availabilityId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_hobbiesId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_passwordId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_skillsId_fkey";

-- DropForeignKey
ALTER TABLE "MentorshipRequests" DROP CONSTRAINT "MentorshipRequests_menteeId_fkey";

-- DropTable
DROP TABLE "Mentee";

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "matricNo" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "mentorId" TEXT,
    "picture" TEXT,
    "skillsId" TEXT NOT NULL,
    "hobbiesId" TEXT NOT NULL,
    "availabilityId" TEXT NOT NULL,
    "passwordId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_skillsId_key" ON "Student"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_hobbiesId_key" ON "Student"("hobbiesId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_availabilityId_key" ON "Student"("availabilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_passwordId_key" ON "Student"("passwordId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "MenteeSkills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "MenteeHobbies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "MenteeAvailability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "MenteePassword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
