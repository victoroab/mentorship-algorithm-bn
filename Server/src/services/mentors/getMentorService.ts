import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

export const getMentorsService = async () => {
  try {
    const mentors = await prisma.mentor.findMany({
      select: {
        firstName: true,
        middleName: true,
        lastName: true,
        gender: true,
        level: true,
        course: true,
        Hobbies: true,
        Skills: true,
      },
    })
    return mentors
  } catch (e) {
    log.error(e)
  }
}
