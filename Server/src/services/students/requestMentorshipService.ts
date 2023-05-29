import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const requestMentorshipService = async ({
  mentorId,
  menteeId,
}: {
  mentorId: string
  menteeId: string
}) => {
  try {
    const requestCount = await prisma.student.findMany({
      where: {
        id: menteeId,
      },
      select: {
        _count: {
          select: {
            mentorshipRequests: true,
          },
        },
      },
    })

    const requestedMentorMenteesCount = await prisma.mentor.findMany({
      where: { id: mentorId },
      select: {
        _count: {
          select: {
            Mentee: true,
          },
        },
      },
    })

    if (requestedMentorMenteesCount[0]._count.Mentee === 5) {
      return 'Mentor is at full capacity'
    }

    if (requestCount[0]._count.mentorshipRequests < 3) {
      await prisma.student.update({
        where: { id: menteeId },
        data: {
          mentorshipRequests: { create: { mentorId: mentorId } },
        },
      })
    } else {
      return 'Max Requests Reached'
    }
    // return requestCount
  } catch (e) {
    log.error(e)
  }
}
