import React, { useState } from "react";

export default function Generate() {
  const [query, setQuery] = useState("");
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/palette/search?q=${query}`
      );
      const data = await res.json();
      setPalettes(data);
    } catch (err) {
      setError("Failed to fetch palettes. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-16">
      <h1 className="text-5xl font-black mb-6 text-black dark:text-white">
        Generate <span className="text-primary">Color Palettes</span>
      </h1>

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
                <div
                  key={i}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                ></div>
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
