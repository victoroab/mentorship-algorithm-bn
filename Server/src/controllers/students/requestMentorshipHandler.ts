import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import { requestMentorshipService } from '../../services/students/requestMentorshipService'

export const requestMentorshipHandler = async (req: Request, res: Response) => {
  try {
    const { mentorId } = req.params
    const studentEmail: string = req.body?.studentEmail
    const requestMentor = await requestMentorshipService({
      mentorId,
      studentEmail,
    })
    res.json(requestMentor)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
