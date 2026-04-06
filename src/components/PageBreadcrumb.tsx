import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

const PageBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <FadeIn>
    <nav aria-label="breadcrumb" className="mb-8 md:mb-10">
      <ol className="flex flex-wrap items-center gap-1.5 text-editorial-caption">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-foreground/25">/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </FadeIn>
);

export default PageBreadcrumb;
