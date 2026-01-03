import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- Stats Data Function ---
const getStats = (t) => [
  {
    id: 1,
    number: "200+",
    label: t("projectsCompleted"),
  },
  {
    id: 2,
    number: "50+",
    label: t("happyClients"),
  },
  {
    id: 3,
    number: "5+",
    label: t("yearsExperience"),
  },
  {
    id: 4,
    number: "100%",
    label: t("clientSatisfaction"),
  },
];

// --- Values Data Function ---
const getValues = (t) => [
  {
    id: 1,
    title: t("innovation"),
    description: t("innovationDesc"),
  },
  {
    id: 2,
    title: t("quality"),
    description: t("qualityDesc"),
  },
  {
    id: 3,
    title: t("partnership"),
    description: t("partnershipDesc"),
  },
];

export default function About() {
  const { theme } = useTheme();
  const { t } = useLanguage();
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* LEFT COLUMN - Title */}
          <motion.div
            className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Vertical Cyan Line Decoration */}
            <div
              className={`absolute -left-6 top-2 bottom-2 w-[2px] hidden lg:block ${
                theme === "dark" ? "bg-white/5" : "bg-gray-200"
              }`}
            >
              <motion.div
                className="w-full h-32 bg-cyan-400"
                initial={{ height: 0 }}
                whileInView={{ height: 128 }}
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
                {t("aboutTitle1")}
              </span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                {t("aboutTitle2")}
              </span>
            </motion.h2>

            <motion.p
              className={`mt-8 text-lg max-w-sm font-light mb-10 transition-colors duration-500 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("aboutMainText")}
            </motion.p>
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
                {t("aboutDescription")
                  .split("Increadz")
                  .map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span className="font-semibold text-cyan-400">
                          Increadz
                        </span>
                      )}
                    </span>
                  ))}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
