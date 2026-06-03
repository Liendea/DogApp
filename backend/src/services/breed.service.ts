// backend/src/services/breed.service.ts

import { Breed } from "@prisma/client";
import { prisma } from "../lib/prisma.js";
import { ListResponse } from "../types/api.types.js";

export interface GetBreedsOptions {
  search?: string;
  temperament?: string;
  origin?: string;
}

export const breedService = {
  async getBreeds({ search, temperament, origin }: GetBreedsOptions): Promise<ListResponse<Breed>> {
    const temperaments = temperament
      ? temperament.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const breeds = await prisma.breed.findMany({
      where: {
        ...(search ? { breed: { contains: search } } : {}),
        ...(temperaments.length > 0
          ? { AND: temperaments.map((t) => ({ temperament: { contains: t } })) }
          : {}),
        ...(origin ? { breedOrigin: { contains: origin } } : {}),
      },
      orderBy: { breed: "asc" },
    });

    return { count: breeds.length, data: breeds };
  },

  async getBreedById(id: number): Promise<Breed | null> {
    return prisma.breed.findUnique({ where: { id } });
  },
};
