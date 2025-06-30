import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto py-20 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg font-semibold text-pink-600 mb-6">
        Got something exciting? Looking to collaborate? Or just want to say hi? Drop a line and if you're around, let's grab a coffee!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-700 text-lg">
        <a
          href="mailto:sarabpreetsinghr@yahoo.com"
          className="flex items-center gap-2 hover:text-pink-500 transition"
        >
          <FaEnvelope /> sarabpreetsinghr@yahoo.com
        </a>
        <a
          href="tel:+15149625038"
          className="flex items-center gap-2 hover:text-pink-500 transition"
        >
          <FaPhone /> +1 514 962 5038
        </a>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt /> Montreal, QC
        </div>
      </div>
    </section>
  )
}
