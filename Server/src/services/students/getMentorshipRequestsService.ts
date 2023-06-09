import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorshipRequests = async (studentEmail: string) => {
  try {
    const requests = await prisma.student.findUnique({
      // placeholder id for testing frontend
      where: { email: studentEmail },
      select: {
        mentorshipRequests: {
          select: {
            mentor: {
              select: {
                id: true,
                firstName: true,
                email: true,
                lastName: true,
              },
            },
          },
        },
      },
    })
    return requests
  } catch (e) {
    log.error(e)
  }
}
