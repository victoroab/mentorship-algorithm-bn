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
      select: { tasks: { select: { id: true, title: true } } },
    })

    return tasks?.tasks
  } catch (e) {
    log.error(e)
  }
}
