# Server Overview

## Setup

- [x] Setup folder structure
- [x] Init npm
- [x] Init typescript
- [x] install deps and dev deps

## Database

- [x] Configure Postgres on machine
- [x] install prisma
- [x] Configure env file with database variables
- [] model database tables and relations
- [] setup prisma client

## Endpoints

- [] Health check
- [] Define naming convention for api routes for CRUD operations and auth

# Business Logic

## Mentor

- [] The mentor shall register an account using email, password and bio information
- [] The mentor shall accept requests to mentor students
- [] The mentor shall drop mentees

## Mentee

- [] The mentee shall register an account using email and password bio information
- [] The mentee shall search for available mentors on the system
- [] The mentee shall request to at most 3 mentors at a time to be mentored
- [] The mentee shall request for meetings (online or in person)

## System

- [] The system shall send email notifications to mentors and mentees concerning meetings
- [] The system shall allow mentees to rate mentors after mentorship period
- [] The system shall automatically remove mentees from mentors after mentorship period

## Constraints

- [] A mentor shall only mentor 5 students at a time
- [] A mentee shall only have one mentor
- [] The automated matching provides a mentee with the 2 best based mentors
- [] Mentor and Mentee shall agree on duration of mentorship (4 weeks - 3 months)
