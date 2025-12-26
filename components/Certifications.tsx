"use client";
import { certifications } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 px-6 md:px-32 max-w-5xl mx-auto">
      <h3 className="font-mono text-gray-500 mb-8 text-sm">// verified_credentials</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <a 
            key={i} 
            href={cert.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-white/10 bg-white/5 p-4 rounded hover:border-neon/50 transition-colors group flex items-start gap-4 cursor-pointer"
          >
            <div className="text-neon mt-1"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="text-white text-sm font-bold leading-tight group-hover:text-neon transition-colors">{cert.name}</h4>
              <p className="text-gray-500 text-xs mt-1 font-mono">{cert.issuer}</p>
              <p className="text-gray-600 text-[10px] mt-2 font-mono uppercase tracking-wider">{cert.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}