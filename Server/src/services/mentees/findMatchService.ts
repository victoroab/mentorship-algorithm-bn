import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

type Matches = {
  studentId: string
  student: string
  mentorId: string
  mentor: string
  score: number
}[]

export const findMatchService = async (menteeId: string) => {
  try {
    const mentee = await prisma.mentee.findFirst({
      where: { id: menteeId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        age: true,
        gender: true,
        course: true,
        Skills: { select: { skills: true } },
        Hobbies: { select: { hobbies: true } },
        Availability: { select: { days: true } },
      },
    })

    const mentors = await prisma.mentor.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        age: true,
        gender: true,
        course: true,
        Skills: { select: { skills: true } },
        Hobbies: { select: { hobbies: true } },
        Availability: { select: { days: true } },
        Preferences: { select: { preferences: true } },
      },
    })

    const menteeData = {
      id: `${mentee?.id}`,
      name: mentee?.firstName + ' ' + mentee?.lastName,
      age: mentee?.age,
      gender: mentee?.gender,
      course: mentee?.course,
      skills: mentee?.Skills.skills.replace(/,/g, ' ').split(' '),
      hobbies: mentee?.Hobbies.hobbies.replace(/,/g, ' ').split(' '),
      availability: mentee?.Availability.days.replace(/,/g, ' ').split(' '),
      preferences: ['male', 'yoruba', 'MIS', '400', 'First'],
    }

    const mentorData = mentors.map((mentor) => {
      return {
        id: mentor.id,
        name: `${mentor.firstName + ' ' + mentor.lastName}`,
        age: mentor.age,
        gender: mentor.gender,
        course: mentor.course,
        skills: mentor.Skills.skills.replace(/,/g, ' ').split(' '),
        hobbies: mentor.Hobbies.hobbies.replace(/,/g, ' ').split(' '),
        availability: mentor.Availability.days.replace(/,/g, ' ').split(' '),
        preferences: mentor.Preferences.preferences
          .replace(/,/g, ' ')
          .split(' '),
      }
    })

    function getCompatibilityScore(
      student: typeof menteeData,
      mentor: typeof mentorData[0]
    ) {
      let score: number = 0

      if (mentor.skills?.some((skill) => student.skills?.includes(skill))) {
        score += 1
      }

      if (mentor.hobbies?.some((hobbie) => student.hobbies?.includes(hobbie))) {
        score += 1
      }

      if (
        mentor.availability?.some((day) => student.availability?.includes(day))
      ) {
        score += 1
      }

      const commonPrefs = student.preferences.filter((pref) =>
        mentor.preferences?.includes(pref)
      )

      score += commonPrefs.length
      return score
    }

    function matchStudentWithMentors(
      student: typeof menteeData,
      mentors: typeof mentorData
    ) {
      const matches: Matches = []
      for (const mentor of mentors) {
        const score = getCompatibilityScore(student, mentor)
        matches.push({
          studentId: student?.id,
          student: student.name,
          mentorId: mentor.id,
          mentor: mentor.name,
          score,
        })
      }
      return matches
    }

    function findBestMatches(matchedArray: Matches) {
      const sortedArray = matchedArray.sort((a, b) => a.score - b.score)
      const sl = sortedArray.slice(-2)

      let highestMatched = [] as any
      highestMatched.push(sl)
      return highestMatched
    }

    const matched = matchStudentWithMentors(menteeData, mentorData)
    return findBestMatches(matched)
  } catch (e) {
    log.error(e)
  }
}
