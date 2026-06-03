import SearchIcon from "../../../reusable_components/SearchIcon";

type SearchButtonProps = {
  onClick?: () => void;
};
export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      className="rounded-full bg-primary text-xsmall pr-4 text-white cursor-pointer transition-all flex items-center"
      onClick={onClick}
    >
      <SearchIcon width={40} height={40} />
      Search
    </button>
  );
}
