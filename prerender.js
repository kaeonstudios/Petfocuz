import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// FAQs list to populate in the FAQPage schema
const FAQS = [
  {
    question: "What is Petfocuz?",
    answer: "Petfocuz is a professional pet grooming studio in Thrissur, Kerala, founded by Singapore-trained groomer Maxon Mathew. We offer dog grooming, cat grooming, cage-free boarding, pick-up & drop, and over 8 pet care services."
  },
  {
    question: "Where is Petfocuz located?",
    answer: "Petfocuz operates from Thrissur, Kerala. We also offer a home pick-up and drop service covering Thrissur, Guruvayur, Punkunnam, Ollur, and surrounding areas."
  },
  {
    question: "Who is the founder of Petfocuz?",
    answer: "Maxon Mathew is the founder of Petfocuz. He trained as a professional pet groomer in Singapore before returning to his hometown Thrissur to establish the studio, bringing global standards to South India."
  },
  {
    question: "How do I book a grooming appointment at Petfocuz?",
    answer: "You can book using our website booking form which automatically generates a structured WhatsApp message, or by calling us directly or messaging us on Instagram."
  },
  {
    question: "How much does dog grooming cost?",
    answer: "Dog grooming starting package costs ₹1,200 (varies by breed size, coat thickness, and temperament)."
  },
  {
    question: "Does Petfocuz offer home pick-up and drop service?",
    answer: "Yes. We offer an air-conditioned pickup and drop service across Thrissur city, Guruvayur, Punkunnam, Ollur, Mannuthy, and surrounding areas to save you travel time."
  },
  {
    question: "What is cage-free pet boarding at Petfocuz?",
    answer: "Our cage-free boarding allows your pet to live in a comfortable, supervised home environment without cages or confinement. They receive individual attention, regular feeding, exercise, and daily photo/video updates on WhatsApp."
  },
  {
    question: "Does Petfocuz groom cats?",
    answer: "Yes. We are fully equipped for professional cat grooming, including bubble bath, blow-dry, nail clipping, sanitary trims, and de-shedding. We work with all breeds, including Persian and Himalayan cats."
  },
  {
    question: "Do you groom all dog breeds?",
    answer: "Yes. We groom all breeds including Labradors, Golden Retrievers, German Shepherds, Poodles, Shih Tzus, Pomeranians, Beagles, Dachshunds, Cocker Spaniels, and large breeds."
  },
  {
    question: "Is Petfocuz safe for puppies?",
    answer: "Absolutely. We offer specialized puppy grooming sessions that are gentle, patient, and designed to introduce young dogs (after vaccination) to grooming without fear or stress."
  }
];

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Petfocuz | Professional Pet Grooming Studio Thrissur Kerala',
    description: 'Experience international-standard dog & cat grooming in Thrissur, Kerala. Founded by Singapore-trained founder Maxon Mathew. Services include grooming, pet spa, cage-free boarding & pickup.',
    canonical: 'https://www.petfocuz.com/',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.petfocuz.com/#website",
          "url": "https://www.petfocuz.com/",
          "name": "Petfocuz",
          "description": "Professional Pet Grooming Studio & Cage-Free Boarding in Thrissur, Kerala.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.petfocuz.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://www.petfocuz.com/#organization",
          "name": "Petfocuz",
          "url": "https://www.petfocuz.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.petfocuz.com/favicon.png",
            "caption": "Petfocuz Logo"
          },
          "sameAs": [
            "https://www.instagram.com/petfocuz/",
            "https://www.facebook.com/petfocuz/"
          ]
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://www.petfocuz.com/#localbusiness",
          "name": "Petfocuz Grooming Studio",
          "image": "https://www.petfocuz.com/favicon.png",
          "priceRange": "₹₹",
          "telephone": "+91 79947 55458",
          "email": "petfocuz24@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Petfocuz Studio, Thrissur Town",
            "addressLocality": "Thrissur",
            "addressRegion": "Kerala",
            "postalCode": "680006",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.5276,
            "longitude": 76.2144
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "19:00"
            }
          ],
          "founder": {
            "@type": "Person",
            "name": "Maxon Mathew",
            "jobTitle": "Lead Groomer & Founder",
            "description": "Singapore-trained professional pet groomer bringing international grooming standards to Thrissur, Kerala."
          }
        }
      ]
    }
  },
  {
    path: '/pet-grooming-services-thrissur',
    file: 'pet-grooming-services-thrissur/index.html',
    title: 'Pet Grooming & Boarding Services Thrissur | Petfocuz',
    description: 'Explore our 8 professional pet care services in Thrissur. Dog & cat grooming, therapeutic spa, cage-free home boarding, hospital help, and pickup drop services.',
    canonical: 'https://www.petfocuz.com/pet-grooming-services-thrissur',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.petfocuz.com/pet-grooming-services-thrissur#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.petfocuz.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://www.petfocuz.com/pet-grooming-services-thrissur"
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://www.petfocuz.com/pet-grooming-services-thrissur#services-list",
          "name": "Petfocuz Services Catalog",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Dog Grooming",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#dog-grooming",
              "description": "Professional grooming sessions tailored to your dog's breed, coat type, and skin conditions."
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Cat Grooming",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#cat-grooming",
              "description": "Gentle and patient grooming for cats, designed to keep them calm and reduce shedding."
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Pet Spa & Wellness",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#pet-spa",
              "description": "Indulgent spa treatments focusing on coat nourishment, skin therapy, and relaxation."
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Creative Colouring",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#creative-coloring",
              "description": "Fun and safe creative styling using 100% pet-safe, non-toxic temporary hair dyes."
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Cage-Free Home Boarding",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#cage-free-boarding",
              "description": "A cage-free home environment with individualized attention, regular updates, and play."
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Hospital Assistance",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#hospital-assistance",
              "description": "Support and coordination for veterinary appointments, checkups, and post-vet care."
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "Pickup & Drop Service",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#pickup-drop",
              "description": "Door-to-door pet transportation covering Thrissur city and surrounding suburbs."
            },
            {
              "@type": "ListItem",
              "position": 8,
              "name": "Pet Grooming Course",
              "url": "https://www.petfocuz.com/pet-grooming-services-thrissur#grooming-course",
              "description": "Learn professional pet grooming from Singapore-trained founder Maxon Mathew."
            }
          ]
        }
      ]
    }
  },
  {
    path: '/about-petfocuz-thrissur',
    file: 'about-petfocuz-thrissur/index.html',
    title: 'About Us | Singapore-Trained Groomer Maxon Mathew | Petfocuz',
    description: 'Discover the story of Petfocuz, Thrissur\'s premier pet grooming studio. Meet Maxon Mathew, trained in Singapore. Learn our mission, values, and standards.',
    canonical: 'https://www.petfocuz.com/about-petfocuz-thrissur',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.petfocuz.com/about-petfocuz-thrissur#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.petfocuz.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://www.petfocuz.com/about-petfocuz-thrissur"
            }
          ]
        },
        {
          "@type": "AboutPage",
          "@id": "https://www.petfocuz.com/about-petfocuz-thrissur",
          "name": "About Petfocuz",
          "description": "Learn about Maxon Mathew, Singapore-trained founder of Petfocuz in Thrissur. Discover our mission, values, and our sanitized pet spa studio.",
          "url": "https://www.petfocuz.com/about-petfocuz-thrissur",
          "mainEntity": {
            "@type": "Person",
            "name": "Maxon Mathew",
            "jobTitle": "Lead Groomer & Founder",
            "description": "Singapore-trained professional pet groomer bringing international grooming standards to Thrissur, Kerala.",
            "sameAs": [
              "https://www.instagram.com/petfocuz/",
              "https://www.facebook.com/petfocuz/"
            ]
          }
        }
      ]
    }
  },
  {
    path: '/pet-grooming-faq-thrissur',
    file: 'pet-grooming-faq-thrissur/index.html',
    title: 'Pet Grooming FAQ Thrissur | Questions & Answers | Petfocuz',
    description: 'Got questions about pet grooming, pricing, boarding rules, or pickup services in Thrissur? Find answers to all 30+ service-related FAQs at Petfocuz.',
    canonical: 'https://www.petfocuz.com/pet-grooming-faq-thrissur',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.petfocuz.com/pet-grooming-faq-thrissur#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.petfocuz.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "FAQ",
              "item": "https://www.petfocuz.com/pet-grooming-faq-thrissur"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.petfocuz.com/pet-grooming-faq-thrissur#faq",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    }
  },
  {
    path: '/contact-pet-grooming-thrissur',
    file: 'contact-pet-grooming-thrissur/index.html',
    title: 'Book a Pet Grooming Appointment in Thrissur | Petfocuz',
    description: 'Ready to book a grooming slot or home boarding session? Contact Petfocuz in Thrissur via WhatsApp or our form. Direct links to our studio locations.',
    canonical: 'https://www.petfocuz.com/contact-pet-grooming-thrissur',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.petfocuz.com/contact-pet-grooming-thrissur#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.petfocuz.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact & Book",
              "item": "https://www.petfocuz.com/contact-pet-grooming-thrissur"
            }
          ]
        },
        {
          "@type": "ContactPage",
          "@id": "https://www.petfocuz.com/contact-pet-grooming-thrissur",
          "name": "Contact Petfocuz",
          "description": "Book a pet grooming appointment in Thrissur, Kerala. Find our contact number, hours, location redirects and social links.",
          "url": "https://www.petfocuz.com/contact-pet-grooming-thrissur",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Petfocuz Grooming Studio",
            "telephone": "+91 79947 55458",
            "email": "petfocuz24@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Petfocuz Studio, Thrissur Town",
              "addressLocality": "Thrissur",
              "addressRegion": "Kerala",
              "postalCode": "680006",
              "addressCountry": "IN"
            }
          }
        }
      ]
    }
  }
];

