import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // timeline icon

const Experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Oz Media Planet Company",
    date: "2025 | March – 2025 | August",
    description:
      "Built modern, responsive web apps with React, Tailwind & APIs.",
  },
  {
    role: "Personal Projects",
    company: "Self-Driven",
    date: "2025 | july – august",
    description: "Worked on independent projects to sharpen development skills.",
    projects: [
      {
        name: "Cloth Store Website",
        tech: ["React", "TailwindCSS", "Redux", "Stripe"],
        description:
          "Developed a fully functional e-commerce web app with product catalog, cart system, responsive UI, and payment flow. Focused on clean UI/UX and speed — I can confidently say I built it better than most existing templates.",
      },
    ],
  },
];

const MyExperience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-4 rounded-2xl bg-black text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-black-ops-one-regular"
      >
        My Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative bg-[#0f0f0f] p-5 rounded-2xl border-l border-gray-600 max-w-3xl mx-auto px-3">
        {Experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="mb-10 ml-6"
          >
            {/* Timeline Icon */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full">
              <Briefcase className="w-4 h-4 text-black" />
            </span>

            {/* Experience Info */}
            <h3 className="text-xl font-lexend-exa font-semibold">
              {exp.role}
            </h3>
            <p className="text-gray-400 font-iceland text-sm">
              {exp.company} | {exp.date}
            </p>
            <p className="mt-2 font-pt-serif-caption-regular text-gray-300">
              {exp.description}
            </p>

            {/* Projects (if any) */}
            {exp.projects && (
              <a
                href="cloth-canvas.netlify.app"
                className="mt-2 space-y-2"
              >
                {exp.projects.map((proj, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: j * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-4 rounded-xl border mt-3 border-gray-700 shadow-md hover:shadow-yellow-500/20 transition"
                  >
                    <h4 className="text-lg font-black-ops-one-regular font-semibold text-yellow-400">
                      {proj.name}
                    </h4>
                    <p className="text-sm font-iceland text-gray-400">
                      Tech: {proj.tech.join(", ")}
                    </p>
                    <p className="mt-2 font-lexend-exa text-gray-300">
                      {proj.description}
                    </p>
                  </motion.div>
                ))}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
