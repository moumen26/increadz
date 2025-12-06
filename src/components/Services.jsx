import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// --- Service Data ---
const services = [
  {
    id: 1,
    title: "Website & App Development",
    category: "Digital Solutions",
    description:
      "Tailored digital solutions built for performance, simplicity, and scale. We design and develop websites and mobile applications that align with your business goals.",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    id: 2,
    title: "Photography & Filmmaking",
    category: "Visual Production",
    description:
      "High-quality visual production to bring your story to life. From events to product shoots, we deliver impactful content for brands and social media.",
    image:
      "https://images.unsplash.com/photo-1576280314550-773c50583407?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    category: "Brand Growth",
    description:
      "End-to-end social media management to grow your audience and elevate your brand through strategic content and targeted campaigns.",
    image:
      "https://images.unsplash.com/photo-1622549037543-49cf1ca0babc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// --- Icons ---
const ArrowRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- Service Card Component ---
const ServiceCard = ({ service, index, theme }) => {
  const formattedIndex = `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.3, margin: "0px" }}
      className={`group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0a0a0a]/80 border border-white/5"
          : "bg-white/80 border border-gray-200"
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
        />
      </div>

      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

      {/* Large Background Index */}
      <div className="absolute top-4 right-6 pointer-events-none">
        <span
          className={`text-8xl font-bold transition-colors duration-500 ${
            theme === "dark"
              ? "text-white/5 group-hover:text-cyan-500/10"
              : "text-gray-900/5 group-hover:text-cyan-500/10"
          }`}
        >
          {formattedIndex}
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          {/* Category Label Pill */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-cyan-400 mb-4 ${
              theme === "dark"
                ? "bg-white/5 border border-white/10"
                : "bg-cyan-50 border border-cyan-200"
            }`}
          >
            {service.category}
          </span>
          <h3
            className={`text-3xl font-medium transition-colors duration-300 ${
              theme === "dark"
                ? "text-white group-hover:text-cyan-50"
                : "text-gray-900 group-hover:text-cyan-600"
            }`}
          >
            {service.title}
          </h3>
        </div>

        <p
          className={`text-base leading-relaxed max-w-md transition-colors duration-300 ${
            theme === "dark"
              ? "text-gray-400 group-hover:text-gray-300"
              : "text-gray-600 group-hover:text-gray-700"
          }`}
        >
          {service.description}
        </p>

        {/* Action Area */}
        <div className="pt-4 flex items-center gap-4 text-sm font-semibold">
          <div
            className={`w-full h-[1px] transition-colors duration-500 ${
              theme === "dark"
                ? "bg-white/10 group-hover:bg-cyan-500/50"
                : "bg-gray-200 group-hover:bg-cyan-400/50"
            }`}
          ></div>
          <div
            className={`relative w-8 h-8 shrink-0 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110 ${
              theme === "dark"
                ? "border border-white/20"
                : "border border-gray-300"
            }`}
          >
            <div
              className={`transition-transform duration-300 group-hover:-rotate-45 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progressive Line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[2px] ${
          theme === "dark" ? "bg-white/5" : "bg-gray-200"
        }`}
      >
        <div className="h-full bg-cyan-400 w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function Services() {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`relative w-full transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* LEFT COLUMN - Sticky Title */}
          <motion.div
            className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* The Vertical Cyan Line Decoration */}
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
                Our Best
              </span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Services!
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
              We deliver comprehensive solutions tailored to your business
              needs, from visual storytelling to digital transformation.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN - Scrollable Cards */}
          <div className="lg:w-7/12 space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
