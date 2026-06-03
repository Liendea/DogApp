import { useState, useRef, useCallback } from "react";
import dogsData from "@/assets/dogs.json";
import useClickOutside from "@/hooks/useClickOutside";

// Underkomponenter
import SearchInput from "./components/SearchInput";
import SuggestionsList from "./components/SuggestionsList";
import FilterDropdown from "./components/FilterDropdown";

type SearchFieldProps = {
  setQuery: (query: string) => void;
  setTemperament: (temperament: string) => void;
  setOrigin: (origin: string) => void;
};

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
  }, []);

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
  };

  return (
    <div className="flex items-center justify-center md:justify-end my-5 md:mr-4">
      <div className="relative w-full max-w-md px-4 md:px-0">
        {/* 1. Sökraden (Input, filterknapp, sökknapp) */}
        <SearchInput
          value={value}
          activeFilterCount={activeFilterCount}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onToggleFilter={() => setFilterOpen((prev) => !prev)}
          onSearch={handleSearch}
        />

        {/* 2. Förslagslistan vid autocomplete */}
        <SuggestionsList suggestions={suggestions} onSelect={handleSelect} />

        {/* 3. Filter-dropdownen */}
        {filterOpen && (
          <FilterDropdown
            dropdownRef={dropdownRef}
            allTemperaments={allTemperaments}
            allOrigins={allOrigins}
            selectedTemperaments={selectedTemperaments}
            selectedOrigin={selectedOrigin}
            activeFilterCount={activeFilterCount}
            onTemperamentToggle={handleTemperamentToggle}
            onOriginChange={setSelectedOrigin}
            onClearFilters={handleClearFilters}
            onApply={() => {
              handleSearch();
              setFilterOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
