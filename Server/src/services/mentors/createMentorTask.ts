import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const createMentorTask = async ({
  mentorEmail,
  title,
}: {
  mentorEmail: string
  title: string
}) => {
  try {
    const createTask = await prisma.mentor.update({
      where: { email: mentorEmail },
      data: {
        tasks: { create: { title: title, completed: '' } },
      },
    })
    if (createTask) {
      return 'created'
    }
  } catch (e) {
    log.error(e)
  }
}

export const completeMentorTask = async ({
  mentorEmail,
  taskId,
  completedDate,
}: {
  mentorEmail: string
  taskId: string
  completedDate: string
}) => {
  try {
    const completeTask = await prisma.mentor.update({
      where: { email: mentorEmail },
      data: {
        tasks: {
          update: { where: { id: taskId }, data: { completed: completedDate } },
        },
      },
    })

    if (completeTask) {
      return 'updated'
    }
  } catch (e) {
    log.error(e)
  }
}
