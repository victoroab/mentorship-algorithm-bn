-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "receipent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "program" TEXT,
    "matricNo" TEXT NOT NULL,
    "class" TEXT,
    "mentorId" TEXT,
    "picture" TEXT,
    "areasOfIntrestId" TEXT NOT NULL,
    "skillsId" TEXT NOT NULL,
    "hobbiesId" TEXT NOT NULL,
    "availabilityId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentsTasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" TEXT NOT NULL,

    CONSTRAINT "StudentsTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentSchedules" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "StudentSchedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreasOfInterest" (
    "id" TEXT NOT NULL,
    "aoi" TEXT NOT NULL,

    CONSTRAINT "AreasOfInterest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentSkills" (
    "id" TEXT NOT NULL,
    "skills" TEXT NOT NULL,

    CONSTRAINT "StudentSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentHobbies" (
    "id" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,

    CONSTRAINT "StudentHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentAvailability" (
    "id" TEXT NOT NULL,
    "days" TEXT NOT NULL,

    CONSTRAINT "StudentAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "staffNo" TEXT NOT NULL,
    "picture" TEXT,
    "cv" TEXT,
    "preferenceId" TEXT NOT NULL,
    "skillsId" TEXT NOT NULL,
    "hobbiesId" TEXT NOT NULL,
    "availabilityId" TEXT NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorPreferences" (
    "id" TEXT NOT NULL,
    "preferences" TEXT NOT NULL,

    CONSTRAINT "MentorPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorSkills" (
    "id" TEXT NOT NULL,
    "skills" TEXT NOT NULL,

    CONSTRAINT "MentorSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorHobbies" (
    "id" TEXT NOT NULL,
    "hobbies" TEXT NOT NULL,

    CONSTRAINT "MentorHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorAvailability" (
    "id" TEXT NOT NULL,
    "days" TEXT NOT NULL,

    CONSTRAINT "MentorAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorshipRequests" (
    "id" TEXT NOT NULL,
    "studentId" TEXT,
    "mentorId" TEXT,

    CONSTRAINT "MentorshipRequests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_areasOfIntrestId_key" ON "Student"("areasOfIntrestId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_skillsId_key" ON "Student"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_hobbiesId_key" ON "Student"("hobbiesId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_availabilityId_key" ON "Student"("availabilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_preferenceId_key" ON "Mentor"("preferenceId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_skillsId_key" ON "Mentor"("skillsId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_hobbiesId_key" ON "Mentor"("hobbiesId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_availabilityId_key" ON "Mentor"("availabilityId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_areasOfIntrestId_fkey" FOREIGN KEY ("areasOfIntrestId") REFERENCES "AreasOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "StudentSkills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "StudentHobbies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "StudentAvailability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsTasks" ADD CONSTRAINT "StudentsTasks_studentEmail_fkey" FOREIGN KEY ("studentEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSchedules" ADD CONSTRAINT "StudentSchedules_studentEmail_fkey" FOREIGN KEY ("studentEmail") REFERENCES "Student"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "MentorPreferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "MentorSkills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_hobbiesId_fkey" FOREIGN KEY ("hobbiesId") REFERENCES "MentorHobbies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "MentorAvailability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipRequests" ADD CONSTRAINT "MentorshipRequests_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
