# Bluestock IPO Application

A full-stack web application for managing and viewing IPOs (Initial Public Offerings). The platform includes a public-facing frontend for users, a secure admin panel for managing data, and a robust REST API backend.

## 🚀 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Chart.js, Recharts, Framer Motion (via CSS animations)
- **Admin Panel:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express, PostgreSQL, JSON Web Tokens (JWT), bcryptjs, Twilio
- **Deployment Platform:** Render (Previously Deployed)

---

## 📂 Project Structure

```
.
├── admin/          # Admin Dashboard (React + Vite)
├── backend/        # REST API (Node.js + Express)
├── frontend/       # User Facing Application (React + Vite)
└── README.md
```

---

## 🛠️ Local Development Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory based on `.env.example`:

```env
PORT=5000
DATABASE_URL=postgres://username:password@localhost:5432/bluestock
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
```

Start the backend server (Dev Mode):
```bash
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

### 3. Admin Setup

```bash
cd admin
npm install
```

Create a `.env` file in the `admin` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the admin development server:
```bash
npm run dev
```

---

## ☁️ Production Deployment (Render)

This project is optimized for deployment on [Render](https://render.com/).

### Backend Deployment (Web Service)
1. In Render, create a new **Web Service**.
2. Connect your GitHub repository.
3. Set the **Root Directory** to `backend`.
4. Set the **Build Command** to `npm install`.
5. Set the **Start Command** to `npm start`.
6. Add the necessary Environment Variables (`DATABASE_URL`, `JWT_SECRET`, `NODE_ENV=production`).

### Frontend Deployment (Static Site)
1. In Render, create a new **Static Site**.
2. Connect your GitHub repository.
3. Set the **Root Directory** to `frontend`.
4. Set the **Build Command** to `npm run build`.
5. Set the **Publish Directory** to `frontend/dist`.
6. Add Environment Variable: `VITE_API_URL` pointing to your deployed backend URL.
7. Add a rewrite rule for React Router:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`

### Admin Deployment (Static Site)
1. Follow the same steps as the Frontend Deployment, but use the `admin` directory for **Root Directory** and `admin/dist` for **Publish Directory**.
2. Add the `VITE_API_URL` environment variable pointing to your backend URL.
3. Add the rewrite rule for React Router.

---

## 🔒 Security & Performance Features Added

- **Helmet:** HTTP headers secured on the backend.
- **Morgan:** API request logging.
- **Tailwind Config:** Premium color palette and custom animations implemented globally.
- **Custom Scrollbars & Smooth Scrolling:** Improved UX across frontend and admin panels.
- **React-Hot-Toast:** Ready for seamless toast notifications across both client apps.
