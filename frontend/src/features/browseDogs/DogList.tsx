import SimpleDogCard from "./SimpleDogCard";
import type { Breed } from "../../types/Breed";
import { useState } from "react";
import Modal from "../dogDetails/Modal";

type ListProps = {
  dogs: Breed[];
};

export default function DogList({ dogs }: ListProps) {
  const [selectedDog, setSelectedDog] = useState<Breed | null>(null);
  return (
    <>
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-2">
        {dogs.map((dog) => (
          <SimpleDogCard
            key={dog.id}
            breed={dog.breed}
            image={dog.imageUrl}
            onOpen={() => setSelectedDog(dog)}
          />
        ))}
      </section>
      {selectedDog && (
        <Modal dog={selectedDog} onClose={() => setSelectedDog(null)} />
      )}
    </>
  );
}
