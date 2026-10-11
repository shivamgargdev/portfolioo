import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

type FormErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    setIsSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {};

    if (!formValues.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formValues.subject.trim()) {
      errors.subject = "Please enter a subject.";
    }
    if (formValues.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success State
    setIsSent(true);

    // Trigger user's mail client as convenience
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formValues.subject,
    )}&body=${encodeURIComponent(
      `From: ${formValues.name} (${formValues.email})\n\nMessage:\n${formValues.message}`,
    )}`;

    window.open(mailtoUrl, "_blank");
    setFormValues(initialForm);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Connect"
          title="Get In Touch"
          description="Have an internship opportunity, project collaboration, or question? Feel free to reach out!"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal className="glass rounded-3xl p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Direct Contact
              </div>

              <h3 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                Let's talk about tech & opportunities
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                I am actively seeking software engineering internships, collaborative student
                projects, and open-source contributions.
              </p>

              <div className="mt-6 space-y-4">
                {/* Email Card with Copy Feature */}
                <div className="glass rounded-2xl p-4 flex items-center justify-between gap-3 border border-primary/20">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="truncate text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border text-foreground transition-all hover:bg-secondary hover:scale-105"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group rounded-2xl p-4 flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 hover:border-[#0a66c2]/50"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0a66c2]/15 text-[#0a66c2] transition-colors group-hover:bg-[#0a66c2] group-hover:text-white">
                      <Linkedin className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        LinkedIn Profile
                      </p>
                      <p className="truncate text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        linkedin.com/in/shivam-garg
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                {/* GitHub Card */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass group rounded-2xl p-4 flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Github className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        GitHub Profile
                      </p>
                      <p className="truncate text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        github.com/shivamgargdev
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                {/* Location & College Badge */}
                <div className="glass rounded-2xl p-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Location & College
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">
                      {profile.location} • {profile.college}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">Send a Direct Message</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Fill in the details below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold text-foreground">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formValues.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-destructive">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-foreground">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formValues.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-destructive">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formValues.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Internship opportunity / Collaboration inquiry"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-destructive">{formErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formValues.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Hi Shivam, I would love to connect with you regarding..."
                    className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-destructive">{formErrors.message}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:scale-105"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFormValues(initialForm);
                      setFormErrors({});
                      setIsSent(false);
                    }}
                    className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {isSent && (
                  <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>
                      Thank you! Opening your email client to send your message to{" "}
                      <strong>{profile.email}</strong>.
                    </span>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
