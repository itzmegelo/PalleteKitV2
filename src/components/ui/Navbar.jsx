import { useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Winners", href: "/winners" },
    { name: "About Us", href: "/aboutus" },
  ]

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-extrabold text-black dark:text-white"
          >
            Share<span className="text-[#6366f1]">&Win</span>
          </a>

          {}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-[#6366f1] dark:hover:text-[#6366f1] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-white rounded-full bg-[#6366f1] dark:bg-[#6366f1] hover:bg-[#6366f1] dark:hover:bg-[#6366f1]"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

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

      {}
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
          </div>
        </div>
      )}
    </nav>
  );
}
