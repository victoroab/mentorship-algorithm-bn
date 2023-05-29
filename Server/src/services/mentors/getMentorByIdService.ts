import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorByIdService = async (mentorId: string) => {
  try {
    const mentor = await prisma.mentor.findFirst({
      where: { id: mentorId },
      select: {
        firstName: true,
        middleName: true,
        lastName: true,
        gender: true,
        Hobbies: true,
        Skills: true,
      },
    })
    return mentor
  } catch (e) {
    log.error(e)
  }
}
