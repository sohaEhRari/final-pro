"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getOpportunity, updateOpportunity } from "../../../lib/utilis";

export default function EditOpportunity() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);


  useEffect(() => {
    const data = getOpportunity();

    const item = data.find(
      (o) => o.id.toString() === id
    );

    if (!item) return;

    setForm({
      ...item,
      requirements: Array.isArray(item.requirements)
        ? item.requirements.join(", ")
        : item.requirements || "",

      tags: Array.isArray(item.tags)
        ? item.tags.join(", ")
        : item.tags || "",
    });

  }, [id]);



  if (!form) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400 animate-pulse">
          Loading editor...
        </p>
      </div>
    );
  }



  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmit(e) {
    e.preventDefault();


    const updated = {
      ...form,

      requirements: form.requirements
        ? form.requirements
            .split(",")
            .map((r) => r.trim())
        : [],

      tags: form.tags
        ? form.tags
            .split(",")
            .map((t) => t.trim())
        : [],
    };


    updateOpportunity(id, updated);

    router.push("/opportunities");
  }



  const inputClass =
    "w-full mt-2 rounded-xl border border-slate-700 bg-slate-800 text-white caret-white placeholder:text-slate-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";


  const labelClass =
    "text-sm font-medium text-slate-200";



  return (

    <div className="min-h-screen bg-slate-950 text-white">


      {/* Header */}

      <header className="
        bg-slate-900
        border-b
        border-slate-800
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-4
          py-5
          flex
          justify-between
          items-center
        ">

          <h1 className="
            text-xl
            sm:text-2xl
            font-bold
          ">
            Edit Opportunity
          </h1>


          <button
            onClick={() => router.push("/opportunities")}
            className="
              text-slate-400
              hover:text-white
            "
          >
            ← Back
          </button>

        </div>

      </header>




      <main className="
        max-w-7xl
        mx-auto
        px-4
        py-8
        grid
        lg:grid-cols-3
        gap-8
      ">



        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            lg:col-span-2
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            shadow-xl
            p-5
            sm:p-8
            space-y-6
          "
        >


          <h2 className="text-xl font-semibold">
            Basic Information
          </h2>



          <div>
            <label className={labelClass}>
              Title
            </label>

            <input
              name="title"
              value={form.title || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>




          <div>
            <label className={labelClass}>
              Organization
            </label>

            <input
              name="organization"
              value={form.organization || ""}
              onChange={handleChange}
              className={inputClass}
            />

          </div>





          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          ">


            {[
              ["category","Category"],
              ["type","Type"],
              ["location","Location"],
              ["deadline","Deadline"]
            ].map(([name,title]) => (

              <div key={name}>

                <label className={labelClass}>
                  {title}
                </label>


                <input
                  type={
                    name === "deadline"
                    ? "date"
                    : "text"
                  }
                  name={name}
                  value={form[name] || ""}
                  onChange={handleChange}
                  className={inputClass}
                />

              </div>

            ))}


          </div>





          <div>

            <label className={labelClass}>
              Description
            </label>

            <textarea
              name="description"
              rows="5"
              value={form.description || ""}
              onChange={handleChange}
              className={inputClass}
            />

          </div>





          <div>

            <label className={labelClass}>
              Requirements
            </label>

            <input
              name="requirements"
              value={form.requirements || ""}
              onChange={handleChange}
              className={inputClass}
            />

          </div>





          <div>

            <label className={labelClass}>
              Tags
            </label>

            <input
              name="tags"
              value={form.tags || ""}
              onChange={handleChange}
              className={inputClass}
            />

          </div>





          <div>

            <label className={labelClass}>
              Apply Link
            </label>

            <input
              name="applyLink"
              value={form.applyLink || ""}
              onChange={handleChange}
              className={inputClass}
            />

          </div>





          <div className="
            flex
            flex-col
            sm:flex-row
            gap-4
          ">


            <button
              type="submit"
              className="
                flex-1
                bg-blue-600
                hover:bg-blue-700
                py-3
                rounded-xl
                font-semibold
              "
            >
              Save Changes
            </button>



            <button
              type="button"
              onClick={() => router.push("/opportunities")}
              className="
                flex-1
                bg-slate-800
                hover:bg-slate-700
                py-3
                rounded-xl
                font-semibold
              "
            >
              Cancel
            </button>


          </div>


        </form>






        {/* PREVIEW */}

        <div className="
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          shadow-xl
          h-fit
          lg:sticky
          lg:top-6
        ">


          <h3 className="
            text-lg
            font-bold
            mb-4
          ">
            Live Preview
          </h3>



          <h4 className="
            text-xl
            font-semibold
          ">
            {form.title}
          </h4>


          <p className="
            text-slate-400
            mt-2
          ">
            {form.organization}
          </p>



          <p className="
            mt-4
            text-slate-300
            text-sm
          ">
            {form.description}
          </p>


        </div>


      </main>

    </div>
  );
}