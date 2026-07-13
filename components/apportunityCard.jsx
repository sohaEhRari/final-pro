"use client";

import Link from "next/link";
import { deleteOpportunity, getOpportunity } from "../lib/utilis";

export default function OpportunityCard({ item, setData }) {
  function handleDelete() {
    const confirmed = window.confirm(
      "Do you want to delete this opportunity?"
    );

    if (!confirmed) return;

    deleteOpportunity(item.id);

    if (setData) {
      setData(getOpportunity());
    }
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {item.type}
        </span>
      </div>

      <h2 className="text-2xl font-bold mt-4 text-slate-800">
        {item.title}
      </h2>

      <p className="text-slate-500 mt-2">
        {item.organization}
      </p>

      <p className="mt-3 text-slate-600">
        📍 {item.location}
      </p>

      <p className="mt-4 text-slate-600 line-clamp-3">
        {item.description}
      </p>

      <p className="mt-4 text-red-500 font-medium">
        Deadline: {item.deadline}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {item.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-100 px-3 py-1 rounded-lg text-sm text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        href={`/opportunities/${item.id}`}
        className="block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold transition"
      >
        View Details
      </Link>
  
      <div className="flex gap-3 mt-4">
        <Link
          href={`/edit-opportunity/${item.id}`}
          className="flex-1 text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}