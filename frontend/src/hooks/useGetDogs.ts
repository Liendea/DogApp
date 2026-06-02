import { fetchDogs } from "../api/fetchDogs";
import { useEffect, useState } from "react";
import type { Breed } from "../types/Breed";

export function useGetDogs(query?: string) {
  const [dogs, setDogs] = useState<Breed[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getDogs = async () => {
      setError(null);
      setLoading(true);

      try {
        //behöver vi count för något?
        const { data } = await fetchDogs(query);
        setDogs(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error("An unknown error occured."));
        }
      } finally {
        setLoading(false);
      }
    };
    getDogs();
  }, [query]);

  return { dogs, loading, error };
}
