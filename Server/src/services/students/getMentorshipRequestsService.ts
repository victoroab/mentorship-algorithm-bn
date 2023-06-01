import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorshipRequests = async () => {
  try {
    const requests = await prisma.student.findUnique({
      // placeholder id for testing frontend
      where: { id: '040b71b8-e08a-4de8-8cd9-3c5d0d7e498f' },
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
