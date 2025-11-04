import React from "react";

export default function Explore() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full text-center px-4">
      <div className="lg:text-center mb-6">
        <h2 className="text-base text-[#6366f1] font-semibold tracking-wide uppercase">
          Discover Inspiration
        </h2>
        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-black dark:text-white sm:text-5xl">
          Explore Trending Palettes
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 lg:mx-auto tracking-tight">
          Dive into the most popular color combinations shared by designers and
          creators worldwide. Find your next aesthetic — bold, calm, or playful
          — all in one place.
        </p>
      </div>
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
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#6fbe8d]"></div>
            <div className="flex-1 bg-[#9edf9a]"></div>
            <div className="flex-1 bg-[#d0f3be]"></div>
            <div className="flex-1 bg-[#f4f1c8]"></div>
            <div className="flex-1 bg-[#f9c8ae]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">
            Green Lillypad
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#060047]"></div>
            <div className="flex-1 bg-[#090070]"></div>
            <div className="flex-1 bg-[#15008f]"></div>
            <div className="flex-1 bg-[#0025e0]"></div>
            <div className="flex-1 bg-[#9c00cc]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">
            Blue Purple Dream
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700">
          <div className="flex h-32">
            <div className="flex-1 bg-[#1f1f3d]"></div>
            <div className="flex-1 bg-[#3a2c6d]"></div>
            <div className="flex-1 bg-[#5f5e9c]"></div>
            <div className="flex-1 bg-[#a58adb]"></div>
            <div className="flex-1 bg-[#f5a524]"></div>
          </div>
          <p className="py-4 text-gray-700 dark:text-gray-300">Purple Glitch</p>
        </div>
      </div>
    </section>
  );
}
