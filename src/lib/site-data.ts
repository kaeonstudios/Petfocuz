// Master site data for Petfocuz
import colouringServiceImg from "../../ui_images/colouring_service_img.jpeg";
import dogGroomingImg from "../../ui_images/dog.webp";
import catGroomingImg from "../../ui_images/cat.jpg";
import wellnessSpaImg from "../../ui_images/wellness and spa.png";
import cagefreeBoardingImg from "../../ui_images/cagefree onboarding.png";
import hospitalAssistanceImg from "../../ui_images/hospital assistance.png";
import pickAndDropImg from "../../ui_images/pick and drop.jpeg";
import courseImg from "../../ui_images/glr_8.jpeg";



export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  summary: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  pricing: string;
  ctaText: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  petName: string;
  petBreed: string;
  rating: number;
  text: string;
  source: string;
  avatarBg: string; // OKLCH or Tailwind color class
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

// // 8 Core Services
export const SERVICES: ServiceItem[] = [
  {
    id: "dog-grooming",
    title: "Dog Grooming",
    slug: "/pet-grooming-services-thrissur#dog-grooming",
    shortDescription: "Professional grooming sessions tailored to your dog's breed, coat type, and skin conditions.",
    summary: "Professional, hygienic grooming sessions tailored to every breed, size, and coat type — promoting healthy skin and a clean, sanitary coat.",
    longDescription: "Led by Singapore-trained founder Maxon Mathew, each session is designed around your dog's specific needs. Professional dog grooming in Thrissur prevents infections, eliminates excess shedding, and identifies early warning signs of skin issues. We use only premium, dermatologically-tested products in a fully sanitized environment, treating your pet with the patience and expertise they deserve.",
    features: [
      "Bath & Blow Dry",
      "Haircut & Styling",
      "Nail Clipping",
      "Ear Cleaning",
      "Teeth Brushing",
      "De-shedding Treatment",
      "Tick & Flea Treatment"
    ],
    benefits: [
      "Prevents painful fur matting and skin rashes",
      "Reduces loose shedding around your home by removing dead undercoat",
      "Identifies early warning signs of skin lumps, ticks, or ear infections",
      "Maintains posture and joint health through proper nail and paw care"
    ],
    pricing: "Starting from ₹1,200 (Varies by breed size and coat condition)",
    ctaText: "Book Dog Grooming",
    imageUrl: dogGroomingImg
  },
  {
    id: "cat-grooming",
    title: "Cat Grooming",
    slug: "/pet-grooming-services-thrissur#cat-grooming",
    shortDescription: "Gentle and patient grooming for cats, designed to keep them calm and reduce shedding.",
    summary: "Gentle, stress-free grooming designed specifically for cats — minimizing anxiety while keeping coats clean, healthy, and mat-free.",
    longDescription: "Felines require a unique, calm approach. From Persian coat de-tangling to basic hygiene nail clips, we handle cats of all breeds with the utmost care, avoiding any rushing or force. Our cat grooming service significantly reduces hairballs, prevents skin irritation, and keeps long-haired cats comfortable in Kerala's humid climate.",
    features: [
      "Bathing",
      "De-matting",
      "Sanitary Trim",
      "Nail Trimming"
    ],
    benefits: [
      "Significantly reduces hairballs and ingested fur",
      "Prevents skin irritation and mats on the belly and underarms",
      "Maintains healthy nail growth and avoids sharp scratching claws",
      "Keeps long-haired cats clean, cool, and comfortable in Kerala's humidity"
    ],
    pricing: "Starting from ₹1,500 (Varies by breed and temperament)",
    ctaText: "Book Cat Grooming",
    imageUrl: catGroomingImg
  },
  {
    id: "pet-spa",
    title: "Pet Spa & Wellness",
    slug: "/pet-grooming-services-thrissur#pet-spa",
    shortDescription: "Indulgent spa treatments focusing on coat nourishment, skin therapy, and relaxation.",
    summary: "Premium pampering sessions combining deep coat nourishment, skin therapy, and relaxation — perfect for nervous pets or those with chronic dryness.",
    longDescription: "Our Pet Spa goes beyond grooming with targeted wellness treatments that deeply hydrate dry skin, restore coat luster, and relieve muscular tension. Each session includes a fruity facial mask for tear stain removal, warm organic coconut oil massage, and aromatherapy during the drying process. This is a sensory-rich experience pets genuinely enjoy.",
    features: [
      "Paw Care",
      "Coat Conditioning",
      "fruity facial mask to cleanse tear stains and refresh face fur",
      "Soothing massage with warm organic coconut oil",
      "Aromatherapy relaxation session during dry"
    ],
    benefits: [
      "Deeply hydrates dry skin and restores coat luster",
      "Aids in relieving muscular tension and reduces pet anxiety",
      "Keeps facial folds clean and free of yeast build-up",
      "Provides a premium sensory experience that pets genuinely enjoy"
    ],
    pricing: "Starting from ₹2,000",
    ctaText: "Book Spa Treatment",
    imageUrl: wellnessSpaImg
  },
  {
    id: "creative-coloring",
    title: "Creative Colouring",
    slug: "/pet-grooming-services-thrissur#creative-coloring",
    shortDescription: "Fun and safe creative styling using 100% pet-safe, non-toxic temporary hair dyes.",
    summary: "Add a splash of personality to your pet's look with 100% pet-safe, non-toxic temporary and semi-permanent styling dyes.",
    longDescription: "Our creative colouring service uses only premium, non-toxic dyes specifically formulated for dogs. This safe and artistic process allows for highlights, dyed ears, stenciled patterns, and full-body colour accents without irritating the skin. Dyes fade naturally after a few washes, causing no build-up — perfect for birthdays, celebrations, or a unique everyday look.",
    features: [
      "Semi-permanent coloring for ears, tail, or paws",
      "Use of 100% pet-safe, wash-out vegan dyes",
      "Precision application using fine styling brushes",
      "Gentle post-coloring wash to remove excess dye"
    ],
    benefits: [
      "Stunning and unique look for pet birthdays or special events",
      "Completely safe for your pet's skin and coat",
      "Dyes fade naturally after a few washes, causing no build-up"
    ],
    pricing: "Starting from ₹1,000 (Based on design complexity)",
    ctaText: "Book Creative Styling",
    imageUrl: colouringServiceImg
  },
  {
    id: "cage-free-boarding",
    title: "Cage-Free Home Boarding",
    slug: "/pet-grooming-services-thrissur#cage-free-boarding",
    shortDescription: "A cage-free home environment with individualized attention, regular updates, and play.",
    summary: "A warm, cage-free family home where your pet moves freely, sleeps comfortably, and receives constant personal attention.",
    longDescription: "Unlike traditional kennel boarding, we limit our capacity to ensure every boarder receives personalized care. Your pet is looked after by Maxon Mathew's parents with regular feeding, supervised playtimes, and daily photo and video updates sent to your WhatsApp. This eliminates boarding anxiety and kennel distress, promoting a positive mental state through companion care in a safe, hygienic environment.",
    features: [
      "Cage-Free Family Environment",
      "Personally cared for by Maxon Mathew's parents",
      "Daily feeding and playtime",
      "Suitable for small, medium, and large breeds",
      "Safe, hygienic, and stress-free home environment"
    ],
    benefits: [
      "Eliminates boarding anxiety, pacing, and kennel distress",
      "Promotes positive mental state through companion care",
      "Ensures peace of mind with daily digital logs"
    ],
    pricing: "Starting from ₹600 / Day",
    ctaText: "Book Home Boarding",
    imageUrl: cagefreeBoardingImg
  },
  {
    id: "hospital-assistance",
    title: "Hospital Assistance",
    slug: "/pet-grooming-services-thrissur#hospital-assistance",
    shortDescription: "Support and coordination for veterinary appointments, checkups, and post-vet care.",
    summary: "Professional support for veterinary visits — we coordinate with clinics, assist in transport, and handle your pet calmly during checkups.",
    longDescription: "If you're busy or need help handling your pet during a veterinary visit, Petfocuz is here. We coordinate with local veterinary clinics, assist in safe transportation, and professionally handle your pet during diagnostics and treatments to minimize stress. Our service reduces time-constraints for busy pet parents and helps avoid transport stress for large or anxious dogs.",
    features: [
      "Veterinary Consultation Assistance",
      "Health Check Coordination",
      "Vaccination Guidance",
      "Post-Treatment Grooming Support",
      "Emergency Assistance Coordination"
    ],
    benefits: [
      "Reduces time-constraints for busy pet parents",
      "Ensures pets are handled calmly and safely during veterinary checkups",
      "Helps avoid transport stress for large or anxious dogs"
    ],
    pricing: "Starting from ₹800 (Plus travel & medical charges)",
    ctaText: "Book Vet Assistance",
    imageUrl: hospitalAssistanceImg
  },
  {
    id: "pickup-drop",
    title: "Pickup & Drop Service",
    slug: "/pet-grooming-services-thrissur#pickup-drop",
    shortDescription: "Door-to-door pet transportation covering Thrissur city and surrounding suburbs.",
    summary: "Safe, air-conditioned door-to-door pet transportation across Thrissur city and surrounding areas like Punkunnam, Ollur, and Guruvayur.",
    longDescription: "Our dedicated pet transport uses secure, sanitized travel crates or harness hooks in air-conditioned vehicles customized for pet comfort. Punctual scheduling saves you travel time and eliminates the struggle of getting your pet into regular taxis. Hygienic transport also prevents exposure to external parasites. Contact us for availability and area-specific pricing.",
    features: [
      "Air-conditioned vehicle customized for pet comfort",
      "Use of secure, sanitized travel crates or harness hooks",
      "Punctual pick-up and drop scheduling",
      "Covering Punkunnam, Ollur, Guruvayur, and wider Thrissur"
    ],
    benefits: [
      "Saves you travel time and traffic hassle",
      "Eliminates the struggle of getting your pet into regular taxis",
      "Hygienic transport prevents exposure to external parasites"
    ],
    pricing: "Available depending on location. Contact us for more information.",
    ctaText: "Request Pickup",
    imageUrl: pickAndDropImg
  },
  {
    id: "grooming-course",
    title: "Pet Grooming Course",
    slug: "/pet-grooming-services-thrissur#grooming-course",
    shortDescription: "Learn professional pet grooming from Singapore-trained founder Maxon Mathew.",
    summary: "Launch your career in pet care with hands-on training and certification from Singapore-trained specialist Maxon Mathew.",
    longDescription: "Our structured Pet Grooming Course offers comprehensive, practical training covering breed-specific styling, animal handling, tool sterilization, and studio hygiene. Graduates receive a certificate of excellence and career guidance, equipping them with professional skills aligned with global standards — whether for job placement in premium pet salons or starting their own grooming studio.",
    features: [
      "Professional Hands-on Training",
      "Dog & Cat Grooming",
      "Equipment Handling",
      "Breed Styling",
      "Pet Safety & Hygiene",
      "Certification",
      "Career Guidance"
    ],
    benefits: [
      "Acquire professional skills aligned with global standards",
      "Opens direct opportunities for job placement in premium pet salons",
      "Equips you to start your own pet grooming studio"
    ],
    pricing: "Contact us for curriculum details and enrollment fees",
    ctaText: "Enquire Now",
    imageUrl: courseImg
  }
];

