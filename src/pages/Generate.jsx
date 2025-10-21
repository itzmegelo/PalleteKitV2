import React, { useState } from "react";
import { Copy } from "lucide-react";
import ColorBox from "../components/ColorBox";
export default function Generate() {
  const [query, setQuery] = useState("");
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a color name.");
      return;
    }

    setLoading(true);
    setError("");
    setPalettes([]);

    try {
      const res = await fetch(
        `https://itzmegelo-backend.onrender.com/palette?q=${encodeURIComponent(
          query
        )}`
      );

      // If the backend itself returns a non-OK response
      if (!res.ok) {
        let msg = `Server error: ${res.status}`;
        try {
          const errData = await res.json();
          msg = errData.error || msg;
        } catch (_) {}
        throw new Error(msg);
      }

      const data = await res.json();

      // ✅ Check if backend returned an error field
      if (data.error) {
        if (data.error.includes("502")) {
          throw new Error(
            "The ColorMagic service is temporarily unavailable (502). Please try again later."
          );
        } else {
          throw new Error(data.error);
        }
      }

      // ✅ Check if response is empty
      if (!data || (Array.isArray(data) && data.length === 0)) {
        throw new Error("No palettes found for that color.");
      }

      // ✅ Success — update state
      setPalettes(data);
    } catch (err) {
      // Catch all errors — network, parsing, or backend
      console.error("Palette search error:", err);
      setError(err.message || "Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-16">
      <h1 className="text-5xl font-black mb-6 text-black dark:text-white">
        Generate <span className="text-primary">Color Palettes</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
        Instantly create stunning color palettes based on any keyword or mood.
        Perfect for designers, developers, and creatives looking for
        inspiration.
      </p>

      {/* === Search Bar === */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search colors (e.g. yellow, summer, soft)..."
          className="w-full max-w-md px-4 py-3 rounded-l-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-primary text-white font-semibold px-6 py-3 rounded-r-xl hover:bg-green-600 transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {/* === Error Message === */}
      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* === Palette Results === */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {palettes.map((palette) => (
          <div
            key={palette.id}
            className="rounded-xl overflow-hidden shadow-lg border dark:border-gray-700 hover:scale-[1.02] transition-transform"
          >
            <div className="flex h-32">
              {palette.colors.map((color, i) => (
                <ColorBox key={i} color={color} />
              ))}
            </div>
            <p className="py-4 text-gray-700 dark:text-gray-300 font-medium">
              {palette.text || "Untitled Palette"}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pb-4">
              {palette.tags?.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md"
                >
                  #{tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* === Empty State === */}
      {!loading && palettes.length === 0 && !error && (
        <p className="text-gray-500 dark:text-gray-400 mt-20">
          Try searching for “yellow”, “pastel”, or “summer”.
        </p>
      )}
    </main>
  );
}
