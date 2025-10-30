import React, { useState } from "react";
import { supabase } from "../../supabaseClient"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useUser(); // ✅ get global setter

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'error' | 'success'
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    if (!email || !password) {
      setStatusMessage("Please enter both email and password.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    try {
      // ✅ Attempt to sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setStatusMessage(error.message);
        setStatusType("error");
      } else {
        setStatusMessage("Successfully signed in!");
        setStatusType("success");
        setUser(data.user);
        setTimeout(() => navigate("/dashboard"), 1000);
        // Redirect or do something after login, e.g.:
        // window.location.href = "/dashboard";
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
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight dark:text-primary">
              Welcome Back!
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Sign in to access your account.
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm transition duration-150 ease-in-out dark:bg-white/5 dark:border-gray-700"
                required
              />
            </div>

            {/* Password Input */}
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm transition duration-150 ease-in-out dark:bg-white/5 dark:border-gray-700"
                required
              />
            </div>

            {/* Forgot Password Link */}
            {/* <div className="flex items-center justify-end">
              <a
                href="/"
                className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition duration-150 ease-in-out"
              >
                Forgot Password?
              </a>
            </div> */}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white
    ${
      loading
        ? "bg-indigo-400 cursor-not-allowed"
        : "bg-indigo-600 hover:bg-indigo-700"
    }
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
    transition duration-300 ease-in-out transform hover:scale-[1.01] active:scale-[0.99]`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Status Message */}
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

          {/* Footer / Sign Up */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
