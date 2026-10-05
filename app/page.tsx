import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-22 md:pt-22"> {/* Increased padding */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}