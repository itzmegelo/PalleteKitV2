import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { supabase } from "../../supabaseClient";
import { Sparkles, Heart, Search, Filter, BookA } from "lucide-react";
import ColorBox from "../../components/ColorBox";

export default function Browse() {
  const { user } = useUser();
  const [palettes, setPalettes] = useState([]);
  const [filteredPalettes, setFilteredPalettes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("newest"); // newest | oldest | mostLiked

  // Fetch palettes
  const fetchPalettes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("tbl_palettes")
        .select("*")
        .order("created_at", { ascending: false });

        console.log(data)

      if (error) throw error;

      const formatted = data.map((item) => ({
        id: item.id,
        name: item.paletteName,
        colors: [
          item.colorOne,
          item.colorTwo,
          item.colorThree,
          item.colorFour,
          item.colorFive,
        ].filter(Boolean),
        reactions: item.reactions || 0,
        created_at: item.created_at,
        creator: item.user_name, // ✅ ensure this matches Supabase column
      }));


      setPalettes(formatted);
      setFilteredPalettes(formatted);
    } catch (err) {
      console.error("Error fetching palettes:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter + search logic
  useEffect(() => {
    let updated = [...palettes];

    // Search filter
    if (searchTerm.trim()) {
      updated = updated.filter((p) =>
        p.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort filter
    if (filter === "mostLiked") {
      updated.sort((a, b) => b.reactions - a.reactions);
    } else if (filter === "oldest") {
      updated.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else {
      updated.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // newest
    }

    setFilteredPalettes(updated);
  }, [searchTerm, filter, palettes]);

  useEffect(() => {
    fetchPalettes();
  }, [user?.id]);

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Browse Palettes 🎨
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Explore beautiful color palettes shared by creators.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-600/20 px-4 py-2 rounded-lg font-medium">
          <Sparkles className="h-5 w-5" />
          <span>Inspire Mode</span>
        </div>
      </div>

      {/* 🔍 Search & Filter */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[150px]">
          <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search palettes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-md border text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-1">
          <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-2 py-1.5 rounded-md border text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="mostLiked">Most Liked</option>
          </select>
        </div>
      </div>

      {/* Palette Section */}
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading palettes...
        </p>
      ) : filteredPalettes.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No palettes found 🎨
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto">
          {filteredPalettes.map((palette) => (
            <div
              key={palette.id}
              className="relative rounded-xl overflow-hidden shadow-lg border dark:border-gray-700 hover:scale-[1.02] transition-transform"
            >
              {/* Color Preview */}
              <div className="flex h-32 relative">
                {palette.colors.map((color, i) => (
                  <ColorBox key={i} color={color} />
                ))}
                {/* 👤 Creator Name (bottom-left overlay) */}
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                  <BookA className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {palette.creator}
                  </span>
                </div>

                {/* ❤️ Reaction Count */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {palette.reactions ?? 0}
                  </span>
                </div>
              </div>

              {/* Palette Title */}
              <p className="py-4 text-gray-700 dark:text-gray-300 font-medium text-center">
                {palette.name || "Untitled Palette"}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
