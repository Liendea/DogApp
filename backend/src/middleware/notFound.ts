// backend/src/middleware/notFound.ts
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

/**
 * Catch-all handler for undefined routes.
 * Must be registered after all other routes in app.ts.
 */
export const notFound = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  next(new AppError(`Route ${req.method} ${req.path} not found`, 404));
};
