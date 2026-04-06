import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [mobileCurrent, setMobileCurrent] = React.useState(0);
  const [desktopCurrent, setDesktopCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setMobileCurrent(emblaApi.selectedScrollSnap());
    const onSelect = () => setMobileCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  if (images.length === 0) return null;

  const total = images.length;

  // Single image — still uses stable frame
  if (images.length === 1) {
    return (
      <div className="w-full aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile swiper — fixed frame */}
      <div className="md:hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="flex-none w-full aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
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
        {total > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === mobileCurrent ? "bg-foreground" : "bg-border"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop controlled viewer — fixed frame */}
      <div className="hidden md:block">
        <div className="relative w-full aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
          <img
            src={images[desktopCurrent].src}
            alt={images[desktopCurrent].alt}
            className="max-w-full max-h-full object-contain transition-opacity duration-300"
            loading="lazy"
          />
          {total > 1 && (
            <>
              <button
                onClick={() => setDesktopCurrent(desktopCurrent > 0 ? desktopCurrent - 1 : total - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/60 hover:bg-background/90 rounded-full text-foreground transition-all text-lg"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => setDesktopCurrent(desktopCurrent < total - 1 ? desktopCurrent + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/60 hover:bg-background/90 rounded-full text-foreground transition-all text-lg"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>
        {total > 1 && (
          <p className="text-editorial-caption text-center mt-2">
            {desktopCurrent + 1} / {total}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
