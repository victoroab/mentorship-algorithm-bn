import { Request, Response } from 'express'
import { prisma } from '../config/prismaClient/prismaClient'

export const getUser = async (req: Request, res: Response) => {
  const email = req.body?.email

  try {
    const isStudent = await prisma.student.findUnique({
      where: { email: email },
      select: { email: true },
    })

    const isMentor = await prisma.mentor.findUnique({
      where: { email: email },
      select: { email: true },
    })

    if (isStudent) {
      res.json({ ...isStudent, type: 'student' })
    } else if (isMentor) {
      res.json({ ...isMentor, type: 'mentor' })
    }
  } catch (e) {
    res.send(e)
  }
}
