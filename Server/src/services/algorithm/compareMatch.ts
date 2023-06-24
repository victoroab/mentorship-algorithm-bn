import log from '../../config/logger/logger'
import { Request, Response } from 'express'
import { MentorData, PersonalityTraits } from './types'

import { mentorX, studentX } from './data'
import { findMatch } from './refined'

export const personalityMatch = async (req: Request, res: Response) => {
  function calculateSimilarityScore(
    person1: PersonalityTraits,
    person2: PersonalityTraits
  ): number {
    const traits: (keyof PersonalityTraits)[] = Object.keys(
      person1
    ) as (keyof PersonalityTraits)[]
    const traitCount = traits.length
    let totalDifference = 0

    for (const trait of traits) {
      totalDifference += Math.abs(person1[trait] - person2[trait])
    }

    const averageDifference = totalDifference / traitCount
    const similarityScore = 1 - averageDifference

    return similarityScore
  }
  // Example usage
  const person1Traits: PersonalityTraits = {
    empathy: 0.8,
    communication: 0.7,
    patience: 0.6,
    openMindedness: 0.9,
    adaptability: 0.5,
    leadership: 0.8,
    accountability: 0.7,
    problemSolving: 0.6,
    resilience: 0.7,
    trustworthiness: 0.9,
  }

  const person2Traits: PersonalityTraits = {
    empathy: 0.7,
    communication: 0.6,
    patience: 0.7,
    openMindedness: 0.8,
    adaptability: 0.6,
    leadership: 0.7,
    accountability: 0.4,
    problemSolving: 0.7,
    resilience: 0.8,
    trustworthiness: 0.8,
  }

  const similarityScore = calculateSimilarityScore(person1Traits, person2Traits)
  res.json(similarityScore)
}

export const directMatch = async (req: Request, res: Response) => {
  // Sample data
  const mentors = [
    {
      name: 'Mentor A',
      expertise: ['JavaScript', 'Web Development'],
      availability: ['Monday', 'Wednesday'],
    },
    {
      name: 'Mentor B',
      expertise: ['Python', 'Data Science'],
      availability: ['Tuesday', 'Thursday'],
    },
    {
      name: 'Mentor C',
      expertise: ['JavaScript', 'UI/UX Design'],
      availability: ['Monday', 'Tuesday', 'Wednesday'],
    },
    // Add more mentors...
  ]

  type MD = typeof mentors

  // Target mentee for matching
  const targetMentee = {
    name: 'Mentee X',
    expertise: ['JavaScript'],
    availability: ['Tuesday', 'Thursday'],
  }

  // Similarity function
  function calculateSimilarity(
    mentor: (typeof mentors)[0],
    mentee: typeof targetMentee
  ) {
    // Custom similarity calculation based on attributes
    let expertiseScore = 0
    for (const expertise of mentee.expertise) {
      if (mentor.expertise.includes(expertise)) {
        expertiseScore++
      }
    }

    let availabilityScore = 0
    for (const day of mentee.availability) {
      if (mentor.availability.includes(day)) {
        availabilityScore++
      }
    }

    // You can define weights for each attribute based on importance
    const expertiseWeight = 2
    const availabilityWeight = 1

    const totalScore =
      expertiseScore * expertiseWeight + availabilityScore * availabilityWeight
    return totalScore
  }

  // Comparative filtering algorithm
  function matchMentors(mentors: MD, mentee: typeof targetMentee) {
    const matches = []
    for (const mentor of mentors) {
      const similarity = calculateSimilarity(mentor, mentee)
      // Adjust the threshold or define criteria based on your requirements
      if (similarity >= 2) {
        matches.push({
          mentor,
          similarity: Number((similarity * 0.1).toFixed(2)),
        })
      }
    }
    return matches.sort((a, b) => b.similarity - a.similarity)
  }

  // Usage
  const matchingResults = matchMentors(mentors, targetMentee)
  res.send(matchingResults)
}

export const test1 = async (req: Request, res: Response) => {
  const results = findMatch({
    student: studentX,
    mentors: [mentorX],
  })

  res.json(results)
}
