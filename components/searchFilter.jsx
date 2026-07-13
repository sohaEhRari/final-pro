"use client";

import { Search } from "lucide-react";

export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="max-w-3xl mx-auto px-4 mb-8">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dashboard..."
          className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-700 shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}