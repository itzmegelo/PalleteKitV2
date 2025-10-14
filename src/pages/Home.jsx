import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Gallery from "../components/Gallery";
function App() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-4 bg-white dark:bg-gray-900 min-h-screen">
      <section
        id="intro"
        className="min-h-[90vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-back-2">
            Auto-Generate. Prompt.{" "}
            <span className="text-[#6366f1]">Instant Anime.</span>
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Welcome to the ultimate tool for creating stunning, personalized
            anime artwork. Our AI turns your wildest concepts into high-quality
            visual masterpieces in seconds.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              id="autoPromptButton"
              href="/generate"
              className="inline-block bg-[#6366f1] text-white font-extrabold py-4 px-10 rounded-xl text-xl hover:bg-red-500 transition duration-300 shadow-xl shadow-accent-main/50"
            >
              Generate
            </a>
            <a
              id="autoPromptButton"
              href="/generate"
              className="inline-block bg-gray-900 border-2 border-[#6366f1] text-[#6366f1] font-extrabold py-4 px-10 rounded-xl text-xl hover:bg-[#6366f1] hover:text-white transition duration-300 shadow-xl shadow-accent-main/50"
            >
              About Us
            </a>
          </div>
        </div>
      </section>
      <section
        id="description"
        className="min-h-[90vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-back-2">
            Why Choose Our{" "}
            <span className="text-[#6366f1]">AI Anime Generator</span>?
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Our AI anime generator is designed to make the process of creating
            anime artwork as simple and enjoyable as possible. Whether you're a
            seasoned artist or just starting out, our tool provides an easy way
            to bring your ideas to life.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-purple-900 dark:to-purple-700 p-6 rounded-2xl shadow-xl border border-purple-200 dark:border-purple-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-extrabold mb-3 text-purple-600 dark:text-purple-300">
                AI-Powered Waifus
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Generate beautiful and unique anime waifus instantly using
                advanced AI technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-cyan-900 dark:to-cyan-700 p-6 rounded-2xl shadow-xl border border-cyan-200 dark:border-cyan-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-extrabold mb-3 text-cyan-600 dark:text-cyan-300">
                Customizable Styles
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Explore a variety of artistic styles, from cute and whimsical to
                cool and edgy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-orange-900 dark:to-orange-700 p-6 rounded-2xl shadow-xl border border-orange-200 dark:border-orange-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-extrabold mb-3 text-orange-600 dark:text-orange-300">
                Fast & Easy
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Generate your favorite waifus quickly with a simple click—no
                extra steps required.
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </main>
  );
}

export default App;
