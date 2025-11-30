import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import HeroButton from "./HeroButton";
import { useTheme } from "../context/ThemeContext";

// --- Service Data ---
const services = [
  {
    id: 1,
    title: "Photography & Filmmaking",
    category: "Visual Production",
    description:
      "High-quality visual production to bring your story to life. From events to product shoots, we deliver impactful content for brands and social media.",
    image:
      "https://images.unsplash.com/photo-1576280314550-773c50583407?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Website & App Development",
    category: "Digital Solutions",
    description:
      "Tailored digital solutions built for performance, simplicity, and scale. We design and develop websites and mobile applications that align with your business goals.",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default function Services() {
  const targetRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { theme } = useTheme();

  // 1. Track Scroll Progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 2. Horizontal Movement Logic
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);

  // 3. Update Active Slide State based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newActive = Math.min(
      Math.floor(latest * services.length),
      services.length - 1
    );
    setActiveSlide(newActive);
  });

  return (
    <section
      id="services"
      className={`relative z-20 transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* --- HEADER --- */}
      <div className="w-full px-6 md:px-12 py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
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
        </motion.div>
      </div>

      {/* --- SLIDER CONTAINER (300vh) --- */}
      <div ref={targetRef} className="relative h-[300vh]">
        {/* --- STICKY VIEWPORT (100vh) --- */}
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Slider Track */}
          <div className="flex-1 relative w-full">
            <motion.div style={{ x }} className="flex w-[300vw] h-full">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="w-screen h-screen relative flex items-center justify-center"
                >
                  {/* Card */}
                  <div
                    className={`relative w-full h-full overflow-hidden group ${
                      theme === "dark"
                        ? "border border-white/10"
                        : "border border-gray-300"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                          : "bg-gradient-to-t from-white/90 via-white/20 to-transparent"
                      }`}
                    ></div>

                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                      <div className="flex justify-between items-start pt-4">
                        <span
                          className={`text-xl font-mono backdrop-blur-sm px-2 rounded ${
                            theme === "dark"
                              ? "text-white/60 bg-black/20"
                              : "text-gray-600 bg-white/20"
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      {/* Padded bottom to make room for the indicator bars */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-24">
                        <div>
                          <span className="text-cyan-400 text-sm uppercase tracking-wider font-bold mb-2 block">
                            {service.category}
                          </span>
                          <h3
                            className={`text-4xl md:text-6xl font-semibold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`mt-4 text-base md:text-lg max-w-2xl ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {service.description}
                          </p>
                        </div>
                        <div
                          className={`text-sm tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                            theme === "dark"
                              ? "text-white/80 border border-white/20 hover:bg-white/10"
                              : "text-gray-700 border border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          Explore Services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- INDICATOR BARS --- */}
          <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 z-50 flex gap-4">
            {services.map((_, index) => (
              <div
                key={index}
                className={`relative h-[2px] flex-1 overflow-hidden ${
                  theme === "dark" ? "bg-white/20" : "bg-gray-400/40"
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    theme === "dark"
                      ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                      : "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  } ${
                    activeSlide >= index
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
