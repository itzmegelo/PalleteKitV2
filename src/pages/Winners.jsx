import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Trophy } from "lucide-react";

function Winners() {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch winners from Supabase
  useEffect(() => {
    const fetchWinners = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("tbl_winners")
        .select("*")
        .order("date_won", { ascending: false });

      if (error) {
        console.error("Error fetching winners:", error);
      } else {
        setWinners(data);
      }
      setLoading(false);
    };

    fetchWinners();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="max-w-5xl w-full">
        <h1 className="text-5xl font-black mb-4 flex justify-center items-center gap-3">
          <Trophy className="text-yellow-500 w-10 h-10" />
          <span>
            Winners <span className="text-[#6366f1]">Hall</span>
          </span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          🎉 Congratulations to our top participants who earned rewards by
          sharing and inviting others!
        </p>

        {loading ? (
          <div className="text-xl text-gray-500 dark:text-gray-400 animate-pulse">
            Loading winners...
          </div>
        ) : winners.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No winners yet. Be the first one to earn your spot! 🚀
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div
                key={winner.id}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-md mb-3">
                    #{index + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-indigo-500 mb-1">
                    {winner.name || "Anonymous"}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">
                    {winner.email}
                  </p>
                  <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {winner.prize || "Special Reward"}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(winner.date_won).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Winners;
