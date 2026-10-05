"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-8 px-8 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md"
      >
        <a href="#" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
        <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact">
        <button className="text-sm font-medium px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors">
          Contact
        </button>
        </a>
      </motion.div>
    </nav>
  );
}