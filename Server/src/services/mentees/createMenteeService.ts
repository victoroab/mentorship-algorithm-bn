import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'
import { CreateMenteeInput } from '../../schema/mentee/menteeSchema'
import bcrypt from 'bcrypt'

export const createMenteeService = async (
  reqBody: CreateMenteeInput['body']
) => {
  try {
    const salt = await bcrypt.genSalt(
      parseInt(process.env.SALT_WORK_FACTOR as string)
    )

    const hashedPassword = bcrypt.hashSync(reqBody.password, salt)

    const mentee = await prisma.mentee.create({
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
        Password: { create: { password: hashedPassword } },
      },
    })
    return mentee.id
  } catch (e) {
    log.error(e)
  }
}
