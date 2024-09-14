import React from "react";
import Link from "next/link";
import Button from "@/components/MediumButton";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    const pdfUrl = "/Kemboi Emmanuel Kigen CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kemboi Emmanuel Kigen CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-[#89CFF0] ml-6 mr-6 mt-6 rounded-lg drop-shadow-2xl">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-[#F65B36] ">
            Kigen.
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#F65B36] p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-[#F2A615]"
        >
          {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>

        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:w-auto`}>
          <ul className="lg:flex lg:space-x-8 text-[#EDE5D8] mt-4 lg:mt-0">
            {["Home", "About","Education","Languages","Interests","Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-3 rounded hover:bg-[#F65B36] lg:hover:bg-transparent lg:hover:text-[#F2A615] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#F65B36] after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <Button onClick={handleClick}>
            CV <FaDownload className="ml-2 text-lg" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
