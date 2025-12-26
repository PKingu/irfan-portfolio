"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-dark/70 border-b border-white/5">
      {/* Brand / Logo */}
      <div className="flex items-center gap-2 font-mono text-neon font-bold text-lg tracking-tighter">
        <Terminal size={18} />
        <span>&gt; Irfan_Hussain</span>
      </div>
      
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8 text-sm font-mono text-gray-400">
        <Link href="/#about" className="hover:text-neon transition-colors">// about</Link>
        <Link href="/#experience" className="hover:text-neon transition-colors">// experience</Link>
        <Link href="/#projects" className="hover:text-neon transition-colors">// projects</Link>
      </div>

      {/* Socials & Contact */}
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-5">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon transition-colors"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>
        
        <a
          href={`mailto:${personalInfo.email}`}
          className="px-4 py-2 text-xs font-mono border border-neon/50 text-neon rounded hover:bg-neon/10 transition-colors"
        >
          Contact_Me
        </a>
      </div>
    </nav>
  );
}