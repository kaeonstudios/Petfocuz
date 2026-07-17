import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_HOURS, SOCIAL_LINKS } from "@/lib/contact";
import logoImg from "../../../ui_images/logo.png";

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

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/pet-grooming-services-thrissur" },
    { name: "About Us", path: "/about-petfocuz-thrissur" },
    { name: "FAQ", path: "/pet-grooming-faq-thrissur" },
    { name: "Contact & Book", path: "/contact-pet-grooming-thrissur" },
  ];

  const services = [
    { name: "Dog Grooming", hash: "#dog-grooming" },
    { name: "Cat Grooming", hash: "#cat-grooming" },
    { name: "Pet Spa & Wellness", hash: "#pet-spa" },
    { name: "Creative Colouring", hash: "#creative-coloring" },
    { name: "Cage-Free Boarding", hash: "#cage-free-boarding" },
    { name: "Pet Grooming Course", hash: "#grooming-course" },
  ];

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 text-sm text-muted-foreground">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group self-start">
              <img src={logoImg} alt="Petfocuz Logo" className="h-24 md:h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="leading-relaxed">
              Premium, international-standard pet grooming and cage-free home boarding in Thrissur, Kerala. Founded by Singapore-trained specialist Maxon Mathew.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-base text-foreground tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-base text-foreground tracking-wide">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={`/pet-grooming-services-thrissur${service.hash}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-base text-foreground tracking-wide">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="leading-relaxed">
                  Thrissur, Kerala, India - 680001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  className="hover:text-primary transition-colors"
                >
                  {BUSINESS_PHONE}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li className="text-xs border-t border-border pt-3 mt-1 leading-relaxed">
                <span className="font-medium text-foreground block mb-0.5">Hours:</span>
                {BUSINESS_HOURS}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-center md:text-left">
          <span>
            © {new Date().getFullYear()} Petfocuz. All rights reserved.
          </span>
          <span>
            Designed & Developed by{" "}
            <a
              href="https://www.kaeonstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Kaeon
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
