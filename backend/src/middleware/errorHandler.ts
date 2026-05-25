// backend/src/middleware/errorHandler.ts
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

/**
 * Global Express error handler.
 * Must be the last middleware registered in app.ts (4 parameters required by Express).
 *
 * - AppError  → structured JSON with the intended HTTP status
 * - Any other → 500 with a generic message (detail stays server-side in logs)
 */
export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  // Log the full error server-side but never expose internals to the client
  console.error("[Unhandled error]", err);
  res.status(500).json({ error: "Internal server error" });
};
