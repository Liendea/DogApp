type CloseBtnProps = {
  onClick: () => void;
};

export default function CloseBtn({ onClick }: CloseBtnProps) {
  return (
    <button onClick={onClick} className="border rounded p-2">
      Close
    </button>
  );
}
