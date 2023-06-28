import { Request, Response } from 'express'
import {
  getMentorTasks,
  getMentorTaskNumber,
} from '../../services/mentors/getMentorTasks'

export const getMentorTaskHandler = async (req: Request, res: Response) => {
  const mentorEmail = req.headers['x-user'] as string

  try {
    const task = await getMentorTasks({ mentorEmail })
    res.send(task)
  } catch (e) {
    res.send(e)
  }
}

export const getMentorTaskNumberHandler = async (
  req: Request,
  res: Response
) => {
  const mentorEmail = req.headers['x-user'] as string

  try {
    const numbers = await getMentorTaskNumber({ mentorEmail })
    res.send(numbers)
  } catch (e) {
    res.send(e)
  }
}
