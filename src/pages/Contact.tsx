import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import FadeIn from "@/components/FadeIn";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { toast } from "@/hooks/use-toast";

const reasons = ["Participation", "Collaboration", "General Inquiry"] as const;

const Contact = () => {
  const [searchParams] = useSearchParams();
  const presetReason = searchParams.get("reason") || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: reasons.includes(presetReason as any) ? presetReason : "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSending(true);
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason || "—"}\nSubject: ${form.subject}\n\n${form.message}`;
    window.location.href = `mailto:olga.nicequite@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(mailtoBody)}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: "Opening your email client…", description: "If it doesn't open, please email olga.nicequite@gmail.com directly." });
      setForm({ name: "", email: "", reason: "", subject: "", message: "" });
    }, 800);
  };

  const inputClass =
    "w-full bg-transparent border-b border-foreground/15 focus:border-foreground/40 outline-none py-2.5 font-sans text-sm text-foreground placeholder:text-foreground/30 transition-colors";

  return (
    <SiteLayout>
      <section className="section-spacing page-padding">
        <div className="max-w-2xl mx-auto">
          <PageBreadcrumb items={[{ label: "Contact" }]} />

          <FadeIn>
            <p className="text-editorial-detail mb-4">Contact</p>
            <h1 className="text-editorial-title mb-8 md:mb-10">Get in Touch</h1>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-editorial-body leading-relaxed mb-12 md:mb-16">
              If you are interested in becoming part of a future cohort of Creative Project NEW,
              please use the form below. We welcome thoughtful inquiries regarding participation,
              collaboration, and project-related questions.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/50 mb-1 block">
                  Full Name <span className="text-foreground/30">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                  maxLength={100}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/50 mb-1 block">
                  Email <span className="text-foreground/30">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                  maxLength={255}
                  required
                />
              </div>

              {/* Reason for Contact */}
              <div>
                <label className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/50 mb-1 block">
                  Reason for Contact
                </label>
                <select
                  value={form.reason}
                  onChange={(e) => update("reason", e.target.value)}
                  className={`${inputClass} bg-background appearance-none cursor-pointer`}
                >
                  <option value="">— Select (optional)</option>
                  {reasons.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/50 mb-1 block">
                  Subject <span className="text-foreground/30">*</span>
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={inputClass}
                  maxLength={200}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-sans text-xs tracking-[0.15em] uppercase text-foreground/50 mb-1 block">
                  Message <span className="text-foreground/30">*</span>
                </label>
                {form.reason === "Participation" && (
                  <p className="font-sans text-[11px] text-foreground/40 leading-relaxed mb-3">
                    Please introduce yourself briefly: who you are, what kind of artistic practice you have, and include your Instagram or portfolio link if available. This is only a first contact for a possible further conversation, not a final application.
                  </p>
                )}
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${inputClass} resize-none min-h-[140px]`}
                  placeholder={form.reason === "Participation" ? "Briefly introduce yourself, describe your practice, and add your Instagram or portfolio link." : undefined}
                  maxLength={2000}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="font-sans text-xs tracking-[0.2em] uppercase border border-foreground/20 hover:border-foreground/50 px-8 py-3 text-foreground/70 hover:text-foreground transition-colors disabled:opacity-40"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
