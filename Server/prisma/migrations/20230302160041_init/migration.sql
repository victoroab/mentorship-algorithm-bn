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
    "picture" TEXT,
    "preferenceId" TEXT NOT NULL,

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

    CONSTRAINT "MentorPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorHobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeHobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeHobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorAvailability" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "mentorId" TEXT NOT NULL,

    CONSTRAINT "MentorAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenteeAvailability" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "menteeId" TEXT NOT NULL,

    CONSTRAINT "MenteeAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_email_key" ON "Mentor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_preferenceId_key" ON "Mentor"("preferenceId");

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_email_key" ON "Mentee"("email");

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "MentorPreferences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorSkills" ADD CONSTRAINT "MentorSkills_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeSkills" ADD CONSTRAINT "MenteeSkills_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorHobbies" ADD CONSTRAINT "MentorHobbies_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeHobbies" ADD CONSTRAINT "MenteeHobbies_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorAvailability" ADD CONSTRAINT "MentorAvailability_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenteeAvailability" ADD CONSTRAINT "MenteeAvailability_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "Mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
