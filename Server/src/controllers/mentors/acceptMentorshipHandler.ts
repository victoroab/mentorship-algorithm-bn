import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import { acceptMentorshipService } from '../../services/mentors/acceptMentorshipService'

export const acceptMentorshipHandler = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const mentorId: string = req.body?.mentorId
    const acceptMentorship = await acceptMentorshipService({
      mentorId,
      studentId,
    })
    res.json(acceptMentorship)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
