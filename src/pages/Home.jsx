import React from "react";
import { motion } from "framer-motion";
import FloatingLines from "../components/FloatingLines/FloatingLines";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import About from "../components/About";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-cyan-400 selection:text-black">
      <Navbar />

      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 5, 10]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#0504aa", "#00ccff", "#000000"]}
        />
      </motion.div>
      <div className="relative w-full h-screen">
        <div className="relative z-10 flex flex-col h-full w-full pointer-events-none">
          <Hero />
        </div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Services />
      </div>

      <div className="relative z-10 min-h-screen">
        <Projects />
      </div>
      <div className="relative z-10 min-h-screen">
        <About />
      </div>

      <div className="relative z-10 min-h-screen">
        <Process />
      </div>

      <div className="relative z-10 min-h-screen">
        <Testimonials />
      </div>

      <div className="relative z-10 min-h-screen">
        <Contact />
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
