import { Request, Response } from 'express'
import { createMenteeService } from '../../services/mentees/createMenteeService'
import { CreateMenteeInput } from '../../schema/mentee/menteeSchema'
import log from '../../config/logger'

export const createMenteeHandler = async (
  req: Request<{}, {}, CreateMenteeInput['body']>,
  res: Response
) => {
  // receive user inputs from request body
  // call createMenteeService
  try {
    const mentee = await createMenteeService(req.body)
    res.json(mentee)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
