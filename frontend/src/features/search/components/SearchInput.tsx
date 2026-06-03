import React from "react";
import FilterIcon from "./FilterICon";
import SearchButton from "./SearchButton"; // Justera sökbanan om det behövs
import ClearIcon from "./ClearIcon";

type SearchInputProps = {
  value: string;
  activeFilterCount: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onToggleFilter: () => void;
  onSearch: () => void;
};

export default function SearchInput({
  value,
  activeFilterCount,
  onChange,
  onKeyDown,
  onToggleFilter,
  onSearch,
}: SearchInputProps) {
  return (
    <>
      {/* Filterknapp */}
      <button
        className="absolute left-6 md:left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={onToggleFilter}
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
        placeholder="Search..."
        className="bg-secondary rounded-full pl-12 pr-12 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {/* Sökknapp + Clear */}
      <div className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
        {value && (
          <ClearIcon
            width={20}
            height={20}
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => {
              onChange({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>);
            }}
          />
        )}
        <SearchButton onClick={onSearch} />
      </div>
    </>
  );
}
