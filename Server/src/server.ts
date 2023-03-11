import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import log from './config/logger'
import express from 'express'
import routes from './routes'
import { credentials } from './middware/credentials'
import { corsOptions } from './config/cors/corsOptions'
const app = express()
const PORT = parseInt(process.env.PORT as string) || 3500

app.use(credentials)

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3500',
      'http://localhost:5173',
    ],
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  log.info(`server running on port ${PORT}`)
  routes(app)
})
