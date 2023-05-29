import { Request, Response } from 'express'
import Clerk from '@clerk/clerk-sdk-node/esm/instance'

const clerk = Clerk({
  secretKey: process.env.CLERK_SECRET_KEY as string,
})

export default clerk

// export const getClerkUsers = async (req: Request, res: Response) => {
//   try {
//     const userList = await clerk.users.getUserList()
//     res.json(userList)
//   } catch (e) {
//     res.send(e)
//   }
// }
