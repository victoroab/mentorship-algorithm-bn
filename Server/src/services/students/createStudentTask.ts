import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const createStudentTask = async ({
  studentEmail,
  title,
}: {
  studentEmail: string
  title: string
}) => {
  try {
    const createTask = await prisma.student.update({
      where: { email: studentEmail },
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

export const completeTask = async ({
  studentEmail,
  taskId,
  completedDate,
}: {
  studentEmail: string
  taskId: string
  completedDate: string
}) => {
  try {
    const completeTask = await prisma.student.update({
      where: { email: studentEmail },
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
