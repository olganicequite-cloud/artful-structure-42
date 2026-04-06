import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  aspectRatio?: string;
}

const ImageGallery = ({ images, aspectRatio = "aspect-square" }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className={`w-full ${aspectRatio} overflow-hidden bg-secondary`}>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile swiper */}
      <div className="md:hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className={`flex-none w-full ${aspectRatio}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain bg-secondary"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {count > 1 && (
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
        )}
      </div>

      {/* Desktop controlled viewer */}
      <div className="hidden md:block">
        <div className={`relative w-full ${aspectRatio} overflow-hidden bg-secondary`}>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-contain transition-opacity duration-300"
            loading="lazy"
          />
          {count > 1 && (
            <>
              <button
                onClick={() => {
                  const prev = current > 0 ? current - 1 : count - 1;
                  setCurrent(prev);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => {
                  const next = current < count - 1 ? current + 1 : 0;
                  setCurrent(next);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>
        {count > 1 && (
          <p className="text-editorial-caption text-center mt-2">
            {current + 1} / {count}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
