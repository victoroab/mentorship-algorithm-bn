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
        Hobbies: true,
        Skills: true,
      },
    })
    return mentors
  } catch (e) {
    log.error(e)
  }
}
