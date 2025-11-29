import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton"; // Reuse your existing button

// --- Icons ---
const ArrowDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const options = [
  { value: "photography", label: "Photography & Filmmaking" },
  { value: "web-design", label: "Website Development" },
  { value: "app-development", label: "App Development" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "branding", label: "Branding & Design" },
  { value: "other", label: "Other" },
];

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-white/20 py-4 text-left text-lg focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer flex items-center justify-between"
      >
        <span className={selectedOption ? "text-white" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : "Select an option"}
        </span>
        <motion.div
          className="text-cyan-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown />
        </motion.div>
      </button>

      {/* Label */}
      <label className="absolute left-0 -top-4 text-gray-500 text-xs">
        Interested in
      </label>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="w-full text-left px-6 py-3 text-white hover:bg-cyan-400/10 transition-colors border-b border-white/5 last:border-b-0 flex items-center justify-between group"
                >
                  <span className="group-hover:text-cyan-400 transition-colors">
                    {option.label}
                  </span>
                  {selectedOption?.value === option.value && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  return (
    <section
      className="bg-black relative py-24 md:py-32 overflow-hidden"
      id="contact"
    >
      {/* Optional Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* --- LEFT SIDE: Content --- */}
          <div className="lg:w-5/12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] uppercase mb-8"
            >
              <span className="block text-white font-light">Let's Start</span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                A Project
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Reach out to us, and we'll get back to you as soon as possible.
              We're here to help you take the next step toward success.
            </motion.p>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="lg:w-7/12">
            <form className="flex flex-col gap-10">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-gray-500 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Your Name
                </label>
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-gray-500 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Email Address
                </label>
              </motion.div>

              {/* Interest Select (Custom Look) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <CustomSelect />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative"
              >
                <textarea
                  id="message"
                  rows="1"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-gray-500 text-base transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 pointer-events-none"
                >
                  Message
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-4"
              >
                <AnimatedButton
                  text="Send Now"
                  className="bg-white text-black hover:bg-cyan-400 border-none"
                />
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
