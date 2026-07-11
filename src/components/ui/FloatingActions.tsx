import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowUp, Calendar } from "lucide-react";
import { openWhatsApp } from "@/lib/contact";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("Hello Petfocuz, I would like to inquire about your pet grooming and boarding services.");
  };

  return (
    <>
      {/* Floating Action Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pb-safe">
        {/* Scroll To Top Button */}
        {isVisible && (
          <button
            onClick={handleScrollToTop}
            className="h-11 w-11 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary hover:scale-105 shadow-lift transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* WhatsApp Floating Chat Disc */}
        <button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 flex items-center justify-center rounded-full bg-success text-white shadow-lift hover:scale-105 hover:bg-emerald-600 transition-all duration-300 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Custom SVG WhatsApp or MessageSquare icon */}
          <MessageSquare className="h-6 w-6 fill-white text-success" />
        </button>

        {/* Book Appointment floating button on desktop */}
        <Link
          to="/contact-pet-grooming-thrissur"
          className="hidden md:flex items-center gap-2 gradient-primary px-6 py-3 rounded-full font-sans font-semibold text-sm shadow-lift hover:scale-105 transition-transform duration-300"
        >
          <Calendar className="h-4 w-4" />
          Book Appointment
        </Link>
      </div>

    </>
  );
}
