import { Request, Response } from 'express'
import log from '../../config/logger'
import { acceptMentorshipService } from '../../services/mentors/acceptMentorshipService'

export const acceptMentorshipHandler = async (req: Request, res: Response) => {
  try {
    const { menteeId } = req.params
    const mentorId: string = req.body?.mentorId
    const acceptMentorship = acceptMentorshipService({ mentorId, menteeId })
    res.json(acceptMentorship)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
