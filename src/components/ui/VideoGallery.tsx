import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

const videos: VideoItem[] = [
  {
    id: "vid-1",
    title: "Luxury Golden Retriever Full Grooming & De-shedding Transformation",
    category: "Grooming",
    thumbnail: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-groomer-brushing-a-golden-retriever-dog-42240-large.mp4"
  },
  {
    id: "vid-2",
    title: "Happy Pups Playing in our Green Playground",
    category: "Happy Pets",
    thumbnail: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-little-dog-playing-on-the-grass-44244-large.mp4"
  },
  {
    id: "vid-3",
    title: "Relaxed Nap Time in our Cozy Boarding Living Room",
    category: "Home Boarding",
    thumbnail: "https://images.unsplash.com/photo-1513360309081-36f5e878fc9e?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dog-sleeping-on-a-couch-42239-large.mp4"
  },
  {
    id: "vid-4",
    title: "Take a Tour of our Premium Sanitized Studio",
    category: "Studio Tour",
    thumbnail: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dog-walking-into-a-pet-store-42245-large.mp4"
  },
  {
    id: "vid-5",
    title: "Rocky & Simba's Transformation Success Story",
    category: "Customer Stories",
    thumbnail: "https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-playing-with-her-dog-at-home-42238-large.mp4"
  }
];

export default function VideoGallery() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    const videoSchemas = videos.map(video => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": `${video.title} - A professional pet care and grooming video showcasing the services at Petfocuz studio in Thrissur, Kerala.`,
      "thumbnailUrl": video.thumbnail,
      "uploadDate": "2026-06-15T08:00:00Z",
      "contentUrl": video.videoUrl,
      "embedUrl": video.videoUrl
    }));

    const script = document.createElement("script");
    script.setAttribute("id", "json-ld-video-schema");
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(videoSchemas);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("json-ld-video-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
        {videos.map((video, index) => {
          const isLarge = index === 0;
          return (
            <div
              key={video.id}
              onClick={() => setActiveVideoUrl(video.videoUrl)}
              className={`group relative overflow-hidden rounded-[24px] shadow-soft cursor-pointer hover:shadow-lift border border-border/40 transition-all duration-300 ${
                isLarge
                  ? "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[460px]"
                  : "col-span-1 row-span-1"
              }`}
            >
              {/* Video Tag playing on hover */}
              <video
                src={video.videoUrl}
                poster={video.thumbnail}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-300" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white p-4 md:p-5 rounded-full shadow-lift scale-90 group-hover:scale-100 group-hover:bg-primary-dark transition-all duration-300 flex items-center justify-center">
                  <Play className="h-6 w-6 fill-white stroke-none translate-x-0.5" />
                </div>
              </div>

              {/* Copy / Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1.5 pointer-events-none text-left">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-primary font-sans bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                  {video.category}
                </span>
                <h3 className={`font-display font-bold leading-tight ${isLarge ? "text-xl md:text-2xl" : "text-sm sm:text-base"}`}>
                  {video.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Video Player Modal */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideoUrl(null)} />

          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black shadow-lift z-10 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 z-20 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer border border-white/20"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Local Video Tag */}
            <video
              src={activeVideoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
