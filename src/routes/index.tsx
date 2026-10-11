import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow, LoadingScreen, ScrollToTop } from "@/components/portfolio/Extras";
import { profile } from "@/lib/portfolio-data";

const pageTitle = `${profile.name} | B.Tech Student & AI Enthusiast Portfolio`;
const pageDescription =
  "Official portfolio of Shivam Garg, B.Tech Computer Science student at JECRC University. Exploring Artificial Intelligence, Modern Web Development, and Digital Productivity.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { name: "author", content: profile.name },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <LoadingScreen />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        {/* 1. Hero / Home */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Education */}
        <Education />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Achievements */}
        <Achievements />

        {/* 7. Contact */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
