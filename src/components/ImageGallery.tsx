import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const total = images.length;
  if (total === 0) return null;

  const goTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
    else setCurrent(index);
  };

  const prev = () => {
    const next = current > 0 ? current - 1 : total - 1;
    goTo(next);
  };

  const next = () => {
    const n = current < total - 1 ? current + 1 : 0;
    goTo(n);
  };

  // Single image — stable frame, no controls
  if (total === 1) {
    return (
      <div className="w-full">
        <div className="w-full aspect-[4/5] bg-secondary/30 flex items-center justify-center overflow-hidden rounded-sm">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile: swipeable inside fixed frame */}
      <div className="md:hidden">
        <div ref={emblaRef} className="overflow-hidden rounded-sm">
          <div className="flex">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex-none w-full aspect-[4/5] bg-secondary/30 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? "bg-foreground" : "bg-border"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: controlled viewer with close arrows */}
      <div className="hidden md:block">
        <div className="relative group">
          {/* Stable viewer frame */}
          <div className="w-full aspect-[4/5] bg-secondary/30 flex items-center justify-center overflow-hidden rounded-sm">
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="max-w-full max-h-full object-contain transition-opacity duration-300"
              key={current}
              loading="lazy"
            />
          </div>

          {/* Left arrow — hugging the frame */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-background/70 hover:bg-background/90 rounded-full text-foreground/70 hover:text-foreground transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right arrow — hugging the frame */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-background/70 hover:bg-background/90 rounded-full text-foreground/70 hover:text-foreground transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle counter */}
        <p className="text-xs text-muted-foreground text-center mt-2 tracking-wide">
          {current + 1} / {total}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
