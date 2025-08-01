##  wp-next-mern-alternative

A modern MERN-stack implementation of the Bema Integrated Services WordPress + Next.js Developer Test. This project showcases the ability to build a scalable headless CMS experience using React, Express, Node.js, and MongoDB — replacing WordPress with a custom backend and frontend stack.


### Project Structure

```
wp-next-mern-alternative/
├── client/          # React frontend
├── server/          # Express backend
├── .gitignore
├── README.md
```



###  Setup & Run Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/wp-next-mern-alternative.git
cd bema-skill-test
```

#### 2. Setup the Backend (server)

```bash
cd server
npm install
cp .env.example .env   # Add your MongoDB URI and API keys
npm run dev
```

> The server runs at `http://localhost:5000`

#### 3. Setup the Frontend (client)

```bash
cd ../client
npm install
npm start
```

> The frontend runs at `http://localhost:3000`

---

###  Features Implemented (Test Breakdown)

####  **Part 0 – CMS & Content Setup**

* Replaced WordPress with a MongoDB-based content model (Blog schema)
* Blog post creation, listing, editing, and deletion supported

####  **Part 1 – Headless Blog via GraphQL (replaced)**

* Implemented custom REST API for blog post retrieval instead of GraphQL
* Blog post titles retrieved from `/api/posts` and displayed on homepage

####  **Part 2 – REST API: NGN to USD Exchange Rate**

* Used `exchange-rate.host` API via Axios in React
* Created `ExchangeRate.js` component to fetch and display NGN→USD rate

####  **Part 3 – REST API: Plugin Setting Retrieval**

* Replaced EDD plugin with a custom backend endpoint `/api/settings`
* Displays setting like: `Store Currency: NGN`

####  **Part 4 (Bonus) – Custom Name Submission & Reversal**

* Created POST `/api/name` to submit a name
* Created GET `/api/name` to retrieve reversed name
* Displayed reversed name on frontend

---

###  Dependencies

#### Frontend (React)

* React, Axios, React Router DOM
* TailwindCSS (optional styling)

#### Backend (Node + Express)

* Express, Mongoose
* dotenv, cors, nodemon

---

###  Known Issues / Assumptions

* MongoDB must be running locally or accessible via Atlas
* RapidAPI key for currency conversion must be valid
* In a real production system, auth and rate limiting would be enforced

---

###  Learnings & Highlights

* Demonstrated full-stack skills in building an API-based blog CMS
* Swapped GraphQL/WordPress with a scalable and modern REST-based backend
* Built a fully responsive UI with interactive currency converter

---

###  Contact
> Developed by Akosile Olaide — \[[olaideakosile35@gmail.com](mailto:olaideakosile35@gmail.com)]
> Target Role: **Software Developer**
> Company: **Bema Integrated Services Ltd**
