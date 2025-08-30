import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Hire = () => {
 const scrolltocontact=()=>{
    const contact=document.getElementById("contact");
    if(contact){
      contact.scrollIntoView({behavior:"smooth"})
    }
  }
  
  return (
    <div className="fixed top-0 right-0 w-full flex justify-end p-2 md:p-10 lg:p-20 z-10">
      <button onClick={scrolltocontact} className="bg-black hover:scale-80 duration-800 transition-all flex gap-2 items-center border sm:border-2 rounded-full text-xs sm:text-sm md:text-base hover:bg-gray-600 font-lexend-exa text-white py-2 px-4 sm:py-3 sm:px-6">
        Hire Me!
        <CiMenuKebab className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

export default Hire;
