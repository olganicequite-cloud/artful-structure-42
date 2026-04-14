import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const navItems = [
  { path: "/", label: "Home" },
  { path: "/exhibition", label: "Exhibition" },
  { path: "/artists", label: "Artist Team" },
  { path: "/projects", label: "Projects" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="page-padding flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center">
          <span className="font-sans text-sm md:text-[15px] font-medium tracking-[0.08em] uppercase text-foreground">
            Creative Project <span className="font-semibold">NEW</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-editorial-detail transition-colors hover:text-foreground ${
                location.pathname === item.path ? "!text-foreground" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <div className="page-padding py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sans text-xl font-light transition-colors ${
                    location.pathname === item.path ? "text-foreground" : "text-caption"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
