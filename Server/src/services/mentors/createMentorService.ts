import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'
import { CreateMentorInput } from '../../schema/mentor/mentorSchema'
import bcrypt from 'bcrypt'

export const createMentorService = async (
  reqBody: CreateMentorInput['body']
) => {
  try {
    const emailValiation = await prisma.mentee.findFirst({
      where: { email: reqBody.email },
    })

    if (emailValiation?.email == reqBody.email) {
      return 'this user exists'
    }

    const salt = await bcrypt.genSalt(
      parseInt(process.env.SALT_WORK_FACTOR as string)
    )

    const hashedPassword = bcrypt.hashSync(reqBody.password, salt)

    const mentor = await prisma.mentor.create({
      data: {
        age: reqBody.age,
        class: reqBody.class,
        course: reqBody.course,
        email: reqBody.email,
        ethnicity: reqBody.ethnicity,
        firstName: reqBody.firstName,
        middleName: reqBody.middleName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        level: reqBody.level,
        matricNo: reqBody.matricNo,
        Availability: { create: { days: `${[...reqBody.availability]}` } },
        Hobbies: { create: { hobbies: `${[...reqBody.hobbies]}` } },
        Skills: { create: { skills: `${[...reqBody.skills]}` } },
        Preferences: { create: { preferences: `${[...reqBody.preferences]}` } },
        Password: { create: { password: hashedPassword } },
      },
    })
    return mentor.id
  } catch (e) {
    log.error(e)
  }
}
