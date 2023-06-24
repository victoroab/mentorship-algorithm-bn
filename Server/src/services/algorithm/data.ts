import {
  DirectTest,
  MatchData,
  PersonalityTest,
  PreferencesTest,
} from './types'

export const mentorX: MatchData = {
  id: '1',
  email: 'a@gmail.com',
  name: 'MentorX',
  directData: {
    availability: ['Monday', 'Tuesday', 'Wednesday'],
    hobbies: ['Skipping', 'Cooking'],
    skills: ['Speech', 'Writing'],
  },
  personalityData: {
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
  },
  preferencesData: {
    communicationStyle: 'a',
    communicationChannel: 'email',
    degreesObtained: 'Msc',
    expertiseInField: '2 years',
    maritalStatus: 'Married',
  },
}

export const studentX: MatchData = {
  id: '2',
  email: 'b@gmail.com',
  name: 'StudentX',
  directData: {
    availability: ['Wednesday', 'Thursday', 'Friday'],
    hobbies: ['Cooking', 'Racing'],
    skills: ['Technical', 'Video'],
  },
  personalityData: {
    empathy: 0.8,
    communication: 0.6,
    patience: 0.5,
    openMindedness: 0.7,
    adaptability: 0.8,
    leadership: 0.9,
    accountability: 0.8,
    problemSolving: 0.8,
    resilience: 0.4,
    trustworthiness: 0.8,
  },
  preferencesData: {
    communicationStyle: 'a',
    communicationChannel: 'video',
    degreesObtained: 'Msc',
    expertiseInField: '3 years',
    maritalStatus: 'Single',
  },
}

export const mentor1: PersonalityTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'mentor1',
  personalityData: {
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
  },
}

export const student: PersonalityTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'student',
  personalityData: {
    empathy: 0.8,
    communication: 0.6,
    patience: 0.5,
    openMindedness: 0.7,
    adaptability: 0.8,
    leadership: 0.9,
    accountability: 0.8,
    problemSolving: 0.8,
    resilience: 0.4,
    trustworthiness: 0.8,
  },
}

export const mentor2: DirectTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'mentor2',
  directData: {
    availability: ['Monday', 'Tuesday', 'Wednesday'],
    hobbies: ['Skipping', 'Cooking'],
    skills: ['Speech', 'Writing'],
  },
}

export const student2: DirectTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'student2',
  directData: {
    availability: ['Wednesday', 'Thursday', 'Friday'],
    hobbies: ['Cooking', 'Racing'],
    skills: ['Technical', 'Video'],
  },
}

export const mentor3: PreferencesTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'mentor3',
  preferencesData: {
    communicationStyle: 'a',
    communicationChannel: 'email',
    degreesObtained: 'Msc',
    expertiseInField: '2 years',
    maritalStatus: 'Married',
  },
}
export const student3: PreferencesTest = {
  id: 'jsks',
  email: 'd@gmail.com',
  name: 'student3',
  preferencesData: {
    communicationStyle: 'a',
    communicationChannel: 'video',
    degreesObtained: 'Msc',
    expertiseInField: '3 years',
    maritalStatus: 'Single',
  },
}
