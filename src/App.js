import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./context/UserContext";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Generate from "./pages/Generate";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

// dashboard pages
import DashboardHome from "./pages/dashboard/Dashboard";
import Palletes from "./pages/dashboard/Palletes";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      {/* 🌐 Public Pages */}
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/generate"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <Generate />
              </MainLayout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/signin"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <SignIn />
              </MainLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <SignUp />
              </MainLayout>
            }
          />

          {/* 💼 Dashboard Pages */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
                <DashboardHome />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard/palletes"
            element={
              <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
                <Palletes />
              </DashboardLayout>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
