import CloseBtn from "./CloseBtn";
import type { Breed } from "../../types/Breed";

type ModalProps = {
  dog: Breed;
  onClose: () => void;
};
export default function Modal({ dog, onClose }: ModalProps) {
  const fallback = `https://placehold.net/default.png`;
  return (
    <div className="w-full h-full backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center">
      <section className="w-full h-auto border rounded m-2 bg-white p-6 flex flex-col justify-center items-center">
        <div className="w-48 h-48">
          <img
            src={dog.imageUrl ?? fallback}
            alt={dog.breed}
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="flex flex-col">
          <h2 className="text-center font-bold capitalize">{dog.breed}</h2>
          <p>{dog.description}</p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h3>Lifespan</h3>
            <p>{dog.lifeSpan}</p>
          </div>

          <div>
            <h3>Breed Origin</h3>
            <p>{dog.breedOrigin}</p>
          </div>

          <div className="col-span-2">
            <h3>Temperament</h3>
            <p>{dog.temperament}</p>
          </div>
        </div>
        <CloseBtn onClick={onClose} />
      </section>
    </div>
  );
}
