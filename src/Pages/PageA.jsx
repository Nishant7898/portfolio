import React from "react";
import Tiltedtext from "../Components/Tiltedtext";
import bgphoto from "../assets/bg.png";
import { motion } from "framer-motion";

const PageA = () => {
  return (
    <div   className="h-screen px-2 sm:px-1 md:px-5 py-6 sm:py-8 md:py-10 bg-white items-center">
      <div className="h-full bg-black justify-between rounded-3xl py-6 sm:py-8 md:py-10 px-4 sm:px-1 md:px-10 flex flex-row">
        {/* Text always on left */}
        <div className="flex-1 flex items-center">
          <Tiltedtext />
        </div>

        {/* Image always on right */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
          className="flex-1"
          style={{
            backgroundImage: `url(${bgphoto})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default PageA;
