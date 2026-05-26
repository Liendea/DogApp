type BtnProps = {
  onOpen: () => void;
};

export default function ShowDetailsBtn({ onOpen }: BtnProps) {
  return (
    <button className="border rounded w-20" onClick={onOpen}>
      Visa Mer
    </button>
  );
}
