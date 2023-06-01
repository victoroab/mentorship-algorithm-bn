import { Request, Response } from 'express'
import { deleteMentorshipRequests } from '../../services/students/deleteMentorshipRequestService'

export const deleteMentorshipRequestHandler = async (
  req: Request<{ mentorId: string }, {}, { studentId: string }>,
  res: Response
) => {
  try {
    const { studentId } = req.body
    const mentorId = req.params?.mentorId

    const deleteMentorship = await deleteMentorshipRequests({
      studentId,
      mentorId,
    })
    res.json(deleteMentorship)
  } catch (e) {
    console.log(e)
  }
}
