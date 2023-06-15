import { Request, Response } from 'express'
import log from '../../config/logger/logger'
import {
  getMentorRequests,
  getMentorService,
  getMentorshipRequests,
  getStudentByIDService,
  getStudentService,
} from '../../services/students/getMentorshipRequestsService'

export const getStudentRequestHandler = async (req: Request, res: Response) => {
  try {
    const studentEmail: string = req.body?.studentEmail
    const mentorshipRequests = await getMentorshipRequests(studentEmail)
    res.json(mentorshipRequests)
  } catch (e) {
    log.error(e)
  }
}

export const getMentorRequestHandler = async (req: Request, res: Response) => {
  try {
    const mentorEmail: string = req.body?.mentorEmail
    // res.send(mentorEmail)
    const mentorshipRequests = await getMentorRequests(mentorEmail)
    res.json(mentorshipRequests)
  } catch (e) {
    log.error(e)
  }
}

export const getStudentsHandler = async (req: Request, res: Response) => {
  const mentorEmail = req.body?.mentorEmail
  try {
    const students = await getStudentService(mentorEmail)
    res.json(students?.Mentee)
  } catch (e) {
    log.error(e)
  }
}

export const getStudentByIdHandler = async (req: Request, res: Response) => {
  const studentId = req.body?.studentId
  try {
    const student = await getStudentByIDService(studentId)
    res.json(student)
  } catch (e) {
    log.error(e)
  }
}

export const getMentorHandler = async (req: Request, res: Response) => {
  const studentEmail = req.body?.studentEmail
  try {
    const mentor = await getMentorService(studentEmail)
    res.json(mentor)
  } catch (e) {
    log.error(e)
  }
}
