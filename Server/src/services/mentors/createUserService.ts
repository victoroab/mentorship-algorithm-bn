import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'

export const createUserService = async () => {
  try {
    const mentor = await prisma.mentor.create({
      data: {
        age: 18,
        class: 'First',
        course: 'MIS',
        email: 'balogunv50@gmail.com',
        ethnicity: 'yoruba',
        firstName: 'Victor',
        lastName: 'Balogun',
        gender: 'Male',
        level: 400,
        matricNo: '19CH026505',
        Availability: { create: { day: 'Monday' } },
        Hobbies: { create: { hobbie: 'Play Games' } },
        Skills: { create: { skill: 'FullStack dev' } },
        Preferences: {
          create: {
            class: 'Any',
            course: 'MIS',
            ethnicity: 'any',
            gender: 'any',
            hobbies: 'any',
            level: '200, 300, 400',
            skills: 'any',
          },
        },
      },
    })
    return mentor
  } catch (e) {
    log.error(e)
  }
}
