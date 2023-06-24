import { prisma } from '../../config/prismaClient/prismaClient'
import { MatchData } from './types'
import { findMatch } from './algorithms'

export const getRecommendedMentors = async (studentEmail: string) => {
  try {
    const getStudentData = prisma.student.findFirst({
      where: { email: studentEmail },
      select: {
        id: true,
        firstName: true,
        email: true,
        Availability: true,
        Skills: true,
        Hobbies: true,
        communicationChannel: true,
        communicationStyle: true,
        degreesObtained: true,
        expertiseInField: true,
        maritalStatus: true,
        empathy: true,
        communication: true,
        patience: true,
        openMindedness: true,
        adaptability: true,
        leadership: true,
        accountability: true,
        problemSolving: true,
        resilience: true,
        trustworthiness: true,
      },
    })

    const getMentorsData = prisma.mentor.findMany({
      select: {
        id: true,
        firstName: true,
        email: true,
        Availability: true,
        Skills: true,
        Hobbies: true,
        communicationChannel: true,
        communicationStyle: true,
        degreesObtained: true,
        expertiseInField: true,
        maritalStatus: true,
        empathy: true,
        communication: true,
        patience: true,
        openMindedness: true,
        adaptability: true,
        leadership: true,
        accountability: true,
        problemSolving: true,
        resilience: true,
        trustworthiness: true,
      },
    })

    const transaction = await prisma.$transaction([
      getStudentData,
      getMentorsData,
    ])

    if (transaction[0] && transaction[1]) {
      const studentData: MatchData = {
        id: transaction[0].id,
        name: transaction[0].firstName,
        email: transaction[0].email,
        directData: {
          availability: transaction[0].Availability.days.split(','),
          skills: transaction[0].Skills.skills.split(','),
          hobbies: transaction[0].Hobbies.hobbies.split(','),
        },
        personalityData: {
          accountability: transaction[0].accountability,
          adaptability: transaction[0].adaptability,
          communication: transaction[0].communication,
          empathy: transaction[0].empathy,
          leadership: transaction[0].leadership,
          openMindedness: transaction[0].openMindedness,
          patience: transaction[0].patience,
          problemSolving: transaction[0].problemSolving,
          resilience: transaction[0].resilience,
          trustworthiness: transaction[0].trustworthiness,
        },
        preferencesData: {
          communicationChannel: transaction[0].communicationChannel
            ? transaction[0].communicationChannel
            : '',
          communicationStyle: transaction[0].communicationStyle
            ? transaction[0].communicationStyle
            : '',
          degreesObtained: transaction[0].degreesObtained
            ? transaction[0].degreesObtained
            : '',
          expertiseInField: transaction[0].expertiseInField
            ? transaction[0].expertiseInField
            : '',
          maritalStatus: transaction[0].maritalStatus
            ? transaction[0].maritalStatus
            : '',
        },
      }

      const mentorsData: MatchData[] = transaction[1].map((mentor) => {
        return {
          id: mentor.id,
          name: mentor.firstName,
          email: mentor.email,
          directData: {
            availability: mentor.Availability.days.split(','),
            skills: mentor.Skills.skills.split(','),
            hobbies: mentor.Hobbies.hobbies.split(','),
          },
          personalityData: {
            accountability: mentor.accountability,
            adaptability: mentor.adaptability,
            communication: mentor.communication,
            empathy: mentor.empathy,
            leadership: mentor.leadership,
            openMindedness: mentor.openMindedness,
            patience: mentor.patience,
            problemSolving: mentor.problemSolving,
            resilience: mentor.resilience,
            trustworthiness: mentor.trustworthiness,
          },
          preferencesData: {
            communicationChannel: mentor.communicationChannel
              ? mentor.communicationChannel
              : '',
            communicationStyle: mentor.communicationStyle
              ? mentor.communicationStyle
              : '',
            degreesObtained: mentor.degreesObtained
              ? mentor.degreesObtained
              : '',
            expertiseInField: mentor.expertiseInField
              ? mentor.expertiseInField
              : '',
            maritalStatus: mentor.maritalStatus ? mentor.maritalStatus : '',
          },
        }
      })

      const results = findMatch({
        student: studentData,
        mentors: mentorsData,
      })

      return results
    } else {
      return 'No Data'
    }
  } catch (e) {
    return e
  }
}
