const INSTAGRAM_URL = "https://www.instagram.com/creative.project.new/?__d=undefined";

const FixedInstagramIcon = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 w-9 h-9 items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
    </a>
  );
};

export default FixedInstagramIcon;
