import { Request, Response } from 'express'
import log from '../config/logger'

export const sendData = async (req: Request, res: Response) => {
  const name = req.body?.name
  log.info(name)
}
