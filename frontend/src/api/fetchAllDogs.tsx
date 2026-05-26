import type { Breed } from "../types/Breed";

export async function fetchAllDogs() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const endpoint = `${BASE_URL}/api/breeds`;

  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Fetch failed. Status: ${res.status}`);
  }

  const json = await res.json();
  const data: Breed[] = json.data;
  const count: number = json.count;

  return { data, count };
}
