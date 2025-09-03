import React from "react";
import { motion } from "framer-motion";
import MyProject from "./Myproject";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 } // delay between each word popping
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Tiltedtext = () => {
  const scrolltoproject=()=>{
    const section=document.getElementById("project");
    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }
  const scrolltocontact=()=>{
    const contact=document.getElementById("contact");
    if(contact){
      contact.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <motion.div id="hero"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="gap-6 flex flex-col py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
    >
      <span className="flex flex-wrap items-center gap-3 mb-4 sm:mb-5">
        <p className="text-3xl sm:text-4xl md:text-6xl mt-2 sm:mt-3 md:mt-5 w-full sm:w-[600px] md:w-[800px] font-black-ops-one-regular text-gray-400 uppercase dotted-gradient-text">
          Nishant Pathak
        </p>
      </span>

      {/* Staggered popup for role text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap gap-2 text-base sm:text-lg md:text-[30px] mt-3 sm:mt-4 md:mt-5 text-white w-full sm:w-[600px] md:w-[800px] font-iceland"
      >
        {["React Enthusiast", "| Responsive Design", "| UI/UX Design"].map((word, i) => (
          <motion.span key={i} variants={itemVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <span className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 mt-10 sm:mt-14 md:mt-20 font-lexend-exa ml-0 sm:ml-10 md:ml-20">
        <button onClick={scrolltoproject}
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:scale-80 duration-800 transition-all
                     px-1 sm:px-1 cursor-pointer md:px-6 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg"
        >
          View My Project
        </button>

        <button onClick={scrolltocontact}
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer
                     px-5 sm:px-5 md:px-6  hover:scale-80 duration-800 transition-all py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg"
        >
          Contact Me!
        </button>
      </span>
    </motion.div>
  );
};

export default Tiltedtext;
