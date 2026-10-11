import { Brain, Code2, Compass, Music4, Newspaper, Volleyball } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hobbies } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  volleyball: Volleyball,
  code: Code2,
  newspaper: Newspaper,
  compass: Compass,
  brain: Brain,
  music: Music4,
};

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Beyond Code"
          title="Hobbies & Interests"
          description="The things that keep me energised outside lectures and assignments."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, i) => {
            const Icon = icons[hobby.icon] ?? Code2;
            return (
              <Reveal key={hobby.title} delay={i * 0.06}>
                <div className="group glass h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{hobby.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
