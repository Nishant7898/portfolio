import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const scrolltocontact=()=>{
    const contact=document.getElementById("contact");
    if(contact){
      contact.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <section id="about" className="bg-[#0f0f0f] rounded-3xl sm:rounded-3xl md:rounded-[50px] text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-2 md:px-10 lg:px-20">
      <div
     
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          className="text-2xl font-black-ops-one-regular sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8"
        >
          About Me
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          className="text-sm font-iceland sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 md:px-8 lg:px-0 max-w-4xl mx-auto"
        >
          A{" "}
          <span className="text-cyan-400 font-medium">Frontend Developer</span>{" "}
          who loves building modern, responsive, and user-friendly web
          applications. I work mainly with{" "}
          <span className="text-yellow-400 font-medium">React</span>,{" "}
          <span className="text-blue-400 font-medium">Redux</span>, and{" "}
          <span className="text-green-400 font-medium">Tailwind CSS</span>.
        </motion.p>

        {/* Skills / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="grid grid-cols-1 font-lexend-exa sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10"
        >
          {[
            {
              title: "Frontend Development",
              desc: "Creating modern, interactive UIs using React & Tailwind.",
              color: "cyan",
            },
            {
              title: "State Management",
              desc: "Managing app state with Redux Toolkit & Context API.",
              color: "blue",
            },
            {
              title: "UI/UX Design",
              desc: "Building user-friendly and responsive designs.",
              color: "green",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-[#1a1a1a] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl 
                         shadow-lg hover:shadow-${skill.color}-500/30 
                         transition-all duration-300 hover:scale-105 
                         border border-gray-800 hover:border-${skill.color}-500/50
                         group cursor-pointer`}
            >
              <h3
                className={`text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 
                             group-hover:text-${skill.color}-400 transition-colors duration-300`}
              >
                {skill.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <button onClick={scrolltocontact}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 
                           text-white px-6 font-lexend-exa sm:px-8 py-2 sm:py-3 rounded-full 
                           text-sm sm:text-base font-medium transition-all duration-300 
                           hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
