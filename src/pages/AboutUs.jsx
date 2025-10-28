import React from "react";

function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          About <span className="text-[#6366f1]">PaletteKit</span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-[#6366f1]">PaletteKit</span> —
          your creative companion for discovering and generating beautiful color
          palettes in seconds. Whether you're a designer, developer, or creative
          enthusiast, PaletteKit helps you bring your ideas to life with
          perfectly harmonized colors.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left transition duration-300 hover:shadow-[#6366f1]/50">
            <h3 className="text-2xl font-bold text-white mb-3">
              How It <span className="text-[#6366f1]">Works</span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Enter a keyword, theme, or color name to start.</li>
              <li>
                PaletteKit instantly generates color combinations for you.
              </li>
              <li>Preview, copy, and save your favorite palettes.</li>
              <li>Perfect for UI design, branding, and creative projects.</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left transition duration-300 hover:shadow-[#6366f1]/50">
            <h3 className="text-2xl font-bold text-white mb-3">
              Our <span className="text-[#6366f1]">Mission</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              At{" "}
              <span className="font-semibold text-[#6366f1]">PaletteKit</span>,
              our mission is to simplify color inspiration. We believe design
              should be intuitive, beautiful, and accessible to everyone. Our
              goal is to empower creators with smart, AI-driven color discovery
              tools that spark creativity and innovation.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="bg-[#6366f1] hover:bg-indigo-500 text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-lg transition duration-300"
          >
            Try PaletteKit
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
