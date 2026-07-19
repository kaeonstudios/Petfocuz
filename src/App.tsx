import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import Home from "@/routes/Home";

// Route-level code splitting
const Services = lazy(() => import("@/routes/Services"));
const About = lazy(() => import("@/routes/About"));
const Faq = lazy(() => import("@/routes/Faq"));
const Contact = lazy(() => import("@/routes/Contact"));

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If no hash deep link, restore view to top on transition
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Scroll indicator restoration */}
      <ScrollToTop />
      
      {/* Route Views */}
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet-grooming-services-thrissur" element={<Services />} />
            <Route path="/about-petfocuz-thrissur" element={<About />} />
            <Route path="/pet-grooming-faq-thrissur" element={<Faq />} />
            <Route path="/contact-pet-grooming-thrissur" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  if (import.meta.env.SSR) {
    return <AppContent />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
