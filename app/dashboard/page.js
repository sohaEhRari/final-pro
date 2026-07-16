"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import Hero from "../../components/Hero";
import SearchFilter from "../../components/searchFilter";
import DashboardCard from "@/components/dashboardCard";
import { getOpportunity } from "@/lib/utilis";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [opportunity, setOpportunity] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOpportunity(getOpportunity());

    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const logout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading...
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const total = opportunity.length;

  const active = opportunity.filter(
    (item) => item.status !== "Expired"
  ).length;

  const expired = opportunity.filter(
    (item) => item.status === "Expired"
  ).length;

  const categories = new Set(
    opportunity.map((item) => item.category)
  ).size;

  const query = search.toLowerCase();

  const showStatistics =
    query === "" ||
    [
      "statistics",
      "total",
      "total opportunities",
      "categories",
      "category",
      "active",
      "expired",
    ].some((text) => text.includes(query));

  const showQuickActions =
    query === "" ||
    [
      "quick",
      "quick actions",
      "add opportunity",
      "view opportunities",
      "analytics",
    ].some((text) => text.includes(query));

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">

      <Hero />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center">

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome, {session.user.email.split("@")[0]} 👋
            </h1>

            <p className="mt-2 text-blue-100">
              We are happy to have you back.
            </p>

            <p className="mt-1 text-sm text-blue-200">
              {session.user.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>

        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6">
          <p>
            Manage your opportunities, explore new possibilities, and grow your
            career with KaarYab Afghanistan.
          </p>
        </div>
      </section>

      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <SearchFilter
          search={search}
          setSearch={setSearch}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {showStatistics && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard value={total} title="Total Opportunities" />
            <DashboardCard value={categories} title="Categories" />
            <DashboardCard value={expired} title="Expired" />
            <DashboardCard value={active} title="Active" />
          </div>
        )}

        {showQuickActions && (
          <section className="mt-12">

            <h2 className="text-3xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              <Link
                href="/add-opportunity"
                className="bg-blue-600 text-white rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">
                  Add Opportunity
                </h3>

                <p className="mt-2">
                  Create and publish a new opportunity.
                </p>
              </Link>

              <Link
                href="/opportunities"
                className="bg-white dark:bg-slate-900 border rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">
                  View Opportunities
                </h3>

                <p className="mt-2">
                  Browse all opportunities.
                </p>
              </Link>

              <Link
                href="/dashboard"
                className="bg-white dark:bg-slate-900 border rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">
                  Analytics
                </h3>

                <p className="mt-2">
                  Platform statistics and reports.
                </p>
              </Link>

            </div>

          </section>
        )}

      </main>

      <footer className="bg-slate-800 text-white py-6">
        <ul className="flex justify-center gap-6">
          <li>© Copyright Reserved</li>
          <li>2026</li>
          <li>Contact With Us</li>
        </ul>
      </footer>

    </div>
  );
}