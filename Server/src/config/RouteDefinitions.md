### POST Routes

```js
const registerMentorRoute = '/api/u/mentor/register'

const registerMenteeRoute = '/api/u/mentee/register'

const loginAsMentorRoute = '/api/auth/u/mentor'

const loginAsMenteeRoute = '/api/auth/u/mentee'

const acceptMentorRequestRoute = '/api/a/u/mentor/accept-request'

const sendMentorRequestRote = '/api/a/u/mentor/request-mentor'

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

model Mentor {
id String @id @default(uuid())
firstName String
lastName String
email String @unique
phoneNumber String?
age Int
gender String
ethnicity String
course String
level Int
matricNo String
class String
picture String?
Mentee Mentee[]
Preferences MentorPreferences @relation(fields: [preferenceId], references: [id])
preferenceId String @unique
Skills MentorSkills[]
Hobbies MentorHobbies[]
Availability MentorAvailability[]
}

model Mentee {
id String @id @default(uuid())
firstName String
lastName String
email String @unique
phoneNumber String?
age Int
gender String
ethnicity String
course String
level Int
matricNo String
class String
mentor Mentor @relation(fields: [mentorId], references: [id])
mentorId String
picture String?
Skills MenteeSkills[]
Hobbies MenteeHobbies[]
Availability MenteeAvailability[]
}

model MentorPreferences {
id String @id @default(uuid())
gender String
course String
class String
level String
skills String
hobbies String
ethnicity String
mentor Mentor?
}

model MentorSkills {
id String @id @default(uuid())
skill String
mentor Mentor @relation(fields: [mentorId], references: [id])
mentorId String
}

model MenteeSkills {
id String @id @default(uuid())
skill String
mentee Mentee @relation(fields: [menteeId], references: [id])
menteeId String
}

model MentorHobbies {
id String @id @default(uuid())
hobbie String
mentor Mentor @relation(fields: [mentorId], references: [id])
mentorId String
}

model MenteeHobbies {
id String @id @default(uuid())
hobbie String
mentee Mentee @relation(fields: [menteeId], references: [id])
menteeId String
}

model MentorAvailability {
id String @id @default(uuid())
day String
mentor Mentor @relation(fields: [mentorId], references: [id])
mentorId String
}

model MenteeAvailability {
id String @id @default(uuid())
day String
mentee Mentee @relation(fields: [menteeId], references: [id])
menteeId String
}

gender String
course String
class String
level String
skills String
hobbies String
ethnicity String
