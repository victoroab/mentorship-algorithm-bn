import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import { requestMentorshipService } from '../../services/students/requestMentorshipService'

export const requestMentorshipHandler = async (req: Request, res: Response) => {
  try {
    const { mentorId } = req.params
    const studentId: string = req.body?.studentId
    const requestMentor = await requestMentorshipService({
      mentorId,
      studentId,
    })
    res.json(requestMentor)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
