import React from 'react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const techStack = ['SQL', 'Python', 'Data Analysis', 'ML', 'Deep Learning'];

  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Rectangular Profile Image */}
        <div className="w-full md:w-1/3">
          <img
            src={profileImg}
            alt="Sarabpreet"
            className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-pink-300"
          />
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            I’m Sarabpreet, a Computer Science graduate (May 2025) who believes real data work
            begins long before modeling and continues long after deployment. My focus is on solving
            meaningful problems, not just running clean code.
          </p>
          <p className="text-lg mb-4">
            I’ve worked with raw, high-stakes datasets in transportation, aerospace, and cloud
            technology, from identifying safety trends at CN to supporting data systems at
            Bombardier. These experiences taught me that true impact comes from understanding the
            data’s context and thinking critically from collection to insight.
          </p>
          <p className="text-lg mb-4">
            I’m especially drawn to machine learning, NLP, and data systems that do more than just
            predict. They clarify, guide, and create change.
          </p>
          <p className="font-semibold text-pink-500 mb-4">
            Data should feel like altitude — the higher you go, the clearer things become.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-pink-200 text-pink-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-pink-200 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
