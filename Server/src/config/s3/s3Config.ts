import { S3Client } from '@aws-sdk/client-s3'

export const bucketName = process.env.BUCKET_NAME as string
const bucketRegion = process.env.BUCKET_REGION as string
const accessKey = process.env.ACCESS_KEY as string
const secretAccesskey = process.env.SECRET_ACCESS_KEY as string

export const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccesskey,
  },
  region: bucketRegion,
})
