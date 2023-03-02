/*
  Warnings:

  - You are about to drop the column `day` on the `MenteeAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `hobbie` on the `MenteeHobbies` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `MentorAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `hobbie` on the `MentorHobbies` table. All the data in the column will be lost.
  - Added the required column `days` to the `MenteeAvailability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbies` to the `MenteeHobbies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `days` to the `MentorAvailability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hobbies` to the `MentorHobbies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenteeAvailability" DROP COLUMN "day",
ADD COLUMN     "days" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MenteeHobbies" DROP COLUMN "hobbie",
ADD COLUMN     "hobbies" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MentorAvailability" DROP COLUMN "day",
ADD COLUMN     "days" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MentorHobbies" DROP COLUMN "hobbie",
ADD COLUMN     "hobbies" TEXT NOT NULL;
