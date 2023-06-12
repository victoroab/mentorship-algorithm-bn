import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const acceptMentorshipService = async ({
  mentorEmail,
  studentId,
}: {
  mentorEmail: string
  studentId: string
}) => {
  try {
    //

    const mentor = await prisma.mentor.findFirst({
      where: { email: mentorEmail },
      select: { id: true },
    })

    const menteeCount = await prisma.mentor.findMany({
      where: { email: mentorEmail },
      select: { _count: { select: { Mentee: true } } },
    })

    if (menteeCount[0]._count.Mentee === 5) {
      return 'Mentee capacity reached'
    }

    const assignMentee = prisma.student.update({
      where: { id: studentId },
      data: { mentorId: mentor?.id },
    })

    const acceptRequest = prisma.mentorshipRequests.deleteMany({
      where: { studentId: studentId, mentorId: mentor?.id },
    })

    await prisma.$transaction([acceptRequest, assignMentee])

    return 'Accepted'
  } catch (e) {
    log.error(e)
  }
}
