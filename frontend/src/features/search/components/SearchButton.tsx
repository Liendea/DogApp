import SearchIcon from "@/features/search/components/SearchIcon";

type SearchButtonProps = {
  onClick?: () => void;
};

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      className="rounded-full bg-primary px-2 text-xsmall md:pr-4 text-white cursor-pointer transition-all flex justify-center items-center"
      onClick={onClick}
    >
      <SearchIcon width={40} height={40} />
      <span className="hidden md:inline">Search</span>
    </button>
  );
}
