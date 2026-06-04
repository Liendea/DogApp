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
      <section className="relative overflow-hidden">
        {/* Bakgrundscirklar */}
        <div className="absolute top-80 -left-40 w-175 h-175 rounded-full bg-primary" />
        <div className="absolute top-380 -right-40 w-175 h-175 rounded-full bg-primary" />
        <div className="absolute top-680 -left-40 w-175 h-175 rounded-full bg-primary" />

      


        {/* DogList */}
        <section className=" relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-2 md:p-4 mb-4">
          {dogs.map((dog) => (
            <SimpleDogCard
              key={dog.id}
              breed={dog.breed}
              image={dog.imageUrl}
              onOpen={() => setSelectedDog(dog)}
            />
          ))}
        </section>
      </section>
      {selectedDog && (
        <Modal dog={selectedDog} onClose={() => setSelectedDog(null)} />
      )}
    </>
  );
}
