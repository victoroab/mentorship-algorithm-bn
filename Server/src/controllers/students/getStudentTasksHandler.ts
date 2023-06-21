import { Request, Response } from 'express'
import { getStudentTasks } from '../../services/students/getStudentTasks'

export const getStudentTaskHandler = async (req: Request, res: Response) => {
  const studentEmail = req.headers['x-user'] as string

  try {
    const task = await getStudentTasks({ studentEmail })
    res.send(task)
  } catch (e) {
    res.send(e)
  }
}
