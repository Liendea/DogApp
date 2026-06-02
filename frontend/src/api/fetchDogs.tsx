import type { Breed } from "../types/Breed";

export async function fetchDogs(query?: string) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const endpoint = new URL(`${BASE_URL}/api/breeds`);

  if (query) {
    endpoint.searchParams.set("search", query);
  }

  const res = await fetch(endpoint.toString());
  if (!res.ok) {
    throw new Error(`Fetch failed. Status: ${res.status}`);
  }

  const json = await res.json();
  const data: Breed[] = json.data;
  const count: number = json.count;
  return { data, count };
}
