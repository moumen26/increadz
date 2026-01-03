import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- FAQ Data ---
const getFaqItems = (t) => [
  {
    id: 1,
    question: t("faqQuestion1"),
    answer: t("faqAnswer1"),
  },
  {
    id: 2,
    question: t("faqQuestion2"),
    answer: t("faqAnswer2"),
  },
  {
    id: 3,
    question: t("faqQuestion3"),
    answer: t("faqAnswer3"),
  },
  {
    id: 4,
    question: t("faqQuestion4"),
    answer: t("faqAnswer4"),
  },
  // --- New Items ---
  {
    id: 6,
    question: t("faqQuestion6"), // Retours et révisions
    answer: t("faqAnswer6"),
  },
  {
    id: 7,
    question: t("faqQuestion7"), // Référencement Google
    answer: t("faqAnswer7"),
  },
  // -----------------
  {
    id: 5,
    question: t("faqQuestion5"),
    answer: t("faqAnswer5"),
  },
];

// --- Icons ---
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// --- Accordion Item Component ---
const FaqItem = ({ item, isOpen, onClick, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        theme === "dark"
          ? `bg-[#0a0a0a]/80 ${
              isOpen
                ? "border-cyan-500/50 bg-white/5"
                : "border-white/10 hover:border-white/20"
            }`
          : `bg-white/80 ${
              isOpen
                ? "border-cyan-400 bg-cyan-50/30"
                : "border-gray-200 hover:border-cyan-200"
            }`
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <span
          className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${
            theme === "dark"
              ? isOpen
                ? "text-cyan-400"
                : "text-white group-hover:text-cyan-50"
              : isOpen
              ? "text-cyan-600"
              : "text-gray-900 group-hover:text-cyan-600"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
            theme === "dark"
              ? isOpen
                ? "bg-cyan-400 text-black border-cyan-400"
                : "bg-transparent text-gray-400 border-white/20"
              : isOpen
              ? "bg-cyan-400 text-white border-cyan-400"
              : "bg-transparent text-gray-400 border-gray-300"
          }`}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className={`px-6 md:px-8 pb-8 text-base md:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const faqItems = getFaqItems(t);

  // State to track which item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative w-full transition-colors duration-500 py-16 md:py-24 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* --- LEFT COLUMN - Sticky Title (Consistent with Process/About) --- */}
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
                {t("faqTitle1") || "TOUT"}
              </span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                {t("faqTitle2") || "SAVOIR"}
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
              {t("faqDescription") ||
                "Les réponses aux questions que nos clients nous posent le plus souvent avant de lancer leur projet."}
            </motion.p>
          </motion.div>

          {/* --- RIGHT COLUMN - Accordion List --- */}
          <div className="lg:w-7/12 space-y-4">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
