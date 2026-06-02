import { useState } from "react";

type SearchFieldProps = {
  onSearch: (query: string) => void;
};

export function SearchField({ onSearch }: SearchFieldProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for a breed..."
        className="bg-secondary border border-gray-300  rounded-xl px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
