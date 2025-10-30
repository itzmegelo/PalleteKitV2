import React from "react";
import { useUser } from "../../context/UserContext";

export default function Profile() {
    const { user } = useUser();

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-gray-100 dark:bg-transparent">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden transform transition-all hover:shadow-2xl">
        {/* Banner/Header */}
        <div className="h-40 sm:h-56 w-full relative bg-gradient-to-br from-primary to-blue-400"></div>

        {/* Profile Content */}
        <div className="px-6 pb-8 pt-0 sm:px-10">
          {/* Profile Image */}
          <div className="-mt-24 sm:-mt-28 flex justify-center sm:justify-start relative z-10">
            <img
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-full border-4 border-white object-cover shadow-2xl transition duration-300 hover:scale-105"
              src="https://placehold.co/176x176/4f46e5/ffffff?text=Alex"
              alt="User Profile"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/176x176/ef4444/ffffff?text=Error")
              }
            />
          </div>

          {/* Profile Details */}
          <div className="text-center sm:text-left pt-4">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
              {user?.user_metadata?.display_name ||
                user?.email?.split("@")[0] ||
                "Creator"}{" "}
            </h1>
            <p className="text-lg font-medium text-blue-600 mt-1">
              {user?.user_metadata?.email ||
                user?.email?.split("@")[0] ||
                "Creator"}{" "}
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-4 text-gray-600">
              <span className="flex items-center">
                {/* Location Icon */}
                <svg
                  className="w-5 h-5 mr-1 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                San Francisco, CA
              </span>
              <span className="sm:block hidden text-gray-400">|</span>
              <span className="flex items-center">
                {/* Link Icon */}
                <svg
                  className="w-5 h-5 mr-1 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="hover:text-blue-600 transition duration-150"
                >
                  portfolio.com
                </a>
              </span>
            </div>

            <p className="text-gray-700 mt-6 text-base leading-relaxed">
              Passionate about building scalable and accessible user interfaces.
              I specialize in React and Tailwind and love tackling complex
              design systems. Always learning and focused on clean, performant
              code.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center sm:justify-start space-x-4">
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.677a8.97 8.97 0 01-1.395-3.323c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Send Message
            </button>
            <button className="flex items-center px-6 py-3 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 shadow-md hover:bg-gray-50 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.808l-2.042 2.042L15.347 14.5m4.332-4.332l-2.042 2.042-5.656-5.656 2.042-2.042a4 4 0 105.656 5.656z"
                ></path>
              </svg>
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
