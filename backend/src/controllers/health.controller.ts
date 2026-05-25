// backend/src/controllers/health.controller.ts
import type { Request, Response } from "express";
import { env } from "../config/env.js";

/**
 * GET /api/health
 *
 * Lightweight liveness probe used by Railway and monitoring tools.
 */
export const healthCheck = (_req: Request, res: Response): void => {
  res.json({
    status: "ok",
    env: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
};
