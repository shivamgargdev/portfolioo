import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Layers,
  Code,
  Brain,
  Database,
  Cpu,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { educationData } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const areaIcons: Record<string, LucideIcon> = {
  "Data Structures & Algorithms": Layers,
  "Web Development & Frameworks": Code,
  "Artificial Intelligence Foundations": Brain,
  "Database Management Systems (DBMS)": Database,
  "Object-Oriented Programming": Cpu,
  "Software Engineering & Tools": BookOpen,
};

export function Education() {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Formal computer science education and foundational coursework at JECRC University."
        />

        {/* Primary Education Degree Card */}
        <Reveal className="mt-14">
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-primary/20 shadow-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20">
                  <GraduationCap className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Undergraduate Degree
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                      Full Time
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {educationData.degree}
                  </h3>

                  <p className="mt-1 text-lg font-medium text-accent">
                    {educationData.specialization}
                  </p>

                  <p className="mt-2 text-base font-semibold text-foreground/90">
                    {educationData.college}
                  </p>
                </div>
              </div>

              {/* Badges: Timeline & Location */}
              <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                <div className="inline-flex items-center gap-2 rounded-xl bg-secondary/80 px-4 py-2 text-xs font-semibold text-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{educationData.year}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-secondary/80 px-4 py-2 text-xs font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {educationData.description}
            </p>

            {/* University Highlights Strip */}
            <div className="mt-8 grid gap-3 border-t border-glass-border pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="text-sm font-semibold">Core CS & Modern Stacks</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Methodology</p>
                  <p className="text-sm font-semibold">Hands-on Lab & Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                  <p className="text-sm font-semibold">Hackathons & Tech Clubs</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Relevant Learning Areas Section */}
        <div className="mt-12">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Coursework & Curriculum
                </p>
                <h4 className="mt-1 text-xl font-bold sm:text-2xl">Relevant Learning Areas</h4>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {educationData.learningAreas.map((area, i) => {
              const IconComp = areaIcons[area.title] || BookOpen;
              return (
                <Reveal key={area.title} delay={i * 0.06}>
                  <div className="glass group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <IconComp className="h-5 w-5" />
                      </span>
                      <div>
                        <h5 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {area.title}
                        </h5>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
