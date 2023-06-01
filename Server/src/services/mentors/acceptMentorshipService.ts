import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const acceptMentorshipService = async ({
  mentorId,
  studentId,
}: {
  mentorId: string
  studentId: string
}) => {
  try {
    //
    const menteeCount = await prisma.mentor.findMany({
      where: { id: mentorId },
      select: { _count: { select: { Mentee: true } } },
    })

    if (menteeCount[0]._count.Mentee === 5) {
      return 'Mentee capacity reached'
    }

    const assignMentee = prisma.student.update({
      where: { id: studentId },
      data: { mentorId: mentorId },
    })

    const acceptRequest = prisma.mentorshipRequests.deleteMany({
      where: { studentId: studentId, mentorId: mentorId },
    })

    await prisma.$transaction([acceptRequest, assignMentee])

    return 'Accepted'
  } catch (e) {
    log.error(e)
  }
}
