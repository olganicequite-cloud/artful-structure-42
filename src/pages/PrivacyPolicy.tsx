import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const PrivacyPolicy = () => {
  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Privacy Policy" }]} />

          <FadeIn>
            <h1 className="text-editorial-title mb-3 md:mb-4">Privacy Policy</h1>
            <p className="text-editorial-caption mb-10 md:mb-14">Last updated: April 2026</p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="space-y-10 text-editorial-body leading-relaxed">
              <p>This Privacy Policy explains how personal data is collected and processed when you use this website.</p>

              <div>
                <h2 className="text-editorial-heading mb-3">1. Controller</h2>
                <p className="mb-3">The controller responsible for data processing on this website is:</p>
                <p>
                  Olga Tarabukina<br />
                  Philippistraße 8<br />
                  14059 Berlin<br />
                  Germany<br />
                  Email: <a href="mailto:olga@tarabukina.de" className="underline underline-offset-2 hover:text-foreground/70 transition-colors">olga@tarabukina.de</a><br />
                  Phone: +49 176 23322581
                </p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">2. General Information on Data Processing</h2>
                <p>We process personal data in accordance with applicable data protection law, in particular the General Data Protection Regulation (GDPR). Personal data means any information relating to an identified or identifiable natural person. The GDPR requires transparency about what data is collected, why it is collected, and on what legal basis it is processed.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">3. Accessing the Website</h2>
                <p className="mb-3">When you visit this website, certain technical data may be processed automatically by the hosting provider in order to display the website securely and reliably. This may include:</p>
                <ul className="list-none space-y-1 text-editorial-body mb-3">
                  <li>IP address</li>
                  <li>date and time of access</li>
                  <li>browser type and browser version</li>
                  <li>operating system</li>
                  <li>referrer URL</li>
                  <li>requested pages/files</li>
                </ul>
                <p className="mb-2">This processing is necessary to ensure the secure operation of the website.</p>
                <p className="text-editorial-caption">Legal basis: Art. 6(1)(f) GDPR (legitimate interest in secure and stable website operation).</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">4. Contact Form / Contact by Email</h2>
                <p className="mb-3">If you contact us via the contact form or by email, we process the data you provide, for example:</p>
                <ul className="list-none space-y-1 text-editorial-body mb-3">
                  <li>name</li>
                  <li>email address</li>
                  <li>subject</li>
                  <li>message content</li>
                  <li>any other information you choose to submit</li>
                </ul>
                <p className="mb-2">We process this data solely for the purpose of handling your inquiry.</p>
                <div className="text-editorial-caption space-y-1">
                  <p>Legal basis:</p>
                  <p>Art. 6(1)(b) GDPR, if your inquiry relates to pre-contractual measures or participation inquiries</p>
                  <p>Art. 6(1)(f) GDPR, for general communication and request handling</p>
                </div>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">5. Cookies</h2>
                <p className="mb-3">This website may use technically necessary cookies to ensure core functionality. If additional cookies or tracking technologies are used later, they must only be activated in accordance with the applicable legal requirements and, where necessary, on the basis of consent.</p>
                <div className="text-editorial-caption space-y-1">
                  <p>Legal basis:</p>
                  <p>Art. 6(1)(f) GDPR for technically necessary functions</p>
                  <p>Art. 6(1)(a) GDPR where consent is required</p>
                </div>
                <p className="mt-3">If a cookie banner is used, it should allow users to manage their settings accordingly.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">6. Social Media and External Links</h2>
                <p>This website may contain links to external services such as Instagram, Facebook, or LinkedIn. When you click such links, you leave this website. The respective provider is then responsible for any data processing on their platform.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">7. Hosting</h2>
                <p className="mb-3">The hosting provider processes technical data necessary to operate the website securely and efficiently.</p>
                <p>If a data processing agreement is required with the hosting provider, it should be concluded accordingly.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">8. Storage Period</h2>
                <p className="mb-3">We retain personal data only for as long as necessary for the relevant purpose, or as long as legal retention obligations require.</p>
                <p>Contact inquiries are generally stored only as long as necessary to process and document the communication, unless statutory retention obligations apply.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">9. Your Rights</h2>
                <p className="mb-3">Under the GDPR, you have the following rights, subject to the applicable legal requirements:</p>
                <ul className="list-none space-y-1 text-editorial-body mb-3">
                  <li>right of access</li>
                  <li>right to rectification</li>
                  <li>right to erasure</li>
                  <li>right to restriction of processing</li>
                  <li>right to data portability</li>
                  <li>right to object</li>
                  <li>right to withdraw consent at any time, where processing is based on consent</li>
                </ul>
                <p>You also have the right to lodge a complaint with a competent supervisory authority.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">10. Data Security</h2>
                <p>We take appropriate technical and organizational measures to protect personal data against loss, misuse, unauthorized access, disclosure, or alteration.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">11. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. The current version will always be published on this website.</p>
              </div>

              <div>
                <h2 className="text-editorial-heading mb-3">12. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy or the processing of your personal data, please contact:<br /><br />
                  Olga Tarabukina<br />
                  Philippistraße 8<br />
                  14059 Berlin<br />
                  Germany<br />
                  Email: <a href="mailto:olga@tarabukina.de" className="underline underline-offset-2 hover:text-foreground/70 transition-colors">olga@tarabukina.de</a><br />
                  Phone: +49 176 23322581
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default PrivacyPolicy;
