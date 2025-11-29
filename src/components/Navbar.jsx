import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

// --- Mobile Link Component ---
const MobileNavLink = ({ href, label, index, active, onClick }) => {
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
            active ? "text-cyan-400" : "text-white/80"
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
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-auto bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
      >
        <span className="relative z-50 text-2xl font-semibold tracking-tight mix-blend-difference text-white">
          increadz.
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-black/20 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          <a
            href="#"
            className={`relative group overflow-hidden px-5 py-2 rounded-full text-sm font-medium ${
              active === "home" ? "text-cyan-400" : "text-white"
            } transition-all`}
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
              className={`relative group overflow-hidden px-5 py-2 rounded-full text-sm font-medium ${
                active === item.toLowerCase() ? "text-cyan-400" : "text-white"
              } transition-all`}
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

        <div className="hidden sm:block">
          <AnimatedButton text="Let's Contact" />
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          <div className="w-5 h-4 flex flex-col justify-between overflow-hidden">
            <span
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "translate-x-full opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-y-auto transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${
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
              />
              <MobileNavLink
                href="#about"
                label="About"
                index={1}
                active={active === "about"}
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="#projects"
                label="Projects"
                index={2}
                active={active === "projects"}
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="#pricing"
                label="Pricing"
                index={3}
                active={active === "pricing"}
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                href="#blog"
                label="Blog"
                index={4}
                active={active === "blog"}
                onClick={() => setMobileMenuOpen(false)}
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
              <p className="text-gray-400 text-sm max-w-[200px]">
                Ready to start your next bold project?
              </p>
              <div onClick={() => setMobileMenuOpen(false)}>
                <AnimatedButton
                  text="Let's Contact"
                  className="w-full text-center justify-center"
                />
              </div>

              <div className="flex gap-6 text-gray-500 text-sm mt-2">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
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
