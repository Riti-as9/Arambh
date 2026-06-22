# Arambh

A modern, vibrant social welfare platform focused on Education for underprivileged children and Women's Empowerment.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion + Recharts
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)

## Design System

- **Colors**: Deep Marigold (#E8871E), Dusty Plum (#6B4E71), Turmeric Yellow (#F4B942), Deep Teal-Green (#1B4B43)
- **Background**: Warm Ivory (#FBF6EF)
- **Text**: Charcoal Plum (#2B1F2D)
- **Fonts**: Fraunces (headings), Inter (body) via Google Fonts
- **UI**: rounded-2xl, soft shadows, hover transitions

## Project Structure

```
arambh/
├── backend/
│   ├── config/
│   │   └── db.js (MongoDB connection)
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── donationController.js
│   │   ├── helpRequestController.js
│   │   └── volunteerController.js
│   ├── middleware/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── Donation.js
│   │   ├── HelpRequest.js
│   │   └── Volunteer.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── donationRoutes.js
│   │   ├── helpRequestRoutes.js
│   │   ├── healthRoutes.js
│   │   └── volunteerRoutes.js
│   ├── .env (copy from .env.example)
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   │   ├── AdminStatCard.jsx
│   │   │   │   └── AdminTable.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── FormInput.jsx
│   │   │   ├── PageMeta.jsx
│   │   │   └── StatCounter.jsx
│   │   ├── layouts/
│   │   │   ├── AdminLayout.jsx
│   │   │   └── Layout.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDonations.jsx
│   │   │   │   ├── AdminHelpRequests.jsx
│   │   │   │   ├── AdminLogin.jsx
│   │   │   │   ├── AdminOverview.jsx
│   │   │   │   └── AdminVolunteers.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── HelpRequest.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Volunteer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env (copy from .env.example)
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── package.json
```

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- MongoDB (running locally or via MongoDB Atlas)

### Installation

1. **Clone or navigate to the project directory**:
```powershell
cd "d:\social welfare"
```

2. **Install all dependencies (root, backend, frontend)**:
```powershell
npm run install:all
```

OR install manually:
```powershell
# Root dependencies (concurrently)
npm install

# Backend dependencies
cd backend && npm install && cd ..

# Frontend dependencies
cd frontend && npm install && cd ..
```

3. **Set up environment variables**:
- Copy `backend/.env.example` to `backend/.env`
- Copy `frontend/.env.example` to `frontend/.env`

## API Endpoints

### Public Endpoints
- `GET /api/health` → Check server health
- `POST /api/volunteer` → Register a volunteer
- `GET /api/volunteer` → List all volunteers (newest first)
- `POST /api/donation` → Record a donation
- `GET /api/donation` → List all donations (newest first)
- `POST /api/help-request` → Submit a help request
- `GET /api/help-request` → List all help requests (newest first)
- `GET /api/dashboard-stats` → Get dashboard statistics

### Admin Endpoints
- `POST /api/admin/login` → Admin login
- `PATCH /api/help-request/:id` → Update help request status

## Run the Project

```powershell
# Run both backend and frontend together (concurrently)
npm run dev

# Run backend only
npm run dev:backend

# Run frontend only
npm run dev:frontend
```

The backend will be available at http://localhost:5000
The frontend will be available at http://localhost:5173

## Admin Dashboard

Access the admin dashboard at http://localhost:5173/admin

Default credentials (from .env):
- Email: admin@arambh.org
- Password: admin123

## Screenshots

(Add screenshots here once project is running)
