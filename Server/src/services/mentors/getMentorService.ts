import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorsService = async (user: string) => {
  try {
    const hasMentor = await prisma.student.findFirst({
      where: { email: user },
      select: { mentor: { select: { email: true } } },
    })

    if (!hasMentor?.mentor) {
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
    } else {
      return 'You have a mentor'
    }
  } catch (e) {
    log.error(e)
  }
}
