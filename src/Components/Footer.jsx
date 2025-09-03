import React from "react";
import { Linkedin, Github, Twitter, ArrowUp } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white md:mb-10 mt-[12rem] lg:py-10 md:mt-0 md:py-10   rounded-2xl px-4 md:px-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      {/* Left: Name / Logo */}
      <div className="mb-4 md:mb-0">
        <h1
          className="text-xl md:text-2xl font-black-ops-one-regular cursor-pointer hover:text-yellow-400"
          onClick={scrollToTop}
        >
          Nishant Pathak
        </h1>
      </div>

      {/* Center: Quick Links */}
      <div className="flex flex-wrap font-iceland gap-6 mb-4 md:mb-0 text-sm md:text-base">
        <a
          href="#hero"
          className="hover:text-yellow-400 rounded-xs bg-[#0f0f0f] px-3 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-yellow-400 rounded-xs bg-[#0f0f0f] px-3 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-yellow-400 rounded-xs bg-[#0f0f0f] px-3 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="hover:text-yellow-400 rounded-xs bg-[#0f0f0f] px-3 transition-colors duration-300"
        >
          Experience
        </a>
        <a
          href="#project"
          className="hover:text-yellow-400 bg-[#0f0f0f] rounded-xs px-3 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-yellow-400 bg-[#0f0f0f] px-3 rounded-xs transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* Right: Social Icons */}
      <div className="flex mb-2 gap-5">
        <a
          href="https://www.linkedin.com/in/nishant-pathak-2001-n"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin className="w-7 text-sky-500 h-7" />
        </a>
        <a
          href="https://github.com/nishant7898"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <VscGithub className="w-7 h-7" />
        </a>
        <a
          href="https://wa.me/+917898253229"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaWhatsapp className="w-7 h-7 text-green-500" />
        </a>
        <button
          onClick={scrollToTop}
          className="hover:text-yellow-400 cursor-pointer transition-colors duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
