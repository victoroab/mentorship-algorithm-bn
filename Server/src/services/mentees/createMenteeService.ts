import { prisma } from '../../config/prismaClient'
import log from '../../config/logger'
import { CreateMenteeInput } from '../../schema/mentee/menteeSchema'

export const createMentorService = async (
  reqBody: CreateMenteeInput['body']
) => {
  try {
  } catch (e) {
    log.error(e)
  }
}
