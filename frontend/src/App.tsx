import { useGetDogs } from "./hooks/useGetDogs";
import DogList from "./features/browseDogs/DogList";
import Header from "./components/Header";
import { SearchField } from "./features/search/searchField";
import { useState } from "react";
import LoadingSpinner from "./reusable_components/loadingSpinner";
import Error from "./reusable_components/error";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState<string>("");
  const [temperament, setTemperament] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");

  const { dogs, loading, error } = useGetDogs(
    query || undefined,
    temperament || undefined,
    origin || undefined,
  );

  const noDogs = !loading && !error && dogs.length === 0;

  return (
    <>
      <Header />
      <SearchField
        setQuery={setQuery}
        setTemperament={setTemperament}
        setOrigin={setOrigin}
      />
      {error ? (
        <Error message="Något gick fel, försök igen" />
      ) : loading ? (
        <LoadingSpinner />
      ) : noDogs ? (
        <Error message="Inga hundar matchade din sökning" />
      ) : (
        <DogList dogs={dogs} />
      )}
      <Footer />
    </>
  );
}

export default App;
