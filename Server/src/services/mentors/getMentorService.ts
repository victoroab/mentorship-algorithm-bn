import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorsService = async () => {
  try {
    const mentors = await prisma.mentor.findMany({
      select: {
        id: true,
        firstName: true,
        middleName: true,
        lastName: true,
        gender: true,
        email: true,
        rank: true,
        department: true,
        staffNo: true,
        Hobbies: true,
        Skills: true,
        // Model Specialization in db schema
      },
    })
    return mentors
  } catch (e) {
    log.error(e)
  }
}
