import { Request, Response } from 'express'
import { getMentorshipRequests } from '../../services/students/getMentorshipRequestsService'

export const getMentorshipRequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const studentEmail: string = req.body?.studentEmail
    const mentorshipRequests = await getMentorshipRequests(studentEmail)
    res.json(mentorshipRequests)
  } catch (e) {
    console.log(e)
  }
}
