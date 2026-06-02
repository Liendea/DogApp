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

    if (input.length === 0) {
      setSuggestions([]);
      setQuery(""); // återgå till alla hundar när fältet är tomt
      return;
    }

    if (input.length < value.length) {
      setQuery(""); // återgå till alla hundar när man backar
    }

    const filtered = dogsData
      .map((dog) => dog.breed)
      .filter((breed) => breed.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 10); // begränsa till 10 förslag
    setSuggestions(filtered);
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
      if (suggestions.length === 1) {
        setValue(suggestions[0]); // om endast 1 förslag ges så sätt det till inputfält automatiskt när man trycker på enter
      }
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
