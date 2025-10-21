import React from "react";

export default function Explore() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full text-center px-4">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
        Explore Trending Palettes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#6b8f56]"></div>
            <div className="flex-1 bg-[#a9cbb1]"></div>
            <div className="flex-1 bg-[#d2a74b]"></div>
            <div className="flex-1 bg-[#a75f2f]"></div>
            <div className="flex-1 bg-[#7a2a2c]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">
            Maroon and Sage Green
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#f2edf0]"></div>
            <div className="flex-1 bg-[#dfd7dd]"></div>
            <div className="flex-1 bg-[#c8b1b7]"></div>
            <div className="flex-1 bg-[#a489a1]"></div>
            <div className="flex-1 bg-[#695d89]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">Blue Ink</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#ffe95c]"></div>
            <div className="flex-1 bg-[#f9f99f]"></div>
            <div className="flex-1 bg-[#e3e76e]"></div>
            <div className="flex-1 bg-[#c7d03e]"></div>
            <div className="flex-1 bg-[#a7b300]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">
            Shades of Yellow
          </p>
        </div>
      </div>
    </section>
  );
}
