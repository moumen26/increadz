import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// --- Stats Data ---
const stats = [
  {
    id: 1,
    number: "200+",
    label: "Projects Completed",
  },
  {
    id: 2,
    number: "50+",
    label: "Happy Clients",
  },
  {
    id: 3,
    number: "5+",
    label: "Years Experience",
  },
  {
    id: 4,
    number: "100%",
    label: "Client Satisfaction",
  },
];

// --- Values Data ---
const values = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We push creative boundaries to deliver cutting-edge solutions that stand out.",
  },
  {
    id: 2,
    title: "Quality",
    description:
      "Excellence is our standard. Every project receives meticulous attention to detail.",
  },
  {
    id: 3,
    title: "Partnership",
    description:
      "Your success is our mission. We work closely with you at every step.",
  },
];

export default function About() {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className={`relative h-screen w-full transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 md:pt-32">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-12 lg:gap-20 mb-20">
          {/* LEFT COLUMN - Title */}
          <motion.div
            className="lg:w-5/12 shrink-0 h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Vertical Cyan Line Decoration */}
            <div
              className={`absolute -left-6 top-2 w-[2px] h-32 hidden lg:block ${
                theme === "dark" ? "bg-white/5" : "bg-gray-200"
              }`}
            >
              <motion.div
                className="w-full bg-cyan-400"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>

            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span
                className={`block font-light transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Who We
              </span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Are?
              </span>
            </motion.h2>
          </motion.div>

          {/* RIGHT COLUMN - Description */}
          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <motion.p
                className={`text-2xl md:text-3xl font-light leading-relaxed transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                At <span className="font-semibold text-cyan-400">Increadz</span>
                , we provide professional advertising, custom website creation,
                captivating design, and high-quality photography and filmmaking
                to bring your vision to life.
              </motion.p>

              <motion.p
                className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                Whether enhancing your digital presence or creating impactful
                content, we deliver expertise and innovation that transforms
                ideas into remarkable realities.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
