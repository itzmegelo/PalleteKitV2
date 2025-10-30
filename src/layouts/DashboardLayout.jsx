// src/layouts/MainLayout.jsx
import Navbar from "../components/ui/dashboard/Navbar";
import Footer from "../components/Footer";

export default function DashboardLayout({ children, theme, toggleTheme }) {
  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
