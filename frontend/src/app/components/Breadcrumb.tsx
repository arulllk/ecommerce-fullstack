import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="bg-gray-100 py-3 md:px-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-700">
        <h1 className="font-semibold text-gray-800">Shop</h1>
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-blue-600 font-medium">Shop</span>
        </nav>
      </div>
    </div>
  );
}
