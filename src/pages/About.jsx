import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Welcome to <span className="text-cyan-400 font-semibold">CodingBolt</span> — 
          a leading cybersecurity and penetration testing company. 
          We specialize in protecting businesses from cyber threats 
          through advanced vulnerability assessments, ethical hacking, 
          and security consulting.
        </p>

        <p className="text-lg text-gray-400 mb-4">
          Our mission is to make the digital world safer by identifying, analyzing, 
          and securing vulnerabilities before malicious hackers can exploit them. 
          With our team of certified professionals, we deliver top-notch 
          penetration testing and cybersecurity training services.
        </p>

        <div className="mt-10">
          <a
            href="/services"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
