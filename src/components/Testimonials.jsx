import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const testimonials = [
  {
    id: 1,
    number: "01",
    quote:
      "From branding to product UI, their work elevated our entire digital experience. The communication was smooth, and the results speak for themselves.",
    name: "Jason Ahmed",
    role: "Founder of BloomCRM",
  },
  {
    id: 2,
    number: "02",
    quote:
      "They truly understood our brand voice and delivered a website that feels like 'us.' Our users love it, and so do we.",
    name: "Monica Reyes",
    role: "Marketing Director at Fitwise",
  },
  {
    id: 3,
    number: "03",
    quote:
      "Working with increadz was a game-changer. Their ability to turn abstract ideas into beautiful, functional designs is unmatched.",
    name: "Sarah Lin",
    role: "CEO at Nova Tech",
  },
  {
    id: 4,
    number: "04",
    quote:
      "The strategic approach to our rebranding was phenomenal. We've seen a 40% increase in engagement since launch.",
    name: "David Miller",
    role: "CTO at NexusStream",
  },
];

// Placeholder Logos (Just simple SVG shapes to mimic the image)
const LogoPlaceholder = ({ label }) => (
  <div className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
    <span className="text-white font-bold tracking-widest uppercase">
      {label}
    </span>
  </div>
);

const logos = [
  "LOQO",
  "HOGO",
  "LOQO",
  "IPSUM",
  "IPSUM",
  "LOGO IPSUM",
  "IPSUM",
  "HOGO",
  "IPSUM",
  "LOOO",
  "LOGO IPSUM",
  "LOOO",
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

  // Logic to handle "Next" (Cycles through 1 by 1, loops back)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
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
    <section className="bg-black relative py-24 md:py-32 overflow-hidden">
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
            <span className="block text-white font-light">What Our</span>
            <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
              Clients Say
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
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight />
            </button>
          </motion.div>
        </div>

        {/* --- Testimonial Cards Slider --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`} // Unique key for animation
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl flex flex-col justify-between min-h-[350px] hover:border-white/10 transition-colors"
              >
                <div>
                  <span className="text-cyan-400 font-mono text-sm mb-6 block">
                    {item.number}
                  </span>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-white font-semibold text-lg">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- Logo Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {logos.map((logoName, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/5 h-32 rounded-xl flex items-center justify-center hover:bg-[#111] transition-colors cursor-pointer group"
            >
              <LogoPlaceholder label={logoName} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
