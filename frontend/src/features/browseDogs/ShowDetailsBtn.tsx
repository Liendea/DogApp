type BtnProps = {
  onOpen: () => void;
};

export default function ShowDetailsBtn({ onOpen }: BtnProps) {
  return (
    <button
      className="border border-primary text-white font-medium bg-primary text-xs w-fit self-end rounded-3xl px-8 py-2 hover:cursor-pointer hover:text-primary hover:bg-white transition-all"
      onClick={onOpen}
    >
      Visa Mer
    </button>
  );
}
