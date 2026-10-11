import { useState } from "react";
import { motion } from "motion/react";
import {
  FileCode2,
  Palette,
  FileJson,
  Terminal,
  BrainCircuit,
  Sparkles,
  Globe,
  Zap,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { skillsList, type SkillCategory, type SkillItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  FileCode2,
  Palette,
  FileJson,
  Terminal,
  BrainCircuit,
  Sparkles,
  Globe,
  Zap,
};

const filterTabs: SkillCategory[] = ["All", "Frontend & Web", "AI & Programming", "Productivity"];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>("All");

  const filteredSkills = skillsList.filter(
    (skill) => activeFilter === "All" || skill.category === activeFilter,
  );

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Competencies"
          description="Technologies, frameworks, and modern tools I leverage to build robust web and AI solutions."
        />

        {/* Category Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={cn(
                  "rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-secondary/70",
                )}
              >
                {tab}
              </button>
            );
          })}
        </Reveal>

        {/* 8 Attractive Skill Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Globe;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group glass flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent">
                      {skill.badge}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar & Proficiency */}
                <div className="mt-6 pt-4 border-t border-glass-border">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary Banner */}
        <Reveal delay={0.2} className="mt-12">
          <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-glass-border">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/20 text-accent">
                <Sparkles className="h-6 w-6" />
              </span>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Continuously Expanding Knowledge
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Regularly exploring new libraries, AI model APIs, and modern frontend tools.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline shrink-0"
            >
              See Skills Applied in Projects →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