// 13 Premium Customer Reviews
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Ala B Bala",
    petName: "",
    petBreed: "Boxer",
    rating: 5,
    text: "The grooming was done so well and pick and drop was done on time. From the way they handled my 11-year-old Boxer, it was very evident that all the staff and the owner, Mr. Maxon, were very skilled, patient, and most importantly kind with dogs. I'll trust them with my senior dog any day. Highly recommended.",
    source: "Google",
    avatarBg: "bg-teal-600 text-white"
  },
  {
    id: "rev-2",
    name: "Abhil Sasindran",
    petName: "",
    petBreed: "German Shepherd",
    rating: 5,
    text: "I recently had my German Shepherd groomed at Petfocuz and I was so happy with the service. Max, the owner of the shop, came to pick up my dog and handled him with great care. Max is a down-to-earth person who clearly knows his way around dogs. The grooming was excellent and my dog came back looking clean, healthy, and happy. I highly recommend Petfocuz to anyone looking for professional pet grooming.",
    source: "Google",
    avatarBg: "bg-emerald-600 text-white"
  },
  {
    id: "rev-3",
    name: "Shalal Shaji",
    petName: "",
    petBreed: "Dog",
    rating: 5,
    text: "This place is so neat and beautiful. In Thrissur, this is the tidiest pet grooming studio among all the others. We could watch the grooming from the reception area, and the way they handled my pet was very professional. I was completely satisfied with the service and highly recommend Petfocuz.",
    source: "Google",
    avatarBg: "bg-orange-600 text-white"
  },
  {
    id: "rev-4",
    name: "Happy Rajesh",
    petName: "",
    petBreed: "German Shepherd",
    rating: 5,
    text: "Amazing grooming service! My German Shepherd was picked up with great care, and she came back looking fantastic. I loved the video updates during the grooming session—it was clear she enjoyed the experience. Highly recommend Petfocuz for their professionalism and genuine love for pets.",
    source: "Google",
    avatarBg: "bg-rose-600 text-white"
  },
  {
    id: "rev-5",
    name: "Jisha Dani",
    petName: "",
    petBreed: "Dog",
    rating: 5,
    text: "I've been getting my dog groomed with Pet Focuz for a while now, and I couldn't be happier. They come right to my home, pick him up, and drop him back after grooming, which makes everything so convenient. The prices are reasonable, and the care they provide is exceptional. I completely trust them with my pet and highly recommend them to every pet parent.",
    source: "Google",
    avatarBg: "bg-indigo-600 text-white"
  },
  {
    id: "rev-6",
    name: "OZONE Dr. Regi's Scan Centre (Dr. Regi George)",
    petName: "",
    petBreed: "Rottweiler",
    rating: 5,
    text: "I am Dr. Regi George, a Radiologist from Thrissur. I received excellent service from Maxon Mathew and his team at Pet Focuz for my Rottweiler's grooming and hospital care. Their service was extremely professional, reliable, and caring. The team handled my pet with great attention and compassion. I highly recommend Pet Focuz to anyone looking for trustworthy pet care services.",
    source: "Google",
    avatarBg: "bg-purple-600 text-white"
  },
  {
    id: "rev-7",
    name: "Natasha Louis Paul",
    petName: "Kiki",
    petBreed: "Dog",
    rating: 5,
    text: "The team at Pet Focuz, led by Maxon, did an incredible job grooming my fur baby Kiki. They were gentle, loving, and took the time needed to complete everything perfectly. The place is clean and well maintained, appointments are managed professionally, and the entire experience reflects their dedication to pets. I couldn't be happier with the service.",
    source: "Google",
    avatarBg: "bg-amber-600 text-white"
  },
  {
    id: "rev-8",
    name: "Devika Murali E",
    petName: "Cheeto",
    petBreed: "Cat",
    rating: 5,
    text: "Maxon and his team groomed my cat, Cheeto, with great professionalism and love. They were thorough at every step and even allowed me to watch the entire grooming process. They handled Cheeto gently, spoke to him calmly, and ensured he stayed comfortable throughout. Their patience and care truly impressed me, and I highly recommend them.",
    source: "Google",
    avatarBg: "bg-cyan-600 text-white"
  },
  {
    id: "rev-9",
    name: "Gokul Krishna",
    petName: "",
    petBreed: "Puppy",
    rating: 5,
    text: "So happy with Pet Focuz! Thanks to Maxon for taking such wonderful care of my puppy. I was away in Chennai and needed someone trustworthy to look after my pet. Pet Focuz assured me they would take good care of him, and they absolutely did. The communication, care, and grooming quality exceeded my expectations. I would confidently recommend them to any pet owner.",
    source: "Google",
    avatarBg: "bg-blue-600 text-white"
  },
  {
    id: "rev-10",
    name: "SHERIL LAURANCE",
    petName: "Pookie",
    petBreed: "Tibetan Terrier",
    rating: 5,
    text: "Highly Recommended! I had a wonderful experience at Pet Focuz with my Tibetan Terrier, Pookie. The team was incredibly patient, professional, and caring throughout the grooming session. They kept me updated during the process, and the final grooming and styling looked amazing. The attention to detail, hygiene, and genuine love they showed towards my pet made the entire experience exceptional. I will definitely be returning.",
    source: "Google",
    avatarBg: "bg-pink-600 text-white"
  }
];

