import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorTasks = async ({
  mentorEmail,
}: {
  mentorEmail: string
}) => {
  try {
    const tasks = await prisma.mentor.findFirst({
      where: { email: mentorEmail },
      select: {
        tasks: {
          select: { id: true, title: true, completed: true, created_at: true },
        },
      },
    })

    return tasks?.tasks
  } catch (e) {
    log.error(e)
  }
}

export const getMentorTaskNumber = async ({
  mentorEmail,
}: {
  mentorEmail: string
}) => {
  try {
    const tasksCount = prisma.mentorTasks.count({
      where: { mentorEmail: mentorEmail },
    })

    const incomplete = prisma.mentorTasks.count({
      where: { mentorEmail: mentorEmail, completed: '' },
    })

    const transaction = await prisma.$transaction([tasksCount, incomplete])
    return [transaction[0] - transaction[1], transaction[1]]
  } catch (e) {
    log.info(e)
  }
}
