/*
  Warnings:

  - You are about to drop the column `availability` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `hobbies` on the `Mentee` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Mentee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mentee" DROP COLUMN "availability",
DROP COLUMN "hobbies",
DROP COLUMN "skills";
