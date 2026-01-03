import React from "react";
import { motion } from "framer-motion"; // Import motion
import HeroButton from "./HeroButton";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.3, // Wait 0.3s before starting
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 }, // Start lower and invisible
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <main className="flex-1 flex items-center justify-center pointer-events-auto md:pt-[70px]">
      {/* Turn div into motion.div and apply variants */}
      <motion.div
        className="flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight uppercase">
          {/* Line 1 */}
          <motion.span
            variants={itemVariants}
            className={`block font-light transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("heroLine1")}
          </motion.span>

          {/* Line 2 (Gradient) */}
          <motion.span
            variants={itemVariants}
            className="block font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent"
          >
            {t("heroLine2")}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`mt-6 mb-10 text-lg md:text-xl max-w-lg font-light transition-colors duration-500 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* Button */}
        <motion.div variants={itemVariants}>
          <HeroButton text={t("letsContact")} />
        </motion.div>
      </motion.div>
    </main>
  );
}
