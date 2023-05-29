import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import { getMentorsService } from '../../services/mentors/getMentorService'

export const getMentorsHandler = async (req: Request, res: Response) => {
  try {
    const mentors = await getMentorsService()
    res.json(mentors)
  } catch (e) {
    log.error(e)
  }
}
