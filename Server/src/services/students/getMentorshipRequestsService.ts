import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

export const getMentorshipRequests = async () => {
  try {
    const requests = await prisma.student.findUnique({
      where: { id: '4c228a98-a889-4e97-9ad8-1c8358041d4d' },
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