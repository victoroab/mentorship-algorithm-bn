import { Request, Response, NextFunction } from 'express'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { s3, bucketName } from '../../config/s3/s3Config'
import crypto from 'crypto'
import log from '../../config/logger/logger'

const randomImageName = (byte = 32) => crypto.randomBytes(byte).toString('hex')

export const uploadHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: randomImageName(),
      Body: req.file?.buffer,
      ContentType: req.file?.mimetype,
    }

    const command = new PutObjectCommand(params)
    await s3.send(command)
    res.sendStatus(200)
  } catch (e) {
    log.error(e)
  }
}
