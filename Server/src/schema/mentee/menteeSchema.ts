import { z } from 'zod'

export const createMenteeSchema = z.object({
  body: z
    .object({
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
      course: z.string({
        required_error: 'course is required',
      }),
      level: z.number({
        required_error: 'level is required',
      }),
      matricNo: z.string({
        required_error: 'matricNo is required',
      }),
      class: z.string({
        required_error: 'class is required',
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
      password: z
        .string({
          required_error: 'password required',
        })
        .min(8),
      confirmPassword: z
        .string({
          required_error: 'password confirmation required',
        })
        .min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }),
})

export type CreateMenteeInput = z.infer<typeof createMenteeSchema>
