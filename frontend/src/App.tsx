import { useGetDogs } from "./hooks/useGetDogs";
import DogList from "./features/browseDogs/DogList";
import Header from "./components/Header";
import { SearchField } from "./features/search/searchField";
import { useState } from "react";

function App() {
  // använd error och loading states från useGetDogs när det finns komponenter för dem
  const [query, setQuery] = useState<string>("");
  const { dogs } = useGetDogs(query);
  return (
    <>
      <Header />
      <SearchField setQuery={setQuery} />
      <DogList dogs={dogs} />
    </>
  );
}

export default App;
