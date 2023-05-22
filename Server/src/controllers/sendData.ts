import { Request, Response } from 'express'
import { prisma } from '../config/prismaClient'

export const sendData = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany()
    res.send(students)
  } catch (e) {
    res.send(e)
  }
}
