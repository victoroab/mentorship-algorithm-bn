import { prisma } from '../../config/prismaClient/prismaClient'
import log from '../../config/logger/logger'
import { CreateMenteeInput } from '../../schema/student/studentSchema'

export const createStudentService = async (
  reqBody: CreateMenteeInput['body']
) => {
  try {
    const emailValiation = await prisma.mentor.findFirst({
      where: { email: reqBody.email },
    })

    if (emailValiation?.email == reqBody.email) {
      return 'this user exists'
    }

    const student = await prisma.student.create({
      data: {
        age: reqBody.age,
        email: reqBody.email,
        ethnicity: reqBody.ethnicity,
        firstName: reqBody.firstName,
        middleName: reqBody.middleName,
        lastName: reqBody.lastName,
        gender: reqBody.gender,
        matricNo: reqBody.matricNo,
        AreasOfInterest: { create: { aoi: `${[...reqBody.areasOfInterest]}` } },
        Availability: { create: { days: `${[...reqBody.availability]}` } },
        Hobbies: { create: { hobbies: `${[...reqBody.hobbies]}` } },
        Skills: { create: { skills: `${[...reqBody.skills]}` } },
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
    return student.id
  } catch (e) {
    log.error(e)
  }
}
