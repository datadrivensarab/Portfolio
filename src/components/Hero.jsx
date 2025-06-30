import React from "react";
import { FaChartLine } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6
                 bg-gradient-to-br from-pink-50 via-indigo-50 to-yellow-50"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-6">
        {/* Custom inline SVG altimeter icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-pink-500 animate-pulse"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>

        <h1 className="text-5xl font-extrabold text-gray-900">
          Sarabpreet
        </h1>
      </div>

      {/* Tagline */}
      <p className="max-w-2xl text-xl text-gray-700 mb-8">
        Precision in every pixel. Intelligence in every insight.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-100 transition"
        >
          Download Résumé
        </a>
      </div>
    </section>
  );
}
