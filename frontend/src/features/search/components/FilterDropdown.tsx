import type { RefObject } from "react";

type FilterDropdownProps = {
  dropdownRef: RefObject<HTMLDivElement | null>;
  allTemperaments: string[];
  allOrigins: string[];
  selectedTemperaments: string[];
  selectedOrigin: string;
  activeFilterCount: number;
  onTemperamentToggle: (temperament: string) => void;
  onOriginChange: (origin: string) => void;
  onClearFilters: () => void;
  onApply: () => void;
};

export default function FilterDropdown({
  dropdownRef,
  allTemperaments,
  allOrigins,
  selectedTemperaments,
  selectedOrigin,
  activeFilterCount,
  onTemperamentToggle,
  onOriginChange,
  onClearFilters,
  onApply,
}: FilterDropdownProps) {
  return (
    <div
      className="absolute z-50 w-full bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg p-4"
      ref={dropdownRef}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">Filter</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearFilters}
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
            <label key={t} className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTemperaments.includes(t)}
                onChange={() => onTemperamentToggle(t)}
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
          onChange={(e) => onOriginChange(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="">All origins</option>
          {allOrigins.map((origin) => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onApply}
        className="mt-4 w-full bg-primary text-white text-sm font-semibold py-2 rounded-xl hover:opacity-90 transition-opacity"
      >
        Apply filter
      </button>
    </div>
  );
}
