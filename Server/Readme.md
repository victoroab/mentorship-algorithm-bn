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
- [x] model database tables and relations
- [x] setup prisma client instance in config folder

## Endpoints

- [x] Health check
- [x] Define naming convention for api routes for CRUD operations and auth

## Services

- [] Set up file upload to amazon S3

# Business Logic

## Mentor

- [x] The mentor shall register an account using email, password and bio information
- [x] The mentor shall accept requests to mentor students
- [x] The mentor shall be able to remove mentees

## Mentee

- [x] The mentee shall register an account using email and password and bio information
- [x] The mentee shall search for available mentors on the system
- [x] The mentee shall view individual mentors
- [x] The mentee shall request to a mentor to be mentored
- [x] The mentee shall request for meetings (online or in person)

## System

- [] The system shall send email notifications to mentors and mentees concerning meetings
- [] The system shall allow mentees to rate mentors after mentorship period
- [] The system shall automatically remove mentees from mentors after mentorship period
- [x] The system shall provide a student with compatible mentors based on the student's choice

## Constraints

- [x] A mentor shall only mentor 5 students at a time
- [x] A mentee shall only have one mentor
- [x] A mentee shall only send mentor request to at most 3 mentors at a time
- [x] The automated matching provides a mentee with the 2 best mentors
- [] A Mentor and Mentee shall agree on duration of mentorship (4 weeks - 3 months)
- [x] An email cannot be registered as a mentor and mentee at the same time

## Features

- [] Real time messaging
- [] Task tracker
- [] Image and file uploads
- [] Push notifications
- [x] Matching System

## To-do

- [x] Re-model the Preferences, Skills, availability and hobbies tables for both the mentor and mentee to have one field that contains all the data rather than creating multiple entries

- [x] Create a database table to store all the passwords with email as the index

- [x] Update mentor and mentee tables to contain middlename

- [x] Hash Passwords on registration

- [x] Model a request table to keep track of mentorship requests

- [x] Create endpoint for matching system

- [] Create DELETE route to delete users and relations

- [x] Create automated matching algorithm

- [] Authentication
