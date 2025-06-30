import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "What I’ve Built", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="text-pink-600 text-xl font-extrabold tracking-tight">
          &lt;Sarabpreet/&gt;
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-pink-600 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2 text-center shadow">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-800 font-medium hover:text-pink-600 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
