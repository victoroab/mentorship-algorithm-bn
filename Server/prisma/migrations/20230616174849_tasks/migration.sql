-- CreateTable
CREATE TABLE "StudentsTasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,

    CONSTRAINT "StudentsTasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StudentsTasks" ADD CONSTRAINT "StudentsTasks_studentEmail_fkey" FOREIGN KEY ("studentEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
