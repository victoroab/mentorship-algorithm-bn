import { Express, Request, Response } from 'express'
import validateRequest from './middware/validateRequest'

import { createMentorSchema } from './schema/mentor/mentorSchema'
import { createStudentSchema } from './schema/student/studentSchema'

import { createMentorHandler } from './controllers/mentors/createMentorHandler'
import { createStudentHandler } from './controllers/students/createStudentHandler'
import { getMentorsHandler } from './controllers/mentors/getMentorsHandler'
import { getMentorByIdHandler } from './controllers/mentors/getMentorByIdHandler'

import { requestMentorshipHandler } from './controllers/students/requestMentorshipHandler'
import { acceptMentorshipHandler } from './controllers/mentors/acceptMentorshipHandler'
import { removeMenteeHandler } from './controllers/mentors/removeMenteeHandler'
import { getMentorshipRequestHandler } from './controllers/students/getMentorshipRequestsHandler'
import { deleteMentorshipRequestHandler } from './controllers/students/deleteMentorshipRequestHandler'
// import { findMatchHandler } from './controllers/students/findMatchHandler'
import { uploadHandler } from './controllers/Images/uploadHandler'

import { getClerkUsers } from './auth/clerkUsers'

import { storage, upload } from './server'
import { sendData } from './controllers/sendData'
// const upload = multer({ storage: storage })

const routes = (app: Express) => {
  // Health Check
  app.get('/health-check', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post(
    '/api/u/mentor/register',
    validateRequest(createMentorSchema),
    createMentorHandler
  )

  app.post(
    '/api/u/student/register',
    validateRequest(createStudentSchema),
    createStudentHandler
  )

  app.get('/api/u/mentors/view', getMentorsHandler)
  app.get('/api/u/mentors/view/:mentorId', getMentorByIdHandler)

  app.post('/api/a/u/mentor/:mentorId/request-mentor', requestMentorshipHandler)
  app.post('/api/a/u/mentee/:menteeId/accept-mentee', acceptMentorshipHandler)
  app.post('/api/a/u/mentee/:menteeId/remove-mentee', removeMenteeHandler)

  app.get(
    '/api/a/u/mentee/get-mentorship-requests',
    getMentorshipRequestHandler
  )

  app.post(
    '/api/a/u/mentee/:mentorId/delete-mentorship-requests',
    deleteMentorshipRequestHandler
  )

  // app.get(
  //   '/api/a/u/mentee/:menteeId/matching-system/find-match',
  //   findMatchHandler
  // )

  app.post('/api/upload-image', upload.single('image'), uploadHandler)

  // app.get('/api/get-users', getClerkUsers)

  app.get('/api/get-students', sendData)
}

export default routes
