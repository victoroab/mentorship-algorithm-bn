export type MatchData = {
  id: string
  name: string
  email: string
  directData: {
    availability: string[]
    skills: string[]
    hobbies: string[]
  }
  preferencesData: {
    communicationStyle: string
    degreesObtained: string
    communicationChannel: string
    expertiseInField: string
    maritalStatus: string
  }
  personalityData: {
    empathy: number
    communication: number
    patience: number
    openMindedness: number
    adaptability: number
    leadership: number
    accountability: number
    problemSolving: number
    resilience: number
    trustworthiness: number
  }
}

export type MentorData = MatchData[]

export type PersonalityTraits = {
  empathy: number
  communication: number
  patience: number
  openMindedness: number
  adaptability: number
  leadership: number
  accountability: number
  problemSolving: number
  resilience: number
  trustworthiness: number
}

export type DirectData = {
  availability: string[]
  skills: string[]
  hobbies: string[]
}

export type PreferencesData = {
  communicationStyle: string
  degreesObtained: string
  communicationChannel: string
  expertiseInField: string
  maritalStatus: string
}

export type PersonalityTest = Pick<
  MatchData,
  'id' | 'name' | 'email' | 'personalityData'
>

export type DirectTest = Pick<MatchData, 'id' | 'name' | 'email' | 'directData'>

export type PreferencesTest = Pick<
  MatchData,
  'id' | 'name' | 'email' | 'preferencesData'
>
