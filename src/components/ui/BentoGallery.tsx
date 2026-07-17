import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Local image imports
import glr1 from "../../../ui_images/glr_1.jpg";
import glr2 from "../../../ui_images/glr_2.jpg";
import glr3 from "../../../ui_images/glr_3.jpg";
import glr4 from "../../../ui_images/glr_4.jpg";
import glr5 from "../../../ui_images/glr_5.jpg";
import glr6 from "../../../ui_images/glr_6.jpg";
import glr7 from "../../../ui_images/glr_7.jpeg";
import glr8 from "../../../ui_images/glr_8.jpeg";
import glr9 from "../../../ui_images/glr_9.jpeg";
import glr10 from "../../../ui_images/glr_10.jpeg";
import glr11 from "../../../ui_images/glr_11.jpeg";
import glr12 from "../../../ui_images/glr_12.jpeg";
import glr13 from "../../../ui_images/glr_13.jpg";
import glr14 from "../../../ui_images/glr_14.jpg";
import glr15 from "../../../ui_images/glr_15.jpg";
import glr16 from "../../../ui_images/glr_16.jpg";
import glr17 from "../../../ui_images/glr_17.jpg";
import glr18 from "../../../ui_images/glr_18.jpeg";
import glr19 from "../../../ui_images/glr_19.jpg";
import glr20 from "../../../ui_images/glr_20.jpg";
import glr21 from "../../../ui_images/glr_21.jpg";
import glr22 from "../../../ui_images/glr_22.jpg";

// Local video and poster imports
import glrVideo1 from "../../../ui_images/glr_video_1.mp4";
import glrVideo2 from "../../../ui_images/glr_video_2.mp4";
import glrVideo1Poster from "../../../ui_images/glr_video_1_poster.jpg";
import glrVideo2Poster from "../../../ui_images/glr_video_2_poster.jpg";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  url: string; // Thumbnail for video, or image src
  alt: string;
  category: string;
  videoUrl?: string; // Optional, only for videos
  spanClass?: string; // CSS Grid span classes
}

interface BentoGalleryProps {
  limit?: number;
}

