import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
function App() {
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

        {/* Fetch Button */}
        <button
          onClick={fetchCatgirl}
          disabled={loading}
          className={`mt-4 px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Loading..." : "Generate Image"}
        </button>

        {/* Download Button */}
        <button
          onClick={downloadImage}
          disabled={!imageUrl || loading}
          className={`mt-3 px-6 py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
            !imageUrl || loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          Download Image ⬇️
        </button>
        <Alert variant="filled" severity="success">
          This is a success Alert.
        </Alert>
      </main>
  );
}

export default App;
