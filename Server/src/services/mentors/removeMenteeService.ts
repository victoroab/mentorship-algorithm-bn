import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const removeMenteeService = async ({
  mentorId,
  menteeId,
}: {
  mentorId: string
  menteeId: string
}) => {
  try {
    const removeMentee = await prisma.mentor.update({
      where: { id: mentorId },
      data: {
        Mentee: { disconnect: { id: menteeId } },
      },
    })

    return removeMentee
  } catch (e) {
    log.error(e)
  }
}
