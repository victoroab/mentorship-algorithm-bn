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
        tasks: { create: { title: title } },
      },
    })

    if (createTask) {
      return 'created'
    }
  } catch (e) {
    log.error(e)
  }
}
