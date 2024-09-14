import React from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const About = () => {
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
        ABOUT ME
      </p>
      <h2 className="text-3xl text-gray-700">I am a</h2>
      <h1 className="py-3 fjalla-one md:text-3xl text-md text-[#5651e5]">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "React Js Developer",
              "Next Js Developer",
              "UI/UX Designer",
              "User Researcher",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
          }}
        />
      </h1>
      <p className="kulim-park py-4 text-gray-600 max-w-[85%] m-auto text-justify">
        As a dedicated software developer with international experience from
        Estonia and Kenya. I am passionate about building innovative solutions
        that make a lasting impact. My expertise spans technologies like React
        NextJS Django and Python. I have successfully delivered projects that
        solve complex problems and create value for users. If you are looking
        for a qualified developer to bring your ideas to life and build
        scalable and high-performance applications then let us connect. Reach out to me
        via WhatsApp or Phone or even Twitter and lets create something exceptional
        together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6">
        <a
          href="https://x.com/Kigen__?t=F2hnc6I29ZfUCFUeRaGYMA&s=09"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <FaTwitter className="md:text-2xl text-md" />
        </a>
        <a
          rel="noopener noreferrer"
          href="tel:254721383087"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <FiPhoneCall className="md:text-2xl text-md" />
        </a>
        <a
          href="https://wa.me/254721383087"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <FaWhatsapp className="md:text-2xl text-md" />
        </a>
      </div>
    </motion.section>
  );
};

export default About;
