import { GraduationCap, Quote, Target, Trophy } from "lucide-react";
import { achievements, aspirations, timeline } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="My Journey"
          description="My journey in technology started with curiosity about how websites, applications, and software work. Over time, this curiosity transformed into a passion for programming and problem-solving. Currently, I am pursuing a Bachelor of Technology in Computer Science and Engineering. My goal is to continuously improve my technical skills and build impactful solutions that solve real-world problems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-5 w-5 text-primary" /> Educational timeline
            </h3>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {timeline.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {item.year}
                  </p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1} className="glass rounded-3xl p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Target className="h-5 w-5 text-primary" /> Career aspirations
              </h3>
              <ul className="mt-4 space-y-3">
                {aspirations.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="glass rounded-3xl bg-primary/10 p-6 sm:p-8">
              <Quote className="h-8 w-8 text-primary" />
              <p className="mt-3 font-display text-xl font-semibold leading-snug">
                "Stay curious, keep building — every small program you finish makes the next one
                easier."
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Trophy className="h-5 w-5 text-accent" /> Personal achievements
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
