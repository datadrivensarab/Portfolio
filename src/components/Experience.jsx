import React from 'react';
import { FaTrain, FaPlane, FaCloud } from 'react-icons/fa'; // Example icons

const experiences = [
  {
    company: 'CN',
    role: 'Safety Data Analysis Intern',
    period: 'May 2024 – Aug 2024',
    description:
      'Built scalable analytics tools and dashboards at CN to automate trip analysis and enhance data processing efficiency by over 40%.',
    icon: <FaTrain className="text-pink-500 text-3xl" />,
  },
  {
    company: 'Bombardier',
    role: 'Project Engineering Intern',
    period: 'May 2022 – Dec 2022',
    description:
      'Modernized internal tools and automated workflows at Bombardier, improving task management and user experience across engineering teams.',
    icon: <FaPlane className="text-pink-500 text-3xl" />,
  },
  {
    company: 'Sherweb',
    role: 'M365 Premier Technical Advisor IV',
    period: 'Feb 2019 – March 2022',
    description:
      'Streamlined Microsoft Teams support and coordinated advanced issue resolution at Sherweb, boosting enterprise client satisfaction by 20%.',
    icon: <FaCloud className="text-pink-500 text-3xl" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ animation: `fadeInUp 0.3s ease ${index * 0.2 + 0.2}s forwards`, opacity: 0 }}
          >
            <div className="mb-4">{exp.icon}</div>
            <h3 className="text-xl font-semibold mb-1">
              {exp.role} <span className="text-gray-500">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2 text-gray-700 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
