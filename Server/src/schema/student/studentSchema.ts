import { z } from 'zod'

export const createStudentSchema = z.object({
  body: z.object({
    firstName: z.string({
      required_error: 'first name is required',
    }),
    middleName: z.string({
      required_error: 'middle name is required',
    }),
    lastName: z.string({
      required_error: 'last name is required',
    }),
    email: z
      .string({
        required_error: 'email is required',
      })
      .email('Not a valid email'),
    age: z.number({
      required_error: 'age is required',
    }),
    gender: z.string({
      required_error: 'gender is required',
    }),
    ethnicity: z.string({
      required_error: 'ethnicity is required',
    }),
    matricNo: z.string({
      required_error: 'matricNo is required',
    }),
    hobbies: z
      .array(
        z.string({
          required_error: 'hobbies is required',
        })
      )
      .nonempty(),
    skills: z
      .array(
        z.string({
          required_error: 'skills is required',
        })
      )
      .nonempty(),
    availability: z
      .array(
        z.string({
          required_error: 'availability is required',
        })
      )
      .nonempty(),
    areasOfInterest: z
      .array(
        z.string({
          required_error: 'areasOfInterest is required',
        })
      )
      .nonempty(),
  }),
})

export type CreateMenteeInput = z.infer<typeof createStudentSchema>
