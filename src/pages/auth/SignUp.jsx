import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { X } from "lucide-react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    if (!email || !password || !displayName || !phone) {
      setStatusMessage("Please fill all fields.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    if (!termsAccepted) {
      setStatusMessage("You must accept the Terms & Conditions.");
      setStatusType("error");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: displayName, phone: phone },
        },
      });

      if (error) {
        setStatusMessage(error.message);
        setStatusType("error");
      } else {
        setStatusMessage(
          "Account created successfully! Check your email for confirmation."
        );
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

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-indigo-600 hover:text-indigo-700 underline"
                >
                  Terms & Conditions
                </button>
              </label>
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

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-lg shadow-xl relative mx-4">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Terms & Conditions
            </h3>
            <div className="max-h-96 overflow-y-auto text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>
                <strong>Welcome to PaletteKit!</strong> By using this app, you
                agree to the following terms and conditions. Please read them
                carefully.
              </p>
              <p>
                <strong>1. Account Responsibility:</strong> You are responsible
                for maintaining the confidentiality of your account information
                and for all activities under your account. Sharing your account
                credentials is prohibited.
              </p>
              <p>
                <strong>2. User Conduct:</strong> You agree not to use
                PaletteKit to upload, share, or distribute content that is
                illegal, offensive, or infringes the rights of others. Respect
                other creators and their work.
              </p>
              <p>
                <strong>3. Intellectual Property:</strong> All palettes you
                create remain your property. By sharing them publicly on
                PaletteKit, you grant other users the right to view and use them
                for inspiration, but not to claim ownership.
              </p>
              <p>
                <strong>4. Reactions and Interaction:</strong> You may react to
                other users’ palettes once per palette. Any attempt to
                manipulate reactions is prohibited.
              </p>
              <p>
                <strong>5. Termination:</strong> PaletteKit reserves the right
                to suspend or terminate accounts that violate these terms or
                engage in abusive behavior.
              </p>
              <p>
                <strong>6. Privacy:</strong> Your personal data, including email
                and phone number, will be used in accordance with our Privacy
                Policy. Do not share sensitive information in your palettes.
              </p>
              <p>
                <strong>7. Changes to Terms:</strong> PaletteKit may update
                these terms periodically. Continued use of the app constitutes
                acceptance of the updated terms.
              </p>
              <p>
                By clicking “Accept Terms,” you acknowledge that you have read,
                understood, and agreed to abide by these terms and conditions.
              </p>
            </div>

            <button
              onClick={() => {
                setTermsAccepted(true);
                setShowTerms(false);
              }}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition-colors"
            >
              Accept Terms
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
