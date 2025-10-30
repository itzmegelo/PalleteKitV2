import React from "react";
import { useUser } from "../../context/UserContext";
import { Palette, Share2, Smile, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome back,{" "}
            {user?.user_metadata?.display_name ||
              user?.email?.split("@")[0] ||
              "Creator"}{" "}
            👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your palettes, track shares, and monitor your total
            reactions.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-600/20 px-4 py-2 rounded-lg font-medium">
          <Sparkles className="h-5 w-5" />
          <span>Creator Mode</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* My Palettes */}
        <a
          href="/mypalette"
          className="block bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-center justify-between dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              My Palettes
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              12
            </p>
            <p className="text-sm text-indigo-600 mt-2">Created by you</p>
          </div>
          <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
            <Palette className="h-10 w-10" />
          </div>
        </a>

        {/* Shared Palettes */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center justify-between dark:bg-gray-800">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              Shared Palettes
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              18
            </p>
            <p className="text-sm text-green-600 mt-2">Visible to others</p>
          </div>
          <div className="bg-green-100 text-green-600 p-4 rounded-full">
            <Share2 className="h-10 w-10" />
          </div>
        </div>

        {/* Total Reactions */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 flex items-center justify-between dark:bg-gray-800">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              Total Reactions
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              362
            </p>
            <p className="text-sm text-red-600 mt-2">
              Likes, loves, and laughs
            </p>
          </div>
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <Smile className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
