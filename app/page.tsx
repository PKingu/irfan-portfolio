import TerminalHero from "@/components/TerminalHero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { skills } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon selection:text-black">
      {/* 1. Global Background Texture */}
      <div className="bg-noise"></div>

      {/* 2. Hero Section */}
      <TerminalHero />
      
      {/* 3. Skills Marquee (Transition) */}
      <div className="border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto px-6">
          {skills.map((skill) => (
             <span key={skill} className="font-mono text-sm text-gray-500 hover:text-neon transition-colors cursor-default">
               {skill}
             </span>
          ))}
        </div>
      </div>

      {/* 4. Timeline of Roles */}
      <Experience />

      {/* 5. Academic Background */}
      <Education />

      {/* 6. Certifications (Badges) */}
      <Certifications />

      {/* 7. Detailed Project Cases */}
      <Projects />
      
      {/* 8. Footer */}
      <Footer />
    </main>
  );
}