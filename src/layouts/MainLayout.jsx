// src/layouts/MainLayout.jsx
import Navbar from "../components/ui/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children, theme, toggleTheme }) {
  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
