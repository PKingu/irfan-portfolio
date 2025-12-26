"use client";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-32 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono text-neon mb-12 flex items-center gap-4">
        <span className="text-neon">01.</span> 
        <span className="text-white">Experience_Log</span>
        <span className="h-px bg-gray-800 flex-grow max-w-xs"></span>
      </h2>

      <div className="relative border-l border-gray-800 ml-4 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="ml-8 relative">
            <div className={`absolute -left-[39px] top-1 h-3 w-3 rounded-full border-2 ${exp.current ? 'bg-neon border-neon shadow-[0_0_10px_#00ff41]' : 'bg-dark border-gray-600'}`}></div>
            <h3 className="text-xl font-bold text-white">
              {exp.role} <span className="text-neon">@ {exp.company}</span>
            </h3>
            <p className="font-mono text-xs text-gray-500 mb-4 mt-1">{exp.period}</p>
            <p className="text-gray-400 max-w-3xl leading-relaxed text-sm md:text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}