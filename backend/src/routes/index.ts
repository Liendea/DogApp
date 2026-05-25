// backend/src/routes/index.ts
import { Router } from "express";
import breedRoutes from "./breed.routes.js";
import healthRoutes from "./health.routes.js";

const router = Router();

// Mount sub-routers — all paths are relative to /api (set in app.ts)
router.use("/health", healthRoutes);
router.use("/breeds", breedRoutes);

export default router;
