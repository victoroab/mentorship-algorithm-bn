import clerk from '../../src/config/clerk/clerk'
import { Request, Response } from 'express'

export const getClerkUsers = async (req: Request, res: Response) => {
  try {
    const userList = await clerk.users.getUserList()
    res.json(userList)
  } catch (e) {
    res.send(e)
  }
}

export const createClerkUser = async (req: Request, res: Response) => {
  try {
    const newUser = await clerk.users.createUser({
      emailAddress: ['victorbalogun439@gmail.com'],
      firstName: 'Victor',
      lastName: 'Balogun',
      password: 'pp,ej2o9hn002ia',
    })

    res.send(newUser.emailAddresses)
  } catch (e) {
    res.send(e)
  }
}
