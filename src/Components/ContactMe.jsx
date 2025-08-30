import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="py-5 px-2 rounded-2xl md:px-12 bg-black text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-black-ops-one-regular text-center mb-12"
      >
        Contact Me
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 font-lexend-exa flex flex-col justify-center"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-yellow-400" />
            <a href="mailto:nishantpathak271@gmail.com">
              nishantpathak271@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-400" />
            <a href="tel:+917898253229">+91 78982 53229</a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-red-400" />
            <p>Indore, India</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/nishant-pathak-2001-n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin className="w-7 text-sky-500 h-7" />
            </a>
            <a
              href="https://github.com/nishant7898"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <VscGithub className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/+917898253229"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp className="w-7 text-green-500 h-7" />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          action="https://formsubmit.co/nishantpathak271@gmail.com"
          method="POST"
          className="bg-[#0f0f0f] w-full rounded-2xl shadow-lg space-y-2 flex flex-col justify-center p-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Message from Portfolio Contact Form!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_replyto" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full font-lexend-exa bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 py-3 rounded-lg font-semibold text-lg hover:opacity-90"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
