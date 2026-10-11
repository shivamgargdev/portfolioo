import { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  PlusCircle,
  Trophy,
  Zap,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import {
  achievementsList,
  type AchievementCategory,
  type AchievementItem,
  profile,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const filterTabs: AchievementCategory[] = [
  "All",
  "Certifications",
  "Hackathons",
  "Courses",
  "Awards",
  "Other achievements",
];

const categoryIcons: Record<string, LucideIcon> = {
  Certifications: Award,
  Hackathons: Zap,
  Courses: BookOpen,
  Awards: Trophy,
  "Other achievements": Trophy,
};

export function Achievements() {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>("All");

  const filteredAchievements = achievementsList.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  );

  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Learning Record"
          description="Verified credentials, competitive coding milestones, and technical certifications."
        />

        {/* Category Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {filterTabs.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-secondary/70",
                )}
              >
                {cat}
              </button>
            );
          })}
        </Reveal>

        {/* Achievements Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((item, index) => {
            const IconComponent = categoryIcons[item.category] || Award;

            return (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group glass flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-accent">{item.issuer}</p>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-glass-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                    {item.badge}
                  </span>

                  {item.linkUrl ? (
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      <span>{item.linkText || "View"}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </motion.article>
            );
          })}

          {/* Modular Add-Future-Achievement Card */}
          <div className="glass flex flex-col justify-center items-center text-center rounded-3xl p-6 border-dashed border-2 border-border/80 hover:border-primary/50 transition-colors">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
              <PlusCircle className="h-6 w-6" />
            </span>
            <h4 className="mt-3 text-base font-bold text-foreground">Future Milestones</h4>
            <p className="mt-1 text-xs text-muted-foreground max-w-xs leading-relaxed">
              New hackathon wins, technical certifications, awards, and specialized courses will be
              added here as I earn them.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Have an opportunity? Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
