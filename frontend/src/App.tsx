import { useAllDogs } from "./hooks/useAllDogs";

//STRUKTUR:

//sökfällt
//flöde där man kan bläddra bland hundar
//varje hund-kort är klickbart och leder till ett mer detaljerat kort

function App() {
  const { dogs } = useAllDogs();
  console.log(dogs);
  return (
    <>
      <p className="underline text-7xl text-amber-950">tailwind test</p>
      {dogs.map((item) => (
        <h3 key={item.id}>{item.breed}</h3>
      ))}
    </>
  );
}

export default App;
