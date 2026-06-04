# DogApp

A dog breed discovery app where you can browse, search, and filter hundreds of dog breeds — and save your favorites.

<img width="1950" height="1304" alt="bild" src="https://github.com/user-attachments/assets/a54c9706-24ed-4bb8-adad-e49036c2a97c" />


---

## Features

- **Browse breeds** — Scroll through a catalog of dog breeds with images and key info
- **Search** — Find breeds instantly by name, temperament, or country of origin
- **Filter** — Narrow results by temperament or breed origin using the filter dropdown
- **Breed details** — Click any breed card to open a detailed view with description, life span, and temperament
- **Favorites** — Mark breeds as favorites directly from the detail view
- **Back to all dogs** — One-click reset to return to the full breed list after filtering

---



| Browse | Search & Filter | Breed Detail |
|--------|----------------|--------------|
| <img width="3534" height="1890" alt="bild" src="https://github.com/user-attachments/assets/c8d88964-c3d0-4637-bfe9-a3a1ec14a64b" /> | <img width="1858" height="1348" alt="bild" src="https://github.com/user-attachments/assets/5b53c908-3a77-4027-9534-f74b7b93787c" /> | <img width="2230" height="1266" alt="bild" src="https://github.com/user-attachments/assets/5cb86bd3-1a73-471f-b140-b32cc2bb753b" /> |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS |
| Backend | Node.js, Express 5, TypeScript |
| Database | MySQL (hosted on Railway) |
| ORM | Prisma |
| Deployment | Vercel (frontend), Railway (backend + DB) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A MySQL database (local or hosted)

---

### 1. Clone the repository

```bash
git clone https://github.com/Liendea/DogApp.git
cd DogApp
```

---

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL="mysql://user:password@host:port/database"
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Push the database schema and start the dev server:

```bash
npm run db:push
npm run dev
```

The backend runs on **http://localhost:3000**.

---

### 3. Set up the frontend

```bash
cd frontend
npm install
```

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000
```

Start the dev server:

```bash
npm run dev
```

The frontend runs on **http://localhost:5173**.

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `GET` | `/api/breeds` | Get all breeds (supports `?search=` query param) |
| `GET` | `/api/breeds/:id` | Get a single breed by ID |

For full API documentation, see [backend/README.md](backend/README.md).

---

## Database

The app uses a single `Breed` table:

| Field | Type | Description |
|-------|------|-------------|
| id | Int | Primary key |
| breed | String | Breed name |
| imageUrl | String | URL to breed image |
| lifeSpan | String | Expected life span |
| description | String | Breed description |
| temperament | String | Temperament traits |
| breedOrigin | String | Country of origin |

### Useful database commands

```bash
npm run db:push      # Push schema changes to the database
npm run db:migrate   # Create a new migration
npm run db:deploy    # Deploy migrations (production)
npm run db:studio    # Open Prisma Studio GUI
```

---

## Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com) — connect the `frontend/` directory
- **Backend** is deployed on [Railway](https://railway.app) — connect the `backend/` directory and set environment variables

Set `VITE_API_URL` in Vercel to point to your Railway backend URL.

---

## Project Structure

```
DogApp/
├── frontend/
│   └── src/
│       ├── features/       # Search, browse, and dog details features
│       ├── components/     # Header, Footer
│       ├── reusable_components/  # LoadingSpinner, Error, Icons
│       ├── hooks/          # useGetDogs, useClickOutside
│       ├── api/            # API client (fetchDogs)
│       └── types/          # TypeScript types
└── backend/
    └── src/
        ├── routes/         # Express routes
        ├── controllers/    # Request handlers
        ├── services/       # Business logic
        ├── middleware/      # Error handling, 404
        ├── config/         # Environment & CORS config
        └── lib/            # Prisma client
```

--- 

Collaborators:
Linda, Jose, Lisa, Erik, Hanna
