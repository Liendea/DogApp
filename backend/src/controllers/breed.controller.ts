// backend/src/controllers/breed.controller.ts
import type { Request, Response, NextFunction } from "express";
import { breedService } from "../services/breed.service.js";
import { AppError } from "../utils/AppError.js";
import type { BreedQueryParams } from "../types/api.types.js";

/**
 * GET /api/breeds
 * GET /api/breeds?search=akita
 *
 * Returns all breeds, or a filtered subset when `search` is provided.
 * The search is a case-insensitive partial match on the breed name.
 */
export const getAllBreeds = async (
  req: Request<object, object, object, BreedQueryParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : undefined;

    const result = await breedService.getBreeds({ search });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/breeds/:id
 *
 * Returns a single breed by its numeric ID.
 */
export const getBreedById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      throw new AppError("Invalid breed ID", 400);
    }

    const breed = await breedService.getBreedById(id);

    if (!breed) {
      throw new AppError(`Breed with id ${id} not found`, 404);
    }

    res.json(breed);
  } catch (error) {
    next(error);
  }
};
