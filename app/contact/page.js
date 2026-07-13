"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    alert("Form Submitted Successfully!");

    setForm({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      p-4
      sm:p-6
      bg-gradient-to-r
      from-white
      to-blue-400
      dark:from-slate-950
      dark:to-slate-800
      transition-colors
    ">

      <div className="
        w-full
        max-w-2xl
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-2xl
        p-6
        sm:p-8
      ">

        <h1 className="
          text-3xl
          sm:text-4xl
          font-bold
          text-center
          mb-3
          text-blue-700
          dark:text-blue-400
        ">
          Contact Me
        </h1>


        <p className="
          text-center
          mb-8
          text-gray-600
          dark:text-gray-300
        ">
          Have a question or want to work together? Fill out the form below.
        </p>



        <form onSubmit={handleSubmit} className="space-y-5">


          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-gray-700
              dark:text-gray-200
            ">
              First Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>



          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-gray-700
              dark:text-gray-200
            ">
              Last Name
            </label>

            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>



          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-gray-700
              dark:text-gray-200
            ">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />
          </div>



          <div>
            <label className="
              block
              mb-2
              font-semibold
              text-gray-700
              dark:text-gray-200
            ">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="
                w-full
                p-3
                rounded-xl
                border
                border-gray-300
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder-gray-400
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              required
            />

          </div>



          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              transition
            "
          >
            Send Message
          </button>


        </form>



        <div className="mt-8 text-center">

          <Link
            href="/"
            className="
              inline-block
              px-6
              py-3
              rounded-xl
              bg-gray-700
              dark:bg-slate-700
              text-white
              hover:bg-gray-800
              transition
            "
          >
            ← Back To Home
          </Link>

        </div>


      </div>

    </div>
  );
}