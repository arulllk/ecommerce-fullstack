'use client';

import { Search, User, Heart, ShoppingBag, CircleDot } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6 gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <Image src="/images/logo.png" alt="logo" width={130  } height={40} />                 
              </div>
      
              {/* Search Bar */}
              <div className="flex-1 max-w-xl">
                <div className="flex border border-blue-500 rounded">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 outline-none text-sm placeholder-gray-500"
                  />
                  <button className="px-3 flex items-center justify-center text-gray-600">
                    <Search size={18} />
                  </button>
                </div>
              </div>
      
              {/* Icons */}
              <div className="flex items-center gap-6 text-gray-700">
                <User size={30} />
      
                <div className="relative">
                  <Heart size={27} />
                  <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    4
                  </span>
                </div>
      
                <div className="relative">
                  <ShoppingBag size={27} />
                  <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 text-sm font-semibold py-2 border-t border-gray-200">
        <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">HOME</a>
        <a href="#">CATEGORIES</a>
        <a href="#">PRODUCTS</a>
        <a href="#">PAGES</a>
        <a href="#">OTHERS</a>
        <a href="#">BLOG</a>
        <a href="#">ELEMENTS</a>
        <a href="#">HOT OFFERS</a>
      </nav>
    </header>
  );
}
