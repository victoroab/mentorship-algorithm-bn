import { z } from 'zod'

export const createMentorSchema = z.object({
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
    department: z.string({
      required_error: 'department is required',
    }),
    rank: z.string({
      required_error: 'rank is required',
    }),
    staffNo: z.string({
      required_error: 'staffNo is required',
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
    // preferences: z.array(
    //   z.string({
    //     required_error: 'preferences is required',
    //   })
    // ),
  }),
})

export type CreateMentorInput = z.infer<typeof createMentorSchema>
