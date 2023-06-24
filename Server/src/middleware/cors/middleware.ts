import { Request, Response, NextFunction } from 'express'

const DEV_ORIGIN = process.env.DEV_ORIGIN as string
const PROD_ORIGIN = process.env.PROD_ORIGIN as string

export const corsOptions = {
  origin: DEV_ORIGIN,
  credentials: true,
}

export const allowOrignHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader('Access-Control-Allow-Origin', DEV_ORIGIN)
  // res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
}
