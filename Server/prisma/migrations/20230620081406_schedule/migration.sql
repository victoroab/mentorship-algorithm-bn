-- CreateTable
CREATE TABLE "StudentSchedules" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "StudentSchedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentSchedules" ADD CONSTRAINT "StudentSchedules_studentEmail_fkey" FOREIGN KEY ("studentEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
