-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_availabilityId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_hobbiesId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_passwordId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_skillsId_fkey";

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "MenteeSkills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "MenteeHobbies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "MenteeAvailability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "MenteePassword"("id") ON DELETE CASCADE ON UPDATE CASCADE;
