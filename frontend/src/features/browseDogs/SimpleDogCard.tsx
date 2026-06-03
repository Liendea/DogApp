import ShowDetailsBtn from "./ShowDetailsBtn";

type CardProps = {
  breed: string;
  image: string | null;
  onOpen: () => void;
};

export default function SimpleDogCard({ breed, image, onOpen }: CardProps) {
  const fallback = `https://placehold.net/default.png`;
  return (
    <div className="border border-primary/20 rounded-[20px] p-4 flex flex-col gap-3 h-96 shadow-md shadow-primary-hover bg-white hover:shadow-lg hover:shadow-primary-hover hover:-translate-y-1 transition-all">
      <div className="w-full h-66 rounded-[20px] overflow-hidden">
        <img
          src={image ?? fallback}
          alt={breed}
          className="w-full h-full object-cover"
        ></img>
      </div>
      <h3 className="font-sans text-xl font-bold capitalize text-black">
        {breed}
      </h3>

      {/* onclick -> öppna modal */}
      <ShowDetailsBtn onOpen={onOpen} />
    </div>
  );
}
