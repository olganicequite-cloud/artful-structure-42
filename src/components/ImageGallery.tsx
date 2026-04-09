import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [current, setCurrent] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  if (images.length === 0) return null;

  const total = images.length;

  // Single image
  if (total === 1) {
    return (
      <>
        <div
          className="w-full aspect-[4/5] overflow-hidden cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {lightboxOpen && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onChange={setLightboxIndex}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="w-full">
        {/* Mobile: swipe gallery with cropped images */}
        <div className="md:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-none w-full aspect-[4/5] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
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
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop: cropped image viewer */}
        <div className="hidden md:block">
          <div
            className="relative w-full aspect-[4/5] overflow-hidden cursor-pointer"
            onClick={() => openLightbox(current)}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
          </div>
          {total > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
};

/* Fullscreen lightbox for uncropped image viewing */
const Lightbox = ({
  images,
  index,
  onClose,
  onChange,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) => {
  const total = images.length;

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < total - 1) onChange(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onChange(index - 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [index, total, onClose, onChange]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center"
        aria-label="Close"
      >
        ✕
      </button>

      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {total > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onChange(i); }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
