# Zero Food Waste

A full-stack web application to connect food donors (restaurants, households) with NGOs and volunteers to reduce food waste and help needy people.

## Tech Stack
- Frontend: React (Vite) + Tailwind CSS + React Router
- Backend: Node.js + Express + MongoDB (Mongoose)
- Authentication: JWT

## Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed along with optionally MongoDB running locally (though the app is configured to not crash without it, making UI testing easier immediately).

### 1. Setup Backend
1. Open a terminal and navigate to the `backend` folder.
   ```bash
   cd backend
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```
3. Make sure the `.env` file exists with:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/zero-food-waste
   JWT_SECRET=supersecretjwtkey12345
   ```
4. Start the server.
   ```bash
   npm run dev
   ```

### 2. Setup Frontend
1. Open a new terminal and navigate to the `frontend` folder.
   ```bash
   cd frontend
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```
3. Start the Vite development server.
   ```bash
   npm run dev
   ```
4. Open the displayed local URL in your browser (usually `http://localhost:5173`).

## Project Status
Check out the fully designed Home feed that includes:
- Hero section for Donors & Finders
- Impact Dashboard metrics 
- The real-time mapping layout for Urgent Pickups (connected to frontend mock data)
- Full routing structure set up for scaling

Enjoy saving the planet, one meal at a time!
