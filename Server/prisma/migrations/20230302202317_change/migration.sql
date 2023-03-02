/*
  Warnings:

  - You are about to drop the column `class` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `course` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `ethnicity` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `hobbies` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `MentorPreferences` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `MentorPreferences` table. All the data in the column will be lost.
  - Added the required column `mentorId` to the `MentorPreferences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferences` to the `MentorPreferences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MentorPreferences" DROP COLUMN "class",
DROP COLUMN "course",
DROP COLUMN "ethnicity",
DROP COLUMN "gender",
DROP COLUMN "hobbies",
DROP COLUMN "level",
DROP COLUMN "skills",
ADD COLUMN     "mentorId" TEXT NOT NULL,
ADD COLUMN     "preferences" TEXT NOT NULL;
