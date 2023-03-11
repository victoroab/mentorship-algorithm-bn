import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

export const deleteMentorshipRequests = async ({
  menteeId,
  mentorId,
}: {
  menteeId: string
  mentorId: string
}) => {
  try {
    const requests = await prisma.mentorshipRequests.deleteMany({
      where: { menteeId: menteeId, mentorId: mentorId },
    })
    return requests
  } catch (e) {
    log.error(e)
  }
}
