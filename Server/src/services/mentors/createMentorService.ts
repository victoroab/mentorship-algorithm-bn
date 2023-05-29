import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'
import { CreateMentorInput } from '../../schema/mentor/mentorSchema'

export const createMentorService = async (
  reqBody: CreateMentorInput['body']
) => {
  try {
    const emailValiation = await prisma.student.findFirst({
      where: { email: reqBody.email },
    })

    if (emailValiation?.email == reqBody.email) {
      return 'this user already exists'
    }

    const mentor = await prisma.mentor.create({
      data: {
        age: reqBody.age,
        email: reqBody.email,
        ethnicity: reqBody.ethnicity,
        department: reqBody.department,
        rank: reqBody.rank,
        staffNo: reqBody.staffNo,
        firstName: reqBody.firstName,
        middleName: reqBody.middleName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        Availability: { create: { days: `${[...reqBody.availability]}` } },
        Hobbies: { create: { hobbies: `${[...reqBody.hobbies]}` } },
        Skills: { create: { skills: `${[...reqBody.skills]}` } },
        Preferences: { create: { preferences: `${[...reqBody.preferences]}` } },
      },
    })
    return mentor.id
  } catch (e) {
    log.error(e)
  }
}
