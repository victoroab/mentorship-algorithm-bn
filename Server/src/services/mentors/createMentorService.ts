import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'
import { CreateMentorInput } from '../../schema/mentor/mentorSchema'

export const createMentorService = async (
  reqBody: CreateMentorInput['body']
) => {
  try {
    const mentor = await prisma.mentor.create({
      data: {
        age: reqBody.age,
        class: reqBody.class,
        course: reqBody.course,
        email: reqBody.email,
        ethnicity: reqBody.ethnicity,
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        level: reqBody.level,
        matricNo: reqBody.matricNo,
        Availability: { create: { days: `${[...reqBody.availability]}` } },
        Hobbies: { create: { hobbies: `${[...reqBody.hobbies]}` } },
        Skills: { create: { skills: `${[...reqBody.skills]}` } },
        Preferences: { create: { preferences: `${[...reqBody.preferences]}` } },
        Password: { create: { password: reqBody.password } },
      },
    })
    return mentor
  } catch (e) {
    log.error(e)
  }
}
