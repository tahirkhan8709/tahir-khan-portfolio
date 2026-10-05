"use client";
import { motion } from "framer-motion";

const techs = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Tailwind", "Docker"];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-blue-600/5 py-4 border-y border-white/5">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase text-white/10 hover:text-blue-500/50 transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}