const INSTAGRAM_URL = "https://www.instagram.com/creative.project.new/?__d=undefined";

const FixedInstagramIcon = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 group"
    >
      <div className="flex items-center gap-0 overflow-hidden bg-background/80 backdrop-blur-sm border border-foreground/8 rounded-l-full py-2 pl-2.5 pr-2.5 group-hover:pr-4 transition-all duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <defs>
            <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none" />
          <circle cx="17.5" cy="6.5" r="1.25" fill="url(#ig-grad)" />
        </svg>
        <span className="max-w-0 group-hover:max-w-[80px] overflow-hidden whitespace-nowrap text-[11px] font-sans text-foreground/40 group-hover:text-foreground/60 transition-all duration-300 ml-0 group-hover:ml-2">
          Instagram
        </span>
      </div>
    </a>
  );
};

export default FixedInstagramIcon;
