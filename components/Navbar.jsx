"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/log/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Opportunities", href: "/opportunities" },
    { name: "Saved", href: "/saved" },
    { name: "Add Opportunity", href: "/add-opportunity" },
    { name: "Profile", href: "/profile" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    router.push("/login");
  };

  return (
    <aside className="w-64 min-h-screen flex flex-col shadow-2xl bg-white text-black dark:bg-slate-900 dark:text-white transition-colors">

      <div className="p-6 border-b border-gray-300 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              Career Path
            </h1>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              Career Opportunities
            </p>
          </div>
          <button
  onClick={toggleTheme}
  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700"
>
  {theme === "light" ? (
    <MdDarkMode size={24} />
  ) : (
    <MdLightMode size={24} />
  )}
</button>
        </div>
      </div>

      {user && (
        <div className="mx-4 mt-5 p-4 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div className="overflow-hidden">
              <h3 className="font-semibold truncate">{user.name}</h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 truncate">
                {user.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 transition text-white font-semibold"
          >
            Logout
          </button>
        </div>
      )}

      <nav className="flex flex-col gap-2 p-4 mt-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-3 rounded-xl transition hover:bg-blue-600 hover:text-white text-gray-700 dark:text-slate-300"
          >
            {link.name}
          </Link>
        ))}

        {!user && (
          <Link
            href="/login"
            className="px-4 py-3 rounded-xl bg-blue-600 text-center text-white hover:bg-blue-700 transition"
          >
            Login
          </Link>
        )}
      </nav>

      <div className="mt-auto p-4 border-t border-gray-300 dark:border-slate-700">
        <p className="text-xs text-gray-500 dark:text-slate-400">
          © 2026 KaarYab
        </p>
      </div>
    </aside>
  );
}