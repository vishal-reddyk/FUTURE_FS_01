# Vishal Reddy | Full Stack Portfolio

A polished personal portfolio for student developer **Vishal Reddy**, built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, **Node.js**, **Express**, and **MySQL**.

## Project Structure

- `client/` — React frontend with Tailwind CSS, Framer Motion, dark/light theme toggle, smooth scrolling, and responsive layout.
- `server/` — Express backend API for contact form submission, MySQL storage, and email notification via Nodemailer.

## Key Features

- Hero section with typing animation, resume download, and social links
- About section with career goals, education, and skill progress cards
- Skills section with frontend/backend/tools/database categories
- Project gallery with sample projects, stack badges, GitHub and live demo links
- Resume timeline with education, certifications, and internship experience
- Contact form connected to backend API, MySQL, and email notification
- Dark/light theme toggle, scroll progress indicator, and section highlighting

## Setup Instructions

### 1. Clone the repository

```powershell
cd C:\Users\karri\Portfolio-Vishal
```

### 2. Install frontend dependencies

```powershell
cd client
npm install
```

### 3. Install backend dependencies

```powershell
cd ..\server
npm install
```

### 4. Configure environment variables

Copy the `.env.example` file and update values for your MySQL connection and email credentials.

```powershell
cd ..
copy .env.example .env
```

Update values in `server/.env`:
- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_USER`
- `MYSQL_PASS`
- `MYSQL_DATABASE`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `RECEIVER_EMAIL`

Optionally, update `VITE_API_URL` in `client/.env` if you deploy backend separately.

### 5. Run frontend and backend

Frontend:
```powershell
cd client
npm run dev
```

Backend:
```powershell
cd server
npm run dev
```

Open the local frontend URL displayed by Vite, usually `http://localhost:5173`.

## Deployment Instructions

### Deploy frontend to Vercel

1. Create a Vercel project and select the `client` folder.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL` pointing to your backend deployment URL.

### Deploy backend to Render

1. Create a new Web Service on Render.
2. Connect to the repository and select the `server` folder.
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `MYSQL_HOST`
   - `MYSQL_PORT`
   - `MYSQL_USER`
   - `MYSQL_PASS`
   - `MYSQL_DATABASE`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `RECEIVER_EMAIL`

## GitHub Push Instructions

```powershell
cd C:\Users\karri\Portfolio-Vishal
git init
git add .
git commit -m "Initial portfolio website for Vishal Reddy"
git branch -M main
git remote add origin https://github.com/<your-username>/vishal-portfolio.git
git push -u origin main
```

## Recommended Local URLs

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Notes

- The contact form uses the backend API to save messages in MySQL and send a notification email.
- The theme toggle is persisted in local storage for returning visitors.
- All code is kept modular and beginner-friendly with reusable components.
