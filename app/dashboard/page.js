"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Hero from "../../components/Hero";
import SearchFilter from "../../components/searchFilter";
import DashboardCard from "@/components/dashboardCard";
import { getOpportunity } from "@/lib/utilis";

export default function Dashboard() {
  const [opportunity, setOpportunity] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOpportunity(getOpportunity());
  }, []);

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
    <div className="
      min-h-screen
      overflow-x-hidden
      bg-slate-50
      dark:bg-slate-950
      text-slate-900
      dark:text-white
      transition-colors
    ">

      <Hero />


      <section className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        mt-8
        sm:mt-12
      ">

        <div className="
          bg-white
          dark:bg-slate-900
          rounded-2xl
          sm:rounded-3xl
          shadow-lg
          p-5
          sm:p-8
          border
          border-slate-200
          dark:border-slate-800
        ">

          <p className="
            text-sm
            sm:text-base
            lg:text-lg
            text-slate-600
            dark:text-slate-300
            leading-relaxed
          ">
            Manage your opportunities, explore new possibilities,
            and grow your career with KaarYab Afghanistan.
          </p>

        </div>

      </section>



      <div className="
        mt-8
        sm:mt-12
        px-4
        sm:px-6
        lg:px-8
      ">
        <SearchFilter
          search={search}
          setSearch={setSearch}
        />
      </div>



      <main className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        sm:py-12
      ">


        {showStatistics && (

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-6
          ">

            <DashboardCard
              value={total}
              title="Total Opportunities"
            />

            <DashboardCard
              value={categories}
              title="Categories"
            />

            <DashboardCard
              value={expired}
              title="Expired"
            />

            <DashboardCard
              value={active}
              title="Active"
            />

          </div>

        )}



        {showQuickActions && (

          <section className="mt-10 sm:mt-14">


            <h2 className="
              text-2xl
              sm:text-3xl
              font-bold
              text-slate-800
              dark:text-white
            ">
              Quick Actions
            </h2>



            <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
              mt-5
            ">



              <Link
                href="/add-opportunity"
                className="
                  bg-blue-600
                  text-white
                  rounded-2xl
                  p-5
                  sm:p-6
                  shadow-lg
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Add Opportunity
                </h3>

                <p className="
                  mt-2
                  text-sm
                  sm:text-base
                  text-blue-100
                ">
                  Create and publish a new opportunity.
                </p>

              </Link>




              <Link
                href="/opportunities"
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-2xl
                  p-5
                  sm:p-6
                  shadow-lg
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >

                <h3 className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-slate-800
                  dark:text-white
                ">
                  View Opportunities
                </h3>


                <p className="
                  mt-2
                  text-sm
                  sm:text-base
                  text-slate-500
                  dark:text-slate-400
                ">
                  Browse all opportunities.
                </p>

              </Link>





              <Link
                href="/dashboard"
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-700
                  rounded-2xl
                  p-5
                  sm:p-6
                  shadow-lg
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >

                <h3 className="
                  text-lg
                  sm:text-xl
                  font-bold
                  text-slate-800
                  dark:text-white
                ">
                  Analytics
                </h3>


                <p className="
                  mt-2
                  text-sm
                  sm:text-base
                  text-slate-500
                  dark:text-slate-400
                ">
                  Platform statistics and reports.
                </p>


              </Link>


            </div>

          </section>

        )}


      </main>



      <footer className="
        bg-slate-800
        dark:bg-black
        text-white
        py-6
        px-4
        rounded-t-3xl
      ">

        <ul className="
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-3
          sm:gap-8
          text-xs
          sm:text-sm
        ">

          <li>
            © Copyright Reserved
          </li>

          <li>
            2026
          </li>

          <li>
            Contact With Us
          </li>

        </ul>

      </footer>


    </div>
  );
}