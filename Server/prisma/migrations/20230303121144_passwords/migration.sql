/*
  Warnings:

  - You are about to alter the column `password` on the `MenteePassword` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(90)`.
  - You are about to alter the column `password` on the `MentorPassword` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(90)`.

*/
-- AlterTable
ALTER TABLE "MenteePassword" ALTER COLUMN "password" SET DATA TYPE VARCHAR(90);

-- AlterTable
ALTER TABLE "MentorPassword" ALTER COLUMN "password" SET DATA TYPE VARCHAR(90);
