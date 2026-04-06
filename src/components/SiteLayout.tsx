import SiteHeader from "./SiteHeader";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-14 md:pt-16">
        {children}
      </main>
      <footer className="page-padding py-10 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-editorial-caption">
            © 2025–2026 Creative Project NEW
          </p>
          <p className="text-editorial-caption">
            Berlin, Germany
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
