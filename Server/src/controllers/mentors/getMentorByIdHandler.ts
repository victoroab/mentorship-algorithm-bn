import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import { getMentorByIdService } from '../../services/mentors/getMentorByIdService'

export const getMentorByIdHandler = async (req: Request, res: Response) => {
  try {
    const { mentorId } = req.params
    const mentor = await getMentorByIdService(mentorId)
    res.json(mentor)
  } catch (e) {
    log.error(e)
  }
}
