import { Github, Linkedin, Mail, Sparkles, ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-md pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display text-2xl font-bold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                {profile.name}
                <span className="text-primary">.</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              B.Tech Student at <strong className="text-foreground">{profile.college}</strong>.
              Passionate about artificial intelligence, modern web development, and digital
              productivity.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-foreground hover:border-foreground/30 transition-all"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
              Portfolio Navigation
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Action */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
              Get in Touch
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Open to internship opportunities, freelance inquiries, and tech collaborations.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="h-3.5 w-3.5" /> {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back-to-Top */}
        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Built with React, Vite & Tailwind CSS</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
