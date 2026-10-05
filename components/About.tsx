"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Experience", value: "2+" },
    { label: "Projects", value: "5+" },
    { label: "Tech Stack", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-[#080808] scroll-mt-20">
      {/* 1. Change grid to 12 columns for finer control */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: THE CONTENT (Takes 7/12 of the width) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-4">
            <span className="w-8 h-[1px] bg-blue-500"></span>
            <span>About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Engineering with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Purpose & Precision
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-xl">
            I&apos;m Tahir Khan, a Full Stack Developer dedicated to building 
            high-performance web applications. I bridge the gap between complex 
            backend logic and intuitive frontend design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 size={18} className="text-blue-500" />
              <span>Full-Stack Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 size={18} className="text-blue-500" />
              <span>API Design & Security</span>
            </div>
          </div>
          
          <div className="flex gap-10 mb-10">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/tahir-khan-cv.pdf" target="_blank" rel="noopener noreferrer" download="tahir-khan-cv.pdf" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium">
              <FileText size={18} /> Download CV
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 border border-gray-800 hover:border-blue-500/50 text-gray-300 rounded-xl transition-all font-medium">
              Let&apos;s Talk <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

      {/* RIGHT SIDE: THE IMAGE */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="lg:col-span-5 flex justify-center lg:justify-end"
>
  <div className="relative group w-full max-w-[400px]"> 
    {/* Decorative Blue Border that glows on hover */}
    <div className="absolute -inset-4 border border-blue-500/0 rounded-2xl -z-10 group-hover:border-blue-500/30 group-hover:inset-0 transition-all duration-500" />
    
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
      <Image 
        src="/me.jpg" 
        alt="Tahir Khan"
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
      />
      
      {/* THIS IS THE DARK OVERLAY - We set opacity to 0 on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
      
      {/* Optional: Subtle blue inner glow on hover */}
      <div className="absolute inset-0 border-0 group-hover:border-[8px] border-blue-500/10 transition-all duration-500 pointer-events-none" />
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}