import SimpleDogCard from "./SimpleDogCard";
import type { Breed } from "../../types/Breed";

type ListProps = {
  dogs: Breed[];
  // oncardclick
};

export default function DogList({ dogs }: ListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {dogs.map((dog) => (
        <SimpleDogCard key={dog.id} breed={dog.breed} image={dog.imageUrl} />
      ))}
    </section>
  );
}
