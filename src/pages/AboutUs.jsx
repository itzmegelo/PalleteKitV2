import React from "react";

function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center text-center p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
          About <span className="text-[#6366f1]">WinMB</span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-[#6366f1]">WinMB</span>{" "}
          — a fun and rewarding way to connect with friends, share your referral
          link, and earn shareable mobile data rewards! Every week, lucky
          participants are randomly selected to win MBs based on their
          engagement and referrals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left">
            <h3 className="text-2xl font-bold text-[#6366f1] mb-3">
              How It Works
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Submit your email to join the giveaway.</li>
              <li>Receive your personal referral link after joining.</li>
              <li>
                Share your link — each sign-up increases your chance to win!
              </li>
              <li>
                Winners are chosen weekly and featured on our leaderboard.
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-left">
            <h3 className="text-2xl font-bold text-[#6366f1] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in rewarding community engagement.{" "}
              <span className="font-semibold text-[#6366f1]">WinMB</span>{" "}
              promotes sharing, connection, and fair rewards — giving students
              and users alike a chance to stay connected without worrying about
              data limits.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/"
            className="bg-[#6366f1] hover:bg-indigo-500 text-white font-semibold py-4 px-10 rounded-xl text-lg shadow-lg transition duration-300"
          >
            Join the Giveaway
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
