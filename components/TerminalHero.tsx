"use client";
import Typewriter from "typewriter-effect";
import { Terminal, Download } from "lucide-react";

export default function TerminalHero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-32 max-w-7xl mx-auto pt-20">
      <div className="flex items-center gap-2 text-gray-500 font-mono mb-6 text-sm">
        <Terminal size={16} />
        {/* change the name below to whatever you prefer */}
        <span>irfan@cyber-security:~$</span> 
        <span className="w-2 h-4 bg-neon animate-pulse block"></span>
      </div>

      <h1 className="text-4xl md:text-7xl font-bold font-mono mb-8 leading-tight">
        <span className="text-white">Executing </span>
        <span className="text-neon block md:inline">
          <Typewriter
            options={{
              strings: ["security_research.exe", "SOC_automation.py", "threat_intel.sh"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </span>
      </h1>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans">
        Incoming Security Research Intern @ <strong className="text-white">Microsoft (MSTIC)</strong>. 
        MSc Computer Science Student at King&apos;s College London.
        <br /><br />
        Connecting the worlds between complex security data and actionable intelligence. Recently saved BT Group £40k/year through custom SOC automation.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-neon text-dark font-mono font-bold hover:opacity-90 transition-all rounded-sm">
          ./view_projects.sh
        </a>
        <a href="/cv.pdf" className="px-6 py-3 border border-gray-700 text-neon font-mono hover:bg-neon/10 transition-all rounded-sm flex items-center gap-2">
          <Download size={16} /> cat cv.pdf
        </a>
      </div>
    </section>
  );
}
