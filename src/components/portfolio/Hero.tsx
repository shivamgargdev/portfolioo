import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Sparkles,
  Github,
} from "lucide-react";
import { profile, statHighlights, typingRoles } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = text === word;
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (done) setDeleting(true);
          else setText(word.slice(0, text.length + 1));
        } else if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(word.slice(0, text.length - 1));
        }
      },
      deleting ? 45 : done ? 1500 : 85,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(typingRoles);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Background Glow Accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-36 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "-3.5s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Left Column: Hero Content */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Available for Internships & Projects
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1]">
              Hi, I'm <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>

            <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-foreground/90 sm:text-xl">
              <GraduationCap className="h-5 w-5 text-primary shrink-0" />
              <span>{profile.tagline}</span>
            </div>

            {/* Dynamic Animated Typing Role */}
            <div className="mt-4 flex items-center gap-2 font-display text-xl font-semibold sm:text-2xl text-accent">
              <Sparkles className="h-5 w-5 text-accent shrink-0" />
              <span>{typed}</span>
              <span className="ml-0.5 animate-blink text-primary">|</span>
            </div>

            {/* Short Professional Introduction */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.aboutMe}
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary/40 hover:scale-[1.02]"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4 text-primary" /> Contact Me
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground hover:scale-[1.02]"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Reveal>

          {/* Counter / Highlight Stats */}
          <Reveal delay={0.25} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {statHighlights.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-4 text-left transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="font-display text-2xl font-bold text-foreground">
                  <span className="text-primary">{item.value}</span>
                  {item.suffix}
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right Column: Interactive Portrait Card */}
        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm"
          >
            {/* Ambient Backlight */}
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 to-accent/40 opacity-70 blur-xl transition-all duration-500" />

            <div className="relative glass rounded-[2rem] p-3 shadow-2xl">
              <img
                src={profile.portrait}
                alt="Shivam Garg portrait"
                width={800}
                height={620}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-inner"
              />

              {/* Floating Badge: Location */}
              <div className="glass absolute -bottom-5 -left-3 rounded-2xl p-3.5 shadow-xl sm:left-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/15 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="text-xs font-bold text-foreground">{profile.location}</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge: University */}
              <div className="glass absolute -top-4 -right-3 rounded-2xl p-3.5 shadow-xl sm:right-2">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent/20 text-accent">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      University
                    </p>
                    <p className="text-xs font-bold text-foreground">{profile.college}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
