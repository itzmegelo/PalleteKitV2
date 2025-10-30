import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { supabase } from "../../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const navItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Browse", href: "/browse" },
    { name: "My Palette", href: "/mypalette" },
  ];

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/dashboard"
            className="text-3xl font-extrabold text-black dark:text-white"
          >
            Palette<span className="text-[#6366f1]">Kit</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-[#6366f1] dark:hover:text-[#6366f1] transition-colors font-semibold"
              >
                {item.name}
              </a>
            ))}

            {/* ✅ Log Out Button */}
            <button
              onClick={handleSignOut}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Log Out
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-white rounded-full bg-[#6366f1] dark:bg-[#6366f1] hover:bg-[#5558e8] transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-[#6366f1] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#6366f1]/20"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-200 hover:text-[#6366f1] dark:hover:text-[#6366f1] transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* ✅ Mobile Logout */}
            <button
              onClick={handleSignOut}
              className="block w-full text-left text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
