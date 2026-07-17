import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../../../ui_images/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Background color toggle
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress computation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/pet-grooming-services-thrissur" },
    { name: "About", path: "/about-petfocuz-thrissur" },
    { name: "FAQ", path: "/pet-grooming-faq-thrissur" },
    { name: "Contact", path: "/contact-pet-grooming-thrissur" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-primary-dark z-[60] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome
            ? "glass py-4 shadow-soft"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="Petfocuz Logo" className="h-22 md:h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Nav Items (Translucent Capsule) */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full shadow-soft backdrop-blur-md transition-all duration-300 ${isHome && !isScrolled
              ? "bg-white/10 border border-white/10"
              : "bg-black/5 border border-black/5"
            }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans font-medium text-xs px-4 py-1.5 rounded-full transition-all duration-200 ${isHome && !isScrolled
                    ? isActive
                      ? "bg-white/20 text-white font-bold shadow-soft"
                      : "text-white hover:text-white/80 hover:bg-white/5"
                    : isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-black hover:text-primary hover:bg-black/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact-pet-grooming-thrissur"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-sans font-semibold text-sm shadow-soft inline-block transition-colors duration-250"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors focus:outline-none ${isHome && !isScrolled ? "text-white hover:text-primary" : "text-black hover:text-primary"
              }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-card animate-in fade-in slide-in-from-top-4 duration-300 z-50">
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-sans font-medium text-base py-2 border-b border-border/50 transition-colors ${isActive ? "text-primary font-bold" : "text-black hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact-pet-grooming-thrissur"
                className="gradient-primary w-full text-center py-3 rounded-full font-sans font-semibold text-sm shadow-soft mt-2"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
