import { Phone, Mail, Clock, MessageSquare, ArrowUpRight, MapPin } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";
import MetaTags from "@/components/ui/MetaTags";
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_HOURS, MAP_LINKS, SOCIAL_LINKS, openWhatsApp } from "@/lib/contact";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);


export default function Contact() {
  const handleWhatsAppChat = () => {
    openWhatsApp("Hello Petfocuz, I would like to inquire about booking a pet grooming appointment.");
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Petfocuz",
    "description": "Book a pet grooming appointment in Thrissur, Kerala. Find our contact number, hours, location redirects and social links.",
    "url": "https://www.petfocuz.com/contact-pet-grooming-thrissur"
  };

  return (
    <>
      <MetaTags
        title="Book a Pet Grooming Appointment in Thrissur | Petfocuz"
        description="Ready to book a grooming slot or home boarding session? Contact Petfocuz in Thrissur via WhatsApp or our form. Direct links to our studio locations."
        canonicalUrl="https://petfocuz.com/contact-pet-grooming-thrissur"
        schema={contactSchema}
      />

      {/* Header section */}
      <section className="bg-surface pt-32 pb-16 border-b border-border">
        <div className="container-x text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
            BOOKING OFFICE
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mt-2 mb-4 leading-tight">
            Get In Touch & Book
          </h1>
          <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
            Fill in the form to coordinate your slot or contact us directly on WhatsApp. We cover Thrissur and all surrounding areas with home pickup.
          </p>
        </div>
      </section>

      {/* Contact Content Split Column Layout */}
      <section className="bg-background py-16">
        <div className="container-x w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details & Locations */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left w-full">

            {/* Location 1: Grooming Studio */}
            <div className="group bg-card border border-border p-6 rounded-3xl shadow-soft hover-lift hover:shadow-lift transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest block font-sans mb-1">
                      LOCATION 01
                    </span>
                    <h3 className="font-display font-bold text-base text-foreground mb-1 leading-tight">
                      Petfocuz Grooming Studio
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      Thrissur Town, Kerala, India - 680006
                    </p>
                  </div>
                </div>
                <a
                  href={MAP_LINKS.groomingStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-surface border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group-hover:scale-105 shrink-0"
                  aria-label="Open Grooming Studio Location in Google Maps"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <a
                href={MAP_LINKS.groomingStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-border/50 text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-dark transition-colors w-fit font-sans"
              >
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Location 2: Home Boarding */}
            <div className="group bg-card border border-border p-6 rounded-3xl shadow-soft hover-lift hover:shadow-lift transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest block font-sans mb-1">
                      LOCATION 02
                    </span>
                    <h3 className="font-display font-bold text-base text-foreground mb-1 leading-tight">
                      Petfocuz Home Boarding
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      Thrissur , Kerala, India
                    </p>
                  </div>
                </div>
                <a
                  href={MAP_LINKS.homeBoarding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-surface border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group-hover:scale-105 shrink-0"
                  aria-label="Open Home Boarding Location in Google Maps"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <a
                href={MAP_LINKS.homeBoarding}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-border/50 text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-dark transition-colors w-fit font-sans"
              >
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Business Contact Card */}
            <div className="bg-card border border-border p-6 rounded-3xl shadow-soft flex flex-col gap-5">
              <h3 className="font-display font-bold text-lg text-foreground pb-3 border-b border-border/50 leading-none">
                Contact Details
              </h3>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border/50">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide block">Call Studio</span>
                  <a href={`tel:${BUSINESS_PHONE}`} className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors mt-0.5 block">
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border/50">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide block">WhatsApp Chat</span>
                  <button onClick={handleWhatsAppChat} className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors mt-0.5 block text-left">
                    {BUSINESS_PHONE}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border/50">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide block">Send Email</span>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="font-sans font-bold text-sm text-foreground hover:text-primary transition-colors mt-0.5 block">
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border/50">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide block">Business Hours</span>
                  <span className="font-sans font-medium text-xs text-foreground mt-0.5 block">
                    {BUSINESS_HOURS}
                  </span>
                </div>
              </div>

              {/* Follow Us Pills */}
              <div className="border-t border-border/50 pt-5 flex flex-col gap-3">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide block text-left">Follow us</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-primary hover:border-primary transition-all text-xs font-semibold"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                    Instagram
                  </a>

                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-primary hover:border-primary transition-all text-xs font-semibold"
                  >
                    <YoutubeIcon className="h-3.5 w-3.5" />
                    YouTube
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 w-full">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
