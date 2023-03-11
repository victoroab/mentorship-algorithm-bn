import { Request, Response } from 'express'
import { deleteMentorshipRequests } from '../../services/mentees/deleteMentorshipRequestService'

export const deleteMentorshipRequestHandler = async (
  req: Request<{ mentorId: string }, {}, { menteeId: string }>,
  res: Response
) => {
  try {
    const { menteeId } = req.body
    const mentorId = req.params?.mentorId

    const deleteMentorship = await deleteMentorshipRequests({
      menteeId,
      mentorId,
    })
    res.json(deleteMentorship)
  } catch (e) {
    console.log(e)
  }
}
