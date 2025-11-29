import React from "react";
import { motion } from "framer-motion";

// --- Service Data ---
const services = [
  {
    id: 1,
    title: "Photography & Filmmaking",
    description:
      "High-quality visual production to bring your story to life. From events to product shoots, we deliver impactful content for brands and social media.",
    items: [
      "Event Coverage (Weddings, Corporate Events, etc.)",
      "Portraits & Headshots",
      "Product Photography",
      "Social Media Content Creation",
      "Corporate & Promotional Videos",
    ],
  },
  {
    id: 2,
    title: "Website & App Development",
    description:
      "Tailored digital solutions built for performance, simplicity, and scale. We design and develop websites and mobile applications that align with your business goals.",
    items: [
      "Business Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Blog Websites",
      "iOS & Android Mobile Applications",
      "UI/UX Design for Web & Mobile",
    ],
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "End-to-end social media management to grow your audience and elevate your brand through strategic content and targeted campaigns.",
    items: [
      "Strategy Development",
      "Content Creation",
      "Account Management",
      "Advertising Campaigns",
      "Analytics & Reporting",
    ],
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

// --- Card Component ---
const ServiceCard = ({ service, index }) => {
  const formattedIndex = `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.3, margin: "0px" }}
      className="group relative flex flex-col justify-between p-8 md:p-10 bg-[#0a0a0a]/80 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md"
    >
      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

      {/* Large Background Index */}
      <div className="absolute top-4 right-6 pointer-events-none">
        <span className="text-8xl font-bold text-white/5 transition-colors duration-500 group-hover:text-cyan-500/10">
          {formattedIndex}
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-cyan-400 mb-4">
            Service {formattedIndex}
          </span>
          <h3 className="text-3xl font-medium text-white group-hover:text-cyan-50 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-400 text-base leading-relaxed max-w-md group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Action Area */}
        <div className="pt-4 flex items-center gap-4 text-sm font-semibold text-white">
          <span className="group-hover:text-cyan-400 transition-colors">
            See Details
          </span>
          <div className="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-110">
            <div className="text-white transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progressive Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div className="h-full bg-cyan-400 w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function Services() {
  return (
    <section className="relative w-full bg-black">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 relative z-10">
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
            <div className="absolute -left-6 top-2 bottom-2 w-[2px] bg-white/5 hidden lg:block">
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
              <span className="block text-white font-light">Our Best</span>
              <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Services!
              </span>
            </motion.h2>
            <motion.p
              className="mt-8 text-gray-400 text-lg max-w-sm font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover how we can transform your business with our tailored
              digital solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN - Scrollable Cards */}
          <div className="lg:w-7/12 space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
