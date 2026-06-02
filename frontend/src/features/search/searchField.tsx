import { useState } from "react";
import SearchIcon from "../../reusable_components/SearchIcon";
import dogsData from "../../assets/dogs.json"; // justera sökvägen till din JSON-fil

type SearchFieldProps = {
  setQuery: (query: string) => void;
};

export function SearchField({ setQuery }: SearchFieldProps) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);

    if (input.length > 0) {
      const filtered = dogsData
        .map((dog) => dog.breed) // justera till rätt nyckel i din json
        .filter((breed) => breed.toLowerCase().startsWith(input.toLowerCase()))
        .slice(0, 5); // max 5 förslag
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (breed: string) => {
    setValue(breed);
    setSuggestions([]);
    setQuery(breed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSuggestions([]);
      setQuery(value);
    }
  };

  return (
    <div className="flex items-center justify-center md:justify-end my-5 md:mr-4">
      <div className="relative w-full max-w-md px-4 md:px-0">
        <input
          type="text"
          value={value}
          placeholder="Search for a breed..."
          className="bg-secondary rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-6 md:right-2 top-1/2 transform -translate-y-1/2">
          <SearchIcon
            width={40}
            height={40}
            className="text-font-color-primary"
          />
        </div>

        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-md overflow-hidden">
            {suggestions.map((breed) => (
              <li
                key={breed}
                onClick={() => handleSelect(breed)}
                className="px-4 py-2 cursor-pointer hover:bg-secondary capitalize"
              >
                {breed}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
