import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'

export const getMentorshipRequests = async (studentEmail: string) => {
  try {
    const requests = await prisma.student.findUnique({
      // placeholder id for testing frontend
      where: { email: studentEmail },
      select: {
        mentorshipRequests: {
          select: {
            mentor: {
              select: {
                id: true,
                firstName: true,
                email: true,
                lastName: true,
                department: true,
                staffNo: true,
              },
            },
          },
        },
      },
    })
    return requests
  } catch (e) {
    log.error(e)
  }
}

export const getMentorRequests = async (mentorEmail: string) => {
  try {
    const requests = await prisma.mentor.findUnique({
      // placeholder id for testing frontend
      where: { email: mentorEmail },
      select: {
        mentorshipRequests: {
          select: {
            student: {
              select: {
                id: true,
                firstName: true,
                email: true,
                lastName: true,
                matricNo: true,
                middleName: true,
              },
            },
          },
        },
      },
    })

    return requests
  } catch (e) {
    log.error(e)
  }
}

export const getStudentService = async (mentorEmail: string) => {
  const students = await prisma.mentor.findFirst({
    where: { email: mentorEmail },
    select: {
      Mentee: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          matricNo: true,
        },
      },
    },
  })
  return students
}

export const getStudentByIDService = async (studentId: string) => {
  const student = await prisma.student.findFirst({
    where: { id: studentId },
    include: {
      Hobbies: { select: { hobbies: true } },
      AreasOfInterest: { select: { aoi: true } },
      Availability: { select: { days: true } },
      Skills: { select: { skills: true } },
      tasks: true,
    },
  })
  return student
}

export const getMentorService = async (studentEmail: string) => {
  try {
    const mentor = await prisma.student.findFirst({
      where: { email: studentEmail },
      select: {
        mentor: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            rank: true,
            department: true,
            gender: true,
          },
        },
      },
    })

    return mentor
  } catch (e) {}
}
