import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import AboutUs from "./pages/AboutUs";
import { useState, useEffect } from "react";

function App() {
  // Load theme from localStorage if available
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // save theme
      return newTheme;
    });
  };

  // Optional: sync localStorage if user changed system preferences
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="min-h-screen bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
