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
      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-50
        dark:bg-slate-950
        px-4
      ">
        <div className="text-center">

          <h1 className="
            font-bold
            text-3xl
            mb-4
            text-slate-900
            dark:text-white
          ">
            Saved Your Opportunity
          </h1>

          <p className="
            text-gray-500
            dark:text-gray-400
          ">
            No Opportunity yet!!!
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="
      min-h-screen
      p-4
      sm:p-8
      bg-slate-50
      dark:bg-slate-950
    ">

      <h1 className="
        text-3xl
        font-bold
        mb-8
        text-slate-900
        dark:text-white
      ">
        Saved Opportunities
      </h1>


      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">

        {savedOpportunity.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              shadow-md
              border
              border-slate-200
              dark:border-slate-800
              p-6
            "
          >

            <h2 className="
              text-xl
              font-semibold
              text-slate-900
              dark:text-white
            ">
              {item.title}
            </h2>


            <p className="
              mt-2
              text-slate-600
              dark:text-slate-300
            ">
              {item.organization}
            </p>


            <p className="
              mt-1
              text-slate-500
              dark:text-slate-400
            ">
              {item.location}
            </p>


            <div className="mt-5">

              <button
                onClick={() => removeCard(item.id)}
                className="
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-5
                  py-2
                  rounded-xl
                  transition
                "
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