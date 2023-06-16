import { Request, Response } from 'express'
import { createStudentTask } from '../../services/students/createStudentTask'

export const createStudentTaskHandler = async (req: Request, res: Response) => {
  const { studentEmail, title } = req?.body

  try {
    const task = await createStudentTask({ studentEmail, title })
    res.send(task)
  } catch (e) {
    res.send(e)
  }
}
