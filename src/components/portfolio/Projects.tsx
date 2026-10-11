import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles, CheckCircle2, X, Eye } from "lucide-react";
import { projectsList, type ProjectItem } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Practical Work"
          title="Featured Projects"
          description="Real-world applications built to solve problems, explore AI capabilities, and demonstrate clean code."
        />

        {/* 3 Dedicated Project Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Category / Tag Pill */}
                  <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Technologies Used */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-glass-border/60 mt-4">
                <div className="flex items-center gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02]"
                  >
                    <Eye className="h-3.5 w-3.5" /> View Project
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} GitHub repository`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all hover:bg-secondary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal / Dialog for Detailed Project View */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-background/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative glass w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-secondary"
                  aria-label="Close project modal"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {selectedProject.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-foreground">{selectedProject.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {selectedProject.fullDesc}
                </p>

                {/* Key Highlights */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Key Features & Innovations
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-5 border-t border-glass-border">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={selectedProject.liveDemo}
                    onClick={() => {
                      if (selectedProject.liveDemo.startsWith("#")) {
                        setSelectedProject(null);
                      }
                    }}
                    target={selectedProject.liveDemo.startsWith("#") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Open Project
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary"
                  >
                    <Github className="h-3.5 w-3.5" /> View Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
