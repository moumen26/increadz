import React from "react";
import { useTheme } from "../context/ThemeContext";

// Inline SVG for the Arrow
const ArrowRight = () => (
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
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function HeroButton({ text = "Let's Contact" }) {
  const { theme } = useTheme();

  return (
    <button
      className={`
        relative group
        flex items-center gap-3
        px-8 py-3 rounded-full
        font-semibold text-lg
        overflow-hidden
        transition-all duration-300
        hover:scale-105 active:scale-95
        ${theme === "dark" ? "bg-white text-black" : "bg-gray-900 text-white"}
      `}
    >
      {/* --- Background Animation (The "Before" Effect) --- */}
      {/* Starts as w-0 h-0 in center, expands to fill button on hover */}
      <span
        className="
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2 
          bg-cyan-400 rounded-full 
          w-0 h-0 
          transition-all duration-500 ease-in-out 
          group-hover:w-96 group-hover:h-96
        "
      ></span>

      {/* --- Content Layer (Z-10 to sit ON TOP of the cyan bubble) --- */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Text Animation Wrapper */}
        <div className="relative overflow-hidden h-7 flex items-center">
          {/* 1. Original Text: Slides Up */}
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            {text}
          </span>

          {/* 2. Duplicate Text: Slides In from Bottom */}
          <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            {text}
          </span>
        </div>

        {/* Arrow Icon: Rotates 45deg on hover */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}>
          <ArrowRight />
        </div>
      </div>
    </button>
  );
}
