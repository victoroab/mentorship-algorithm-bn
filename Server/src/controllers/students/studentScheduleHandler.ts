import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import {
  createScheduleService,
  getScheduleService,
} from '../../services/students/studentScheduleService'

export const createScheduleHandler = async (req: Request, res: Response) => {
  const studentEmail: string = req.body?.studentEmail
  const title: string = req.body?.title
  const date: string = req.body?.date

  try {
    const schedule = await createScheduleService({ studentEmail, title, date })
    res.send(schedule)
  } catch (e) {
    res.send(e)
  }
}

export const getScheduleHandler = async (req: Request, res: Response) => {
  const studentEmail = req.headers['x-user'] as string
  try {
    const schedules = await getScheduleService(studentEmail)
    res.send(schedules)
  } catch (e) {
    res.send(e)
  }
}
