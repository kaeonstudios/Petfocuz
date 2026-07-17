import { useState, useRef } from "react";
import { Star, Grid, Sliders, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";
import type { ReviewItem } from "@/lib/site-data";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";

// Google G logo inline SVG
const GoogleLogo = () => (
  <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.82 2.94c.87-2.6 3.3-4.62 6.16-4.62z" fill="#EA4335"/>
  </svg>
);

export default function ReviewsSection() {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const swiperRef = useRef<SwiperType | null>(null);

  const renderReviewCard = (review: ReviewItem) => {
    // Get initial letter of name
    const initial = review.name.charAt(0);

    return (
      <div
        key={review.id}
        className="group bg-card border border-border p-6 rounded-3xl shadow-soft hover-lift hover:shadow-lift transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]"
      >
        <div>
          {/* Header row: Star ratings and Source */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 stroke-none" />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <GoogleLogo />
              <span className="font-semibold tracking-wide font-sans">{review.source}</span>
            </div>
          </div>

          {/* Review Text */}
          <p className="font-sans font-normal text-sm leading-relaxed text-muted-foreground mb-6 italic">
            "{review.text}"
          </p>
        </div>

        {/* User profile row */}
        <div className="flex items-center gap-3 border-t border-border/50 pt-4">
          <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center font-sans font-bold text-sm ${review.avatarBg}`}>
            {initial}
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-semibold text-foreground text-sm">
              {review.name}
            </span>
            <span className="font-sans text-xs text-muted-foreground">
              {review.petName ? `${review.petName} (${review.petBreed})` : review.petBreed} · <span className="text-[10px]">{review.date}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* View Mode Toggle Switch */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-primary font-sans">
            TESTIMONIALS
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-1">
            Loved By Pets & Parents.
          </h2>
        </div>
        <div className="flex items-center bg-surface border border-border rounded-full p-1 shadow-soft">
          <button
            onClick={() => setViewMode("carousel")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all ${
              viewMode === "carousel"
                ? "bg-primary text-background shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sliders className="h-3.5 w-3.5" />
            Carousel
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all ${
              viewMode === "grid"
                ? "bg-primary text-background shadow-soft"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Grid className="h-3.5 w-3.5" />
            Grid
          </button>
        </div>
      </div>

      {/* Main Reviews Container */}
      {viewMode === "carousel" ? (
        <div className="relative group">
          {/* Swiper Slider */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                {renderReviewCard(review)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Controls */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary shadow-soft transition-all duration-200 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-background hover:border-primary shadow-soft transition-all duration-200 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Responsive Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
          {REVIEWS.map((review) => renderReviewCard(review))}
        </div>
      )}
    </div>
  );
}
