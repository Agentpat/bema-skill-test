

# wp-next-mern-alternative

A modern MERN-stack implementation of the Bema Integrated Services WordPress + Next.js Developer Test.
This project replaces WordPress with a custom REST API backend (Express + MongoDB) and React frontend, showcasing a scalable headless CMS solution.



## Live Demo

[https://client-lime-one-35.vercel.app/](https://client-lime-one-35.vercel.app/)

---

## Project Structure

| Repo                                                            | Description                                                                             |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Client (Frontend)](https://github.com/Agentpat/client)         | React app consuming backend APIs                                                        |
| [Server (Backend)](https://github.com/Agentpat/bema-skill-test) | Express API with MongoDB, handling blog posts, exchange rates, and custom name reversal |



## Setup & Run Instructions

### 1. Clone the repos

```bash
git clone https://github.com/Agentpat/client.git
git clone https://github.com/Agentpat/bema-skill-test.git
```

### 2. Backend Setup

```bash
cd bema-skill-test
npm install
cp .env.example .env    # Add your MongoDB URI and any API keys here
npm run dev             # Start the backend server (default port: 5000)
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start               # Runs frontend at http://localhost:3000
```

---

## Features Implemented (Test Breakdown)

### Part 0 – CMS & Content Setup

* MongoDB-backed blog schema replacing WordPress posts
* CRUD support: Create, Read, Update, Delete blog posts

### Part 1 – Headless Blog API

* Custom REST API for posts (`/api/posts`) replaces GraphQL
* Frontend fetches and displays recent blog post titles

### Part 2 – REST API: NGN to USD Exchange Rate

* Fetches live NGN→USD exchange rate from [exchange-rate.host](https://exchange-rate.host)
* React component displays current rate with error handling

### Part 3 – Plugin Setting Retrieval Replacement

* Custom endpoint `/api/settings` replaces WordPress EDD plugin settings
* Displays store currency setting on frontend

### Part 4 (Bonus) – Custom Name Submission & Reversal

* POST `/api/name` accepts a name and stores its reversed form
* GET `/api/name` retrieves the reversed name
* Frontend form to submit and display reversed names

---

## Technologies Used

**Frontend:** React, Axios, React Router DOM, (optionally TailwindCSS)
**Backend:** Node.js, Express, Mongoose, dotenv, cors, nodemon

---

## Known Issues & Assumptions

* MongoDB must be running locally or use a MongoDB Atlas URI
* Valid API key required for exchange rate API calls
* No authentication or rate limiting in this demo implementation
* CORS properly configured for client-server communication

---

## Learnings & Highlights

* Built a full-stack MERN app replacing a WordPress + Next.js setup
* Showcased REST API skills over GraphQL for blog content delivery
* Created responsive UI components for dynamic exchange rates and name reversal
* Structured codebase into clear client and server repositories

---

## Contact

Akosile Olaide
[olaideakosile35@gmail.com](mailto:olaideakosile35@gmail.com)
Target Role: Software Developer
Company: Bema Integrated Services Ltd

---

**Feel free to explore:**

* Frontend repo: [https://github.com/Agentpat/client](https://github.com/Agentpat/client)
* Backend repo: [https://github.com/Agentpat/bema-skill-test](https://github.com/Agentpat/bema-skill-test)

---

If you want, I can help you create separate READMEs for each repo too. Just ask!
