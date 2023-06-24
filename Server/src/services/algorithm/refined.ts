import { MatchData } from './types'
import { personalityMatch, directMatch, preferencesMatch } from './algorithms'

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
