import React from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- Import Images ---
import A from "../assets/Projectimage/project1.png";
import B from "../assets/Projectimage/project1a.png";
import C from "../assets/Projectimage/project1b.png";
import D from "../assets/Projectimage/project1c.png";
import E from "../assets/Projectimage/project1d.png";
import F from "../assets/Projectimage/project1f.png";

import G from "../assets/Projectimage/project2a.png";
import H from "../assets/Projectimage/project2b.png";
import I from "../assets/Projectimage/project2d.png";
import J from "../assets/Projectimage/project2e.png";
import K from "../assets/Projectimage/project3f.png";
import L from "../assets/Projectimage/project3g.png";
import M from "../assets/Projectimage/project3h.png";

// ✅ Cube component with images
const Cube = ({ images }) => {
  const cubeRef = React.useRef();
  const imgs = [...images];
  while (imgs.length < 6) {
    imgs.push(images[imgs.length % images.length]); 
  }
  const textures = useLoader(THREE.TextureLoader, imgs);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={tex}
          emissiveIntensity={1}
        />
      ))}
    </mesh>
  );
};

// --- Projects Data ---
const projects = [
  {
    title: "Weather App",
    description: "Fetches real-time weather using OpenWeather API.",
    tech: ["React", "API", "Tailwind"],
    img: [K, L, M],
    link: "weather-api-try.netlify.app",
  },
  {
    title: "Food-Store",
    description: "Food delivery app with cart & payments.",
    tech: ["React", "Tailwind"],
    img: [G, H, I, J],
    link: "flavoro-food-store.netlify.app",
  },
  {
    title: "Cloth E-commerce-store",
    description: "A responsive e-commerce app built with React & Tailwind.",
    tech: ["React", "Tailwind", "Redux", "Stripe"],
    img: [A, B, C, D, E, F],
    link: "gurjar-collection-store.netlify.app",
  },
];

const MyProject = () => {
  return (
    <section
      id="project"
      className="py-10 px-4 sm:px-6 md:px-10 bg-black md:rounded-3xl rounded-3xl text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-black-ops-one-regular text-center mb-12"
      >
        My Projects
      </motion.h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0f0f0f] hover:shadow-yellow-500/40 rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Cube Visual */}
            <div className="h-56 sm:h-64 w-full">
              <Canvas className="!w-full !h-full">
                <ambientLight />
                <directionalLight position={[2, 2, 2]} />
                <Cube images={project.img} />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>

            {/* Project Info */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-iceland font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 font-lexend-exa mt-2 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-red-500 to-gray-500 rounded-full font-pt-serif-caption-regular"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-xl w-fit ml-4 sm:ml-5 mb-3 font-lexend-exa text-sm sm:text-base bg-gradient-to-r from-yellow-500 to-indigo-500"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-lexend-exa py-6 text-gray-400 mt-8 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
      >
        Each project improved my skills and pushed my limits. Today, I can
        confidently say I am capable of building even better, faster, and more
        polished solutions.
      </motion.p>
    </section>
  );
};

export default MyProject;
