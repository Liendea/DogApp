import { useGetDogs } from "./hooks/useGetDogs";
import DogList from "./features/browseDogs/DogList";
import Header from "./components/Header";
import { SearchField } from "./features/search/searchField";
import { useState } from "react";
import LoadingSpinner from "./reusable_components/loadingSpinner";
import Error from "./reusable_components/error";
import Footer from "./components/Footer";
import ArrowLeft from "./reusable_components/ArrowLeft";

function App() {
  const [query, setQuery] = useState<string>("");
  const [temperament, setTemperament] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [hasSearched, setHasSearched] = useState(false);

  const { dogs, loading, error } = useGetDogs(
    query || undefined,
    temperament || undefined,
    origin || undefined,
  );

  const noDogs = !loading && !error && dogs.length === 0;

  const handleReset = () => {
    setQuery("");
    setTemperament("");
    setOrigin("");
    setHasSearched(false);
  };

  return (
    <>
      <Header />

      <div
        className={`flex flex-col-reverse md:flex-row items-center mt-4  pb-4 px-4 md:px-0 ${hasSearched ? "justify-between" : "justify-end"}`}
      >
        {hasSearched && (
          <button
            className="rounded-full ml-6 bg-primary py-2 px-4 text-xsmall md:pr-4 text-white cursor-pointer transition-all flex justify-center items-center"
            onClick={handleReset}
          >
            <ArrowLeft width={15} height={15} className="text-gray-200 mr-1" />
            <span>View all dogs</span>
          </button>
        )}
        <SearchField
          setQuery={setQuery}
          setTemperament={setTemperament}
          setOrigin={setOrigin}
          setHasSearched={setHasSearched}
        />
      </div>

      <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
        Find your perfect companion
      </h1>

      {error ? (
        <Error message="Something went wrong, please try again" />
      ) : loading ? (
        <LoadingSpinner />
      ) : noDogs ? (
        <Error message="No breeds matched your search" />
      ) : (
        <DogList dogs={dogs} />
      )}
      <Footer />
    </>
  );
}

export default App;
