-- CreateTable
CREATE TABLE "MentorTasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mentorEmail" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" TEXT NOT NULL,

    CONSTRAINT "MentorTasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MentorTasks" ADD CONSTRAINT "MentorTasks_mentorEmail_fkey" FOREIGN KEY ("mentorEmail") REFERENCES "Mentor"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
