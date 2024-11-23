// src/app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="text-lg">You searched for: <strong>{query}</strong></p>
      {/* Replace the section below with actual results */}
      <div className="mt-6">
        <p className="text-gray-600">No results found for your query.</p>
      </div>
    </div>
  );
}
