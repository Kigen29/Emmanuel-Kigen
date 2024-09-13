import React from "react"
import Image from "next/image";
import html from "@/components/images/HTML.png";
import css from "@/components/images/CSS.png";
import javascript from "@/components/images/JS.png";
import react from "@/components/images/REACT.png";
import tailwind from "@/components/images/Tailwind.svg";
import nextjs from "@/components/images/NextJS.png";
import supabase from "@/components/images/Supabase.png";
import firebase from "@/components/images/Firebase.png";
import { motion } from "framer-motion";

  const Interests = () => {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div id="skills" className="w-full  p-2 mt-2 px-24">
          <div className="max-w-[1240px] m-auto flex mx-auto  flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
              Skills
            </p>
            <h2 className="py-4">What I can do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-cols-1 gap-8">
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={supabase} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>SUPABASE</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={firebase} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>FIREBASE</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={html} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={css} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={javascript} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>JAVASCRIPT</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={react} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>REACT JS</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={nextjs} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>NEXT JS</h3>
                  </div>
                </div>
              </div>
  
              <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300 cursor-pointer">
                <div className="grid grid-cols-2 gap-4  justify-center items-center">
                  <div className="m-auto">
                    <Image src={tailwind} alt="html" width={50} height={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>TAILWIND CSS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  export default Interests;
