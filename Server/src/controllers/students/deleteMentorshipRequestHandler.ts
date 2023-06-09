import { Request, Response } from 'express'
import { deleteMentorshipRequests } from '../../services/students/deleteMentorshipRequestService'

export const deleteMentorshipRequestHandler = async (
  req: Request<{ mentorId: string }, {}, { studentEmail: string }>,
  res: Response
) => {
  try {
    const { studentEmail } = req.body
    const mentorId = req.params?.mentorId

    const deleteMentorship = await deleteMentorshipRequests({
      studentEmail,
      mentorId,
    })
    res.json(deleteMentorship)
  } catch (e) {
    console.log(e)
  }
}
