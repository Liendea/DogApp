import { useState } from "react";

import FilterIcon from "../../reusable_components/FilterICon";
import dogsData from "../../assets/dogs.json";
import SearchButton from "./components/SearchButton";
import { useRef, useCallback } from "react";
import useClickOutside from "../../hooks/useClickOutside";

type SearchFieldProps = {
  setQuery: (query: string) => void;
  setTemperament: (temperament: string) => void;
  setOrigin: (origin: string) => void;
};

// Plocka ut unika temperament och origins från JSON
const allTemperaments = [
  ...new Set(
    dogsData.flatMap((dog) => dog.temperament.split(",").map((t) => t.trim())),
  ),
].sort();

const allOrigins = [...new Set(dogsData.map((dog) => dog.origin))].sort();

export function SearchField({
  setQuery,
  setTemperament,
  setOrigin,
}: SearchFieldProps) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTemperaments, setSelectedTemperaments] = useState<string[]>(
    [],
  );
  const [selectedOrigin, setSelectedOrigin] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setFilterOpen(false);
  }, [setFilterOpen]);

  useClickOutside(dropdownRef, closeDropdown);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);

    if (input.length === 0) {
      setSuggestions([]);
      setQuery("");
      return;
    }

    if (input.length < value.length) {
      setQuery("");
    }

    const filtered = dogsData
      .map((dog) => dog.breed)
      .filter((breed) => breed.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 10);
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
        setValue(suggestions[0]);
      }
    }
  };

  const handleTemperamentToggle = (temperament: string) => {
    const updated = selectedTemperaments.includes(temperament)
      ? selectedTemperaments.filter((t) => t !== temperament)
      : [...selectedTemperaments, temperament];
    setSelectedTemperaments(updated);
  };

  const handleOriginChange = (origin: string) => {
    setSelectedOrigin(origin);
  };

  const handleClearFilters = () => {
    setSelectedTemperaments([]);
    setSelectedOrigin("");
    setTemperament("");
    setOrigin("");
  };

  const activeFilterCount =
    selectedTemperaments.length + (selectedOrigin ? 1 : 0);

  const handleSearch = () => {
    setSuggestions([]);
    setQuery(value);
    setTemperament(selectedTemperaments.join(","));
    setOrigin(selectedOrigin);

    console.log("Search initiated with:", {
      query: value,
      temperament: selectedTemperaments.join(","),
      origin: selectedOrigin,
    });
  };

  return (
    <div className="flex items-center justify-center md:justify-end my-5 md:mr-4">
      {/* Container för sökfält och filter */}
      <div className="relative w-full max-w-md px-4 md:px-0">
        {/* Filter */}
        <button
          className="absolute left-6 md:left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <div className="relative">
            <FilterIcon
              width={40}
              height={40}
              className="text-font-color-primary"
            />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </div>
        </button>
        {/* Sökfält */}
        <input
          type="text"
          value={value}
          placeholder="Search for a breed..."
          className="bg-secondary rounded-full pl-12 pr-12 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <div className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 flex items-center">
          <SearchButton onClick={handleSearch} />
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-md overflow-hidden">
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

        {/* Filter dropdown */}
        {filterOpen && (
          <div
            className="absolute z-50 w-full bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg p-4"
            ref={dropdownRef}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-sm">Filter</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-primary hover:underline"
                >
                  Rensa alla
                </button>
              )}
            </div>

            {/* Temperament */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Temperament
              </h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {allTemperaments.map((t) => (
                  <label
                    key={t}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTemperaments.includes(t)}
                      onChange={() => handleTemperamentToggle(t)}
                      className="accent-primary"
                    />
                    <span className="text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Origin */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Origin
              </h4>
              <select
                value={selectedOrigin}
                onChange={(e) => handleOriginChange(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Alla länder</option>
                {allOrigins.map((origin) => (
                  <option key={origin} value={origin}>
                    {origin}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
