import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'
import { CreateMentorInput } from '../../schema/mentor/mentorSchema'

export const createMentorService = async (
  reqBody: CreateMentorInput['body']
) => {
  try {
    const emailValiation = await prisma.student.findFirst({
      where: { email: reqBody.email },
    })

    if (emailValiation?.email == reqBody.email) {
      return 'this user already exists'
    }

    const mentor = await prisma.mentor.create({
      data: {
        age: reqBody.age,
        email: reqBody.email,
        ethnicity: reqBody.ethnicity,
        department: reqBody.department,
        rank: reqBody.rank,
        staffNo: reqBody.staffNo,
        firstName: reqBody.firstName,
        middleName: reqBody.middleName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        Availability: { create: { days: `${[...reqBody.availability]}` } },
        Hobbies: { create: { hobbies: `${[...reqBody.hobbies]}` } },
        Skills: { create: { skills: `${[...reqBody.skills]}` } },
        Preferences: { create: { preferences: `${[]}` } },
        accountability: reqBody.accountability,
        adaptability: reqBody.adaptability,
        communication: reqBody.communication,
        empathy: reqBody.empathy,
        leadership: reqBody.leadership,
        openMindedness: reqBody.openMindedness,
        patience: reqBody.patience,
        problemSolving: reqBody.problemSolving,
        resilience: reqBody.resilience,
        trustworthiness: reqBody.trustworthiness,
        communicationChannel: reqBody.communicationChannel,
        communicationStyle: reqBody.communicationStyle,
        degreesObtained: reqBody.degreesObtained,
        expertiseInField: reqBody.expertiseInField,
        maritalStatus: reqBody.maritalStatus,
      },
    })
    return mentor.id
  } catch (e) {
    log.error(e)
  }
}
