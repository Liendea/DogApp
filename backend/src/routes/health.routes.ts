// backend/src/routes/health.routes.ts
import { Router } from "express";
import { healthCheck } from "../controllers/health.controller.js";

const router = Router();

// GET /api/health
router.get("/", healthCheck);

export default router;
