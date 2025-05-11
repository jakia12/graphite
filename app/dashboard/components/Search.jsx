"use client";

export default function Search({ query, onSearch }) {
  return (
    <input
      type="text"
      defaultValue={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search invoices..."
      className="w-full max-w-sm border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
