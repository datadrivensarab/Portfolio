import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Predicting Toronto Crime Trends',
    description:
      'A machine learning project that predicts crime types and visualizes crime trends in Toronto through an interactive Streamlit dashboard.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Streamlit', 'Jupyter Notebook'],
    github: 'https://github.com/datadrivensarab/crimeprediction',
  },
  {
    title: 'Predicting Popularity of Online News',
    description:
      'A machine learning project that predicts the popularity of online news articles by modeling social interactions using regression algorithms.',
    tech: ['Python', 'Pandas','Scikit-learn', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/datadrivensarab/Predicting_The_Popularity_of_Online_News',
  },
  {
    title: 'Employee Attendance Insights Dashboard (PowerBI)',
    description:
      'A Power BI dashboard that analyzes employee attendance data to track work preferences, identify trends in remote work and sick leaves, and support HR planning for team engagement activities.',
    tech: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    github: 'https://github.com/datadrivensarab/Employee-Attendance-Insights-Dashboard',
  },
  {
    title: 'Airbnb Listings Analysis Dashboard (Tableau)',
    description:
      'An interactive Tableau dashboard analyzing Airbnb listings by price, bedroom count, and location to uncover revenue trends and pricing insights.',
    tech: ['Tableau', 'Mapbox', 'Excel'],
    github: 'https://github.com/datadrivensarab/AirBnB-Listing-Analysis',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">What I’ve Built</h2>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-10"
          >
            {/* Placeholder (Always Left) */}
            <div className="w-full md:w-1/2">
              <div className="h-64 w-full rounded-lg shadow-md flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100">
                <h3 className="text-xl font-semibold text-gray-700 px-6 text-center">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Description (Always Right) */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-200 text-pink-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub className="text-xl text-gray-700 hover:text-black transition" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="text-xl text-gray-700 hover:text-black transition" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
