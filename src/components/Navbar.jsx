import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { useTheme } from "../context/ThemeContext";

// --- Mobile Link Component ---
const MobileNavLink = ({ href, label, index, active, onClick, theme }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative block overflow-hidden text-5xl md:text-6xl font-light tracking-tighter py-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <span
          className={`block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full ${
            active
              ? "text-cyan-400"
              : theme === "dark"
              ? "text-white/80"
              : "text-gray-700"
          }`}
        >
          {label}
        </span>
        <span className="absolute top-0 left-0 block w-full translate-y-full font-bold text-cyan-400 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
          {label}
        </span>
      </div>
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-cyan-400/30 scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></span>
    </a>
  );
};

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash.slice(1) || "home");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* --- Main Navbar --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-auto backdrop-blur-md md:backdrop-blur-none transition-colors duration-500 ${
          theme === "dark"
            ? "bg-black/80 md:bg-transparent"
            : "bg-white/80 md:bg-transparent"
        }`}
      >
        <span
          className={`relative z-50 text-2xl font-semibold tracking-tight transition-colors duration-500 ${
            theme === "dark"
              ? "text-white mix-blend-difference"
              : "text-gray-900"
          }`}
        >
          increadz.
        </span>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 backdrop-blur-md transition-colors duration-500 ${
            theme === "dark"
              ? "bg-black/20 border border-white/10"
              : "bg-white/60 border border-gray-200"
          }`}
        >
          <a
            href="#"
            className={`relative group overflow-hidden px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === "home"
                ? "text-cyan-400"
                : theme === "dark"
                ? "text-white"
                : "text-gray-700"
            }`}
          >
            <div className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Home
              </span>
              <span className="absolute left-0 top-0 inline-block h-full w-full translate-y-full text-cyan-400 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Home
              </span>
            </div>
          </a>
          {["About", "Projects", "Pricing", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group overflow-hidden px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === item.toLowerCase()
                  ? "text-cyan-400"
                  : theme === "dark"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              <div className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  {item}
                </span>
                <span className="absolute left-0 top-0 inline-block h-full w-full translate-y-full text-cyan-400 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  {item}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
              theme === "dark"
                ? "bg-white/5 border border-white/10 hover:bg-white/10"
                : "bg-gray-100 border border-gray-200 hover:bg-gray-200"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
          <AnimatedButton text="Let's Contact" />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`relative z-50 md:hidden w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors ${
            theme === "dark"
              ? "bg-white/5 border border-white/10 hover:bg-white/10"
              : "bg-gray-100 border border-gray-200 hover:bg-gray-200"
          }`}
        >
          <div className="w-5 h-4 flex flex-col justify-between overflow-hidden">
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-white" : "bg-gray-900"
              } ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-white" : "bg-gray-900"
              } ${mobileMenuOpen ? "translate-x-full opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-white" : "bg-gray-900"
              } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-xl md:hidden overflow-y-auto transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${
          theme === "dark" ? "bg-black/95" : "bg-white/95"
        } ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] transition-opacity duration-1000 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="flex flex-col min-h-full px-6 pt-28 pb-10">
          {/* Top Section: Label + Links */}
          <div className="flex flex-col gap-6">
            <p
              className={`text-xs text-gray-500 uppercase tracking-widest mb-2 transition-all duration-700 delay-100 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Menu
            </p>

            <div
              className={`flex flex-col gap-2 transition-all duration-700 delay-200 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <MobileNavLink
                href="#"
                label="Home"
                index={0}
                active={active === "home"}
                onClick={() => setMobileMenuOpen(false)}
                theme={theme}
              />
              <MobileNavLink
                href="#about"
                label="About"
                index={1}
                active={active === "about"}
                onClick={() => setMobileMenuOpen(false)}
                theme={theme}
              />
              <MobileNavLink
                href="#projects"
                label="Projects"
                index={2}
                active={active === "projects"}
                onClick={() => setMobileMenuOpen(false)}
                theme={theme}
              />
              <MobileNavLink
                href="#pricing"
                label="Pricing"
                index={3}
                active={active === "pricing"}
                onClick={() => setMobileMenuOpen(false)}
                theme={theme}
              />
              <MobileNavLink
                href="#blog"
                label="Blog"
                index={4}
                active={active === "blog"}
                onClick={() => setMobileMenuOpen(false)}
                theme={theme}
              />
            </div>
          </div>

          {/* Bottom Section: Pushed to bottom via 'mt-auto' */}
          <div
            className={`mt-auto pt-10 border-t border-white/10 transition-all duration-700 delay-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-6">
              <p
                className={`text-sm max-w-[200px] transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Ready to start your next bold project?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors ${
                    theme === "dark"
                      ? "bg-white/5 border border-white/10 hover:bg-white/10"
                      : "bg-gray-100 border border-gray-200 hover:bg-gray-200"
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1"
                >
                  <AnimatedButton
                    text="Let's Contact"
                    className="w-full text-center justify-center"
                  />
                </div>
              </div>

              <div
                className={`flex gap-6 text-sm mt-2 transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "hover:text-white"
                      : "hover:text-gray-900"
                  }`}
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "hover:text-white"
                      : "hover:text-gray-900"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "hover:text-white"
                      : "hover:text-gray-900"
                  }`}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
