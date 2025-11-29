import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function AnimatedButton({
  text = "Let's Contact",
  className = "",
}) {
  const { theme } = useTheme();

  return (
    <button
      className={`
        relative group overflow-hidden rounded-full
        px-6 py-2.5 font-medium
        transition-colors duration-500
        hover:border-transparent
        ${theme === "dark"
          ? "border border-white/20 bg-white/5 text-white"
          : "border border-gray-300 bg-gray-100 text-gray-900"
        }
        ${className}
      `}
    >
      {/* --- Background Animation Layer --- */}
      <span
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-cyan-400 rounded-full
          w-0 h-0
          transition-all duration-500 ease-in-out
          group-hover:w-56 group-hover:h-56
        "
      ></span>

      {/* --- Text Animation Layer --- */}
      <div className="relative z-10 overflow-hidden">
        {/* Original Text: Slides Up */}
        <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full group-hover:text-black">
          {text}
        </span>

        {/* Duplicate Text: Slides Up from Bottom */}
        <span className="absolute left-0 top-0 inline-block h-full w-full translate-y-full text-black transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          {text}
        </span>
      </div>
    </button>
  );
}
