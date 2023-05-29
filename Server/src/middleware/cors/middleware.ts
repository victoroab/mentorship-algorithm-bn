import { Request, Response, NextFunction } from 'express'

export const corsOptions = {
  origin: '*',
  credentials: true,
}

export const allowOrignHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
}
