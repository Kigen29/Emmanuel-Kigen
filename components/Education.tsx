import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/MediumButton";
import {FaDownload } from "react-icons/fa6";

function handleClick() {
  const pdfUrl = "\ Kemboi Emmanuel Kigen CV.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Kemboi Emmanuel Kigen CV.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const Education = () => {
  return (
    <motion.section
      id="home"
      className="px-10 py-12 w-full mt-2 max-w-[1240px] m-auto flex flex-col items-start text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 2 }}
    >
      <p className="text-xl py-3 my-3 tracking-widest uppercase text-[#5651e5]">
        MY EDUCATION
      </p>
      <h3 className="kulim-park py-4 text-gray-600 max-w-[85%] m-auto text-justify">
        I hold a degree in Computer Science from Strathmore University. <br />
        I graduated with Second Class Honours - Upper Division. <br />
        <span className=" text-[#5651e5]">Download my CV.</span>
        <div className="hidden lg:block">
          <Button onClick={handleClick}>
            CV <FaDownload className="ml-2 text-lg" />
          </Button>
        </div>
      </h3>
    </motion.section>
  );
};

export default Education;
