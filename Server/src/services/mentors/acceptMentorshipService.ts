import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const acceptMentorshipService = async ({
  mentorId,
  menteeId,
}: {
  mentorId: string
  menteeId: string
}) => {
  try {
    //
    const menteeCount = await prisma.mentor.findMany({
      where: { id: mentorId },
      select: { _count: { select: { Mentee: true } } },
    })

    if (menteeCount[0]._count.Mentee == 5) {
      return 'Mentee capacity reached'
    }

    const acceptRequest = prisma.mentorshipRequests.deleteMany({
      where: { studentId: menteeId },
    })

    const assignMentee = prisma.student.update({
      where: { id: menteeId },
      data: { mentorId: mentorId },
    })

    const transaction = await prisma.$transaction([acceptRequest, assignMentee])

    return transaction
  } catch (e) {
    log.error(e)
  }
}
