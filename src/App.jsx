import React from 'react'
import Navbar from './components/Navbar'
import HeroTypewriter from './components/HeroTypewriter'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />

      {/* Hero with animated sunset background */}
      <div className="sunset-gradient text-white">
        <HeroTypewriter />
      </div>

      {/* Rest of the site with static pastel background */}
      <div className="pastel-background">
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sarabpreet. All rights reserved.
        </footer>
      </div>
    </div>
  );
}