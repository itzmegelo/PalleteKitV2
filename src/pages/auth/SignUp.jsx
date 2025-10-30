import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    if (!email || !password || !displayName) {
      setStatusMessage("Please fill all fields.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    try {
      // ✅ Create user with Supabase and store display name in metadata
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName }, // Store in user_metadata
        },
      });

      if (error) {
        setStatusMessage(error.message);
        setStatusType("error");
      } else {
        setStatusMessage("Account created successfully! Check your email.");
        setStatusType("success");
        console.log("User created:", data);
      }
    } catch (err) {
      setStatusMessage("An unexpected error occurred.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-md dark:bg-white/5 border border-[#6366f1]/30 transition duration-300 hover:shadow-[#6366f1]/50">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-primary">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Sign up to start using the app.
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Display Name */}
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
              >
               Username
              </label>
              <input
                type="text"
                id="displayName"
                placeholder="Enter username"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm dark:bg-white/5 dark:border-gray-700"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm dark:bg-white/5 dark:border-gray-700"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm dark:bg-white/5 dark:border-gray-700"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-300 ease-in-out"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {statusMessage && (
            <div
              className={`text-center text-sm font-medium p-2 rounded-lg ${
                statusType === "error"
                  ? "text-red-600 bg-red-50"
                  : "text-green-600 bg-green-50"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
