import { Request, Response } from 'express'
import { createMentorService } from '../../services/mentors/createMentorService'
import { CreateMentorInput } from '../../schema/mentor/mentorSchema'
import log from '../../config/logger/logger'

export const createMentorHandler = async (
  req: Request<{}, {}, CreateMentorInput['body']>,
  res: Response
) => {
  // receive user inputs from request body
  // call createMentorService
  try {
    const mentor = await createMentorService(req.body)
    res.json(mentor)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
