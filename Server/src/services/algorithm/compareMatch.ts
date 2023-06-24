import { Request, Response } from 'express'
import { getRecommendedMentors } from './refined'

export const test1 = async (req: Request, res: Response) => {
  const studentEmail = req.headers['x-user'] as string
  try {
    const data = await getRecommendedMentors(studentEmail)
    res.json(data)
  } catch (e) {
    res.send(e)
  }
}
