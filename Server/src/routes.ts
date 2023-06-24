import { Express, Request, Response } from 'express'
import validateRequest from './middleware/requests/validateRequest'

import { createMentorSchema } from './schema/mentor/mentorSchema'
import { createStudentSchema } from './schema/student/studentSchema'

import { createMentorHandler } from './controllers/mentors/createMentorHandler'
import { createStudentHandler } from './controllers/students/createStudentHandler'
import { getMentorsHandler } from './controllers/mentors/getMentorsHandler'
import { getMentorByIdHandler } from './controllers/mentors/getMentorByIdHandler'

import { requestMentorshipHandler } from './controllers/students/requestMentorshipHandler'
import { acceptMentorshipHandler } from './controllers/mentors/acceptMentorshipHandler'
import { removeMenteeHandler } from './controllers/mentors/removeMenteeHandler'
import {
  getMentorHandler,
  getMentorRequestHandler,
  getStudentByIdHandler,
  getStudentRequestHandler,
  getStudentsHandler,
} from './controllers/students/getMentorshipRequestsHandler'
import { deleteMentorshipRequestHandler } from './controllers/students/deleteMentorshipRequestHandler'

import { getClerkUsers, createClerkUser } from './auth/createClerkUser'

import { sendData } from './controllers/sendData'
import { getUser } from './auth/getUser'
import {
  completeTaskHandler,
  createStudentTaskHandler,
} from './controllers/students/createStudentTaskHandler'
import {
  getStudentTaskHandler,
  getTaskNumberHandler,
} from './controllers/students/getStudentTasksHandler'
import {
  createScheduleHandler,
  getScheduleHandler,
} from './controllers/students/studentScheduleHandler'
import {
  directMatch,
  personalityMatch,
  test1,
} from './services/algorithm/compareMatch'

const routes = (app: Express) => {
  app.get('/health-check', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post(
    '/api/mentor/register',
    validateRequest(createMentorSchema),
    createMentorHandler
  )

  app.post(
    '/api/student/register',
    validateRequest(createStudentSchema),
    createStudentHandler
  )

  app.get('/api/mentors/view', getMentorsHandler)

  app.get('/api/mentors/view/:mentorId', getMentorByIdHandler)

  app.post('/api/mentor/:mentorId/request-mentor', requestMentorshipHandler)

  app.post('/api/mentee/:studentId/accept-mentee', acceptMentorshipHandler)

  app.post('/api/mentee/:studentId/remove-mentee', removeMenteeHandler)

  app.post('/api/mentee/get-mentorship-requests', getStudentRequestHandler)
  app.post('/api/mentee/get-mentor', getMentorHandler)

  app.post('/api/mentor/get-mentorship-requests', getMentorRequestHandler)
  app.post('/api/mentor/get-students', getStudentsHandler)
  app.post('/api/mentor/get-student-by-id', getStudentByIdHandler)

  app.post(
    '/api/mentee/:mentorId/delete-mentorship-requests',
    deleteMentorshipRequestHandler
  )

  app.post('/api/sign-up/get-user', getUser)
  app.get('/api/get-students', sendData)

  app.post('/api/mentee/create-task', createStudentTaskHandler)
  app.get('/api/mentee/get-tasks', getStudentTaskHandler)
  app.get('/api/mentee/get-task-number', getTaskNumberHandler)
  app.post('/api/mentee/complete-task', completeTaskHandler)

  app.post('/api/mentee/create-schedule', createScheduleHandler)
  app.get('/api/mentee/get-schedules', getScheduleHandler)

  app.get('/api/test-algorithm', test1)
}

export default routes
