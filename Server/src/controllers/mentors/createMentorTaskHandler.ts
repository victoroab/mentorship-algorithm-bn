import { Request, Response } from 'express'
import {
  createMentorTask,
  completeMentorTask,
} from '../../services/mentors/createMentorTask'

export const createMentorTaskHandler = async (req: Request, res: Response) => {
  const { mentorEmail, title } = req?.body

  try {
    const task = await createMentorTask({ mentorEmail, title })
    res.send(task)
  } catch (e) {
    res.send(e)
  }
}

export const completeMentorTaskHandler = async (
  req: Request,
  res: Response
) => {
  const { mentorEmail, completedDate, taskId } = req?.body

  try {
    const update = await completeMentorTask({
      mentorEmail,
      completedDate,
      taskId,
    })
    res.send(update)
  } catch (e) {
    res.send(e)
  }
}
