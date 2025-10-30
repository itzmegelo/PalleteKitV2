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
import Browser from "./pages/Browse";

// dashboard pages
import DashboardHome from "./pages/dashboard/Dashboard";
import MyPalette from "./pages/dashboard/MyPalette";
import Browse from "./pages/dashboard/Browse";
import Profile from "./pages/dashboard/Profile";

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
          <Route
            path="/palette/browse"
            element={
              <MainLayout theme={theme} toggleTheme={toggleTheme}>
                <Browser />
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
            path="/mypalette"
            element={
              <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
                <MyPalette />
              </DashboardLayout>
            }
          />
          <Route
            path="/browse"
            element={
              <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
                <Browse />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DashboardLayout theme={theme} toggleTheme={toggleTheme}>
                <Profile />
              </DashboardLayout>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
