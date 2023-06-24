import {
  MatchData,
  DirectData,
  PersonalityTraits,
  PreferencesData,
} from './types'

export function personalityMatch(
  studentTraits: PersonalityTraits,
  mentorTraits: PersonalityTraits
): number {
  const traits: (keyof PersonalityTraits)[] = Object.keys(
    studentTraits
  ) as (keyof PersonalityTraits)[]
  const traitCount = traits.length
  let totalDifference = 0

  for (const trait of traits) {
    totalDifference += Math.abs(studentTraits[trait] - mentorTraits[trait])
  }

  const averageDifference = totalDifference / traitCount
  const score = 1 - averageDifference

  return score
}

export function directMatch(
  studentDirectData: DirectData,
  mentorDirectData: DirectData
) {
  let availabilityScore = 0
  for (const availability of studentDirectData.availability) {
    if (mentorDirectData.availability.includes(availability)) {
      availabilityScore++
    }
  }

  let skillsScore = 0
  for (const skill of studentDirectData.skills) {
    if (mentorDirectData.skills.includes(skill)) {
      skillsScore++
    }
  }

  let hobbiesScore = 0
  for (const hobby of studentDirectData.hobbies) {
    if (mentorDirectData.hobbies.includes(hobby)) {
      hobbiesScore++
    }
  }

  const availabilityWeight = 2
  const skillsWeight = 1
  const hobbiesWeight = 1.5

  const totalScore =
    availabilityScore * availabilityWeight +
    skillsScore * skillsWeight +
    hobbiesScore * hobbiesWeight
  return Number((totalScore * 0.1).toFixed(2))
}

export function preferencesMatch(
  studentPreferencesData: PreferencesData,
  mentorPreferencesData: PreferencesData
) {
  const preferences: (keyof PreferencesData)[] = Object.keys(
    studentPreferencesData
  ) as (keyof PreferencesData)[]
  const preferencesCount = preferences.length

  let preferencesScore = 0
  for (const preference of preferences) {
    if (
      studentPreferencesData[preference] === mentorPreferencesData[preference]
    ) {
      preferencesScore++
    }
  }

  return Number((preferencesScore / preferencesCount).toFixed(2))
}

export const findMatch = ({
  student,
  mentors,
}: {
  student: MatchData
  mentors: MatchData[]
}) => {
  let matches = []
  for (const m of mentors) {
    const personalityScore = personalityMatch(
      student.personalityData,
      m.personalityData
    )

    const directScore = directMatch(student.directData, m.directData)

    const preferencesScore = preferencesMatch(
      student.preferencesData,
      m.preferencesData
    )

    const directWeight = 1.5
    const personalityWeight = 2
    const preferencesWeight = 2.5

    const totalScore = Number(
      (
        (personalityScore * personalityWeight +
          preferencesScore * preferencesWeight +
          directScore * directWeight) /
        6
      ).toFixed(2)
    )

    matches.push({
      name: m.name,
      email: m.email,
      similarityScore: totalScore,
    })
  }
  return matches
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .splice(0, 4)
}
