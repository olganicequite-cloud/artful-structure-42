import { useParams, Navigate, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { getPartnerBySlug } from "@/lib/partnerData";

const PartnerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const partner = slug ? getPartnerBySlug(slug) : undefined;

  if (!partner) return <Navigate to="/artists" replace />;

  return (
    <SiteLayout>
      <Seo
        title={`${partner.name} — Cooperation Partner, Creative Project NEW`}
        description={partner.shortDescription.slice(0, 158)}
        path={`/partners/${partner.slug}`}
      />
      <section className="section-spacing page-padding">
        <div className="max-w-3xl mx-auto">
          <PageBreadcrumb
            items={[
              { label: "Artist Team", to: "/artists" },
              { label: partner.name },
            ]}
          />

          {/* Intro */}
          <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start mb-12 md:mb-16">
            <FadeIn>
              <div
                className={`w-full aspect-[4/5] overflow-hidden ${
                  partner.isLogo
                    ? `${partner.logoBg === "white" ? "bg-white" : "bg-black"} flex items-center justify-center`
                    : "bg-secondary"
                }`}
              >
                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={
                      partner.isLogo
                        ? "max-w-[70%] max-h-[70%] object-contain"
                        : "w-full h-full object-cover"
                    }
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-editorial-caption text-foreground/30">
                      {partner.name}
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-editorial-detail mb-2">Cooperation Partner</p>
              <h1 className="text-editorial-title mb-4">{partner.name}</h1>
              <p className="text-editorial-caption text-foreground/60 mb-4">
                {partner.role}
              </p>
              {partner.professionalLine && (
                <p className="text-editorial-body mb-4">{partner.professionalLine}</p>
              )}
              {partner.cooperation && (
                <p className="text-editorial-body mb-1">
                  <span className="text-foreground/50">Cooperation: </span>
                  {partner.cooperation}
                </p>
              )}
              {partner.eventDate && (
                <p className="text-editorial-caption text-foreground/60">
                  {partner.eventDate}
                </p>
              )}
            </FadeIn>
          </div>

          {/* Featured cooperation (Palmira) */}
          {partner.featuredTitle && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-2">Featured Cooperation</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-2">
                {partner.featuredTitle}
              </h2>
              {partner.featuredSubtitle && (
                <p className="text-editorial-body text-foreground/70 mb-2">
                  {partner.featuredSubtitle}
                </p>
              )}
              {partner.hostedBy && (
                <p className="text-editorial-caption text-foreground/50 mb-12 md:mb-16">
                  {partner.hostedBy}
                </p>
              )}
            </FadeIn>
          )}

          {/* Biography */}
          {partner.bio && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-2">Biography</p>
              <div className="mb-12 md:mb-16 space-y-4">
                {partner.bio.split("\n\n").map((p, i) => (
                  <p key={i} className="text-editorial-body leading-relaxed whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Description (partners without full bio) */}
          {!partner.bio && partner.shortDescription && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-2">About</p>
              <p className="text-editorial-body leading-relaxed mb-12 md:mb-16">
                {partner.shortDescription}
              </p>
            </FadeIn>
          )}

          {/* Links */}
          {(partner.internalUrl || partner.externalUrl) && (
            <FadeIn>
              <div className="gallery-divider mb-10" />
              <p className="text-editorial-detail mb-3">Links</p>
              <div className="flex flex-wrap gap-3">
                {partner.internalUrl && (
                  <Link
                    to={partner.internalUrl}
                    className="inline-block font-sans text-sm tracking-wider uppercase border border-foreground/20 hover:border-foreground/50 px-6 py-3 transition-colors hover:bg-foreground/5"
                  >
                    {partner.internalLabel || "View →"}
                  </Link>
                )}
                {partner.externalUrl && (
                  <a
                    href={partner.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-sans text-sm tracking-wider uppercase border border-foreground/20 hover:border-foreground/50 px-6 py-3 transition-colors hover:bg-foreground/5"
                  >
                    {partner.externalLabel || "Visit ↗"}
                  </a>
                )}
              </div>
            </FadeIn>
          )}

          <FadeIn>
            <div className="mt-16">
              <Link
                to="/artists"
                className="text-editorial-caption underline-offset-4 hover:underline text-foreground/70 hover:text-foreground transition-colors"
              >
                ← Back to Artist Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PartnerDetail;