import { allowedOrigins } from './allowedOrigins'

export const corsOptions = {
  origin: (origin: string, callback: (x: any, y?: any) => void) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionSuccessStatus: 200,
}
