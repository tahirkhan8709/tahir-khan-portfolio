"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

 type Project = {
   title: string;
   image: string;
   description: string;
   tech: string[];
   link?: string;
   github?: string;
   position?: string;
 };

 const projects: Project[] = [
  {
    title: "E-Commerce Richfield_chairs",
    image: "/chairimage.png", // <--- Make sure this is here
    description: "A responsive chair store website with shop, product details, cart and wishlist pages.",
    tech: ["Html", "Css", "Javascript"],
    link: "https://tahirkhan8709.github.io/Richfield_chairs/",
    github: "https://github.com/tahirkhan8709/richfield-chairs-/tree/main",
  },
  {
    title: "OnlineHelpDesk-CampusSystem",
    image: "/admin.png", // <--- ADD THIS (even if the file doesn't exist yet)
    description: "An ASP.NET Core MVC help desk system with request tracking, facility management and an admin dashboard.",
    tech: ["ASP.Net core MVC"],
    // link: "https://github.com/tahirkhan8709/OnlineHelpDesk-CampusSystem",
    github: "https://github.com/tahirkhan8709/campus-helpdesk-",
  },
  {
    title: "AI Content Generator",
    image: "/ai.png", // <--- ADD THIS
    description: "An AI content generator with tone selection, voice typing, read aloud and save notes.",
    tech: ["react", "nextjs", "tailwindcss", "typescript"],
    link: "https://smart-note-g5kdsyg5v-muhammad-tahir-khans-projects.vercel.app/",
    // github: "#",
  },
   {
    title: "WatchHub",
    image: "/watchhub.png", // <--- Make sure this is here
    description: "A Flutter e-commerce app with Firebase auth, cart, wishlist and real-time product data.",
    tech: ["dart", "flutter", "firebase"],
    // link: "https://tahirkhan8709.github.io/Richfield_chairs/",
    github: "https://github.com/tahirkhan8709/watchhub-showcase",
  },
  {
    title: "HarvestHub",
    image: "/harvesthub.png", // <--- ADD THIS (even if the file doesn't exist yet)
    description: "A Flutter mobile app with Firebase auth and real-time data sync.",
    tech: ["dart", "flutter", "firebase"],
    // link: "https://github.com/tahirkhan8709/OnlineHelpDesk-CampusSystem",
    github: "https://github.com/tahirkhan8709/harvesthub-showcase",
    position: "center 72%",
  },
  {
    title: "Vaccination System",
    image: "/homepage.png", // <--- Make sure this is here
    description: "A child vaccination system with appointment booking, vaccine stock management and an admin dashboard.",
    tech: ["php", "mysql", "html", "css", "javascript"],
    // link: "https://tahirkhan8709.github.io/Richfield_chairs/",
    github: "https://github.com/tahirkhan8709/vaccination-system-",
  },
  
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden p-6 hover:border-blue-500/50 transition-all"
            >
               {/* --- ADD THIS IMAGE BOX START --- */}
  <div className="relative h-48 w-full overflow-hidden bg-gray-800">
    <Image
      src={project.image} // This pulls from the data we added in step 2
      alt={project.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
      style={{ objectPosition: project.position ?? "center" }}
    />
  </div>
  {/* --- ADD THIS IMAGE BOX END --- */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="text-gray-400 hover:text-white flex items-center gap-1 text-sm">
                    <Code size={16} /> Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-gray-400 hover:text-white flex items-center gap-1 text-sm">
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}