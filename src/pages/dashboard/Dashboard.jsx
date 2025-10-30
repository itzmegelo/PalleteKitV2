import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { Palette, Share2, Smile, Sparkles } from "lucide-react";
import { supabase } from "../../supabaseClient";

export default function Dashboard() {
  const { user } = useUser();
  const [myPalettesCount, setMyPalettesCount] = useState(0);
  const [sharedPalettesCount, setSharedPalettesCount] = useState(0);
  const [totalReactions, setTotalReactions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // 1️⃣ Fetch palettes of the user
        const { data: palettesData, error: palettesError } = await supabase
          .from("tbl_palettes")
          .select("*")
          .eq("user_id", user.id);
        if (palettesError) throw palettesError;

        setMyPalettesCount(palettesData.length);

        // 2️⃣ Fetch shared palettes (optional: all shared globally)
        const { data: sharedPalettes, error: sharedError } = await supabase
          .from("tbl_palettes")
          .select("*")
          .eq("is_shared", true);
        if (sharedError) throw sharedError;

        setSharedPalettesCount(sharedPalettes.length);

        // 3️⃣ Fetch reactions for these palettes
        const paletteIds = palettesData.map((p) => p.id);
        let totalReactionsCount = 0;

        if (paletteIds.length > 0) {
          const { data: reactionsData, error: reactionsError } = await supabase
            .from("tbl_palette_reactions")
            .select("palette_id")
            .in("palette_id", paletteIds);

          if (reactionsError) throw reactionsError;

          // Count reactions per palette
          const reactionCounts = reactionsData.reduce((acc, r) => {
            acc[r.palette_id] = (acc[r.palette_id] || 0) + 1;
            return acc;
          }, {});

          // Sum up all reactions for totalReactions
          totalReactionsCount = Object.values(reactionCounts).reduce(
            (acc, count) => acc + count,
            0
          );
        }

        setTotalReactions(totalReactionsCount);
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
        <div className="block bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 flex items-center justify-between dark:bg-gray-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
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
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 flex items-center justify-between dark:bg-gray-800">
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
              Total Reactions
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-1 dark:text-white">
              {loading ? "..." : totalReactions}
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
