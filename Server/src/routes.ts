import { Express, Request, Response } from 'express'
import { createMentorHandler } from './controllers/mentors/createMentorHandler'

const routes = (app: Express) => {
  // Health Check
  app.get('/health-check', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post('/api/u/mentor/register', createMentorHandler)
}

export default routes
