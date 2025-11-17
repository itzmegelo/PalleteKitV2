import { useState } from "react";
import { Sun, Moon, Menu, X, LogOut } from "lucide-react";
import { supabase } from "../../../supabaseClient";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useUser();

  const navItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Browse", href: "/browse" },
    { name: "My Palette", href: "/mypalette" },
    { name: "Api Documentations", href: "/api" },
    // { name: "Profile", href: "/profile" },
  ];

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/dashboard"
            className="text-3xl font-extrabold text-black dark:text-white"
          >
            Palette<span className="text-primary">Kit</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => {
              // ✅ Detect active route
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-semibold transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-1">
            <button
              onClick={toggleTheme}
              className="p-2 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={23} /> : <Moon size={23} />}
            </button>
            <button
              onClick={handleSignOut}
              className="p-2 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <LogOut size={23} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-primary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-primary/20"
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
              const isActive = location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary"
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
