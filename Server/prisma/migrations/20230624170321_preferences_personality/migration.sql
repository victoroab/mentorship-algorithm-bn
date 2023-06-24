/*
  Warnings:

  - Added the required column `accountability` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adaptability` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communication` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communicationChannel` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communicationStyle` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degreesObtained` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empathy` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expertiseInField` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadership` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openMindedness` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patience` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemSolving` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resilience` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trustworthiness` to the `Mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountability` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adaptability` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communication` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empathy` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadership` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openMindedness` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patience` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemSolving` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resilience` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trustworthiness` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mentor" ADD COLUMN     "accountability" INTEGER NOT NULL,
ADD COLUMN     "adaptability" INTEGER NOT NULL,
ADD COLUMN     "communication" INTEGER NOT NULL,
ADD COLUMN     "communicationChannel" TEXT NOT NULL,
ADD COLUMN     "communicationStyle" TEXT NOT NULL,
ADD COLUMN     "degreesObtained" TEXT NOT NULL,
ADD COLUMN     "empathy" INTEGER NOT NULL,
ADD COLUMN     "expertiseInField" TEXT NOT NULL,
ADD COLUMN     "leadership" INTEGER NOT NULL,
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
ADD COLUMN     "openMindedness" INTEGER NOT NULL,
ADD COLUMN     "patience" INTEGER NOT NULL,
ADD COLUMN     "problemSolving" INTEGER NOT NULL,
ADD COLUMN     "resilience" INTEGER NOT NULL,
ADD COLUMN     "trustworthiness" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "accountability" INTEGER NOT NULL,
ADD COLUMN     "adaptability" INTEGER NOT NULL,
ADD COLUMN     "communication" INTEGER NOT NULL,
ADD COLUMN     "communicationChannel" TEXT,
ADD COLUMN     "communicationStyle" TEXT,
ADD COLUMN     "degreesObtained" TEXT,
ADD COLUMN     "empathy" INTEGER NOT NULL,
ADD COLUMN     "expertiseInField" TEXT,
ADD COLUMN     "leadership" INTEGER NOT NULL,
ADD COLUMN     "maritalStatus" TEXT,
ADD COLUMN     "openMindedness" INTEGER NOT NULL,
ADD COLUMN     "patience" INTEGER NOT NULL,
ADD COLUMN     "problemSolving" INTEGER NOT NULL,
ADD COLUMN     "resilience" INTEGER NOT NULL,
ADD COLUMN     "trustworthiness" INTEGER NOT NULL;
