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
  origin: [
    'https://fypplayground-client-oms7b92ne-victoroab.vercel.app/',
    'https://test-fyp-client.onrender.com/',
    'http://localhost:5173',
  ],
  credentials: true,
}

app.use(cors(corsOptions))

// app.use(
//   cors({
//     origin: [
//       'http://localhost:3000',
//       'http://localhost:3500',
//       'http://localhost:5173',
//       'https://fypplayground-client-dn13n5d7y-victoroab.vercel.app/',
//     ],
//     credentials: true,
//   })
// )

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://fypplayground-client-oms7b92ne-victoroab.vercel.app'
  )
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
