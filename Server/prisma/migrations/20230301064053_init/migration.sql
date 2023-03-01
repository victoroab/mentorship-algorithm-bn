/*
  Warnings:

  - You are about to drop the column `mentorId` on the `MentorPreferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[preferenceId]` on the table `Mentor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `preferenceId` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MentorPreferences" DROP CONSTRAINT "MentorPreferences_mentorId_fkey";

-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "preferenceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MentorPreferences" DROP COLUMN "mentorId";

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_preferenceId_key" ON "Mentor"("preferenceId");

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "MentorPreferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
