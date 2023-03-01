import { Request, Response } from 'express'
import { createMentorService } from '../../services/mentors/createMentorService'
import log from '../../config/logger'

export const createMentorHandler = async (req: Request, res: Response) => {
  // receive user inputs from request
  // call createMentorService
  try {
    const mentor = await createMentorService()
    res.json(mentor)
  } catch (e: any) {
    log.error(e)
    return res.status(409).send(e.message)
  }
}
