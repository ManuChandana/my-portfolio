// src/components/Contact.jsx
import React from "react";

function Contact() {
    return (
      <section className="py-20 bg-black text-white px-6">
        <h2 className="text-4xl font-bold text-cyan-500 mb-10 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-gray-700 rounded text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-gray-700 rounded text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-4 bg-gray-700 rounded text-white"
            />
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 p-4 rounded text-black font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  

export default Contact;
