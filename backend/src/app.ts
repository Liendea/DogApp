// backend/src/app.ts
import express, { Request, Response, NextFunction } from "express";
import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";
import { AppError } from "./utils/AppError.js";

const app = express();

// ––– Middlewares –––
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", env.FRONTEND_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

// ––– API Helth check endpoint –––
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", env: env.NODE_ENV });
});

// ––– GET All breeds –––
app.get("/api/breeds", async (_req: Request, res: Response) => {
  const breeds = await prisma.breed.findMany({
    orderBy: { breed: "asc" },
  });
  res.json({ count: breeds.length, data: breeds });
});

// ––– 404 –––
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new AppError("Route not found", 404));
});

// ── Global error handler –––
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }
  console.error("Unexpected error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;