async function prerender() {
  console.log('--- STARTING SSG PRE-RENDERING PIPELINE ---');

  // 1. Build client files
  console.log('1. Compiling client bundle...');
  await build({
    build: {
      minify: true,
      outDir: 'dist'
    }
  });

  // 2. Build server bundle for rendering static HTML string
  console.log('2. Compiling SSR bundle...');
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist-server',
      minify: false,
      rollupOptions: {
        input: 'src/entry-server.tsx'
      }
    }
  });

  // 3. Import the compiled server render function
  console.log('3. Resolving compiled render module...');
  const serverModulePath = path.resolve(__dirname, 'dist-server/entry-server.js');
  const { render } = await import(`file://${serverModulePath}`);

  // 4. Load the base HTML template created by client build
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 5. Generate fully rendered index.html files for all routes
  console.log('4. Rendering routes dynamically...');
  for (const route of routes) {
    console.log(`   ↳ Prerendering path [${route.path}]...`);
    const appHtml = render(route.path);

    // Inject rendered React DOM content
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Ingress metadata overrides
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Compile head tags to append
    let headInjects = `
    <!-- Technical Canonical URL tag -->
    <link rel="canonical" href="${route.canonical}" />

    <!-- Open Graph (Facebook / LinkedIn) Metadata -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:image" content="https://www.petfocuz.com/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Petfocuz" />

    <!-- Twitter Cards Metadata -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://www.petfocuz.com/favicon.png" />
    <meta name="twitter:site" content="@Petfocuz" />

    <!-- Enterprise Structured Data Schemas -->
    <script id="json-ld-schema" type="application/ld+json">${JSON.stringify(route.schema)}</script>
    `;

    // Append to </head>
    html = html.replace('</head>', `${headInjects}\n</head>`);

    // Write file to target route path
    const destPath = path.resolve(__dirname, 'dist', route.file);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.writeFileSync(destPath, html, 'utf-8');
  }

  // 6. Clean up temporary server build files
  console.log('5. Cleaning up temporary SSR compilation directory...');
  fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });

  console.log('--- SSG PRE-RENDERING COMPLETED SUCCESSFULLY ---');
}

prerender().catch((err) => {
  console.error('--- SSG PRE-RENDERING PIPELINE FAILED ---');
  console.error(err);
  process.exit(1);
});
