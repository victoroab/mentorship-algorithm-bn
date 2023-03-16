import { Express, Request, Response } from 'express'
import validateRequest from './middware/validateRequest'

import { createMentorSchema } from './schema/mentor/mentorSchema'
import { createMenteeSchema } from './schema/mentee/menteeSchema'

import { createMentorHandler } from './controllers/mentors/createMentorHandler'
import { createMenteeHandler } from './controllers/mentees/createMenteeHandler'
import { getMentorsHandler } from './controllers/mentors/getMentorsHandler'
import { getMentorByIdHandler } from './controllers/mentors/getMentorByIdHandler'

import { requestMentorshipHandler } from './controllers/mentees/requestMentorshipHandler'
import { acceptMentorshipHandler } from './controllers/mentors/acceptMentorshipHandler'
import { removeMenteeHandler } from './controllers/mentors/removeMenteeHandler'
import { getMentorshipRequestHandler } from './controllers/mentees/getMentorshipRequestsHandler'
import { deleteMentorshipRequestHandler } from './controllers/mentees/deleteMentorshipRequestHandler'
import { findMatchHandler } from './controllers/mentees/findMatchHandler'

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
    '/api/u/mentee/register',
    validateRequest(createMenteeSchema),
    createMenteeHandler
  )

  app.get('/api/u/mentors/view', getMentorsHandler)
  app.get('/api/u//mentors/view/:mentorId', getMentorByIdHandler)

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

  app.get(
    '/api/a/u/mentee/:menteeId/matching-system/find-match',
    findMatchHandler
  )
}

export default routes
