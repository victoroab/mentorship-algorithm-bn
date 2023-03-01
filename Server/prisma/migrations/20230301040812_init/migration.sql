-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "matricNo" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "preferences" TEXT NOT NULL,
    "mentees" TEXT NOT NULL,
    "picture" TEXT,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "matricNo" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "picture" TEXT,

    CONSTRAINT "Mentee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorPreferences" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "Hobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Availability" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_email_key" ON "Mentee"("email");

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorPreferences" ADD CONSTRAINT "MentorPreferences_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hobbies" ADD CONSTRAINT "Hobbies_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hobbies" ADD CONSTRAINT "Hobbies_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
