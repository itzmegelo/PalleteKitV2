import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
function App() {
  const [colors, setColors] = useState([]); // for array of colors
  const [mainColor, setMainColor] = useState(""); // optional main colo
  const [tags, setTags] = useState([]); 
  const [imageUrl, setImageUrl] = useState(""); // will be set from API
  const [loading, setLoading] = useState(true); // start loading immediately

  const fetchCatgirl = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.nekosia.cat/api/v1/images/catgirl"
      );
      const data = await response.json();

      if (data?.image?.original?.url) {
        setImageUrl(data.image.original.url);
        setMainColor(data.colors.main);
        setColors(data.colors.palette);
        setTags(data.tags);
      } else {
        alert("No image found 😿");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      alert("Failed to fetch image 😿");
    } finally {
      setLoading(false);
    }
  };

  // Download the current image
  const downloadImage = async () => {
    if (!imageUrl) return alert("No image to download!");

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "catgirl.jpg";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to download image 😿");
    }
  };

  // Fetch a default image when component mounts
  useEffect(() => {
    fetchCatgirl();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center p-4 bg-white dark:bg-gray-900 min-h-screen">
      <section
        id="generate"
        className="min-h-[90vh] flex items-center justify-center p-8"
      >
        <div className="max-w-4xl text-center w-full">
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-back-2">
            Generate Your <span className="text-[#6366f1]">Waifu</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Click the button below to generate a random catgirl image using the
            NekoSia API. You can also download the image to your device.
          </p>

          {/* Container */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8">
            {/* Image + Buttons */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Catgirl"
                  className={`w-full max-w-md h-auto object-cover mb-6 rounded-lg shadow-lg transition-all duration-500 ${
                    loading ? "opacity-50 blur-sm" : "opacity-100"
                  }`}
                />
              ) : (
                <div className="w-60 h-60 flex items-center justify-center mb-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
                  <span className="text-gray-500">Loading image...</span>
                </div>
              )}

              {/* Fetch + Download Buttons */}
              <div className="flex flex-row flex-wrap justify-center gap-2">
                <button
                  onClick={fetchCatgirl}
                  disabled={loading}
                  className={`inline-block bg-[#6366f1] text-white font-extrabold py-3 px-4 rounded-xl hover:bg-red-500 transition duration-300 shadow-xl shadow-accent-main/50 ${
                    loading
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Loading..." : "Generate Image"}
                </button>

                <button
                  onClick={downloadImage}
                  disabled={!imageUrl || loading}
                  className={`inline-block bg-gray-900 border-2 border-[#6366f1] text-[#6366f1] font-semibold py-3 px-4 rounded-xl hover:bg-[#6366f1] hover:text-white transition duration-300 shadow-xl shadow-accent-main/50 ${
                    !imageUrl || loading
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Download Image
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-start w-full md:w-1/2">
              <h2 className="text-xl text-[#6366f1] dark:text-[#6366f1] mb-4">
                Anime Details:
              </h2>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
                {/* Main Color */}
                <h3 className="text-lg font-bold mb-2">Main Color</h3>
                <div
                  className="w-10 h-10 rounded-full mb-4 shadow"
                  style={{ backgroundColor: mainColor }}
                ></div>

                {/* Palette */}
                <h3 className="text-lg font-semibold mb-2">Palette</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full shadow"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>

                {/* Tags */}
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
