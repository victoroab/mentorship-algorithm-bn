/*
  Warnings:

  - You are about to drop the column `availability` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `hobbies` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `mentees` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `preferences` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Mentor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "availability",
DROP COLUMN "hobbies",
DROP COLUMN "mentees",
DROP COLUMN "preferences",
DROP COLUMN "skills";
