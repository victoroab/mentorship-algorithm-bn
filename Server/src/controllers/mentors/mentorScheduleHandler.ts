import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import {
  createMentorSchedule,
  getMentorSchedule,
} from '../../services/students/mentorScheduleService'

export const mentorScheduleHandler = async (req: Request, res: Response) => {
  const mentorEmail: string = req.body?.mentorEmail
  const title: string = req.body?.title
  const date: string = req.body?.date

  try {
    const schedule = await createMentorSchedule({ mentorEmail, title, date })
    res.send(schedule)
  } catch (e) {
    res.send(e)
  }
}

export const getMentorScheduleHandler = async (req: Request, res: Response) => {
  const mentorEmail = req.headers['x-user'] as string
  try {
    const schedules = await getMentorSchedule(mentorEmail)
    res.send(schedules)
  } catch (e) {
    res.send(e)
  }
}
