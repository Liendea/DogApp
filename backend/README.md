# DogApp API Backend

REST API for serving dog breed data for the Hundlistan application.

Built with:

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- MySQL (Railway)

The API returns JSON data used by the frontend application to display dog breeds and related information.

---

## Base URL

### Local Development

```txt
http://localhost:3000
```

### Production

```txt
https://dogapp-production-f70d.up.railway.app
```

---

## Features

- Get all dog breeds
- Search breeds by name
- Get breed details by ID
- Health check endpoint
- Prisma ORM + MySQL
- Global error handling
- CORS support
- Railway deployment

---

## API Endpoints

### Health Check

Checks if the backend server is running.

#### Endpoint

```http
GET /api/health
```

#### Example Request

```txt
http://localhost:3000/api/health
```

#### Example Response

```json
{
  "status": "ok",
  "env": "development",
  "timestamp": "2026-05-25T10:15:30.000Z"
}
```

---

### Get All Breeds

Returns all dog breeds sorted alphabetically.

#### Endpoint

```http
GET /api/breeds
```

#### Query Parameters

| Parameter | Type   | Description                         |
| ---------- | ------ | ----------------------------------- |
| `search`   | string | Filter breeds by partial name match |

#### Example Requests

Get all breeds:

```txt
http://localhost:3000/api/breeds
```

Search breeds:

```txt
http://localhost:3000/api/breeds?search=akita
```

#### Example Response

```json
{
  "count": 2,
  "data": [
    {
      "id": 1,
      "breed": "Akita",
      "imageUrl": "https://example.com/akita.jpg",
      "lifeSpan": "10–14 years",
      "description": "Large Japanese dog breed.",
      "temperament": "Loyal, courageous, independent",
      "breedOrigin": "Japan",
      "createdAt": "2026-05-20T00:00:00.000Z",
      "updatedAt": "2026-05-20T00:00:00.000Z"
    }
  ]
}
```

---

### Get Breed by ID

Returns a single breed using a numeric ID.

#### Endpoint

```http
GET /api/breeds/:id
```

#### Example Request

```txt
http://localhost:3000/api/breeds/1
```

#### Example Response

```json
{
  "id": 1,
  "breed": "Akita",
  "imageUrl": "https://example.com/akita.jpg",
  "lifeSpan": "10–14 years",
  "description": "Large Japanese dog breed.",
  "temperament": "Loyal, courageous, independent",
  "breedOrigin": "Japan",
  "createdAt": "2026-05-20T00:00:00.000Z",
  "updatedAt": "2026-05-20T00:00:00.000Z"
}
```

#### Error Responses

Invalid ID:

```json
{
  "error": "Invalid breed ID"
}
```

Breed not found:

```json
{
  "error": "Breed with id 999 not found"
}
```

---

## Breed Model

Prisma schema:

```prisma
model Breed {
  id          Int      @id @default(autoincrement())
  breed       String   @db.VarChar(100)
  imageUrl    String?  @map("image_url") @db.VarChar(500)
  lifeSpan    String?  @map("life_span") @db.VarChar(50)
  description String?  @db.Text
  temperament String?  @db.Text
  breedOrigin String?  @map("breed_origin") @db.VarChar(50)
  createdAt   DateTime @default(now()) @map("created_at") @db.DateTime(0)
  updatedAt   DateTime @updatedAt @map("updated_at") @db.DateTime(0)

  @@map("breeds")
}
```

### Breed Object Structure

```ts
type Breed = {
  id: number;
  breed: string;
  imageUrl: string | null;
  lifeSpan: string | null;
  description: string | null;
  temperament: string | null;
  breedOrigin: string | null;
  createdAt: string;
  updatedAt: string;
};
```

---

## Error Handling

The API returns standardized JSON error responses.

### 404 – Route Not Found

```json
{
  "error": "Route GET /api/example not found"
}
```

### 400 – Bad Request

```json
{
  "error": "Invalid breed ID"
}
```

### 500 – Internal Server Error

```json
{
  "error": "Internal server error"
}
```

---

## CORS

Allowed frontend origin:

```env
FRONTEND_URL=http://localhost:5173
```

Additionally:

- `localhost` is automatically allowed in development
- Requests without an `Origin` header (Postman, curl, server-to-server) are allowed

---

## Environment Variables

Required:

```env
DATABASE_URL=your_database_url
```

Optional:

```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## Content Type

All responses return:

```http
Content-Type: application/json
```

---

## Scripts

```bash
npm run dev         # Start development server
npm run build       # Build TypeScript
npm run start       # Start production server
npm run db:push     # Push Prisma schema
npm run db:generate # Generate Prisma client
npm run db:studio   # Open Prisma Studio
```

---

## Current Status

### Implemented Endpoints

- `GET /api/health`
- `GET /api/breeds`
- `GET /api/breeds/:id`

### Planned Endpoints

- `POST /api/breeds`
- `PUT /api/breeds/:id`
- `DELETE /api/breeds/:id`
- `GET /api/breeds/:breed`

---

## Deployment

The API is deployed on Railway:

```txt
https://dogapp-production-f70d.up.railway.app
```
