import { LayoutGrid, List, Filter, ChevronDown } from 'lucide-react';

type SortFilterBarProps = {
  className?: string;
};

export default function SortFilterBar({className}:SortFilterBarProps) {
  return (
    <div className={`bg-gray-100 px-3 py-2 flex items-center justify-between ${className}`}>
      {/* Left Controls */}
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-white border rounded hover:bg-gray-50">
          <Filter className="w-4 h-4 text-gray-700" />
        </button>
        <button className="p-2 bg-blue-600 text-white rounded">
          <LayoutGrid className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white border rounded hover:bg-gray-50">
          <List className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Sort by</span>
        <div className="relative">
          <select
            className="appearance-none border bg-white text-sm text-gray-700 py-1 px-3 rounded pr-6"
            defaultValue="position"
          >
            <option value="position">Position</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
