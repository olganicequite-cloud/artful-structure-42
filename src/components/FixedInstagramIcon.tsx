import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/creative.project.new/?__d=undefined";

const FixedInstagramIcon = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 w-9 h-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/30 hover:text-foreground/60 hover:border-foreground/25 transition-all duration-300"
    >
      <Instagram size={15} strokeWidth={1.5} />
    </a>
  );
};

export default FixedInstagramIcon;
