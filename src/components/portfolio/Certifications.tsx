import { Award, Download, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Learning Record"
          title="Certifications & Achievements"
          description="Courses I have completed so far. New certificates get added here as I earn them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.06}>
              <article className="group glass flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {cert.date}
                  </span>
                </div>

                <div className="mt-5 grid h-28 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15">
                  <Award className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" /> View
                  </a>
                  <a
                    href={cert.url}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
