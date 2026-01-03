import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// --- Icons ---
const InstagramIcon = () => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer
      className={`relative pt-20 pb-10 overflow-hidden transition-colors duration-500 border-t ${
        theme === "dark"
          ? "bg-black border-white/10"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* --- Top Section: Main Content --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Logo & Tagline */}
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-3xl font-bold tracking-tight mb-6 transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              increadz.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`max-w-sm text-lg transition-colors duration-500 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("footerDescription")}
            </motion.p>
          </div>

          {/* Social Links & Contact */}
          <div className="md:w-1/2 flex flex-col md:items-end gap-8">
            {/* Big Email Link */}
            <motion.a
              href="mailto:contact@increadz.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`group flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-cyan-400 transition-colors ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              contact@increadz.com
              <div
                className={`p-2 rounded-full group-hover:bg-cyan-400 group-hover:border-cyan-400 group-hover:text-black transition-all duration-300 border ${
                  theme === "dark" ? "border-white/20" : "border-gray-300"
                }`}
              >
                <ArrowUpRight />
              </div>
            </motion.a>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-6"
            >
              <a
                href="#"
                className={`transition-colors p-2 rounded-full ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className={`transition-colors p-2 rounded-full ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:hello@increadz.com"
                className={`transition-colors p-2 rounded-full ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <MailIcon />
              </a>
            </motion.div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-t ${
            theme === "dark"
              ? "border-white/10 text-gray-500"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p>
            &copy; {currentYear} Increadz. {t("allRightsReserved")}.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              {t("termsOfService")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
