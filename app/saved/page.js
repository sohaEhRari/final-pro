"use client";

import { useEffect, useState } from "react";

export default function SavePage() {
  const [savedOpportunity, setSavedOpportunity] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );
    setSavedOpportunity(saved);
  }, []);

  const removeCard = (id) => {
    const updated = savedOpportunity.filter(
      (item) => item.id !== id
    );

    setSavedOpportunity(updated);
    localStorage.setItem(
      "savedOpportunities",
      JSON.stringify(updated)
    );
  };

  if (savedOpportunity.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-4">
            Saved Your Opportunity
          </h1>
          <p className="text-gray-500">
            No Opportunity yet!!!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">
        Saved Opportunities
      </h1>

      <div className="grid gap-6">
        {savedOpportunity.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {item.organization}
            </p>

            <p className="text-gray-500 mt-1">
              {item.location}
            </p>

            <div className="flex gap-4 mt-4">
              
              <button
                onClick={() => removeCard(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}