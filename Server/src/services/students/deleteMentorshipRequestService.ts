import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const deleteMentorshipRequests = async ({
  studentId,
  mentorId,
}: {
  studentId: string
  mentorId: string
}) => {
  try {
    const requests = await prisma.mentorshipRequests.deleteMany({
      where: { studentId: studentId, mentorId: mentorId },
    })
    return requests
  } catch (e) {
    log.error(e)
  }
}
