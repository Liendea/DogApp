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
  const { dogs, loading, error } = useGetDogs(query);
  const noDogs = !loading && !error && dogs.length === 0;
  return (
    <>
      <Header />
      <SearchField setQuery={setQuery} />
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
