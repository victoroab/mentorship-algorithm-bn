import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getStudentTasks = async ({
  studentEmail,
}: {
  studentEmail: string
}) => {
  try {
    const tasks = await prisma.student.findFirst({
      where: { email: studentEmail },
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

export const getTaskNumber = async ({
  studentEmail,
}: {
  studentEmail: string
}) => {
  try {
    const tasksCount = prisma.studentsTasks.count({
      where: { studentEmail: studentEmail },
    })

    const incomplete = prisma.studentsTasks.count({
      where: { studentEmail: studentEmail, completed: '' },
    })

    const transaction = await prisma.$transaction([tasksCount, incomplete])
    return [transaction[0] - transaction[1], transaction[1]]
  } catch (e) {
    log.info(e)
  }
}
