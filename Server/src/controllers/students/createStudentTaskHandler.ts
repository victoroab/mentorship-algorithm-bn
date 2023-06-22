import { Request, Response } from 'express'
import {
  completeTask,
  createStudentTask,
} from '../../services/students/createStudentTask'

export const createStudentTaskHandler = async (req: Request, res: Response) => {
  const { studentEmail, title } = req?.body

  try {
    const task = await createStudentTask({ studentEmail, title })
    res.send(task)
  } catch (e) {
    res.send(e)
  }
}

export const completeTaskHandler = async (req: Request, res: Response) => {
  const { studentEmail, completedDate, taskId } = req?.body

  try {
    const update = await completeTask({ studentEmail, completedDate, taskId })
    res.send(update)
  } catch (e) {
    res.send(e)
  }
}
