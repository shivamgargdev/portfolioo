import { BrainCircuit, Code2, Cpu, Rocket, Sparkles, Terminal, CheckCircle } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Fascinated by machine learning algorithms, modern Generative AI models, and real-world AI applications that empower people.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Crafting performant, visually clean, and accessible web experiences using React, Vite, Tailwind CSS, and TypeScript.",
    color: "text-accent bg-accent/15",
  },
  {
    icon: Rocket,
    title: "Digital Productivity",
    description:
      "Passionate about building software tools, study assistants, and automated systems that boost student focus and workflow efficiency.",
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: Terminal,
    title: "Core Computer Science",
    description:
      "Strengthening fundamentals in data structures, algorithms, and object-oriented programming to build scalable solutions.",
    color: "text-blue-500 bg-blue-500/10",
  },
];

const pillars = [
  "Eager learner adopting modern frameworks & AI tools",
  "Focus on building hands-on, practical software projects",
  "Strong belief in clean UI, accessibility & responsive design",
  "Active participant in technical student communities",
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Driven by Innovation, Defined by Practice"
          description="A glimpse into my background, mindset, and technical pursuits as a computer science undergraduate."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-5">
            <Reveal className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Sparkles className="h-4 w-4" />
                <span>Student & Developer Story</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Bridging academic theory with practical tech innovation.
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {profile.aboutMe}
              </p>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Currently pursuing my B.Tech at{" "}
                <strong className="text-foreground">{profile.college}</strong>, I believe the best
                way to master computing is through hands-on creation. Whether it's experimenting
                with interactive web interfaces or exploring how Generative AI can automate
                workflows, I thrive on turning ideas into functional software.
              </p>

              {/* Core Pillars */}
              <div className="mt-6 pt-6 border-t border-glass-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What drives my work:
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* University & Location Quick Callout */}
            <Reveal
              delay={0.1}
              className="glass rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-primary/5 via-accent/5 to-transparent"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  University & Degree
                </p>
                <p className="text-sm font-bold text-foreground">
                  B.Tech in Computer Science • {profile.college}
                </p>
              </div>
              <a
                href="#education"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
              >
                View Education Details →
              </a>
            </Reveal>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={0.1 * (index + 1)}>
                <div className="glass group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
