import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { supabase } from "../../supabaseClient";
import { Sparkles, Plus, X, Heart } from "lucide-react";
import ColorBox from "../../components/ColorBox";

export default function MyPalette() {
  const { user } = useUser();
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(true);

  // modal state
  const [showModal, setShowModal] = useState(false);
  const [paletteName, setPaletteName] = useState("");
  const [colors, setColors] = useState([
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
  ]);

  // handle color change
  const handleColorChange = (index, value) => {
    const updated = [...colors];
    updated[index] = value;
    setColors(updated);
  };

  // save palette to supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) return alert("You must be logged in!");

    const { data, error } = await supabase.from("tbl_palettes").insert([
      {
        user_id: user.id,
        user_name: user.user_metadata.display_name,
        paletteName,
        colorOne: colors[0],
        colorTwo: colors[1],
        colorThree: colors[2],
        colorFour: colors[3],
        colorFive: colors[4],
      },
    ]);

    if (error) {
      console.error("Error saving palette:", error.message);
      return;
    }

    setShowModal(false);
    setPaletteName("");
    setColors(["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]);

    fetchPalettes(); // refresh
  };

  // fetch all user palettes with reactions
  const fetchPalettes = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);

      // fetch palettes
      const { data: palettesData, error: palettesError } = await supabase
        .from("tbl_palettes")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (palettesError) throw palettesError;

      // fetch reactions for these palettes
      const paletteIds = palettesData.map((p) => p.id);
      const { data: reactionsData, error: reactionsError } = await supabase
        .from("tbl_palette_reactions")
        .select("palette_id")
        .in("palette_id", paletteIds);
      if (reactionsError) throw reactionsError;

      // count reactions per palette
      const reactionCounts = reactionsData.reduce((acc, r) => {
        acc[r.palette_id] = (acc[r.palette_id] || 0) + 1;
        return acc;
      }, {});

      const formatted = palettesData.map((item) => ({
        id: item.id,
        name: item.paletteName,
        colors: [
          item.colorOne,
          item.colorTwo,
          item.colorThree,
          item.colorFour,
          item.colorFive,
        ].filter(Boolean),
        reactions: reactionCounts[item.id] || 0,
      }));

      setPalettes(formatted);
    } catch (err) {
      console.error("Error fetching palettes:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user?.id) return;
    fetchPalettes();
  }, [user?.id]);

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Your Palettes,{" "}
            {user?.user_metadata?.display_name ||
              user?.email?.split("@")[0] ||
              "Creator"}{" "}
            🎨
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Explore all the color palettes you’ve crafted with creativity and
            style.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-indigo-100 text-indigo-600 dark:bg-indigo-600/20 px-4 py-2 rounded-lg font-medium">
          <Sparkles className="h-5 w-5" />
          <span>Creator Mode</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          All Palettes
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md text-sm transition-colors"
        >
          <Plus size={16} />
          <span className="font-medium">Add New</span>
        </button>
      </div>

      {/* Palette Section */}
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading your palettes...
        </p>
      ) : palettes.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven’t created any palettes yet 🎨
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl">
          {palettes.map((palette) => (
            <div
              key={palette.id}
              className="relative rounded-xl overflow-hidden shadow-lg border dark:border-gray-700 hover:scale-[1.02] transition-transform"
            >
              <div className="flex h-32 relative">
                {palette.colors.map((color, i) => (
                  <ColorBox key={i} color={color} />
                ))}

                {/* Reaction Count */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {palette.reactions}
                  </span>
                </div>
              </div>

              <p className="py-4 text-gray-700 dark:text-gray-300 font-medium text-center">
                {palette.name || "Untitled Palette"}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-xl relative mx-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Create New Palette
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Palette Name
                </label>
                <input
                  type="text"
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
                  placeholder="e.g., Sunset Glow"
                  required
                  className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Choose 5 Colors
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) =>
                          handleColorChange(index, e.target.value)
                        }
                        className="w-10 h-10 rounded-md border cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition-colors"
              >
                Save Palette
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
