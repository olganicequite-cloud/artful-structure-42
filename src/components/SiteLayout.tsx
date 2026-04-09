import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import logo from "@/assets/logo.png";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const footerNav = [
  { path: "/", label: "Home" },
  { path: "/exhibition", label: "Exhibition" },
  { path: "/artists", label: "Artist Team" },
  { path: "/projects", label: "Projects" },
];

const footerInfo = [
  { path: "/Creative_Project_NEW_participant_info.pdf", label: "Download", isExternal: true },
  { path: "/contact", label: "Contact" },
];

const footerLegal = [
  { path: "/impressum", label: "Impressum" },
  { path: "/privacy", label: "Privacy Policy" },
];

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-14 md:pt-16">
        {children}
      </main>
      <footer className="page-padding pt-16 pb-10 mt-8 border-t-2 border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Creative Project NEW" className="h-5 w-auto" />
              </Link>
              <p className="text-editorial-caption mt-2">Berlin, Germany</p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Navigation</p>
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

            {/* Information */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Information</p>
              <div className="flex flex-col gap-2.5">
                {footerInfo.map((item) => (
                  'isExternal' in item ? (
                    <a
                      key={item.label}
                      href={item.path}
                      download
                      className="text-editorial-caption hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="text-editorial-caption hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">Legal</p>
              <div className="flex flex-col gap-2.5">
                {footerLegal.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-editorial-caption hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/8 pt-6">
            <p className="text-editorial-caption text-foreground/40">
              © 2025–2026 Creative Project NEW
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
