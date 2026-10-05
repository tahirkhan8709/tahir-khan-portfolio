"use client";
import React from "react";
import { motion } from "framer-motion";
import { Terminal, Globe, User, Mail } from "lucide-react";

export default function Hero() {
  // 1. Define the title string
  const title = "Building scalable systems from UI to Database.";

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden scroll-mt-20">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 max-w-5xl"
      >
        <div className="flex items-center justify-center gap-2 text-blue-400 font-mono text-sm mb-4">
          <Terminal size={18} />
          <span>Hello, world! I&apos;m Tahir Khan — Full Stack Software Engineer</span>
        </div>

        {/* 2. REPLACED H1 BLOCK START */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1, // This creates the "word-by-word" reveal
                ease: "easeOut" 
              }}
              className="inline-block mr-3 md:mr-5"
            >
              {/* Highlight specific words if you want */}
              {word === "scalable" || word === "Database." ? (
                <span className="text-blue-500">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>
        {/* REPLACED H1 BLOCK END */}

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }} // Wait for text animation to finish
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in high-performance frontend architectures and robust 
          backend systems. I turn complex problems into elegant, code-driven solutions.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.5 }}
           className="flex items-center justify-center gap-4 pt-8"
        >
          <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all">
            View My Work
          </a>
          <div className="flex items-center gap-4 ml-4 border-l border-gray-800 pl-8">
  {/* Link to your LinkedIn */}
  <a href="https://www.linkedin.com/in/tahir-khan-532419353/" target="_blank" rel="noopener noreferrer">
    <User className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>

  {/* Link to your GitHub or specific demo */}
  <a href="https://github.com/tahirkhan8709" target="_blank" rel="noopener noreferrer">
    <Globe className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>

  {/* Link to trigger an email */}
  <a href="mailto:tahir.tayyab8709@gmail.com">
    <Mail className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>
</div>
        </motion.div>
      </motion.div>
    </section>
  );
}