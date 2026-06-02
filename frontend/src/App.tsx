import { useGetDogs } from "./hooks/useGetDogs";
import DogList from "./features/browseDogs/DogList";
import { SearchField } from "./features/search/searchField";

function App() {
  // använd error och loading states från useGetDogs när det finns komponenter för dem
  const { dogs } = useGetDogs();
  return (
    <>
      <h1 className="text-xl font-bold text-center">Dog App</h1>
      <SearchField onSearch={(query) => console.log(query)} />
      <DogList dogs={dogs} />
    </>
  );
}

export default App;
