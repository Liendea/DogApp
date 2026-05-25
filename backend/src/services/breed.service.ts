// backend/src/services/breed.service.ts

import { Breed } from "@prisma/client";
import { prisma } from "../lib/prisma.js";
import { ListResponse } from "../types/api.types.js";

export interface GetBreedsOptions {
  search?: string;
}

/**
 * Returns all breeds, optionally filtered by a partial name match.
 *
 * MySQL note: `mode: 'insensitive'` is PostgreSQL-only in Prisma.
 * Case-insensitivity here relies on the column collation — the default
 * `utf8mb4_general_ci` (and `utf8mb4_unicode_ci`) on Railway MySQL is
 * case-insensitive, so `contains` already behaves case-insensitively.
 * If you ever migrate to PostgreSQL, add `mode: 'insensitive'` to the filter.
 */
export const breedService = {
  async getBreeds({ search }: GetBreedsOptions): Promise<ListResponse<Breed>> {
    const breeds = await prisma.breed.findMany({
      where: search
        ? {
            breed: {
              contains: search,
              // mode: 'insensitive' — enable this if/when migrating to PostgreSQL
            },
          }
        : undefined,
      orderBy: { breed: "asc" },
    });

    return { count: breeds.length, data: breeds };
  },

  async getBreedById(id: number): Promise<Breed | null> {
    return prisma.breed.findUnique({ where: { id } });
  },
};
