type SuggestionsListProps = {
  suggestions: string[];
  onSelect: (breed: string) => void;
};

export default function SuggestionsList({
  suggestions,
  onSelect,
}: SuggestionsListProps) {
  if (suggestions.length === 0) return null;

  return (
    <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-md overflow-hidden">
      {suggestions.map((breed) => (
        <li
          key={breed}
          onClick={() => onSelect(breed)}
          className="px-4 py-2 cursor-pointer hover:bg-secondary capitalize"
        >
          {breed}
        </li>
      ))}
    </ul>
  );
}
