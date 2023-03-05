### POST Routes

```js
const registerMentorRoute = '/api/u/mentor/register'

const registerMenteeRoute = '/api/u/mentee/register'

const loginAsMentorRoute = '/api/auth/u/mentor'

const loginAsMenteeRoute = '/api/auth/u/mentee'

const acceptMentorRequestRoute = '/api/a/u/mentee/:menteeId/accept-request'

const sendMentorRequestRoute = '/api/a/u/mentor/:mentorId/request-mentor'

const matchMentorRoute = '/api/a/s/create-match'
```

### GET Routes

```js
const getMentorsRoute = '/api/u/view/mentors'

const getMentorByIdRoute = '/api/u/view/mentors/:mentorId'

const getMenteesRoute = '/api/u/view/mentees'

const getMenteeByIdRoute = '/api/u/view/mentees/:menteeId'
```

### PUT Routes

### DELETE Routes

gender String
course String
class String
level String
skills String
hobbies String
ethnicity String

    // const assignMentor = await prisma.mentee.update({
    //   where: { id: 'f86e52a1-0c20-4f1b-b2b5-ffa12583ee13' },
    //   data: {
    //     mentorId: '37fd398a-8401-4236-93e4-cf4e07689529',
    //   },
    // })
    // return assignMentor

    const deleteMentee = prisma.mentee.delete({
      where: { id: '30ef675b-c128-404d-88cc-597d2a193a58' },
    })

    const deleteMenteeHobbies = prisma.menteeHobbies.delete({
      where: { id: '7cb1a482-39e4-4582-883c-2b4d23b5aaa7' },
    })

    const transaction = await prisma.$transaction([
      deleteMentee,
      deleteMenteeHobbies,
    ])

    return transaction
