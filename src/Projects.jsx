// src/components/Projects.jsx
import React from "react";

function Projects() {
    const projects = [
      {
        title: "Smart Home Automation",
        description:
          "An IoT system with voice control using NODEMCU ESP8266 and Alexa.",
        technologies: "Python, IoT, NODEMCU",
      },
      {
        title: "Phishing Email Detection",
        description:
          "Developed a tool to detect phishing emails using Python.",
        technologies: "Python, Machine Learning",
      },
      {
        title: "Money Tracker App",
        description: "A real-time finance monitoring web app.",
        technologies: "HTML, CSS, Node.js, MongoDB",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-800 text-white px-6">
        <h2 className="text-4xl font-bold text-cyan-500 mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                Technologies: {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default Projects;

export function Project({ title, description, technologies }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition duration-300">
      <h3 className="text-2xl text-cyan-300 font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="mt-2 text-sm text-gray-400">Technologies: {technologies}</p>
    </div>
  );
}
