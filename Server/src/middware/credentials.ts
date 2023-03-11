import { Request, Response, NextFunction } from 'express'
import { allowedOrigins } from '../config/cors/allowedOrigins'

export const credentials = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin as string
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials').set(true)
  }
  next()
}
