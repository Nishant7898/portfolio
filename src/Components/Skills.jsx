import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";
import {
  TbBrandRedux,
  TbBrandThreejs,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { SiNetlify } from "react-icons/si";

const icons = [
  {
    name: "React.js",
    icon: (
      <FaReact className="text-sky-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-spin [animation-duration:3s]" />
    ),
    level: "Intermediate",
    color: "sky",
  },
  {
    name: "JavaScript",
    icon: (
      <IoLogoJavascript className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-pulse" />
    ),
    level: "Intermediate",
    color: "yellow",
  },
  {
    name: "Redux",
    icon: (
      <TbBrandRedux className="text-purple-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:animate-bounce" />
    ),
    level: "Intermediate",
    color: "purple",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <RiTailwindCssFill className="text-cyan-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Intermediate",
    color: "cyan",
  },
  {
    name: "HTML5",
    icon: (
      <TiHtml5 className="text-orange-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Advanced",
    color: "orange",
  },
  {
    name: "CSS3",
    icon: (
      <BsFiletypeCss className="text-blue-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Advanced",
    color: "blue",
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Intermediate",
    color: "gray",
  },
  {
    name: "Netlify",
    icon: (
      <SiNetlify className="text-teal-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Intermediate",
    color: "teal",
  },
  {
    name: "Three.js",
    icon: (
      <TbBrandThreejs className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Beginner",
    color: "gray",
  },
  {
    name: "Framer Motion",
    icon: (
      <TbBrandFramerMotion className="text-pink-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    ),
    level: "Intermediate",
    color: "pink",
  },
];



const Skills = () => {
  return (
    <div id="skills" className="bg-black rounded-3xl  sm:rounded-2xl md:rounded-3xl lg:rounded-[50px] px-4 sm:px-6 md:px-10 lg:px-20 py-2 sm:py-8 md:py-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center font-black-ops-one-regular py-4 sm:py-5 md:py-6 text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
      >
        My Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-gray-400 font-lexend-exa text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10"
      >
        Technologies and tools I work with
      </motion.p>

      <div className="grid grid-cols-2 font-iceland sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 place-items-center">
        {icons.map((skill, index) => (
          <motion.div
          key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          
          
            className={`bg-[#0f0f0f] border border-gray-800 hover:border-${skill.color}-500/50 
                       text-white hover:shadow-lg hover:shadow-${skill.color}-500/40 
                       flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center 
                       rounded-lg sm:rounded-xl md:rounded-2xl 
                       h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] 
                       w-full p-2 sm:p-3 md:p-4
                       transition-all duration-300 group cursor-pointer`}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-100 text-xs sm:text-sm md:text-base lg:text-lg mb-1">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 sm:mt-10 md:mt-12 text-center"
      ></motion.div>
    </div>
  );
};

export default Skills;
