import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const footerNav = [
  { path: "/", label: "Home" },
  { path: "/exhibition", label: "Exhibition" },
  { path: "/artists", label: "Artist Team" },
  { path: "/projects", label: "Projects" },
];

const footerLegal = [
  { path: "/impressum", label: "Impressum" },
];

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-14 md:pt-16">
        {children}
      </main>
      <footer className="page-padding pt-12 pb-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="font-serif text-lg font-light tracking-tight text-foreground">
                Creative Project NEW
              </Link>
              <p className="text-editorial-caption mt-2">Berlin, Germany</p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-editorial-detail mb-4">Navigation</p>
              <div className="flex flex-col gap-2.5">
                {footerNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-editorial-caption hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="text-editorial-detail mb-4">Information</p>
              <div className="flex flex-col gap-2.5">
                {footerLegal.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-editorial-caption hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="gallery-divider mb-6" />
          <p className="text-editorial-caption">
            © 2025–2026 Creative Project NEW
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
