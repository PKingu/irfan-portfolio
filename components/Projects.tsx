"use client";
import { projects } from "@/lib/data";
import { Folder, ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-32 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-neon">03.</span> 
        <span className="text-white">Selected_Projects</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Link href={`/projects/${project.slug}`} key={i} className="block h-full group">
            <SpotlightCard className="h-full">
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Folder size={40} className="text-neon" />
                  {project.impact && (
                    <span className="text-[10px] font-mono border border-neon/30 text-neon px-2 py-1 rounded bg-neon/5">
                      {project.impact}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.shortDesc}
                </p>
                <div className="mt-auto">
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <li key={t} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-neon text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    read_case_study <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}