# Smart Civic Services & Complaint Management System (SCSCMS)

This repository now includes:

- **Angular 17 frontend** (citizen login/register/dashboard/submit complaint)
- **Node.js + Express backend** (MongoDB + Firebase token verification)

## 1) Frontend setup

```bash
npm install
npm start
```

Frontend runs at `http://localhost:4200`.

## 2) Backend setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs at `http://localhost:5000`.

## 3) Required backend environment variables

Set in `backend/.env`:

- `MONGODB_URI`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## 4) Implemented Step 1 scope

- Firebase auth login/register (frontend)
- Route guard for protected pages (`/dashboard`, `/submit-complaint`)
- Submit complaint API integration
- View "My Complaints" in dashboard
- Backend complaint create/list-my APIs

## Backend API endpoints

- `GET /api/health`
- `POST /api/complaints` (auth required)
- `GET /api/complaints/my` (auth required)
