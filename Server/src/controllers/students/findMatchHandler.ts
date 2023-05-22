// import { Request, Response } from 'express'
// import log from '../../config/logger'
// import { findMatchService } from '../../services/students/findMatchService'

// export const findMatchHandler = async (
//   req: Request<{ menteeId: string }, {}, {}>,
//   res: Response
// ) => {
//   try {
//     const menteeId = req.params.menteeId
//     const matches = await findMatchService(menteeId)
//     res.json(matches)
//   } catch (e) {
//     log.error(e)
//     return res.sendStatus(409)
//   }
// }
