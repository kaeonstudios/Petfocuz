import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { Check, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import MetaTags from "@/components/ui/MetaTags";
import { SERVICES, type ServiceItem } from "@/lib/site-data";
import { MAP_LINKS, openWhatsApp } from "@/lib/contact";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  blockVariants: any;
}

function ServiceCard({ service, index, blockVariants }: ServiceCardProps) {
  const isAlternate = index % 2 === 1;
  const [isExpanded, setIsExpanded] = useState(false);
  const expandRef = useRef<HTMLDivElement>(null);
  const [expandHeight, setExpandHeight] = useState(0);

  // Measure the natural height of the expandable content
  const measureHeight = useCallback(() => {
    if (expandRef.current) {
      setExpandHeight(expandRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [measureHeight]);

  const handleToggle = () => {
    // Re-measure right before expanding to handle dynamic content
    if (!isExpanded && expandRef.current) {
      setExpandHeight(expandRef.current.scrollHeight);
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <div id={service.id} className="flex flex-col gap-12">
      {/* Hair-line divider (above every item except the first) */}
      {index > 0 && <div className="h-[1px] bg-border w-full mb-12" />}

      <motion.div
        variants={blockVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={blockVariants.viewport}
        transition={blockVariants.transition}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        {/* Service Image Block */}
        <div
          className={`col-span-1 md:col-span-6 relative aspect-square md:aspect-[4/5] rounded-[36px] overflow-hidden shadow-card border border-border bg-surface ${isAlternate ? "md:order-2" : "md:order-1"
            } group`}
        >
          <img
            src={service.imageUrl}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Service Details Block */}
        <div
          className={`col-span-1 md:col-span-6 text-left flex flex-col items-start ${isAlternate ? "md:order-1" : "md:order-2"
            }`}
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-primary font-sans bg-primary/10 px-3 py-1 rounded-full mb-4">
            {service.title === "Pet Grooming Course" ? "Academy" : "Premium Care"}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            {service.title}
          </h2>

          {/* Summary — always visible */}
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-2">
            {service.summary}
          </p>

          {/* Expandable detailed description + features + benefits */}
          <div
            ref={expandRef}
            id={`desc-${service.id}`}
            style={{ maxHeight: isExpanded ? expandHeight : 0 }}
            className="transition-[max-height] duration-300 ease-in-out overflow-hidden w-full"
          >
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-4">
              {service.longDescription}
            </p>

            {/* Hospital Assistance disclaimer callout */}
            {service.id === "hospital-assistance" && (
              <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 mb-6 text-left w-full">
                <p className="font-sans text-xs text-amber-700 dark:text-amber-400 font-semibold leading-relaxed">
                  ⚠️ Disclaimer: Petfocuz assists pet owners with veterinary coordination and does not replace professional veterinary care.
                </p>
              </div>
            )}

            {/* Features checklist */}
            <div className="mb-6 w-full text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-foreground font-sans block mb-3">
                What's Included:
              </span>
              <ul className="flex flex-col gap-2.5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex gap-2 text-xs text-foreground font-semibold">
                    <Check className="h-4 w-4 text-primary shrink-0 stroke-[2.5]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits checklist (if exists) */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-6 w-full text-left">
                <span className="text-xs uppercase tracking-widest font-bold text-foreground font-sans block mb-3">
                  Key Benefits:
                </span>
                <ul className="flex flex-col gap-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-xs text-muted-foreground">
                      <Check className="h-4 w-4 text-primary/50 shrink-0 stroke-[2.5]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Block */}
          <div className="border-t border-border pt-4 mt-2 w-full">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
              {service.id === "cage-free-boarding" ? (
                <>
                  <Link
                    to="/contact-pet-grooming-thrissur"
                    className="gradient-primary px-5 py-2.5 rounded-full font-sans font-semibold text-xs shadow-soft inline-flex items-center justify-center gap-1.5 flex-grow sm:flex-grow-0"
                  >
                    Book Home Boarding
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={MAP_LINKS.homeBoarding}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-surface text-foreground border border-border px-5 py-2.5 rounded-full font-sans font-semibold text-xs shadow-soft inline-flex items-center justify-center gap-1.5 transition-colors flex-grow sm:flex-grow-0"
                  >
                    View Boarding Location
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </>
              ) : (
                <Link
                  to="/contact-pet-grooming-thrissur"
                  className="gradient-primary px-6 py-2.5 rounded-full font-sans font-semibold text-xs shadow-soft inline-flex items-center justify-center gap-1.5 flex-grow sm:flex-grow-0"
                >
                  {service.ctaText}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}

              <button
                onClick={handleToggle}
                aria-expanded={isExpanded}
                aria-controls={`desc-${service.id}`}
                className="bg-background hover:bg-surface text-foreground border border-border px-6 py-2.5 rounded-full font-sans font-semibold text-xs shadow-soft inline-flex items-center justify-center gap-1.5 transition-colors flex-grow sm:flex-grow-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {isExpanded ? "Show Less" : "Learn More"}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const location = useLocation();

  // Scroll to hash element if present in url on page load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for render cycles
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  const handleWhatsAppInquiry = () => {
    openWhatsApp("Hello Petfocuz, I would like to inquire about a custom pricing quotation for my pet's grooming.");
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Petfocuz Services Catalog",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "url": `https://www.petfocuz.com/pet-grooming-services-thrissur#${service.id}`,
      "description": service.shortDescription
    }))
  };

  const blockVariants = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any }
  };

  return (
    <>
      <MetaTags
        title="Pet Grooming & Boarding Services Thrissur | Petfocuz"
        description="Explore our 8 professional pet care services in Thrissur. Dog & cat grooming, therapeutic spa, cage-free home boarding, hospital help, and pickup drop services."
        canonicalUrl="https://petfocuz.com/pet-grooming-services-thrissur"
        schema={servicesSchema}
      />

      {/* Services Header */}
      <section className="bg-surface pt-32 pb-16 border-b border-border">
        <div className="container-x text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
            OUR CATALOG
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mt-2 mb-4 leading-tight">
            Our Services & Care Programs
          </h1>
          <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed text-balance">
            Every session is designed entirely around your pet's hygiene, safety, and sensory comfort. We provide professional, individualized attention using only premium products.
          </p>
        </div>
      </section>

      {/* Alternating Services Catalog */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container-x flex flex-col gap-24">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              blockVariants={blockVariants}
            />
          ))}
        </div>
      </section>

      {/* Centralized Pricing Plans section */}
      <section className="section-y bg-surface border-b border-border">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
              PRICING MATRIX
            </span>
            <h2 className="font-display font-bold text-3xl text-foreground mt-2 mb-4">
              Transparent Pricing
            </h2>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              Professional pet grooming at transparent and affordable prices. Final pricing may vary depending on your pet's breed, coat condition, size, and grooming requirements.
            </p>
          </div>

          {/* Responsive Pricing Matrix: Desktop Table & Mobile Stacked Cards */}
          <div className="bg-background border border-border shadow-soft rounded-[28px] overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/10 border-b border-border">
                    <th className="p-5 font-sans font-bold text-xs uppercase tracking-wider text-foreground">Service</th>
                    <th className="p-5 font-sans font-bold text-xs uppercase tracking-wider text-right text-foreground">Small Breed</th>
                    <th className="p-5 font-sans font-bold text-xs uppercase tracking-wider text-right text-foreground">Medium Breed</th>
                    <th className="p-5 font-sans font-bold text-xs uppercase tracking-wider text-right text-foreground">Large Breed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-5 font-sans font-semibold text-sm text-foreground">De-Matting</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹250–700</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹250–700</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹250–700</td>
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-5 font-sans font-semibold text-sm text-foreground">Full Grooming</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹1,000</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹1,000</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-muted/5 transition-colors">
                    <td className="p-5 font-sans font-semibold text-sm text-foreground">Nail Trimming</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹300</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹300</td>
                    <td className="p-5 font-sans font-semibold text-sm text-primary text-right tabular-nums">₹300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards View */}
            <div className="block md:hidden divide-y divide-border/60">
              <div className="p-6 text-left flex flex-col gap-3">
                <span className="font-display font-bold text-base text-foreground">De-Matting</span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Small</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹250-700</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Medium</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹250-700</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Large</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹250-700</span>
                  </div>
                </div>
              </div>

              <div className="p-6 text-left flex flex-col gap-3">
                <span className="font-display font-bold text-base text-foreground">Full Grooming</span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Small</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹1,000</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Medium</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹1,000</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Large</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹1,000</span>
                  </div>
                </div>
              </div>

              <div className="p-6 text-left flex flex-col gap-3">
                <span className="font-display font-bold text-base text-foreground">Nail Trimming</span>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Small</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹300</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Medium</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹300</span>
                  </div>
                  <div className="bg-surface p-2.5 rounded-xl border border-border/60 flex flex-col items-center">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">Large</span>
                    <span className="text-xs font-semibold text-primary mt-1 font-sans">₹300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup & Drop Available Card */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 text-left mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="font-display font-bold text-sm text-primary uppercase tracking-wider mb-1">
                Pickup & Drop Available
              </h4>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Pickup and drop-off services are available depending on your location. Please contact us for availability and pricing.
              </p>
            </div>
            <Link
              to="/contact-pet-grooming-thrissur"
              className="gradient-primary px-5 py-2.5 rounded-full font-sans font-semibold text-xs shadow-soft inline-flex items-center gap-1.5 shrink-0"
            >
              Inquire Transport
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Dark Tone CTA Banner */}
      <section className="section-y bg-background container-x pt-0">
        <div className="relative bg-foreground text-background text-center rounded-[36px] overflow-hidden shadow-card py-16 px-8 sm:px-12">
          {/* Subtle overlay circles */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-3 block font-sans">
              GET IN TOUCH
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-background leading-tight mb-4 text-balance">
              Ready to experience international-standard care?
            </h2>
            <p className="font-sans text-sm sm:text-base text-background/80 leading-relaxed max-w-md mb-8">
              Book an appointment or send us a WhatsApp message to secure a dedicated, stress-free time slot for your pet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact-pet-grooming-thrissur"
                className="bg-primary hover:bg-primary/95 text-white px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-lift transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Appointment
              </Link>
              <button
                onClick={handleWhatsAppInquiry}
                className="bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-sans font-bold text-sm transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
