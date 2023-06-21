import { prisma } from '../../config/prismaClient/prismaClient'

export const createScheduleService = async ({
  studentEmail,
  title,
  date,
}: {
  studentEmail: string
  title: string
  date: string
}) => {
  try {
    const schedule = await prisma.student.update({
      where: { email: studentEmail },
      data: { schedules: { create: { title: title, date: date } } },
    })

    if (schedule) {
      return 'Created'
    }
  } catch (e) {
    return e
  }
}

export const getScheduleService = async (studentEmail: string) => {
  try {
    const schedules = await prisma.student.findFirst({
      where: { email: studentEmail },
      select: { schedules: true },
    })
    return schedules?.schedules
  } catch (e) {
    return e
  }
}
