import React from "react";
import { motion } from "framer-motion"; // Import motion
import FloatingLines from "../components/FloatingLines/FloatingLines";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Layer - Fades in slowly (1.5s) */}
      <motion.div
        className="absolute inset-0 z-0"
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

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full w-full pointer-events-none">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
