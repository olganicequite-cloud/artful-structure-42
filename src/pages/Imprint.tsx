import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Imprint = () => {
  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Imprint" }]} />

          <FadeIn>
            <h1 className="text-editorial-title mb-10 md:mb-14">Imprint</h1>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="space-y-10 text-editorial-body leading-relaxed">
              <p className="text-editorial-caption">
                Information pursuant to applicable legal requirements for digital services in Germany.
              </p>

              <div>
                <h2 className="text-editorial-heading mb-3">Service Provider / Responsible for Content</h2>
                <p>
                  Olga Tarabukina<br />
                  Philippistraße 8<br />
                  14059 Berlin<br />
                  Germany
                </p>
                <p className="mt-3">
                  Phone: +49 176 23322581<br />
                  Email: <a href="mailto:olga@tarabukina.de" className="underline underline-offset-2 hover:text-foreground/70 transition-colors">olga@tarabukina.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Responsible for journalistic-editorial content, if applicable</h2>
                <p>
                  Olga Tarabukina<br />
                  Philippistraße 8<br />
                  14059 Berlin<br />
                  Germany
                </p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Dispute Resolution</h2>
                <p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Liability for Content</h2>
                <p>We continuously develop the content of this website and strive to provide accurate and up-to-date information. However, we cannot guarantee the correctness, completeness, or currentness of all content. If you notice problematic or unlawful content, please contact us and we will review it promptly.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Liability for Links</h2>
                <p>This website may contain links to external websites. We are not responsible for the content of linked external sites. If we become aware of any legal violations, we will remove such links without undue delay.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Copyright Notice</h2>
                <p>All content on this website, including images, photographs, texts, and graphics, is protected by copyright. Any reproduction, distribution, or other use requires prior written consent unless otherwise permitted by law.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Image Credits</h2>
                <p>Unless otherwise stated, the image rights belong to:<br />Olga Tarabukina</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Other Online Presence</h2>
                <p className="mb-2">This imprint also applies to the following online profiles:</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-editorial-caption mb-1">Instagram:</p>
                    <a href="https://www.instagram.com/olga_tarabukina_photography" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground/70 transition-colors block text-sm">instagram.com/olga_tarabukina_photography</a>
                    <a href="https://www.instagram.com/creative.project.new" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground/70 transition-colors block text-sm mt-1">instagram.com/creative.project.new</a>
                  </div>
                  <div>
                    <p className="text-editorial-caption mb-1">Facebook:</p>
                    <a href="https://www.facebook.com/olga.tarabukina.photography" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground/70 transition-colors block text-sm">facebook.com/olga.tarabukina.photography</a>
                  </div>
                  <div>
                    <p className="text-editorial-caption mb-1">LinkedIn:</p>
                    <a href="https://www.linkedin.com/in/olga-tarabukina" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground/70 transition-colors block text-sm">linkedin.com/in/olga-tarabukina</a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">Contact</h2>
                <p>
                  If you have any questions regarding this website, please contact:<br />
                  <a href="mailto:olga@tarabukina.de" className="underline underline-offset-2 hover:text-foreground/70 transition-colors">olga@tarabukina.de</a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Imprint;
