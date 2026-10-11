import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Sparkles } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export function Nav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "#home";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            current = link.href;
          }
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/5 py-2.5" : "bg-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground transition-transform hover:scale-105"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            {profile.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 rounded-full border border-glass-border bg-surface/80 p-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Icons & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all duration-200 hover:bg-secondary hover:scale-105"
          >
            {dark ? (
              <Sun className="h-4 w-4 text-accent" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open ? (
        <div className="glass border-t border-glass-border py-4 transition-all duration-300 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs opacity-60">→</span>
                  </a>
                </li>
              );
            })}
            <li className="mt-2 pt-2 border-t border-glass-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
