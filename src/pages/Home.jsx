import Features from "./Features";
import Explore from "./Explore";
import Works from "./Works";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/generate");
  };

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen bg-white dark:bg-dark_primary">
      <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden w-full p-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-black dark:text-white tracking-tight">
            Create<span className="text-primary">.</span> Blend
            <span className="text-primary">.</span>{" "}
            <span className="text-primary">PaletteKit.</span>
          </h1>

          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto tracking-tight">
            Discover stunning color palettes instantly with PaletteKit — your
            smart companion for designers, developers, and creatives. Generate,
            save, and share palettes effortlessly.
          </p>

          <button
            onClick={goToAbout}
            className="bg-transparent text-primary font-extrabold py-4 px-10 rounded-xl text-xl hover:bg-primary hover:text-white transition duration-300 shadow-xl shadow-accent-main/50 border border-primary"
          >
            Generate Palette
          </button>
        </div>

        {/* Waving Footer */}
        <div className="w-full absolute bottom-0 left-0">
          <img
            src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=100&section=footer"
            alt="footer wave"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ======= Feature Section ======= */}
      <Features />
      <Explore />
      <Works />
    </main>
  );
}

export default Home;
