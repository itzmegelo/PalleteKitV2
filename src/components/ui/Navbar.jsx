import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, UserRound } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Browse", href: "/palette/browse" },
    { name: "Generate", href: "/generate" },
    { name: "About Us", href: "/aboutus" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-black dark:text-white"
          >
            Palette<span className="text-[#6366f1]">Kit</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-colors ${
                    isActive
                      ? "text-[#6366f1] border-b-2 border-[#6366f1] pb-1"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#6366f1]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-white rounded-full bg-[#6366f1] hover:bg-[#6366f1]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/signin"
              className="p-2 text-primary rounded-full dark:text-white"
            >
              <UserRound size={18} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-[#6366f1] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#6366f1]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block transition-colors ${
                    isActive
                      ? "text-[#6366f1] font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#6366f1]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
