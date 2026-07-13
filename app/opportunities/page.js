"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getOpportunity } from "../../lib/utilis";
import OpportunityCard from "../../components/apportunityCard";

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getOpportunity());
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <Link
            href="/home"
            className="inline-block text-sm sm:text-base font-medium hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="py-8 sm:py-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Discover Opportunities
            </h1>

            <p className="mt-3 sm:mt-4 text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl">
              Find internships, scholarships, jobs, and remote opportunities.
            </p>
          </div>

        </div>

      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow border border-slate-200">

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search opportunities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              className="w-full md:w-64 border border-slate-300 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Opportunity Type</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
              <option value="job">Job</option>
              <option value="online">Online</option>
            </select>

          </div>

        </div>


        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-5 sm:gap-6 
          mt-6 sm:mt-8
        ">

          {filtered.length > 0 ? (
            filtered.map((item) => (
              <OpportunityCard
                key={item.id}
                item={item}
                setData={setData}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No opportunities found.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}