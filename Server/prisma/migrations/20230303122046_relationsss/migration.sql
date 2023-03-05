-- AlterTable
ALTER TABLE "MenteeAvailability" ADD COLUMN     "menteeId" TEXT;

-- AlterTable
ALTER TABLE "MenteeHobbies" ADD COLUMN     "menteeId" TEXT;

-- AlterTable
ALTER TABLE "MenteePassword" ADD COLUMN     "menteeId" TEXT;

-- AlterTable
ALTER TABLE "MenteeSkills" ADD COLUMN     "menteeId" TEXT;

-- AlterTable
ALTER TABLE "MentorAvailability" ADD COLUMN     "mentorId" TEXT;

-- AlterTable
ALTER TABLE "MentorHobbies" ADD COLUMN     "mentorId" TEXT;

-- AlterTable
ALTER TABLE "MentorPassword" ADD COLUMN     "mentorId" TEXT;

-- AlterTable
ALTER TABLE "MentorPreferences" ADD COLUMN     "mentorId" TEXT;

-- AlterTable
ALTER TABLE "MentorSkills" ADD COLUMN     "mentorId" TEXT;
