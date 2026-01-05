import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// Import images from public folder
import utctransdemImage from "/utctransdem.png";
import kidsybookImage from "/KidsyBook.png";
import itriImage from "/itri.png";
import brogueImage from "/brogue.png";
import djoudiPromoImage from "/djoudi-promotion.png";
import nouvelleAdresseImage from "/lanouvelleadressepromotion.png";

// --- Project Data ---
const getProjects = (t) => [
  {
    id: 1,
    title: "UTC Transdem",
    category: t("catLogistics") || "Logistics",
    url: "https://utctransdem.fr/",
    image: utctransdemImage,
  },
  {
    id: 2,
    title: "Kidsybook",
    category: t("catEcommerce") || "E-Commerce",
    url: "https://kidsybook.com",
    image: kidsybookImage,
  },
  {
    id: 3,
    title: "Itri Client",
    category: t("catWebApp") || "Web App",
    url: "https://itri-client-side.onrender.com/",
    image: itriImage,
  },
  {
    id: 4,
    title: "Brogue Paris",
    category: t("catFashion") || "Fashion",
    url: "http://brogueparis.fr/",
    image: brogueImage,
  },
  {
    id: 5,
    title: "Djoudi Promo",
    category: t("catRealEstate") || "Real Estate",
    url: "https://djoudi-promotion.com/",
    image: djoudiPromoImage,
  },
  {
    id: 6,
    title: "Nouvelle Adr.",
    category: t("catRealEstate") || "Real Estate",
    url: "https://www.lanouvelleadressepromotion.com/",
    image: nouvelleAdresseImage,
  },
];

// --- Card Component ---
const ProjectCard = ({ project, theme }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block h-[200px] w-[300px] md:h-[320px] md:w-[480px] shrink-0 rounded-3xl overflow-hidden border transition-all duration-500 hover:scale-[0.98] ${
        theme === "dark"
          ? "border-white/10 bg-[#0a0a0a]"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Overlay on Hover */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-black/40 group-hover:bg-black/20"
              : "bg-black/10 group-hover:bg-transparent"
          }`}
        ></div>
      </div>

      {/* Info Badge & Title */}
      <div className="absolute bottom-6 left-6 z-10">
        <span
          className={`inline-block px-3 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest rounded-md backdrop-blur-md ${
            theme === "dark"
              ? "bg-white/10 text-cyan-400 border border-white/10"
              : "bg-white/90 text-cyan-600 border border-gray-200"
          }`}
        >
          {project.category}
        </span>
        <h3
          className={`text-xl md:text-3xl font-bold drop-shadow-md ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
      </div>
    </a>
  );
};

export default function Works() {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const { t } = useLanguage();

  // Data: Duplicate arrays to ensure the scroll looks full/infinite
  const rawProjects = getProjects(t);
  const row1 = [...rawProjects, ...rawProjects];
  const row2 = [...rawProjects, ...rawProjects].reverse();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- ANIMATION LOGIC ---

  // 1. DIAGONAL ENTRANCE (0% -> 35% of scroll)
  // Starts tilted, rotated, low opacity, and small.
  // Then flattens to 0deg, full opacity, and normal scale.
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [25, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.35], [-12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);

  // 2. HORIZONTAL SCROLL (0% -> 100% of scroll)
  // Row 1: Moves Left
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  // Row 2: Moves Right (Starting from -50% to 0%)
  const xRight = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section
      ref={containerRef}
      id="works"
      className={`relative h-[300vh] ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Sticky container locks the view in place while we scroll */}
      <div className="sticky top-0 min-h-screen w-full flex flex-col overflow-hidden">
        {/* --- HEADER (Fixed at Top) --- */}
        <div className="relative z-20 pt-16 md:pt-24 px-6 md:px-12 shrink-0 pointer-events-none mb-4">
          <motion.div
            className="w-16 h-1 bg-cyan-400 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9]">
            <span
              className={`block font-light ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("worksTitle")}
            </span>
            <span className="block font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1">
              {t("worksSubtitle")}
            </span>
          </motion.h2>

          <p
            className={`mt-6 max-w-lg text-lg font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("worksIntroDesc")}
          </p>
        </div>

        {/* --- ANIMATED CARDS (Under Header) --- */}
        <div className="flex-1 h-fit flex flex-col justify-center perspective-1000 relative z-10 pb-12">
          <motion.div
            style={{
              rotateX, // The 3D Tilt Back
              rotateZ, // The Diagonal Angle
              scale, // The Zoom
              opacity, // The Fade In
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            className="flex flex-col gap-8 md:gap-12"
          >
            {/* ROW 1: Moves Left */}
            <motion.div
              style={{ x: xLeft }}
              className="flex gap-6 md:gap-10 w-max pl-[10vw]"
            >
              {row1.map((item, idx) => (
                <ProjectCard key={`r1-${idx}`} project={item} theme={theme} />
              ))}
            </motion.div>

            {/* ROW 2: Moves Right */}
            <motion.div
              style={{ x: xRight }}
              className="flex gap-6 md:gap-10 w-max"
            >
              {row2.map((item, idx) => (
                <ProjectCard key={`r2-${idx}`} project={item} theme={theme} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Fade Gradient for smoothness */}
        <div
          className={`absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t pointer-events-none ${
            theme === "dark"
              ? "from-black to-transparent"
              : "from-gray-50 to-transparent"
          } z-30`}
        ></div>
      </div>
    </section>
  );
}
