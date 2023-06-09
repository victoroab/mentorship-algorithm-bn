import { Request, Response } from 'express'
import { createStudentService } from '../../services/students/createStudentService'
import { CreateMenteeInput } from '../../schema/student/studentSchema'
import log from '../../config/logger/logger'

export const createStudentHandler = async (
  req: Request<{}, {}, CreateMenteeInput['body']>,
  res: Response
) => {
  // receive user inputs from request body
  // call createMenteeService
  try {
    const student = await createStudentService(req.body)
    res.json(student)
  } catch (e) {
    res.send(e)
  }
}
