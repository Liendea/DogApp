// src/features/dogDetails/CloseBtn.tsx

type CloseBtnProps = {
  onClick: () => void;
};

export default function CloseBtn({ onClick }: CloseBtnProps) {
  return (
    <button
      onClick={onClick}
      className="border border-primary text-primary font-sans text-xs w-fit rounded-xl px-8 py-2 hover:cursor-pointer hover:text-white hover:bg-primary transition-all"
    >
      Close
    </button>
  );
}
