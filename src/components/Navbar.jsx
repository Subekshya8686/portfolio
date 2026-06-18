import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="font-bold text-xl tracking-tight bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent hover:from-zinc-50 hover:to-zinc-200 transition-all duration-300"
        >
          Subekshya
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                  isActive
                    ? "text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link.name}

                {/* Subtle underline indicator for active/hover states */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-zinc-400 rounded-full" />
                )}
                {!isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-zinc-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
