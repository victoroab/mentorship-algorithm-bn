import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const requestMentorshipService = async ({
  mentorId,
  studentEmail,
}: {
  mentorId: string
  studentEmail: string
}) => {
  try {
    const isRequested = await prisma.student.findFirst({
      where: { email: studentEmail },
      select: { mentorshipRequests: { where: { mentorId: mentorId } } },
    })

    if (isRequested?.mentorshipRequests[0]) {
      return 'You have already sent a request to this mentor'
    }

    // const isAccepted = await prisma.student.findFirst({
    //   where: { mentorId: mentorId },
    // })

    // // return isAccepted

    // if (isAccepted !== null) {
    //   return 'Already your mentor'
    // }

    const requestCount = await prisma.student.findMany({
      where: {
        email: studentEmail,
      },
      select: {
        _count: {
          select: {
            mentorshipRequests: true,
          },
        },
      },
    })

    if (requestCount.length === 0) {
      return 'You already have a mentor'
    }

    // return requestCount

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
        where: { email: studentEmail },
        data: {
          mentorshipRequests: { create: { mentorId: mentorId } },
        },
      })

      return 'Request Sent'
    } else {
      return 'Max Requests Reached'
    }
    // return requestCount
  } catch (e) {
    log.error(e)
  }
}
