import * as dotenv from 'dotenv'
dotenv.config()
import log from './config/logger'
import express from 'express'
import routes from './routes'
const app = express()
const PORT = parseInt(process.env.PORT as string) || 3500

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  log.info(`server running on port ${PORT}`)
  routes(app)
})
