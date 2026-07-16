"use client";

import { useState } from "react";
import { validateOpportunity } from "@/lib/validation";
import { useRouter } from "next/navigation";

export default function OpportunityForm({ initialData }) {
  const router = useRouter();

  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      organization: "",
      category: "",
      location: "",
      deadline: "",
      description: "",
      requirements: "",
      applyLink: "",
    }
  );

  const [errors, setErrors] = useState({});


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateOpportunity(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    const newOpportunity = {
      id: Date.now(),
      ...formData,
      status: "Active",
    };


    const opportunities = JSON.parse(
      localStorage.getItem("opportunities") || "[]"
    );


    localStorage.setItem(
      "opportunities",
      JSON.stringify([
        ...opportunities,
        newOpportunity,
      ])
    );


    alert("Opportunity Added Successfully!");


    setFormData({
      title: "",
      organization: "",
      category: "",
      location: "",
      deadline: "",
      description: "",
      requirements: "",
      applyLink: "",
    });


    setErrors({});


    router.push("/opportunities");
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Opportunity Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Frontend Developer Internship"
          className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">
            {errors.title}
          </p>
        )}
      </div>



      {/* Organization + Category */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Organization
          </label>

          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Google"
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          />

          {errors.organization && (
            <p className="text-red-500 text-sm mt-1">
              {errors.organization}
            </p>
          )}
        </div>



        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          >
            <option value="">
              Select Category
            </option>

            <option value="Internship">
              Internship
            </option>

            <option value="Job">
              Job
            </option>

            <option value="Scholarship">
              Scholarship
            </option>

            <option value="Competition">
              Competition
            </option>

            <option value="Volunteer">
              Volunteer
            </option>

          </select>

          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category}
            </p>
          )}

        </div>

      </div>



      {/* Location + Deadline */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Remote"
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          />
        </div>



        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          />
        </div>

      </div>




      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Description
        </label>

        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the opportunity..."
          className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        />

      </div>




      {/* Requirements */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Requirements
        </label>

        <textarea
          name="requirements"
          rows="4"
          value={formData.requirements}
          onChange={handleChange}
          placeholder="List requirements..."
          className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        />

      </div>




      {/* Link */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          Application Link
        </label>

        <input
          type="url"
          name="applyLink"
          value={formData.applyLink}
          onChange={handleChange}
          placeholder="https://example.com"
          className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
        />

      </div>



      <button
        type="submit"
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          py-3
          rounded-lg
          transition
        "
      >
        Add Opportunity
      </button>


    </form>
  );
}