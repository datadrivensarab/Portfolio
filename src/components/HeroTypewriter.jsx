// src/components/HeroTypewriter.jsx
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function HeroTypewriter() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6
                 bg-gradient-to-br from-pastel-pink via-pastel-indigo to-pastel-yellow
                 text-gray-900"
    >   
      <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
        Sarabpreet Singh Rekhi
      </h1>
      <h2 className="text-2xl sm:text-3xl text-gray-700 mb-8">
        <Typewriter
          words={[
            'I turn raw data → direction.',
            'I build dashboards that guide decisions.',
            'I build models that uncover patterns and tell stories.'
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>
      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
        >
          Download Résumé
        </a>
      </div>
    </section>
  )
}
