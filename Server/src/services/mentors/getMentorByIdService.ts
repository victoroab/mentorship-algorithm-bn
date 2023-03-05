import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

export const getMentorByIdService = async (mentorId: string) => {
  try {
    const mentor = await prisma.mentor.findFirst({
      where: { id: mentorId },
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
    return mentor
  } catch (e) {
    log.error(e)
  }
}
