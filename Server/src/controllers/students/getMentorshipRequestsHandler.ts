import { Request, Response } from 'express'
import { getMentorshipRequests } from '../../services/students/getMentorshipRequestsService'

export const getMentorshipRequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const mentorshipRequests = await getMentorshipRequests()
    res.json(mentorshipRequests)
  } catch (e) {
    console.log(e)
  }
}