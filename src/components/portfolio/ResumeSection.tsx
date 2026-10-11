import { Download, FileText } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Documents"
          title="Resume"
          description="Open the full PDF or keep a copy — it is always the latest version."
        />

        <Reveal className="mt-14">
          <div className="glass grid gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Summary</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                First-year B.Tech Computer Science student building strong programming foundations
                in C, C++ and Python, with a growing interest in web development and problem
                solving. Actively looking for learning opportunities, hackathons and open-source
                contributions.
              </p>

              <h4 className="mt-7 text-sm font-semibold uppercase tracking-widest text-primary">
                Education
              </h4>
              <p className="mt-2 font-medium">B.Tech, Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground">First Year · 2026 – Present</p>

              <h4 className="mt-7 text-sm font-semibold uppercase tracking-widest text-primary">
                Skills overview
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "C",
                  "C++",
                  "Python",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Git & GitHub",
                  "Problem Solving",
                  "Teamwork",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <FileText className="h-4 w-4" /> View Resume
                </a>
                <a
                  href={profile.resume}
                  download="Shivam_Garg_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-glass-border bg-secondary/40">
              <object
                data={profile.resume}
                type="application/pdf"
                className="h-[26rem] w-full"
                aria-label="Resume preview"
              >
                <div className="grid h-[26rem] place-items-center p-6 text-center text-sm text-muted-foreground">
                  Preview isn't available here — use the View Resume button to open the PDF.
                </div>
              </object>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
