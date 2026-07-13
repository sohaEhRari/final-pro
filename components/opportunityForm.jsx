"use client";

import { useState } from "react";
import { validateOpportunity } from "@/lib/validation";
import { addOpportunity, updateOpportunity } from "../lib/utilis";
import { useRouter } from "next/navigation";

export default function OpportunityForm({initialData}) {
  const router=useRouter();
  const [formData, setFormData] = useState( initialData||{
    title: "",
    organization: "",
    category: "",
    location: "",
    deadline: "",
    description: "",
    requirements: "",
    applyLink: "",
  });

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
    };
  
    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );
  
    const updated = [...saved, newOpportunity];
  
    localStorage.setItem(
      "savedOpportunities",
      JSON.stringify(updated)
    );
  
    alert("Opportunity Added!");
  
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

   
    router.push("/saved");
  }
 return(
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Opportunity Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Frontend Developer Internship"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Google"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.organization && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.organization}
                </p>
              )}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Internship">Internship</option>
                <option value="Job">Job</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Competition">Competition</option>
                <option value="Volunteer">Volunteer</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Remote or New York"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.deadline && (
                <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>
              )}
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the opportunity..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description}
              </p>
            )}
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requirements
            </label>
            <textarea
              name="requirements"
              rows={4}
              value={formData.requirements}
              onChange={handleChange}
              placeholder="List the requirements..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            {errors.requirements && (
              <p className="text-red-500 text-sm mt-1">
                {errors.requirements}
              </p>
            )}
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Application Link
            </label>
            <input
              type="url"
              name="applyLink"
              value={formData.applyLink}
              onChange={handleChange}
              placeholder="https://example.com/apply"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.applyLink && (
              <p className="text-red-500 text-sm mt-1">{errors.applyLink}</p>
            )}
          </div>
  
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Add Opportunity
            </button>
          </div>
        </form>
  );
}