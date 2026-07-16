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
  date: string;
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
    name: "Anoop K. R.",
    petName: "Rocky",
    petBreed: "Golden Retriever",
    rating: 5,
    text: "Maxon did an incredible job with Rocky! He had huge mats on his ears and underarms, but Maxon patiently cleared them without shaving. The de-shedding bath reduced hair loss in my house instantly. Highly recommend the Singapore-trained expertise!",
    source: "Google",
    date: "1 week ago",
    avatarBg: "bg-teal-600 text-white"
  },
  {
    id: "rev-2",
    name: "Dr. Sruthi Nair",
    petName: "Milo",
    petBreed: "Persian Cat",
    rating: 5,
    text: "Grooming cats is a nightmare, but the team here was so calm. Milo's bath and trim were done beautifully. The salon is extremely clean, and they sterilize everything. I can see the premium quality they maintain.",
    source: "Google",
    date: "2 weeks ago",
    avatarBg: "bg-emerald-600 text-white"
  },
  {
    id: "rev-3",
    name: "Renjith Paul",
    petName: "Simba",
    petBreed: "German Shepherd",
    rating: 5,
    text: "Used their pickup and drop service from Guruvayur. Punctual and very professional handling. Simba returned fully clean, nails perfectly trimmed, and smelling fantastic. Truly a luxury service for pet owners in Thrissur.",
    source: "Google",
    date: "3 weeks ago",
    avatarBg: "bg-orange-600 text-white"
  },
  {
    id: "rev-4",
    name: "Maria Joseph",
    petName: "Daisy",
    petBreed: "Shih Tzu",
    rating: 5,
    text: "Daisy had her first grooming session here. She is usually very anxious, but Maxon was so gentle. The breed-specific styling cut made her look like a little puppy again! I won't go anywhere else now.",
    source: "Google",
    date: "1 month ago",
    avatarBg: "bg-rose-600 text-white"
  },
  {
    id: "rev-5",
    name: "Midhun Mohan",
    petName: "Bruno",
    petBreed: "Labrador",
    rating: 5,
    text: "Amazing de-shedding treatment. Bruno sheds like crazy during summers, but after the spa session, the loose hair is 90% gone. The fruity facial kept his face clean and tear-free. Excellent premium products.",
    source: "Google",
    date: "1 month ago",
    avatarBg: "bg-indigo-600 text-white"
  },
  {
    id: "rev-6",
    name: "Fathima R.",
    petName: "Luna",
    petBreed: "Indie Cat",
    rating: 5,
    text: "Luna's nail trimming was always a struggle, but they did it in 5 minutes without any stress. The cage-free setup is lovely, and you can see how much they love animals. Best cat spa in Thrissur!",
    source: "Google",
    date: "2 months ago",
    avatarBg: "bg-purple-600 text-white"
  },
  {
    id: "rev-7",
    name: "Sandeep Warrier",
    petName: "Shadow",
    petBreed: "Pomeranian",
    rating: 5,
    text: "Highly professional. Maxon's training in Singapore really shows in the details. Shadow got a beautiful scissor cut, very neat sanitary trim, and his coat is so soft. The UPI payment process was smooth too.",
    source: "Google",
    date: "2 months ago",
    avatarBg: "bg-amber-600 text-white"
  },
  {
    id: "rev-8",
    name: "Neethu Thomas",
    petName: "Leo",
    petBreed: "Beagle",
    rating: 5,
    text: "Boarded Leo here for 4 days when I traveled. He was kept cage-free and had a great time playing. They sent me updates and photos on WhatsApp every morning and evening. Highly trustable home boarding!",
    source: "Google",
    date: "3 months ago",
    avatarBg: "bg-cyan-600 text-white"
  },
  {
    id: "rev-9",
    name: "Akshay K.",
    petName: "Coco",
    petBreed: "Cocker Spaniel",
    rating: 5,
    text: "Hands down the best pet grooming salon in Thrissur. The pricing is fully transparent and worth every rupee. Coco had a luxury spa and tick bath. Very professional hygiene checks.",
    source: "Google",
    date: "3 months ago",
    avatarBg: "bg-blue-600 text-white"
  },
  {
    id: "rev-10",
    name: "Anjali Menon",
    petName: "Bella",
    petBreed: "Persian Cat",
    rating: 5,
    text: "Their cat bath and blow dry is top class. Very quiet blow dryers are used so Bella didn't get scared. Her coat has no mats and smells like fresh lavender. Highly recommend Petfocuz!",
    source: "Google",
    date: "4 months ago",
    avatarBg: "bg-pink-600 text-white"
  },
  {
    id: "rev-11",
    name: "George V. J.",
    petName: "Caesar",
    petBreed: "Rottweiler",
    rating: 5,
    text: "I was worried about handling Caesar because he is huge, but they handled him with ease. Very patient staff, safe harnesses, and top tier facilities. Great nail trim and ear cleaning done.",
    source: "Google",
    date: "4 months ago",
    avatarBg: "bg-sky-600 text-white"
  },
  {
    id: "rev-12",
    name: "Sneha Kurian",
    petName: "Cookie",
    petBreed: "Toy Poodle",
    rating: 5,
    text: "Cookie looks absolutely adorable after his breed styling session. Maxon is a master scissor-cutter. The shop looks premium, smelling clean, and the staff are incredibly polite. A gem in Kerala!",
    source: "Google",
    date: "5 months ago",
    avatarBg: "bg-violet-600 text-white"
  },
  {
    id: "rev-13",
    name: "Vishnu Prasad",
    petName: "Tyson",
    petBreed: "Boxer",
    rating: 5,
    text: "I took the grooming course preview session and decided to sign up. Maxon's knowledge of coat anatomy, styling tools, and dog behavior is outstanding. Thrissur is lucky to have a Singapore-trained expert.",
    source: "Google",
    date: "5 months ago",
    avatarBg: "bg-fuchsia-600 text-white"
  }
];

// 30 Core Service & General FAQs (From the 60 in seo.md)
export const FAQS: FaqItem[] = [
  {
    question: "What is Petfocuz?",
    answer: "Petfocuz is a professional pet grooming studio in Thrissur, Kerala, founded by Singapore-trained groomer Maxon Mathew. We offer dog grooming, cat grooming, cage-free boarding, pick-up & drop, and over 30 pet care services.",
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
    answer: "Pricing varies by breed size, coat length, and services selected. Basic bath & blow-dry packages start at ₹1,200, whereas full styling and luxury spas range between ₹1,800 and ₹3,500. Contact us for a quote.",
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
    answer: "We operate on an appointment-only basis to ensure every pet gets full, undivided, patient attention. We recommend booking 2-3 days in advance.",
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
    question: "Can I board my cat at Petfocuz?",
    answer: "Yes. We provide quiet, stress-free, cage-free cat boarding in a comfortable home environment away from barking dogs to ensure their safety and calm.",
    category: "Boarding"
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
