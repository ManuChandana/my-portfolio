// src/components/Hero.jsx
import React from "react";

function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center px-6">
        <h1 className="text-6xl font-bold text-cyan-500">
          Hey, I'm <span className="text-white">Voore Manuchandana</span> 👩‍💻
        </h1>
        <p className="mt-4 text-2xl text-gray-300">
          Cybersecurity Enthusiast | Tech Explorer | B.Tech (CSE) @ CBIT
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/ManuchandanaV"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/..."
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="mailto:manuclg01@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            Email Me
          </a>
        </div>
      </section>
    );
  }
  
export default Hero;
