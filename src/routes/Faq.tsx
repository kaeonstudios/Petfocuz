import { useState } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/site-data";
import MetaTags from "@/components/ui/MetaTags";
import { WHATSAPP_NUMBER } from "@/lib/contact";

// Simple Accordion Row Component
function FaqRow({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border py-4 text-left">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left font-display font-semibold text-base text-foreground py-2 focus:outline-none transition-colors duration-200 hover:text-primary group"
      >
        <span className="leading-tight">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Smooth height expand transition */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-4 pr-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs based on search string
  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic schema list
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFaqs.slice(0, 10).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <MetaTags
        title="Pet Grooming FAQ Thrissur | Questions & Answers | Petfocuz"
        description="Got questions about pet grooming, pricing, boarding rules, or pickup services in Thrissur? Find answers to all 30+ service-related FAQs at Petfocuz."
        canonicalUrl="https://petfocuz.com/pet-grooming-faq-thrissur"
        schema={faqSchema}
      />

      {/* Header section */}
      <section className="bg-surface pt-32 pb-16 border-b border-border">
        <div className="container-x text-center max-w-3xl flex flex-col items-center">
          <HelpCircle className="h-10 w-10 text-primary mb-3" />
          <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
            COMMON INQUIRIES
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mt-2 mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
            Find quick answers to all questions regarding pricing, dog/cat bathing, styling cuts, safety policies, home boarding rules, and booking systems.
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-lg shadow-soft rounded-full bg-background border border-border flex items-center px-5 py-3.5 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300">
            <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search questions (e.g. cat, price, boarding)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null); // Reset collapsible states on filter
              }}
              className="w-full bg-transparent font-sans text-sm focus:outline-none text-foreground placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
      </section>

      {/* FAQ Lists */}
      <section className="bg-background py-16">
        <div className="container-x max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col border-t border-border">
              {filteredFaqs.map((faq, index) => (
                <FaqRow
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 flex flex-col items-center gap-3">
              <span className="text-4xl">🐾</span>
              <p className="font-sans font-semibold text-lg text-foreground">
                No matching questions found
              </p>
              <p className="font-sans text-sm text-muted-foreground max-w-xs leading-relaxed">
                Try searching for simple keywords like "spa", "bath", "dog", "boarding", or contact us directly.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-wider mt-2 border-b border-primary pb-0.5"
              >
                Clear Search Query
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Page Footer CTA */}
      <section className="section-y bg-surface text-center border-t border-border">
        <div className="container-x max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8">
            Our founder Maxon Mathew is always happy to answer detailed questions regarding skin allergies, breed cuts, or special boarding conditions.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Petfocuz%2C%20I%20have%20a%20question%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary px-8 py-3.5 rounded-full font-sans font-bold text-sm shadow-soft inline-block"
          >
            Chat Directly on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
