import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const deleteMentorshipRequests = async ({
  studentEmail,
  mentorId,
}: {
  studentEmail: string
  mentorId: string
}) => {
  try {
    const studentId = await prisma.student.findFirst({
      where: { email: studentEmail },
      select: { id: true },
    })

    const requests = await prisma.mentorshipRequests.deleteMany({
      where: { studentId: studentId?.id, mentorId: mentorId },
    })
    return requests
  } catch (e) {
    log.error(e)
  }
}
