import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { corsOptions, allowOrignHeader } from './middleware/cors/middleware'
import log from './config/logger/logger'
import express from 'express'
import routes from './routes'

const app = express()
const PORT = parseInt(process.env.PORT as string) || 3500

app.use(cors(corsOptions))
app.use(allowOrignHeader)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  log.info(`server running on port ${PORT}`)
  routes(app)
})
