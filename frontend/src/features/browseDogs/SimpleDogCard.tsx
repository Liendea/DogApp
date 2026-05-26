import ShowDetailsBtn from "./ShowDetailsBtn";

type CardProps = {
  breed: string;
  image: string | null;
  onOpen: () => void;
};

export default function SimpleDogCard({ breed, image, onOpen }: CardProps) {
  const fallback = `https://placehold.net/default.png`;
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <div className="w-full h-36">
        <img
          src={image ?? fallback}
          alt={breed}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <h3 className="capitalize">{breed}</h3>

      {/* onclick -> öppna modal */}
      <ShowDetailsBtn onOpen={onOpen} />
    </div>
  );
}
