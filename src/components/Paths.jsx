import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- Icons for the Cards ---
const ClarityIcon = ({ theme }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={theme === "dark" ? "text-white" : "text-black"}
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrecisionIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-cyan-400"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="2" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const StrategyIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-purple-400"
  >
    <path
      d="M2 20L12 4L22 20H2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 16V16.01"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// --- The Massive Holographic Cube ---
const CubeGraphic = () => {
  return (
    <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[600px] md:h-[600px]">
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_50px_rgba(34,211,238,0.15)]"
        animate={{ translateY: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient
            id="topGradient"
            x1="200"
            y1="100"
            x2="200"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0891b2" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient
            id="wireGradient"
            x1="200"
            y1="0"
            x2="200"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <motion.path
          d="M200 80 L320 140 L200 200 L80 140 Z"
          fill="url(#topGradient)"
          stroke="#22d3ee"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <circle cx="200" cy="140" r="20" fill="#22d3ee" fillOpacity="0.2" />
        <circle cx="200" cy="140" r="6" fill="#fff" />
        <motion.circle
          cx="200"
          cy="140"
          r="30"
          stroke="#22d3ee"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.path
          d="M80 140 L80 320 M200 200 L200 380 M320 140 L320 320"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.path
          d="M80 320 L200 380 L320 320"
          stroke="url(#wireGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />

        <path
          d="M80 140 L200 80 L320 140"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
        />
        <path
          d="M200 80 L200 260"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
        />
        <path
          d="M80 320 L200 260 L320 320"
          stroke="#22d3ee"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
        />
      </motion.svg>
    </div>
  );
};

export default function Paths() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const mobileCards = [
    {
      id: 1,
      title: t("creativeClarity"),
      description: t("creativeClarityDesc"),
      icon: <ClarityIcon theme={theme} />,
      badge: t("pathBadge1"),
    },
    {
      id: 2,
      title: t("technicalPrecision"),
      description: t("technicalPrecisionDesc"),
      icon: <PrecisionIcon />,
      badge: t("pathBadge2"),
    },
    {
      id: 3,
      title: t("strategicThinking"),
      description: t("strategicThinkingDesc"),
      icon: <StrategyIcon />,
      badge: t("pathBadge3"),
    },
  ];

  return (
    <section
      className={`relative py-32 md:py-24 overflow-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- Header --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-thin tracking-tighter mb-8 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("pathsTitle1")} <br />
            <span
              className={`font-semibold bg-clip-text text-transparent transition-colors duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-white to-white/50"
                  : "bg-gradient-to-b from-gray-900 to-gray-600"
              }`}
            >
              {t("pathsTitle2")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg md:text-2xl font-light max-w-2xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("pathsDescription")}
          </motion.p>
        </div>

        {/* --- Layout: Cube & Floating Cards --- */}
        <div className="relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[900px]">
          {/* Central Cube */}
          <div className="relative z-10 scale-90 sm:scale-100 md:scale-110 hidden md:block">
            <CubeGraphic />
          </div>

          {/* --- Desktop Positioning Layer --- */}
          <div className="w-full h-full absolute inset-0 hidden md:block pointer-events-none">
            {/* CARD 1: Creative Clarity */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="absolute top-[0%] right-[10%] xl:right-[15%] w-96 pointer-events-auto group"
            >
              <div className="absolute top-full left-10 h-32 w-[1px] bg-gradient-to-b from-white/50 to-transparent -z-10 group-hover:h-48 transition-all duration-500"></div>

              <div
                className={`backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:-translate-y-2 ${
                  theme === "dark"
                    ? "bg-white/90"
                    : "bg-white border border-gray-200"
                }`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)",
                  borderRadius: "16px",
                }}
              >
                <div
                  className={`mb-4 p-3 rounded-full w-fit ${
                    theme === "dark" ? "bg-gray-100" : "bg-gray-50"
                  }`}
                >
                  <ClarityIcon theme={theme} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {t("creativeClarity")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("creativeClarityDesc")}
                </p>
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-400"
                  style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
            </motion.div>

            {/* CARD 2: Technical Precision */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="absolute bottom-[10%] left-[5%] xl:left-[10%] w-96 pointer-events-auto group"
            >
              <div className="absolute bottom-full right-10 h-20 w-[1px] bg-gradient-to-t from-cyan-500/50 to-transparent -z-10"></div>

              <div
                className={`backdrop-blur-md border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === "dark"
                    ? "bg-[#0f0f0f]/80 border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                    : "bg-white border-gray-200 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                }`}
              >
                <div className="mb-4 p-3 bg-cyan-900/20 border border-cyan-500/20 rounded-full w-fit">
                  <PrecisionIcon />
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("technicalPrecision")}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t("technicalPrecisionDesc")}
                </p>
              </div>
            </motion.div>

            {/* CARD 3: Strategic Thinking */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.7, type: "spring" }}
              className="absolute bottom-[5%] right-[5%] xl:right-[10%] w-96 pointer-events-auto group"
            >
              <div className="absolute bottom-full left-10 h-24 w-[1px] bg-gradient-to-t from-purple-500/50 to-transparent -z-10"></div>

              <div
                className={`backdrop-blur-md border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === "dark"
                    ? "bg-[#0f0f0f]/80 border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                    : "bg-white border-gray-200 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                }`}
              >
                <div className="mb-4 p-3 bg-purple-900/20 border border-purple-500/20 rounded-full w-fit">
                  <StrategyIcon />
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("strategicThinking")}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t("strategicThinkingDesc")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- Mobile View (Stacked Cards with New UI Style) --- */}
          <div className="flex flex-col gap-6 mt-8 md:hidden w-full max-w-md mx-auto px-4">
            {mobileCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ amount: 0.3 }}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl overflow-hidden backdrop-blur-md transition-colors duration-500 ${
                  theme === "dark"
                    ? "bg-[#0a0a0a]/80 border border-white/5"
                    : "bg-white/80 border border-gray-200"
                }`}
              >
                {/* Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

                {/* Large Background Index */}
                <div className="absolute top-4 right-6 pointer-events-none">
                  <span
                    className={`text-6xl font-bold transition-colors duration-500 ${
                      theme === "dark"
                        ? "text-white/5 group-hover:text-cyan-500/10"
                        : "text-gray-900/5 group-hover:text-cyan-500/10"
                    }`}
                  >
                    0{card.id}
                  </span>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-cyan-400 mb-3 ${
                        theme === "dark"
                          ? "bg-white/5 border border-white/10"
                          : "bg-cyan-50 border border-cyan-200"
                      }`}
                    >
                      {card.badge}
                    </span>
                    <h3
                      className={`text-2xl font-medium transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-white group-hover:text-cyan-50"
                          : "text-gray-900 group-hover:text-cyan-600"
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-400 group-hover:text-gray-300"
                        : "text-gray-600 group-hover:text-gray-700"
                    }`}
                  >
                    {card.description}
                  </p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
