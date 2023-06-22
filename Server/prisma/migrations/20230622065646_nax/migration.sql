/*
  Warnings:

  - Added the required column `completed` to the `StudentsTasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StudentsTasks" ADD COLUMN     "completed" TEXT NOT NULL;
