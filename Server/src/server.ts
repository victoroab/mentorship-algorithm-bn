import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import log from './config/logger'
import express, { Request, Response, NextFunction } from 'express'
import routes from './routes'
import multer from 'multer'
import { credentials } from './middware/credentials'

const app = express()
const PORT = parseInt(process.env.PORT as string) || 3500

export const storage = multer.memoryStorage()
export const upload = multer({ storage: storage })

const corsOptions = {
  origin: '*',
  credentials: true,
}

app.use(cors(corsOptions))

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.post(
//   '/api/upload-image',
//   multer({ storage: multer.memoryStorage() }).single('image'),
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.file)
//     res.send({})
//   }
// )

app.listen(PORT, () => {
  log.info(`server running on port ${PORT}`)
  routes(app)
})
