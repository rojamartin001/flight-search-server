# 🛫 Flight Search Backend

This is the backend server for the Flight Search application built using **Node.js** and **Express**. It uses a simple `flights.json` file to store flight data as a mock database.

---

## 🚀 Features

- Add new flights (POST `/api/flights`)
- Get all flights (GET `/api/flights`)
- Stores flight data in a local JSON file (`flights.json`)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- CORS
- dotenv

---


## 📦 How to Run

1. Install dependencies:

```bash
npm install

2.Create a .env file in the root and add:
PORT=5000

3.Start the server:
 npm start

4.The server will run at:

http://localhost:5000

##  Folder Structure


flight-search-backend/
├── flights.json         # Mock database
├── index.js             # Entry point
├── .env                 # Environment config
├── .gitignore
├── package.json
└── README.md            # ← This file
