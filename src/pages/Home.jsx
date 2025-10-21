import Features from "./Features";
import Explore from "./Explore";
import Works from "./Works";
import Footer from "../../src/components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/generate");
  };

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen bg-white dark:bg-gray-900">
      <section className="min-h-[90vh] flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-black dark:text-white">
            Create. Blend. <span className="text-primary">PaletteKit.</span>
          </h1>

          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover stunning color palettes instantly with PaletteKit — your
            smart companion for designers, developers, and creatives. Generate,
            save, and share palettes effortlessly.
          </p>

          <button
            onClick={goToAbout}
            className="bg-transparent text-primary font-extrabold py-4 px-10 rounded-xl text-xl hover hover:bg-[#6366f1] hover:text-white transition duration-300 shadow-xl shadow-accent-main/50 border border-[#6366f1]"
          >
            Generate Palette
          </button>
        </div>
      </section>

      {/* ======= Feature Section ======= */}
      <Features />
      <Explore />
      <Works />
      <Footer />
    </main>
  );
}

export default Home;
