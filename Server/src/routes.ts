import { Express, Request, Response } from 'express'

import { createMentorHandler } from './controllers/mentors/createMentorHandler'

const routes = (app: Express) => {
  // Health Check
  app.get('/health-check', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  // Mentor Routes
  app.post('/api/u/mentors', createMentorHandler)
}

export default routes
