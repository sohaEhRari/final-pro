"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { getOpportunity } from "../../../lib/utilis";

export default function OpportunityDetails() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const data = getOpportunity();
    const item = data.find((o) => o.id.toString() === id);

    if (!item) {
      notFound();
      return;
    }

    setOpportunity(item);
  }, [id]);

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500 text-sm">
          Loading opportunity details...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <Link
            href="/opportunities"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Opportunities
          </Link>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
            {opportunity.category}
          </span>

        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {opportunity.title}
          </h1>

          <p className="text-white/80 text-lg mt-2">
            {opportunity.organization}
          </p>

          <div className="flex flex-wrap gap-3 mt-6 text-sm">

            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
              📍 {opportunity.location}
            </div>

            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
              💼 {opportunity.type}
            </div>

            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-xl border border-white/10">
              ⏰ {opportunity.deadline}
            </div>

          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-6">

          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Job Overview
            </h2>

            <p className="text-gray-600 leading-7">
              {opportunity.description}
            </p>
          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Requirements
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">

              {Array.isArray(opportunity.requirements) ? (
                opportunity.requirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 border rounded-xl p-3"
                  >
                    <span className="text-green-600 font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm">
                      {req}
                    </span>
                  </div>
                ))
              ) : opportunity.requirements ? (
                String(opportunity.requirements)
                  .split(",")
                  .map((req, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-gray-50 border rounded-xl p-3"
                    >
                      <span className="text-green-600 font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700 text-sm">
                        {req.trim()}
                      </span>
                    </div>
                  ))
              ) : (
                <p className="text-gray-400">No requirements listed</p>
              )}

            </div>
          </div>

        </div>

        <div className="space-y-6">

          <div className="bg-white border rounded-2xl shadow-sm p-6 sticky top-6">

            <h3 className="text-lg font-bold mb-4 text-gray-900">
              Apply for this position
            </h3>

            <Link
              href={opportunity.applyLink}
              target="_blank"
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition shadow-md"
            >
              Apply Now →
            </Link>

            <p className="text-xs text-gray-400 mt-3 text-center">
              You will be redirected to external site
            </p>

          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-6">

            <h3 className="text-lg font-bold mb-4">
              Opportunity Details
            </h3>

            <div className="space-y-4 text-sm">

              <div className="border-b pb-2">
                <p className="text-gray-400">Organization</p>
                <p className="font-semibold">{opportunity.organization}</p>
              </div>

              <div className="border-b pb-2">
                <p className="text-gray-400">Category</p>
                <p className="font-semibold">{opportunity.category}</p>
              </div>

              <div className="border-b pb-2">
                <p className="text-gray-400">Location</p>
                <p className="font-semibold">{opportunity.location}</p>
              </div>

              <div className="border-b pb-2">
                <p className="text-gray-400">Type</p>
                <p className="font-semibold">{opportunity.type}</p>
              </div>

              <div>
                <p className="text-gray-400">Deadline</p>
                <p className="font-semibold text-red-500">
                  {opportunity.deadline}
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border rounded-2xl shadow-sm p-6">

            <h3 className="text-lg font-bold mb-4">
              Skills & Tags
            </h3>

            <div className="flex flex-wrap gap-2">

              {Array.isArray(opportunity.tags) &&
                opportunity.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}