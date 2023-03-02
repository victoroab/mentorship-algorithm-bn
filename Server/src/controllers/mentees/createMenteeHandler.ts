import { Request, Response } from 'express'
// import { createMenteeService } from '../../services/mentees/createMenteeService'
import { CreateMenteeInput } from '../../schema/mentee/menteeSchema'
import log from '../../config/logger'

export const createMentorHandler = async (
  req: Request<{}, {}, CreateMenteeInput['body']>,
  res: Response
) => {
  // receive user inputs from request body
  // call createMentorService
  try {
    // const mentor = await createMentorService()
    // res.json(mentor)
  } catch (e: any) {
    log.error(e)
    return res.status(409).send(e.message)
  }
}
