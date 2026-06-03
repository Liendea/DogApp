type BtnProps = {
  onOpen: () => void;
};

export default function ShowDetailsBtn({ onOpen }: BtnProps) {
  return (
    <button
      className=" text-white font-semibold bg-primary text-xs w-fit self-end rounded-3xl px-8 py-2 hover:cursor-pointer hover:text-primary hover:bg-primary-hover transition-all"
      onClick={onOpen}
    >
      Visa Mer
    </button>
  );
}
