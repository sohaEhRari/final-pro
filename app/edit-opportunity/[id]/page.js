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
    const item = data.find((o) => o.id.toString() === id);

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 animate-pulse">Loading editor...</p>
      </div>
    );
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updated = {
      ...form,
      requirements: form.requirements
        ? form.requirements.split(",").map((r) => r.trim())
        : [],
      tags: form.tags
        ? form.tags.split(",").map((t) => t.trim())
        : [],
    };

    updateOpportunity(id, updated);
    router.push("/opportunities");
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">

          <h1 className="text-xl font-bold text-gray-900">
            Edit Opportunity
          </h1>

          <button
            onClick={() => router.push("/opportunities")}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            ← Back
          </button>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">

          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-2xl shadow-sm p-6 md:p-8 space-y-6"
          >

            <h2 className="text-lg font-semibold text-gray-900">
              Basic Information
            </h2>

            <div>
              <label className="text-sm text-gray-500">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Organization</label>
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-500">Category</label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Type</label>
                <input
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-xl p-3"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded-xl p-3"
                />
              </div>

            </div>

            <div>
              <label className="text-sm text-gray-500">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3 h-32"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Requirements (comma separated)
              </label>
              <input
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Tags (comma separated)
              </label>
              <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Apply Link</label>
              <input
                name="applyLink"
                value={form.applyLink}
                onChange={handleChange}
                className="w-full mt-1 border rounded-xl p-3"
              />
            </div>

            <div className="flex gap-3 pt-4">

              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => router.push("/opportunities")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

        <div className="space-y-6">

          <div className="bg-white border rounded-2xl p-6 shadow-sm sticky top-6">

            <h3 className="font-bold text-gray-900 mb-4">
              Live Preview
            </h3>

            <div className="space-y-3 text-sm">

              <p className="text-lg font-semibold">
                {form.title}
              </p>

              <p className="text-gray-500">
                {form.organization}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">

                {form.tags?.split(",").map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                  >
                    #{tag.trim()}
                  </span>
                ))}

              </div>

              <p className="text-gray-600 mt-3">
                {form.description}
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}