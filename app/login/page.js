"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      dark:bg-slate-950
      px-4
      sm:px-6
      lg:px-8
      py-8
    ">

      <div className="
        w-full
        max-w-sm
        sm:max-w-md
        lg:max-w-lg
      ">

        <div className="
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          border
          border-slate-200
          dark:border-slate-800
          p-5
          sm:p-8
        ">


          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">

            <div className="
              mx-auto
              flex
              items-center
              justify-center
              h-12
              w-12
              sm:h-16
              sm:w-16
              rounded-full
              bg-blue-600
              text-white
              text-xl
              sm:text-2xl
              font-bold
            ">
              K
            </div>


            <h1 className="
              mt-4
              text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              dark:text-white
            ">
              Welcome Back
            </h1>


            <p className="
              mt-2
              text-sm
              sm:text-base
              text-slate-500
              dark:text-slate-400
            ">
              Login to your KaarYab account
            </p>

          </div>



          {/* Demo Credentials */}
          <div className="
            rounded-2xl
            bg-blue-50
            dark:bg-blue-950/40
            border
            border-blue-200
            dark:border-blue-900
            p-4
            mb-6
          ">

            <h2 className="
              font-semibold
              text-blue-700
              dark:text-blue-300
              mb-2
              text-sm
              sm:text-base
            ">
              Demo Account
            </h2>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Email:
              <span className="font-semibold ml-2">
                test@example.com
              </span>
            </p>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              Password:
              <span className="font-semibold ml-2">
                123456
              </span>
            </p>

          </div>



          {error && (
            <div className="
              mb-5
              rounded-xl
              bg-red-100
              dark:bg-red-950/40
              border
              border-red-200
              dark:border-red-900
              p-3
              text-sm
              text-red-700
              dark:text-red-300
            ">
              {error}
            </div>
          )}



          <form 
            onSubmit={login}
            className="space-y-4 sm:space-y-5"
          >

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                text-slate-900
                dark:text-white
                px-4
                py-3
                text-sm
                sm:text-base
                focus:ring-2
                focus:ring-blue-500
                outline-none
              "
            />


            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                text-slate-900
                dark:text-white
                px-4
                py-3
                text-sm
                sm:text-base
                focus:ring-2
                focus:ring-blue-500
                outline-none
              "
            />


            <button
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                font-semibold
                transition
                disabled:opacity-50
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>


          </form>


          <p className="
            mt-6
            text-center
            text-xs
            sm:text-sm
            text-slate-500
            dark:text-slate-400
          ">
            © 2026 KaarYab Afghanistan
          </p>


        </div>

      </div>

    </main>
  );
}