export default function BentoGallery({ limit }: BentoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: GalleryItem[] = [
    // --- Homepage preview items (Items 1 to 6) ---
    {
      id: "gal-1",
      type: "image",
      url: glr1,
      alt: "Professional dog grooming session",
      category: "Grooming",
      spanClass: "col-span-2 row-span-2",
    },
    {
      id: "vid-local-1",
      type: "video",
      url: glrVideo1Poster,
      videoUrl: glrVideo1,
      alt: "Luxury Retriever styling and trimming",
      category: "Grooming Video",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-13",
      type: "image",
      url: glr13,
      alt: "Precision scissor styling session",
      category: "Styling",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "vid-local-2",
      type: "video",
      url: glrVideo2Poster,
      videoUrl: glrVideo2,
      alt: "Happy play sessions in our cage-free playground",
      category: "Playtime Video",
      spanClass: "col-span-2 row-span-2",
    },
    {
      id: "gal-14",
      type: "image",
      url: glr14,
      alt: "Cozy cage-free home boarding lounge",
      category: "Boarding",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-15",
      type: "image",
      url: glr15,
      alt: "Warm & affectionate grooming care",
      category: "Affectionate Care",
      spanClass: "col-span-1 row-span-1",
    },
    // --- Rest of gallery (About page) ---
    {
      id: "gal-2",
      type: "image",
      url: glr2,
      alt: "Soothing therapeutic pet bath & body massage",
      category: "Pet Spa",
      spanClass: "col-span-1 row-span-2",
    },
    {
      id: "gal-3",
      type: "image",
      url: glr3,
      alt: "Gentle cat undercoat de-shedding",
      category: "Cat Care",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-16",
      type: "image",
      url: glr16,
      alt: "Hypoallergenic warm-air blow dry session",
      category: "Drying",
      spanClass: "col-span-2 row-span-1",
    },
    {
      id: "gal-4",
      type: "image",
      url: glr4,
      alt: "Socialized dog playtime in clean boarding spaces",
      category: "Boarding",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-5",
      type: "image",
      url: glr5,
      alt: "Breed-standard poodle grooming & scissor styling",
      category: "Styling",
      spanClass: "col-span-1 row-span-2",
    },
    {
      id: "gal-17",
      type: "image",
      url: glr17,
      alt: "Interactive green playground for dogs",
      category: "Boarding Play",
      spanClass: "col-span-2 row-span-2",
    },
    {
      id: "gal-6",
      type: "image",
      url: glr6,
      alt: "Essential-oils infused relaxing pet spa",
      category: "Wellness Spa",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-7",
      type: "image",
      url: glr7,
      alt: "Sanitized bathing tub station with customized temperature control",
      category: "Hygiene",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-8",
      type: "image",
      url: glr8,
      alt: "Fluffy Pomeranian coat blow dry & fluffing",
      category: "Fluffing",
      spanClass: "col-span-2 row-span-1",
    },
    {
      id: "gal-9",
      type: "image",
      url: glr9,
      alt: "Bubble crown bath session for client dogs",
      category: "Creative Spa",
      spanClass: "col-span-1 row-span-2",
    },
    {
      id: "gal-18",
      type: "image",
      url: glr18,
      alt: "Stunning after-care visual finish",
      category: "After-Care",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-10",
      type: "image",
      url: glr10,
      alt: "Detail oriented pet focus checkup",
      category: "Inspection",
      spanClass: "col-span-2 row-span-1",
    },
    {
      id: "gal-11",
      type: "image",
      url: glr11,
      alt: "Happy Golden Retriever post transformation",
      category: "Transformation",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-12",
      type: "image",
      url: glr12,
      alt: "Clean cat nails and professional paw-pad care",
      category: "Paw Care",
      spanClass: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: "gal-19",
      type: "image",
      url: glr19,
      alt: "Custom breed haircut and styling",
      category: "Styling",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-20",
      type: "image",
      url: glr20,
      alt: "Playful pet socialization in boarding",
      category: "Boarding",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-21",
      type: "image",
      url: glr21,
      alt: "Relaxing therapeutic pet bubble bath",
      category: "Pet Spa",
      spanClass: "col-span-1 row-span-1",
    },
    {
      id: "gal-22",
      type: "image",
      url: glr22,
      alt: "Premium post-grooming look and care",
      category: "Transformation",
      spanClass: "col-span-1 row-span-1",
    },
    // --- Remote videos from previous portfolio ---
    // {
    //   id: "vid-1",
    //   type: "video",
    //   url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
    //   videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-groomer-brushing-a-golden-retriever-dog-42240-large.mp4",
    //   alt: "Luxury Golden Retriever Full Grooming & De-shedding Transformation",
    //   category: "Grooming",
    //   spanClass: "col-span-2 row-span-2",
    // },
    // {
    //   id: "vid-2",
    //   type: "video",
    //   url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    //   videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-dog-playing-on-the-grass-44244-large.mp4",
    //   alt: "Happy Pups Playing in our Green Playground",
    //   category: "Happy Pets",
    //   spanClass: "col-span-1 row-span-1",
    // },
    // {
    //   id: "vid-3",
    //   type: "video",
    //   url: "https://images.unsplash.com/photo-1513360309081-36f5e878fc9e?auto=format&fit=crop&q=80&w=600",
    //   videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dog-sleeping-on-a-couch-42239-large.mp4",
    //   alt: "Relaxed Nap Time in our Cozy Boarding Living Room",
    //   category: "Home Boarding",
    //   spanClass: "col-span-1 row-span-1",
    // },
    // {
    //   id: "vid-4",
    //   type: "video",
    //   url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600",
    //   videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dog-walking-into-a-pet-store-42245-large.mp4",
    //   alt: "Take a Tour of our Premium Sanitized Studio",
    //   category: "Studio Tour",
    //   spanClass: "col-span-2 row-span-1",
    // },
    // {
    //   id: "vid-5",
    //   type: "video",
    //   url: "https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&q=80&w=600",
    //   videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-playing-with-her-dog-at-home-42238-large.mp4",
    //   alt: "Rocky & Simba's Transformation Success Story",
    //   category: "Customer Stories",
    //   spanClass: "col-span-1 row-span-1",
    // },
  ];

  const displayedItems = limit ? items.slice(0, limit) : items;

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % displayedItems.length));
  }, [displayedItems.length]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + displayedItems.length) % displayedItems.length));
  }, [displayedItems.length]);

  // Esc key closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) handleNext();
      if (e.key === "ArrowLeft" && lightboxIndex !== null) handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="w-full">
      {/* Masonry Columns Gallery */}
      <div className="columns-2 md:columns-4 gap-4 md:gap-6 [column-fill:_balance]">
        {displayedItems.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              aria-label={`View ${item.type === "video" ? "video" : "image"} - ${item.alt}`}
              className="w-full group relative overflow-hidden rounded-[24px] border border-border/40 shadow-soft hover:shadow-lift transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer mb-4 md:mb-6 break-inside-avoid block"
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.videoUrl}
                    poster={item.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="bg-primary/90 text-white p-3 rounded-full shadow-lift scale-90 group-hover:scale-100 group-hover:bg-primary transition-all duration-300">
                      <Play className="h-5 w-5 fill-white stroke-none translate-x-0.5" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.url}
                  alt={item.alt}
                  title={item.alt}
                  className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Grid Hover Overlay and Icon */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none z-20 flex items-start justify-end p-4 opacity-0 group-hover:opacity-100">
                <div className="bg-background/90 text-primary p-2.5 rounded-full shadow-soft">
                  {item.type === "video" ? <Play className="h-5 w-5 fill-primary stroke-none" /> : <ZoomIn className="h-5 w-5" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-screen Lightbox with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop click close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setLightboxIndex(null)} />

            {/* Exit triggers */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/20 transition-all duration-200 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 md:left-8 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/20 transition-all duration-200 cursor-pointer"
              aria-label="Previous media"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 md:right-8 z-20 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 border border-white/20 transition-all duration-200 cursor-pointer"
              aria-label="Next media"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Lightbox Main Content Box */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-lift bg-black flex flex-col justify-center items-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {displayedItems[lightboxIndex].type === "video" ? (
                <video
                  src={displayedItems[lightboxIndex].videoUrl}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full max-h-[85vh] object-contain bg-black"
                />
              ) : (
                <img
                  src={displayedItems[lightboxIndex].url}
                  alt={displayedItems[lightboxIndex].alt}
                  className="w-full max-h-[85vh] object-contain bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
