-- CreateTable
CREATE TABLE "MentorSchedules" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mentorEmail" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "MentorSchedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MentorSchedules" ADD CONSTRAINT "MentorSchedules_mentorEmail_fkey" FOREIGN KEY ("mentorEmail") REFERENCES "Mentor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
