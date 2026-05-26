import { useAllDogs } from "./hooks/useAllDogs";
import DogList from "./features/browseDogs/DogList";

function App() {
  // använd error och loading states från useAllDogs när det finns komponenter för dem
  const { dogs } = useAllDogs();
  return (
    <>
      <h1 className="text-xl font-bold text-center">Dog App</h1>
      <DogList dogs={dogs} />
    </>
  );
}

export default App;
