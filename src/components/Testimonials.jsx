import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- Data Function ---
const getTestimonials = (t) => [
  {
    id: 1,
    number: "01",
    quote: t("testimonial1Quote"),
    name: t("testimonial1Name"),
    role: t("testimonial1Role"),
  },
  {
    id: 2,
    number: "02",
    quote: t("testimonial2Quote"),
    name: t("testimonial2Name"),
    role: t("testimonial2Role"),
  },
  {
    id: 3,
    number: "03",
    quote: t("testimonial3Quote"),
    name: t("testimonial3Name"),
    role: t("testimonial3Role"),
  },
  {
    id: 4,
    number: "04",
    quote: t("testimonial4Quote"),
    name: t("testimonial4Name"),
    role: t("testimonial4Role"),
  },
];

// --- Icons ---
const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <path d="M12 19L5 12L12 5" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12H19" />
    <path d="M12 5L19 12L12 19" />
  </svg>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);
  const mobileSliderRef = useRef(null);

  // Logic to handle "Next" (Cycles through 1 by 1, loops back)
  const handleNext = () => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.scrollBy({
        left: mobileSliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.scrollBy({
        left: -mobileSliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Helper to get the visible items based on screen size logic
  // For this design, we simply slide the array.
  const getVisibleTestimonials = () => {
    // We want to show 3 cards on desktop.
    // We create a new array shifting based on currentIndex
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] uppercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span
              className={`block font-light transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("testimonialsTitle1")}
            </span>
            <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
              {t("testimonialsTitle2")}
            </span>
          </motion.h2>

          {/* Navigation Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handlePrev}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                theme === "dark"
                  ? "border border-white/10 text-white hover:bg-white hover:text-black"
                  : "border border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                theme === "dark"
                  ? "border border-white/10 text-white hover:bg-white hover:text-black"
                  : "border border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <ArrowRight />
            </button>
          </motion.div>
        </div>

        {/* --- Testimonial Cards Slider --- */}
        <div className="relative overflow-hidden md:overflow-visible">
          {/* Mobile version: Horizontal slider */}
          <div
            ref={mobileSliderRef}
            className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6"
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                className={`flex-shrink-0 w-full snap-center p-10 rounded-2xl flex flex-col justify-between min-h-[350px] transition-colors ${
                  theme === "dark"
                    ? "bg-[#0a0a0a] border border-white/5 hover:border-white/10"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                }`}
              >
                <div>
                  <span className="text-cyan-400 font-mono text-sm mb-6 block">
                    {item.number}
                  </span>
                  <p
                    className={`text-xl leading-relaxed transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8">
                  <h4
                    className={`font-semibold text-lg transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop version: Grid with animation */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-10 rounded-2xl flex flex-col justify-between min-h-[350px] transition-colors ${
                    theme === "dark"
                      ? "bg-[#0a0a0a] border border-white/5 hover:border-white/10"
                      : "bg-white border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div>
                    <span className="text-cyan-400 font-mono text-sm mb-6 block">
                      {item.number}
                    </span>
                    <p
                      className={`text-xl leading-relaxed transition-colors duration-500 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4
                      className={`font-semibold text-lg transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-500 ${
                        theme === "dark" ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
