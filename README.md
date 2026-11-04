# WDP

a. What problem does your app solve or what purpose does it serve?
    Odd Jobs, gig work for Odd Jobs
    It serves as a way for people to post odd jobs, junk removal / dog sitting / contracting

b. Who is the intended user?

people who need something done but don't know who to call.

c. What actions will users be able to perform (e.g., sign up, add items, search,
comment, etc.)?

actions can be 
for employers -> post job, look at listings
employees -> apply for jobs, look at listings

like fivver or another free lancing option
connecting jobs to people

![Jonathan Fenner WDP](images/UpdatedWDPFenner.png)

# Relations
User can post zero or many jobs
Jobs can belong to one user and only one user

One and only one user can can send zero or many applications 
A job can receive zero or many applications
one and only one application per job

a job is categorized by one and only one category
a category can have zero or many jobs in a specific category

# Database Implementation

**Database system:** MySQL

**Tables implemented:** `User`, `Job`, and `Category`

**How the tables are related:** `User` stores the people who register and log in. `Job` stores the jobs they post. This is a one-to-many relationship: a user can post zero or many jobs, and each job belongs to exactly one user through the `UserID` foreign key. `Category` is an additional table with the same kind of relationship: a category can have zero or many jobs, and each job has exactly one category through the `CategoryID` foreign key.

**Schema:** [schema.sql](schema.sql)

## Screenshots

### Table Creation and Created Tables
![Successful table creation and SHOW TABLES output](screenshots/Screenshot%20from%202026-11-03%2023-59-29.png)

### Table Structure
![DESCRIBE output for the User, Category, and Job tables](screenshots/Screenshot%20from%202026-11-04%2000-02-42.png)