// 30 Core Service & General FAQs (From the 60 in seo.md)
export const FAQS: FaqItem[] = [
  {
    question: "What is Petfocuz?",
    answer: "Petfocuz is a professional pet grooming studio in Thrissur, Kerala, founded by Singapore-trained groomer Maxon Mathew. We offer dog grooming, cat grooming, cage-free boarding, pick-up & drop, and over 8 pet care services.",
    category: "General"
  },
  {
    question: "Where is Petfocuz located?",
    answer: "Petfocuz operates from Thrissur, Kerala. We also offer a home pick-up and drop service covering Thrissur, Guruvayur, Punkunnam, Ollur, and surrounding areas.",
    category: "General"
  },
  {
    question: "Who is the founder of Petfocuz?",
    answer: "Maxon Mathew is the founder of Petfocuz. He trained as a professional pet groomer in Singapore before returning to his hometown Thrissur to establish the studio, bringing global standards to South India.",
    category: "General"
  },
  {
    question: "How do I book a grooming appointment at Petfocuz?",
    answer: "You can book using our website booking form which automatically generates a structured WhatsApp message, or by calling us directly or messaging us on Instagram.",
    category: "Booking"
  },
  {
    question: "How much does dog grooming cost in Thrissur?",
    answer: "Dog grooming costs 1000 for all breeds.",
    category: "Pricing"
  },
  {
    question: "Does Petfocuz offer home pick-up and drop service?",
    answer: "Yes. We offer an air-conditioned pickup and drop service across Thrissur city, Guruvayur, Punkunnam, Ollur, Mannuthy, and surrounding areas to save you travel time.",
    category: "Services"
  },
  {
    question: "What is cage-free pet boarding at Petfocuz?",
    answer: "Our cage-free boarding allows your pet to live in a comfortable, supervised home environment without cages or confinement. They receive individual attention, regular feeding, exercise, and daily photo/video updates on WhatsApp.",
    category: "Boarding"
  },
  {
    question: "Does Petfocuz groom cats?",
    answer: "Yes. We are fully equipped for professional cat grooming, including bubble bath, blow-dry, nail clipping, sanitary trims, and de-shedding. We work with all breeds, including Persian and Himalayan cats.",
    category: "Cats"
  },
  {
    question: "Do you groom all dog breeds?",
    answer: "Yes. We groom all breeds including Labradors, Golden Retrievers, German Shepherds, Poodles, Shih Tzus, Pomeranians, Beagles, Dachshunds, Cocker Spaniels, and large breeds.",
    category: "Services"
  },
  {
    question: "Is Petfocuz safe for puppies?",
    answer: "Absolutely. We offer specialized puppy grooming sessions that are gentle, patient, and designed to introduce young dogs (after vaccination) to grooming without fear or stress.",
    category: "Services"
  },
  {
    question: "Do you groom senior dogs?",
    answer: "Yes. Our senior pet grooming is modified with shorter sessions, gentle handling, and extra physical support for older dogs with arthritis or joint sensitivity.",
    category: "Services"
  },
  {
    question: "What grooming products does Petfocuz use?",
    answer: "We use only premium, dermatologically-tested, pet-safe shampoos, conditioners, and treatment products, ensuring no harsh chemicals irritate your pet's skin.",
    category: "Safety"
  },
  {
    question: "How often should I groom my dog in Kerala?",
    answer: "In Kerala's tropical and humid climate, regular grooming every 4–6 weeks is recommended to keep coats fresh, prevent matting, and eliminate skin yeast infections.",
    category: "General"
  },
  {
    question: "Does Petfocuz provide tick treatment?",
    answer: "Yes. We offer professional tick and flea removal, including medicated anti-parasitic baths and coat inspections, which are highly recommended during humid seasons.",
    category: "Services"
  },
  {
    question: "What is de-shedding treatment?",
    answer: "De-shedding is a specialized process using undercoat brushes and rich conditioners to remove loose, dead fur from double-coated breeds, reducing indoor shedding by up to 80%.",
    category: "Services"
  },
  {
    question: "What is de-matting and does Petfocuz offer it?",
    answer: "De-matting is the professional removal of tangled fur knots. We offer de-matting for dogs and cats, using detangling sprays and special combs to ease out knots painlessly.",
    category: "Services"
  },
  {
    question: "Can I get my pet groomed without an appointment?",
    answer: "We operate on an appointment-only basis to ensure every pet gets full, undivided, patient attention. We recommend booking 1 day in advance.",
    category: "Booking"
  },
  {
    question: "What is the difference between full grooming and a bath & blow-dry?",
    answer: "A bath & blow-dry covers deep cleaning, conditioning, and drying. Full grooming adds a breed-specific haircut, styling, nail clipping, ear cleaning, and sanitary trimming.",
    category: "Services"
  },
  {
    question: "Does Petfocuz offer dental care for pets?",
    answer: "We offer teeth brushing with pet-friendly enzyme toothpaste during sessions to remove plaque, freshen breath, and promote general oral hygiene.",
    category: "Services"
  },
  {
    question: "What is paw care at Petfocuz?",
    answer: "Paw care involves trimming excess hair between paw pads, filing nails, inspecting pads for injuries, and moisturizing with organic protective paw balm.",
    category: "Services"
  },
  {
    question: "Does Petfocuz offer luxury grooming?",
    answer: "Yes. Our luxury grooming package includes full styling plus spa relaxation, aromatherapy, fruity facials, premium conditioning masks, and a luxury cologne spray.",
    category: "Pricing"
  },
  {
    question: "Does Petfocuz help with pet hospital visits?",
    answer: "Yes. Our hospital assistance service helps coordinate, transport, and guide your pet through veterinary checkups at local animal hospitals in Thrissur.",
    category: "Services"
  },
  {
    question: "What areas does Petfocuz serve?",
    answer: "We serve the entire Thrissur district, including Guruvayur, Punkunnam, Ollur, Puzhakkal, Kunnamkulam, Chalakudy, Irinjalakuda, Wadakkanchery, Mannuthy, and Koratty.",
    category: "General"
  },
  {
    question: "How long does a full grooming session take?",
    answer: "Full grooming usually takes 2 to 3 hours depending on breed size, coat thickness, and styling. We never rush to ensure the pet remains relaxed and safe.",
    category: "Booking"
  },
  {
    question: "What should I bring for my pet's boarding stay?",
    answer: "Please bring your pet's current food, vaccination booklet, any active medications, their favorite toy or blanket, and emergency contact numbers.",
    category: "Boarding"
  },
  {
    question: "Is Petfocuz hygienic and safe?",
    answer: "Absolutely. We disinfect grooming tables, tubs, and floors with pet-safe solutions after every pet, and sterilize all scissors, combs, and clippers between sessions.",
    category: "Safety"
  },
  {
    question: "Does Petfocuz sell pet products?",
    answer: "Yes. We sell a curated collection of premium pet grooming accessories, tick sprays, natural shampoos, coat conditioners, healthy snacks, and toys.",
    category: "General"
  },
  {
    question: "Is vaccination required before boarding?",
    answer: "Yes. For the health and safety of all boarding pets, up-to-date vaccinations (dhppil/rabies for dogs, tricat for cats) are strictly mandatory before boarding.",
    category: "Boarding"
  },
  {
    question: "Why should I choose Petfocuz over other groomers in Kerala?",
    answer: "Petfocuz is the only salon in Kerala led by a Singapore-trained founder, offering international grooming standards, premium products, cage-free boarding, and pickup services with undivided love.",
    category: "General"
  }
];
