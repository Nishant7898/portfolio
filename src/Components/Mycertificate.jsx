import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react"; // icon
import certificate from "../assets/certificate.pdf"

const certificates = [
 
  {
    title: "Internship Certificate",
    issuer: "Oz Media Planet Company",
    date: "2025-March | August",
    description: "Certified for successfully completing 6 months internship as a Frontend Developer Intern.",
    link: "#",
  },
];

const Mycertificate = () => {
  return (
    <section id="certificates" className="py-16  px-6 rounded-2xl bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-black-ops-one-regular lg:text-5xl font-bold text-center mb-12"
      >
        Certificates
      </motion.h2>

      <div className=" max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/40 transition"
          >
            <Award className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold font-pt-serif-caption-regular">{cert.title}</h3>
            <p className="text-gray-400 font-iceland text-sm">{cert.issuer} | {cert.date}</p>
            <p className="mt-2 font-lexend-exa text-gray-300">{cert.description}</p>
            {cert.link && (
              <button
              onClick={()=>window.open(certificate,"_blank")}
                target="_blank"
                className="mt-4 inline-block font-lexend-exa text-yellow-400 hover:text-yellow-300 font-medium"
              >
                View Certificate →
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mycertificate;
