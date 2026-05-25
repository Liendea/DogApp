// backend/src/routes/breed.routes.ts
import { Router } from "express";
import { getAllBreeds, getBreedById } from "../controllers/breed.controller.js";

const router = Router();

// GET /api/breeds          — all breeds
// GET /api/breeds?search=  — filtered by partial name match
router.get("/", getAllBreeds);

// GET /api/breeds/:id      — single breed by id
router.get("/:id", getBreedById);

export default router;
