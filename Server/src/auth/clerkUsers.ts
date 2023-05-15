import { Request, Response } from 'express'
import Clerk from '@clerk/clerk-sdk-node/esm/instance'

export const getClerkUsers = async (req: Request, res: Response) => {
  const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY as string })

  try {
    const userList = await clerk.users.getUserList()
    res.json(userList)
  } catch (e) {
    res.send(e)
  }
}
