"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-500" />,
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Angular.js", "Flutter"],
  },
  {
    title: "Backend",
    icon: <Server className="text-emerald-500" />,
    skills: ["Php / Laravel", "ASP.Netcore MVC architecture", "MySQL", "REST & API", "Authentication"],
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu className="text-purple-500" />,
    skills: ["Google Cloud Platform", "AWS / Vercel", "Git / GitHub Actions", "CI/CD Pipelines", "Microsoft Azure"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-400">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-6 p-3 w-fit rounded-lg bg-gray-800 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}