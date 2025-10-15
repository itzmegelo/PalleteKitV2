import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";

function Home() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [refLink, setRefLink] = useState("");
  const [referralCount, setReferralCount] = useState(0);
  const [userCode, setUserCode] = useState("");

  // Detect referral code in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) localStorage.setItem("referred_by", ref);
  }, []);

  // Fetch referral count for the logged user
  const fetchReferralCount = async (code) => {
    const { data, error } = await supabase
      .from("tbl_submissions")
      .select("referral_count")
      .eq("referral_code", code)
      .single();

    if (!error && data) setReferralCount(data.referral_count);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email before submitting.",
      });
      return;
    }

    const referredBy = localStorage.getItem("referred_by");
    const newCode = crypto.randomUUID().slice(0, 8);

    // Insert new user
    const { error } = await supabase.from("tbl_submissions").insert([
      {
        email,
        referral_code: newCode,
        referred_by: referredBy || null,
        referral_count: 0,
      },
    ]);
    setLoading(false);
    if (error) {
      console.error("Error submitting:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
      return;
    }

    // 🔥 Update the referral count for referrer
    if (referredBy) {
      const { data: referrerData, error: referrerError } = await supabase
        .from("tbl_submissions")
        .select("referral_count")
        .eq("referral_code", referredBy)
        .single();

      if (!referrerError && referrerData) {
        const newCount = (referrerData.referral_count || 0) + 1;

        const { error: updateError } = await supabase
          .from("tbl_submissions")
          .update({ referral_count: newCount })
          .eq("referral_code", referredBy);

        if (updateError)
          console.error("Error updating referral count:", updateError);
      }
    }

    // Generate user referral link
    const link = `${window.location.origin}/?ref=${newCode}`;
    setRefLink(link);
    setUserCode(newCode);
    setEmail("");
    await fetchReferralCount(newCode);

    Swal.fire({
      icon: "success",
      title: "🎉 Submission Successful!",
      html: `
        <p>Thank you for joining! Your referral link:</p>
        <a href="${link}" target="_blank" class="text-blue-500 font-semibold">${link}</a>
        <br><br>
        <p><b>Your current referrals:</b> ${referralCount}</p>
      `,
      showConfirmButton: true,
      confirmButtonText: "Copy Link",
      confirmButtonColor: "#6366f1",
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(link);
        Swal.fire({
          icon: "success",
          title: "Copied!",
          text: "Your referral link has been copied to clipboard.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  useEffect(() => {
    if (userCode) fetchReferralCount(userCode);
  }, [userCode]);

  return (
    <main className="flex flex-col items-center justify-center text-center p-4 min-h-screen bg-white dark:bg-gray-900">
      <section className="min-h-[90vh] flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-black dark:text-white">
            Connect. Share. <span className="text-[#6366f1]">Win MBs.</span>
          </h1>

          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Submit your email to join our giveaway. Invite friends using your
            link and increase your chances to win shareable data!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full md:w-96 p-4 text-lg rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              id="autoPromptButton"
              className="bg-[#6366f1] text-white font-extrabold py-4 px-10 rounded-xl text-xl hover:bg-red-500 transition duration-300 shadow-xl shadow-accent-main/50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
