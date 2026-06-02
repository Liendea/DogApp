import { useAllDogs } from "./hooks/useAllDogs";
import DogList from "./features/browseDogs/DogList";
import { SearchField } from "./features/search/searchField";

function App() {
  // använd error och loading states från useAllDogs när det finns komponenter för dem
  const { dogs } = useAllDogs();
  return (
    <>
      <h1 className="text-xl font-bold text-center">Dog App</h1>
      <SearchField onSearch={(query) => console.log(query)} />
      <DogList dogs={dogs} />
    </>
  );
}

export default App;
