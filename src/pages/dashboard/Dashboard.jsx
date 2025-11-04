import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { Palette, Smile, Sparkles } from "lucide-react";
import { supabase } from "../../supabaseClient";

export default function Dashboard() {
  const { user } = useUser();
  const [myPalettesCount, setMyPalettesCount] = useState(0);
  const [totalReactions, setTotalReactions] = useState(0);
  const [recentPalettes, setRecentPalettes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // 🔹 Step 1: Fetch user's palettes
        const { data: palettesData, error: palettesError } = await supabase
          .from("tbl_palettes")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (palettesError) throw palettesError;

        setMyPalettesCount(palettesData.length);

        const paletteIds = palettesData.map((p) => p.id);
        let totalReacts = 0;
        let reactionCounts = {};

        // 🔹 Step 2: Fetch reactions for these palettes
        if (paletteIds.length > 0) {
          const { data: reactionsData, error: reactionsError } = await supabase
            .from("tbl_palette_reactions")
            .select("palette_id")
            .in("palette_id", paletteIds);

          if (reactionsError) throw reactionsError;

          // 🔹 Step 3: Count reactions per palette
          reactionCounts = reactionsData.reduce((acc, r) => {
            acc[r.palette_id] = (acc[r.palette_id] || 0) + 1;
            return acc;
          }, {});

          // 🔹 Step 4: Total all reactions
          totalReacts = reactionsData.length;
        }

        setTotalReactions(totalReacts);

        // 🔹 Step 5: Add reaction count to palette list
        const formattedPalettes = palettesData.map((p) => ({
          ...p,
          reactions: reactionCounts[p.id] || 0,
        }));

        setRecentPalettes(formattedPalettes.slice(0, 5));
      } catch (error) {
        console.error("Error fetching dashboard data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user?.id]);

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome back,{" "}
          {user?.user_metadata?.display_name ||
            user?.email?.split("@")[0] ||
            "Creator"}{" "}
          👋
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your palettes, track shares, and monitor your total reactions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Palettes */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-center justify-between dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              My Palettes
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              {loading ? "..." : myPalettesCount}
            </p>
            <p className="text-sm text-indigo-600 mt-2">Created by you</p>
          </div>
          <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
            <Palette className="h-10 w-10" />
          </div>
        </div>

        {/* Total Reactions */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 flex items-center justify-between dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              Total Reactions
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              {loading ? "..." : totalReactions}
            </p>
            <p className="text-sm text-red-600 mt-2">Likes & hearts</p>
          </div>
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <Smile className="h-10 w-10" />
          </div>
        </div>

        {/* Optional: Generator Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 flex items-center justify-between dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              Palette Generator
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              ✨ Auto & Manual
            </p>
            <p className="text-sm text-amber-600 mt-2">
              Mix of manual & AI created
            </p>
          </div>
          <div className="bg-amber-100 text-amber-600 p-4 rounded-full">
            <Sparkles className="h-10 w-10" />
          </div>
        </div>
      </div>

      {/* Recent Palettes */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Recent Palettes
        </h2>

        {recentPalettes.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            You haven’t created any palettes yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPalettes.map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex h-24">
                  {[
                    p.colorOne,
                    p.colorTwo,
                    p.colorThree,
                    p.colorFour,
                    p.colorFive,
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="w-1/5 h-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {p.paletteName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(p.created_at).toLocaleDateString()} ·{" "}
                    {p.reactions} reactions
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
