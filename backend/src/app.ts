// backend/src/app.ts
import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.config.js";
import apiRoutes from "./routes/index.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// ––– Core Middlewares –––
app.use(express.json());
app.use(cors(corsOptions));

// ––– API routes –––
app.use("/api", apiRoutes);

// ––– Error handling (must be last) –––
app.use(notFound);
app.use(errorHandler);

export default app;
