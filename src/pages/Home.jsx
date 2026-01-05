import React from "react";
import { motion } from "framer-motion";
import FloatingLines from "../components/FloatingLines/FloatingLines";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Paths from "../components/Paths";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ"; // <--- IMPORT HERE
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import About from "../components/About";
import Works from "../components/Works";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative w-full min-h-screen font-sans selection:bg-cyan-400 selection:text-black transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[5, 5, 5]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          // UPDATED: Darker colors for light mode so they show up on white
          linesGradient={
            theme === "dark"
              ? ["#0504aa", "#00ccff", "#000000"]
              : ["#1e3a8a", "#0ea5e9", "#ffffff"]
          }
          backgroundColor={theme === "dark" ? "#000000" : "#ffffff"}
          mixBlendMode="normal" // Let the shader handle the background
        />
      </motion.div>
      <div className="relative w-full h-screen">
        <div className="relative z-10 flex flex-col h-full w-full pointer-events-none">
          <Hero />
        </div>
      </div>
      <div className="relative z-10 min-h-screen">
        <About />
      </div>
      <div className="relative z-10 min-h-screen">
        <Services />
      </div>
      <div className="relative z-10">
        <Works />
      </div>
      <div className="relative z-10 min-h-screen">
        <Paths />
      </div>
      <div className="relative z-10 min-h-screen">
        <Process />
      </div>
      <div className="relative z-10 min-h-screen">
        <Testimonials />
      </div>

      {/* --- ADD FAQ HERE --- */}
      <div className="relative z-10">
        <FAQ />
      </div>
      {/* ------------------ */}

      <div className="relative z-10 min-h-screen">
        <Contact />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
