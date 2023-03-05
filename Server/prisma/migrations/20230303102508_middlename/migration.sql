/*
  Warnings:

  - Added the required column `middleName` to the `Mentee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mentee" ADD COLUMN     "middleName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "middleName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MentorshipRequests" (
    "id" TEXT NOT NULL,
    "menteeId" TEXT,
    "mentorId" TEXT,

    CONSTRAINT "MentorshipRequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
