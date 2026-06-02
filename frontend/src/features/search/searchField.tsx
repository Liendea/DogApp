import { useState } from "react";
import SearchIcon from "../../reusable_components/SearchIcon";

type SearchFieldProps = {
  setQuery: (query: string) => void;
};

export function SearchField({ setQuery }: SearchFieldProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuery(value);
    }
  };

  return (
    <div className="flex items-center justify-center md:justify-end my-5 md:mr-4">
      <div className="relative w-full max-w-md px-4 md:px-0">
        <input
          type="text"
          placeholder="Search for a breed..."
          className="bg-secondary rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-6 md:right-2 top-1/2 transform -translate-y-1/2">
          <SearchIcon
            width={40}
            height={40}
            className="text-font-color-primary"
          />
        </div>
      </div>
    </div>
  );
}
