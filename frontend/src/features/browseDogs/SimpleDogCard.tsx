import ShowDetailsBtn from "./ShowDetailsBtn";

type CardProps = {
  breed: string;
  image: string | null;
  // onclick
};

export default function SimpleDogCard({ breed, image }: CardProps) {
  const fallback = `https://placehold.net/default.png`;
  return (
    <div className="border rounded p-4 flex flex-col gap-3">
      <h3 className="capitalize">{breed}</h3>

      <div className="w-full h-72">
        <img
          src={image ?? fallback}
          alt={breed}
          className="w-full h-full object-cover"
        ></img>
      </div>

      {/* onclick -> öppna modal */}
      <ShowDetailsBtn />
    </div>
  );
}
