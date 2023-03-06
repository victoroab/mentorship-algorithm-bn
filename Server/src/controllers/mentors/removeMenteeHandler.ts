import { Request, Response } from 'express'
import log from '../../config/logger'
import { removeMenteeService } from '../../services/mentors/removeMenteeService'

export const removeMenteeHandler = async (req: Request, res: Response) => {
  try {
    const { menteeId } = req.params
    const mentorId: string = req.body?.mentorId

    const removeMentee = await removeMenteeService({ mentorId, menteeId })
    res.json(removeMentee)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
