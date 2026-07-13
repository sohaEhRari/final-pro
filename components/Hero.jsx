"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/log/auth";

export default function Hero() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-14">

            {/* Left */}
            <div className="text-center lg:text-left">

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                👋 Welcome back,
                <span className="text-yellow-300 ml-2">
                  {user?.name || "User"}
                </span>
              </h2>

              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Opportunity Dashboard
              </h1>

              <p className="mt-6 text-blue-100 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                Manage opportunities, discover new careers, monitor statistics,
                and organize everything from one beautiful dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                <Link
                  href="/add-opportunity"
                  className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition text-center"
                >
                  ➕ Add Opportunity
                </Link>

                <Link
                  href="/opportunities"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition text-center"
                >
                  📋 Browse Opportunities
                </Link>

              </div>

            </div>

            {/* Right */}
            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>

                <img
                  src="https://media.istockphoto.com/id/2228288326/photo/data-system-kpi-and-metrics-connected-in-database-for-follow-earnings-operations-and-sales.jpg?s=612x612&w=0&k=20&c=Oa4iJl7pio_SISpbvTQ_2gjiKm7mIaVfU9la6ejChR4="
                  alt="Dashboard"
                  className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white shadow-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}