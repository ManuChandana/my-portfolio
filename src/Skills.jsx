// src/components/Skills.jsx
import React from "react";

function Skills() {
    const skills = [
      { title: "Programming", details: "JavaScript, Python" },
      { title: "Web Development", details: "HTML, CSS, React.js, Django" },
      { title: "Cybersecurity", details: "Kali Linux, Wireshark, Metasploit" },
      { title: "Machine Learning", details: "Numpy, Pandas, Matplotlib" },
      { title: "Databases", details: "MySQL, MongoDB" },
      { title: "Version Control", details: "Git, GitHub" },
    ];
  
    return (
      <section className="py-20 bg-black text-white px-6">
        <h2 className="text-4xl font-bold text-cyan-500 mb-10 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-cyan-300">{skill.title}</h3>
              <p className="mt-2 text-gray-400">{skill.details}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

export default Skills;

export function Skill({ title, items }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <h3 className="text-xl text-cyan-300 font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{items}</p>
    </div>
  );
}
