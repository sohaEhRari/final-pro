import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 sm:p-6 lg:p-10 rounded-3xl shadow-lg mt-4 sm:mt-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Find Jobs and Opportunities in Afghanistan
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg opacity-90 max-w-2xl">
          Jobs, Scholarships, Internships & Remote Work all in one place
        </p>


        <Link
          href="/dashboard"
          className="inline-block mt-5 bg-white text-blue-500 px-5 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Explore Now
        </Link>


        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          {[
            ["Jobs", "120+"],
            ["Scholarships", "68+"],
            ["Internships", "24+"],
            ["Remote", "45+"],
          ].map(([title, number]) => (
            <div
              key={title}
              className="bg-white text-black p-4 sm:p-5 rounded-2xl shadow hover:scale-105 transition"
            >
              <h3 className="text-gray-500 font-bold text-sm sm:text-base">
                {title}
              </h3>

              <p className="text-xl sm:text-2xl font-bold mt-2">
                {number}
              </p>
            </div>
          ))}

        </div>


        <section className="mt-10">

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Categories
          </h2>


          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">

            {[
              "Job",
              "Scholarship",
              "Internship",
              "Remote",
            ].map((item) => (
              <div
                key={item}
                className="
                bg-white 
                text-black 
                p-5 
                rounded-2xl 
                shadow 
                text-center
                hover:scale-105
                transition
                cursor-pointer"
              >
                {item}
              </div>
            ))}

          </div>

        </section>



        <section className="mt-10">

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
            Featured Opportunities
          </h2>


          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-5
          ">


            {[
              {
                title: "Frontend Developer",
                desc: "Herat, Afghanistan",
              },
              {
                title: "Scholarship Program",
                desc: "Fully Funded",
              },
              {
                title: "Remote Internship",
                desc: "International Company",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="
                bg-white 
                text-black 
                p-5 
                rounded-2xl 
                shadow
                hover:-translate-y-2
                transition
                "
              >

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.desc}
                </p>

              </div>

            ))}


          </div>

        </section>

      </div>

    </div>
  );
}