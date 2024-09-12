import React from "react";
import Link from "next/link";
import Button from "@/components/MediumButton";
import { FaBars, FaDownload } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState} from "react";

export default function Navbar() {

  function handleClick(){
    const pdfUrl = '.\..\Kemboi Emmanuel Kigen CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Kemboi Emmanuel Kigen CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 };

 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-[#314933] ml-6 mr-6 mt-6 rounded-lg drop-shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-[#F2A615] from-[#F65B36] font-extrabold text-xl relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            Natalie.
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#F65B36] rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F2A615] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className=" text-[#EDE5D8] flex flex-col p-4 lg:p-0 mt-4 border border-orange-100 rounded-lg lg:flex-row lg:space-x-8 lg:gap-12 rtl:space-x-reverse lg:mt-0 lg:border-0">
            <li>
              <Link
                href="#hero"
                className="block py-2 px-3  lg:bg-transparent lg:p-0 rounded hover:bg-[#F65B36] relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F2A615] "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#talents"
                className="block py-2 px-3  rounded hover:bg-[#F65B36] relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F2A615] lg:p-0 "
              >
                Talents
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3  rounded hover:bg-[#F65B36] relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F2A615] lg:p-0 "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-2 px-3  rounded hover:bg-[#F65B36] relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F2A615] lg:p-0 "
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3  rounded hover:bg-[#F65B36] relative after:absolute after:bg-[#F65B36] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#F2A615] lg:p-0 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CV Button */}
        <div className="hidden lg:block">
          <Button onClick={handleClick}>
            CV <FaDownload className="ml-2 text-lg" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
