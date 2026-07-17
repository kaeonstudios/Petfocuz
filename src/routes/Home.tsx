import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight, ChevronDown, Phone, MessageSquare, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewsSection from "@/components/ui/ReviewsSection";
import MetaTags from "@/components/ui/MetaTags";
import { openWhatsApp, MAP_LINKS, BUSINESS_PHONE } from "@/lib/contact";
import heroBg from "../../ui_images/hero.jpg";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BentoGallery from "@/components/ui/BentoGallery";
import { SERVICES } from "@/lib/site-data";

export default function Home() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  
  const dogGroomingImg = SERVICES.find(s => s.id === "dog-grooming")?.imageUrl;
  const catGroomingImg = SERVICES.find(s => s.id === "cat-grooming")?.imageUrl;
  const petSpaImg = SERVICES.find(s => s.id === "pet-spa")?.imageUrl;

  const handleWhatsAppInquiry = () => {
    openWhatsApp("Hello Petfocuz, I would like to inquire about booking a pet grooming appointment.");
  };

  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Petfocuz",
    "url": "https://www.petfocuz.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.petfocuz.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any }
  };

  const homeFaqs = [
    {
      q: "What is cage-free home boarding?",
      a: "Unlike traditional boarding kennels that lock pets in cages, our home boarding is inside a family house. Pets have complete freedom, stay in a warm home environment, and receive constant supervision, affection, and playtime from Maxon's parents."
    },
    {
      q: "How long does a standard grooming session take?",
      a: "A standard dog or cat grooming session takes about 1.5 to 2.5 hours depending on the pet's size, coat condition, and temperament. We do not rush sessions to ensure a stress-free experience."
    },
    {
      q: "Are the grooming styling dyes safe for pets?",
      a: "Yes, we use 100% pet-safe, non-toxic, vegan temporary and semi-permanent styling dyes specifically formulated for dogs. They fade naturally after a few washes and cause zero irritation."
    },
    {
      q: "Do you offer pickup and drop service?",
      a: "Yes! We offer convenient door-to-door pickup and drop in air-conditioned vehicles across Thrissur city and surrounding areas like Punkunnam, Ollur, and Guruvayur."
    },
    {
      q: "Can I get daily updates during home boarding?",
      a: "Absolutely. We send regular photo and video logs of your pet directly to your WhatsApp daily so you can see them eating, playing, and resting comfortably."
    }
  ];

  return (
    <>
      <MetaTags
        title="Petfocuz | Professional Pet Grooming Studio Thrissur Kerala"
        description="Experience international-standard dog & cat grooming in Thrissur. Founded by Singapore-trained specialist Maxon Mathew. Services include grooming, pet spa, cage-free boarding & pickup."
        canonicalUrl="https://petfocuz.com/"
        schema={homepageSchema}
      />

      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-start text-left overflow-hidden bg-black">
        {/* Background image and soft dark cinematic lighting overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Professional pet grooming styling dryer service at Petfocuz studio"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Horizon/left-aligned dark gradient mapping + solid overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 z-[1]" />
        </div>

        <div className="container-x w-full relative z-10 text-white pt-24 pb-12">
          <div className="max-w-3xl">
            <span 
              className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-white bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full mb-6 inline-block font-sans backdrop-blur-sm"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              THRISSUR · KERALA
            </span>
            <h1 
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.08] mb-6 text-balance max-w-3xl text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Professional Pet Grooming &<br /> Cage-Free Home Boarding in Thrissur
            </h1>
            <p 
              className="font-sans text-sm sm:text-base lg:text-lg text-white leading-relaxed max-w-2xl mb-8"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
            >
              Premium grooming, pet spa, hospital assistance, grooming courses and a real family home for boarding. Fear-free, hygienic, appointment-only.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                to="/contact-pet-grooming-thrissur"
                className="bg-primary hover:bg-primary/90 text-white px-7 py-3 rounded-full font-sans font-semibold text-sm shadow-lift transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="h-4 w-4 shrink-0" />
                Book Appointment
              </Link>
              <button
                onClick={handleWhatsAppInquiry}
                className="bg-white hover:bg-white/95 text-slate-800 px-7 py-3 rounded-full font-sans font-semibold text-sm shadow-lift transition-all duration-300 flex items-center gap-2"
              >
                <svg className="h-4 w-4 shrink-0 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </button>
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\s+/g, "")}`}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/15 px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="h-4 w-4 shrink-0" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-60">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-white/70 font-sans">
            SCROLL
          </span>
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-white/80 to-transparent rounded-full animate-bounce" />
        </div>
      </section>

      {/* Trust Statistics Strip */}
      <section className="relative z-20 -mt-16 container-x">
        <div className="bg-background border border-border shadow-card rounded-[32px] p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-border/60">
          <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:px-6">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
              <AnimatedCounter target={5000} suffix="+" />
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Happy Pets
            </span>
          </div>
          
          <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:px-6 pt-6 lg:pt-0">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
              <AnimatedCounter target={5} suffix="★" />
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Google Rating
            </span>
          </div>
          
          <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:px-6 pt-6 lg:pt-0">
            <span className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
              <AnimatedCounter target={8} suffix="+" />
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Professional Services
            </span>
          </div>
          
          <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:px-6 pt-6 lg:pt-0">
            <span className="font-display font-extrabold text-2xl md:text-3xl text-primary mb-1 leading-none">
              Thrissur
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">
              Kerala, India
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-y bg-background">
        <div className="container-x">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              OUR SERVICES
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4 leading-tight">
              Every service your pet deserves — under one roof.
            </h2>
            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
              Professional pet care tailored to their needs, with maximum comfort and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px] sm:auto-rows-[280px]">
            {/* 1. Dog Grooming (Large: spans col-1 to col-2 on desktop) */}
            <Link
              to="/pet-grooming-services-thrissur#dog-grooming"
              className="group relative md:col-span-2 lg:col-span-2 rounded-[24px] overflow-hidden shadow-card border border-border bg-white flex flex-col justify-between p-6 text-left"
            >
              <img
                src={dogGroomingImg}
                alt="Professional Dog Grooming in Thrissur Kerala"
                title="Dog Grooming Services Thrissur"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10 transition-opacity duration-300" />
              <div className="relative z-20">
                <h3 className="font-display font-bold text-xl sm:text-2xl" style={{ color: "#FFFFFF", textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>Dog Grooming</h3>
                <p className="font-sans text-xs sm:text-sm mt-1.5 leading-relaxed max-w-[85%]" style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                  Professional grooming sessions tailored to your dog's breed, coat type, and skin conditions.
                </p>
              </div>
              <div className="relative z-20 flex justify-end w-full mt-auto">
                <div className="h-10 w-10 rounded-full bg-white text-foreground flex items-center justify-center shrink-0 shadow-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* 2. Cat Grooming (Small: spans col-3) */}
            <Link
              to="/pet-grooming-services-thrissur#cat-grooming"
              className="group relative lg:col-span-1 rounded-[24px] overflow-hidden shadow-card border border-border bg-white flex flex-col justify-between p-6 text-left"
            >
              <img
                src={catGroomingImg}
                alt="Gentle Cat Grooming and Bathing in Thrissur"
                title="Cat Grooming Services Thrissur"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10 transition-opacity duration-300" />
              <div className="relative z-20">
                <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#FFFFFF", textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>Cat Grooming</h3>
                <p className="font-sans text-xs mt-1.5 leading-relaxed max-w-[90%]" style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                  Gentle, patient styling and bathing for cats, designed to keep them calm and reduce shedding.
                </p>
              </div>
              <div className="relative z-20 flex justify-end w-full mt-auto">
                <div className="h-10 w-10 rounded-full bg-white text-foreground flex items-center justify-center shrink-0 shadow-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* 3. Pet Spa (Small: spans col-4) */}
            <Link
              to="/pet-grooming-services-thrissur#pet-spa"
              className="group relative lg:col-span-1 rounded-[24px] overflow-hidden shadow-card border border-border bg-white flex flex-col justify-between p-6 text-left"
            >
              <img
                src={petSpaImg}
                alt="Luxury Pet Spa and Grooming Therapy Thrissur"
                title="Pet Spa & Wellness Thrissur"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10 transition-opacity duration-300" />
              <div className="relative z-20">
                <h3 className="font-display font-bold text-lg sm:text-xl" style={{ color: "#FFFFFF", textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>Pet Spa</h3>
                <p className="font-sans text-xs mt-1.5 leading-relaxed max-w-[90%]" style={{ color: "#FFFFFF", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                  Indulgent wellness spa treatments focusing on coat nourishment, skin therapy, and relaxation.
                </p>
              </div>
              <div className="relative z-20 flex justify-end w-full mt-auto">
                <div className="h-10 w-10 rounded-full bg-white text-foreground flex items-center justify-center shrink-0 shadow-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/pet-grooming-services-thrissur"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift transition-all duration-300 flex items-center gap-2"
            >
              View All Services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Home Boarding Highlight Section */}
      <section className="section-y bg-background border-b border-border">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden border border-border shadow-card bg-white">
            {/* Left Block: Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200"
                alt="Cage-free home boarding room with dogs playing"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            {/* Right Block: Content */}
            <div className="lg:col-span-6 bg-foreground text-background p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans mb-3 block">
                CAGE-FREE FAMILY EXPERIENCE
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-background mb-4 leading-tight">
                Cage-Free Home Boarding
              </h2>
              <p className="font-sans text-sm sm:text-base text-background/80 mb-6 leading-relaxed">
                Unlike traditional kennels, our pets stay in a warm family environment. Every pet is personally cared for by <strong className="text-primary font-semibold">Maxon Mathew's parents</strong>, receiving constant supervision, feeding, playtime, affection, and individual attention.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-background">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  Cage-Free Environment
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-background">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  Family Supervised
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-background">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  Daily Feeding & Playtime
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-background">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  Small & Large Breeds Welcome
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-pet-grooming-thrissur"
                  className="bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift text-center flex-grow sm:flex-grow-0"
                >
                  Book Home Boarding
                </Link>
                <a
                  href={MAP_LINKS.homeBoarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-sans font-bold text-sm transition-all duration-300 text-center flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-1.5"
                >
                  View Boarding Location
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-y bg-surface relative overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container-x w-full">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              WHY CHOOSE US
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4 leading-tight">
              Care built around your pet, not the schedule.
            </h2>
            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
              We reject the cage-centered, rushed grooming practices. We prioritize quality care and comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Experienced Groomers</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Singapore-trained professional lead groomers handling every pet with absolute skill and international standards.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Premium Products</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We use safe, non-toxic, organic shampoos, custom conditioners, and styling dyes that preserve skin health.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Stress-Free Handling</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Calm speeds, relaxing frequencies, and supportive holds for anxious or older dogs and cats.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Hygienic Environment</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Complete veterinary-grade sanitization of tables, tubs, clippers, and scissors between every session.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Appointment Based</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  No overcrowding. Every pet gets a dedicated time slot to ensure peaceful, focused care without hurry.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-background border border-border p-8 rounded-[24px] text-left hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">Family Home Boarding</h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Supervised 24/7 in a safe, cage-free family house by Maxon's parents, treating pets like our own family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day at Petfocuz Preview Section */}
      <section className="section-y bg-background border-b border-border">
        <div className="container-x">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              LIFE AT PETFOCUZ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4 leading-tight">
              See what a Petfocuz day looks like.
            </h2>
            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
              Happy pets, expert grooming, and a warm family environment — captured in moments from our studio.
            </p>
          </motion.div>

          <BentoGallery limit={6} />

          {/* Explore More CTA */}
          <div className="flex justify-center mt-12">
            <Link
              to="/about-petfocuz-thrissur#gallery"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift transition-all duration-300 flex items-center gap-2"
            >
              Explore More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-y bg-surface border-b border-border">
        <div className="container-x">
          <ReviewsSection />
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-y bg-surface border-b border-border">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center items-start">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans mb-3 block">
              COMMON QUESTIONS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Questions? We probably have answers.
            </h2>
            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed mt-4 mb-8">
              Find answers to common questions about our grooming packages, cage-free home boarding, and academy course formats.
            </p>
            <Link
              to="/pet-grooming-faq-thrissur"
              className="gradient-primary px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift"
            >
              View All FAQs
            </Link>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:border-primary/30"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <span className="font-display font-bold text-base text-foreground leading-snug">
                      {faq.q}
                    </span>
                    <div className={`h-8 w-8 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/10 border-primary/20 text-primary" : "text-muted-foreground"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-border/40">
                          <p className="font-sans text-sm text-muted-foreground leading-relaxed pt-4 text-left">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section-y bg-background container-x">
        <div className="relative gradient-primary text-white text-center rounded-[36px] overflow-hidden shadow-lift py-16 px-8 sm:px-12">
          {/* Subtle overlay circles */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-black/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4 text-balance">
              Book your pet's next grooming session today.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-md mb-8">
              Professional, cage-free pet care in Thrissur, Kerala. Appointment-based slots to ensure safety, hygiene, and calmness.
            </p>
            <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact-pet-grooming-thrissur"
                className="bg-white hover:bg-white/95 text-foreground px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Appointment
              </Link>
              <button
                onClick={handleWhatsAppInquiry}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-full font-sans font-bold text-sm transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
