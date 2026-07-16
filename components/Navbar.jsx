"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();

  const { theme, toggleTheme } = useTheme();

  const { data: session, status } = useSession();

  const user = session?.user;

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Saved", href: "/saved" },
    { name: "Add Opportunity", href: "/add-opportunity" },
    { name: "Profile", href: "/profile" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });

    router.push("/login");
  };

  if (status === "loading") {
    return null;
  }

  return (
    <aside className="w-28 md:w-64 min-h-screen flex flex-col shadow-2xl bg-white dark:bg-slate-900 text-black dark:text-white transition-all duration-300">

      <div className="p-3 md:p-6 border-b border-gray-300 dark:border-slate-700">
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-sm md:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              Career Path
            </h1>

            <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-300">
              Career Opportunities
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1 md:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            {theme === "light" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
          </button>

        </div>
      </div>


      {user && (
        <div className="mx-2 md:mx-4 mt-3 p-2 md:p-4 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700">

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {user.email?.charAt(0).toUpperCase()}
            </div>

            <div className="overflow-hidden">

              <h3 className="text-xs md:text-base font-semibold truncate">
                {user.email?.split("@")[0]}
              </h3>

              <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 truncate">
                {user.email}
              </p>

            </div>

          </div>


          <button
            onClick={handleLogout}
            className="mt-3 w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs md:text-base"
          >
            Logout
          </button>

        </div>
      )}


      <nav className="flex flex-col gap-2 p-2 md:p-4 mt-3">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-2 md:px-4 py-2 md:py-3 rounded-xl text-[11px] md:text-base text-gray-800 dark:text-gray-100 hover:bg-blue-600 hover:text-white transition break-words"
          >
            {link.name}
          </Link>
        ))}


        {!user && (
          <Link
            href="/login"
            className="px-2 md:px-4 py-2 md:py-3 rounded-xl bg-blue-600 text-center text-white hover:bg-blue-700 transition text-[11px] md:text-base"
          >
            Login
          </Link>
        )}

      </nav>


      <div className="mt-auto p-3 md:p-4 border-t border-gray-300 dark:border-slate-700">

        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
          © 2026 KaarYab
        </p>

      </div>

    </aside>
  );
}