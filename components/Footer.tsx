"use client";
import React from "react";
// We use the exact same ones from your Hero file
import { Terminal, Globe, User, Mail } from "lucide-react"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-900 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Terminal size={20} className="text-blue-500" />
            DevPortfolio
          </h2>
          <p className="text-gray-500 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex gap-6">
          {/* We use Globe and User because we KNOW they work in your project */}
          <a href="https://github.com/tahirkhan8709" className="text-gray-400 hover:text-white transition-colors">
            <Globe size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tahir-khan-532419353/" className="text-gray-400 hover:text-white transition-colors">
            <User size={20} />
          </a>
          <a href="mailto:tahir.tayyab8709@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}