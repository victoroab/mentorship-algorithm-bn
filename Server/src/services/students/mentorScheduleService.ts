import { prisma } from '../../config/prismaClient/prismaClient'

export const createMentorSchedule = async ({
  mentorEmail,
  title,
  date,
}: {
  mentorEmail: string
  title: string
  date: string
}) => {
  try {
    const schedule = await prisma.mentor.update({
      where: { email: mentorEmail },
      data: { schedules: { create: { title: title, date: date } } },
    })

    if (schedule) {
      return 'Created'
    }
  } catch (e) {
    return e
  }
}

export const getMentorSchedule = async (mentorEmail: string) => {
  try {
    const schedules = await prisma.mentor.findFirst({
      where: { email: mentorEmail },
      select: { schedules: true },
    })

    return schedules?.schedules
  } catch (e) {
    return e
  }
}
