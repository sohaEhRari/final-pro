import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ];

  const projects = [
    {
      title: "product-store",
      description:
        "Modern dashboard for managing customers and business analytics.",
    },
    {
      title: "login-form",
      description:
        "Complete management system for doctors, patients and reports.",
    },
    {
      title: "E-Commerce",
      description:
        "Online shopping platform with secure payments.",
    },
    {
        title: "Pocket-classroom",
        description:
          "Online shopping platform with secure payments.",
      },

      {
        title: "country-explorer",
        description:
          "Online shopping platform with secure payments.",
      },
      {
        title: "goal-tracker",
        description:
          "Online shopping platform with secure payments.",
      },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

          <div className="relative h-48 sm:h-64">
          <Image
  src="/girl.webp"
  alt="Cover"
  fill
  className="object-cover"
/>

            <div className="absolute inset-0 bg-black/50" />
          </div>


          <div className="flex flex-col items-center gap-6 p-6 md:flex-row md:items-start">

            <div className="-mt-20 relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-blue-500 sm:h-40 sm:w-40">

              <Image
              src="/lap.webp"
                alt="Profile"
                fill
                className="object-cover"
              />

            </div>


            <div className="text-center md:text-left">

              <h1 className="text-3xl font-bold sm:text-4xl">
                Soha Ehrari
              </h1>

              <p className="mt-2 text-blue-400">
                Frontend-Developer
              </p>


              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                I build modern, scalable and responsive web applications
                using Next.js, React, Laravel and modern technologies.
              </p>


              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center font-medium transition hover:bg-blue-700"
                >
                  Contact Me
                </Link>


             

              </div>

            </div>

          </div>

        </section>



        <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

          {[
            ["6+", "Projects"],
            ["5+", "Skills"],
            ["100%", "Commitment"],
          ].map(([number, text]) => (

            <div
              key={text}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center"
            >
              <h2 className="text-3xl font-bold text-blue-400">
                {number}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {text}
              </p>

            </div>

          ))}

        </section>




        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            About Me
          </h2>


          <p className="mt-4 leading-8 text-slate-400">
            Passionate developer focused on creating clean interfaces,
            powerful backend systems, and solving real-world problems
            through technology.
          </p>

        </section>





        {/* Skills */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            Skills
          </h2>


          <div className="mt-5 flex flex-wrap gap-3">

            {skills.map((skill) => (

              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:border-blue-500"
              >
                {skill}
              </span>

            ))}

          </div>

        </section>





        <section className="mt-8">

          <h2 className="mb-5 text-2xl font-bold">
            Featured Projects
          </h2>


          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-blue-500"
              >



                <div className="p-6">

                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>


                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>


                  <Link
                    href="/projects"
                    className="mt-5 inline-block text-blue-400 hover:text-blue-300"
                  >
                    View Project →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </section>





        <section className="my-10 rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">

          <h2 className="text-3xl font-bold">
            Let's Work Together
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Have a project idea? Let's create something amazing together.
          </p>


          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Get Started
          </Link>

        </section>


      </div>

    </main>
  );
}