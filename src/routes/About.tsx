import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scissors, ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import BentoGallery from "@/components/ui/BentoGallery";
import MetaTags from "@/components/ui/MetaTags";
import { openWhatsApp } from "@/lib/contact";
import maxonImg from "../../ui_images/glr_17.jpg";
import aboutImg from "../../ui_images/about_hero.png";

export default function About() {
  const location = useLocation();

  const handleWhatsAppInquiry = () => {
    openWhatsApp("Hello Petfocuz, I read your founder's story and would like to book a grooming appointment.");
  };

  // Scroll to hash anchor (e.g. #gallery) on navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  const coreValues = [
    {
      title: "Professional Grooming",
      desc: "Every cut is structured carefully to match breed specifications and maintain coat hygiene.",
      icon: Scissors
    },
    {
      title: "Pet Safety & Hygiene",
      desc: "Our studio enforces strict sanitation guidelines, sterilizing all equipment between sessions.",
      icon: ShieldCheck
    },
    {
      title: "Stress-Free Handling",
      desc: "We avoid forcing nervous pets, adapting our pacing to their comfort levels.",
      icon: HeartHandshake
    },
    {
      title: "Loving & Compassionate Care",
      desc: "We treat your pets like our own family members, prioritizing their emotional wellbeing.",
      icon: Sparkles
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Petfocuz",
    "description": "Learn about Maxon Mathew, Singapore-trained founder of Petfocuz in Thrissur. Discover our mission, values, and our sanitized pet spa studio.",
    "url": "https://www.petfocuz.com/about-petfocuz-thrissur",
    "mainEntity": {
      "@type": "Person",
      "name": "Maxon Mathew",
      "jobTitle": "Lead Groomer & Founder",
      "description": "Singapore-trained professional pet groomer bringing international grooming standards to Thrissur, Kerala."
    }
  };

  const revealVariants = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any }
  };

  return (
    <>
      <MetaTags
        title="About Us | Singapore-Trained Groomer Maxon Mathew | Petfocuz"
        description="Discover the story of Petfocuz, Thrissur's premier pet grooming studio. Meet Maxon Mathew, trained in Singapore. Learn our mission, values, and standards."
        canonicalUrl="https://petfocuz.com/about-petfocuz-thrissur"
        schema={aboutSchema}
      />

      {/* 1. Hero Block */}
      <section className="relative bg-surface pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container-x w-full grid grid-cols-1 md:grid-cols-2 md:items-center gap-12 relative z-10">
          <div className="order-2 md:order-1 text-left flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans mb-3 bg-primary/10 px-3 py-1 rounded-full">
              OUR MISSION
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mb-6 leading-[1.1] tracking-tight">
              We Don't Just Groom Pets. We Care for Them.
            </h1>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              At Petfocuz, every dog's wagged tail and every purring cat is a reminder of why we do what we do. We are Thrissur's premier professional pet grooming studio — built on international expertise, rooted in compassion, and driven by an unwavering commitment to your pet's wellbeing.
            </p>
          </div>

          <div className="order-1 md:order-2 relative w-full aspect-[4/5] rounded-[36px] overflow-hidden shadow-card border border-border bg-white group">
            <img
              src={aboutImg}
              alt="Professional pet groomer showing care"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. Founder Story Block */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-x max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 items-center">
            {/* Portrait with floating name-plate */}
            <div className="relative w-full aspect-[4/5] rounded-[32px] shadow-lift border border-border overflow-hidden bg-surface group">
              <img
                src={maxonImg}
                alt="Maxon Mathew, Founder of Petfocuz"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Floating Name-plate Card (Desktop only) */}
              <div className="hidden lg:flex absolute bottom-6 right-6 bg-background/95 backdrop-blur-md border border-border p-4 rounded-2xl shadow-lift items-center gap-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="font-display font-bold text-sm text-foreground block">Maxon Mathew</span>
                  <span className="font-sans text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block">Founder & Lead Groomer</span>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <motion.div
              variants={revealVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={revealVariants.viewport}
              transition={revealVariants.transition}
              className="text-left"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
                FOUNDER STORY
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground mt-2 mb-6">
                Meet Maxon Mathew.
              </h2>
              <div className="flex flex-col gap-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Petfocuz was born from a dream — the dream of bringing world-class pet grooming to Kerala. I began my professional grooming journey in Singapore, one of Asia's most demanding and standards-driven hubs for pet care. It was there that I mastered the art and science of pet grooming, learning that every pet deserves to be treated with patience, respect, and clinical focus.
                </p>
                <p>
                  After years of hands-on experience, absorbing international standards, and refining handling techniques, I returned to my roots in Thrissur. My mission remains singular: to provide our pets with hygienic, compassionate, stress-free grooming, and to build a studio that owners can trust without hesitation.
                </p>
              </div>

              {/* Story statistics strip */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div>
                  <span className="font-display font-extrabold text-xl text-primary block">
                    5,000+
                  </span>
                  <span className="font-sans text-[10px] uppercase font-bold text-muted-foreground">
                    Happy Pets
                  </span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl text-primary block">
                    10+ Yrs
                  </span>
                  <span className="font-sans text-[10px] uppercase font-bold text-muted-foreground">
                    Experience
                  </span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl text-primary block">
                    SG Trained
                  </span>
                  <span className="font-sans text-[10px] uppercase font-bold text-muted-foreground">
                    Standards
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-x max-w-6xl">
          <motion.div
            variants={revealVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={revealVariants.viewport}
            transition={revealVariants.transition}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              BRAND PHILOSOPHY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mt-2">
              Our Core Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={revealVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={revealVariants.viewport}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card border border-border p-6 rounded-3xl text-left shadow-soft hover-lift hover:shadow-lift transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    {/* Icon swap block */}
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-background shadow-soft">
                      <ValueIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mt-2 leading-tight">
                      {value.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Gallery Block */}
      <section id="gallery" className="py-20 md:py-28 bg-background scroll-mt-24">
        <div className="container-x">
          <motion.div
            variants={revealVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={revealVariants.viewport}
            transition={revealVariants.transition}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              STUDIO GALLERY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mt-2 mb-4">
              Explore Our Grooming Studio
            </h2>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              Step inside our clean, state-of-the-art facility designed entirely with your pet's relaxation and comfort in mind.
            </p>
          </motion.div>

          <BentoGallery />
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background text-center relative overflow-hidden border-t border-border">
        {/* Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-primary/15 via-transparent to-transparent opacity-50" />

        <div className="container-x relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-background leading-tight mb-4 text-balance">
            Experience Professional Pet Care in Thrissur.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-background/80 leading-relaxed max-w-lg mb-8">
            Appointment-only. Personal, calm, and always tailored to your pet's needs. Book a slot or chat with Maxon today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact-pet-grooming-thrissur"
              className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded-full font-sans font-bold text-sm shadow-lift transition-all duration-300 w-full sm:w-auto text-center"
            >
              Book Appointment
            </Link>
            <button
              onClick={handleWhatsAppInquiry}
              className="bg-background/10 hover:bg-background/25 border border-background/20 text-background px-8 py-3 rounded-full font-sans font-bold text-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              WhatsApp us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
