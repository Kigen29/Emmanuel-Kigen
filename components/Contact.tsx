import React from "react";
import Image from "next/image";
import instagram from "@/components/images/Instagram.png";
import github from "@/components/images/Github.png";
import linkedin from "@/components/images/Linkedin.png";

export default function Contact() {
  return (
    <section className="px-10 py-12 flex w-full mt-2 max-w-[1240px] m-auto flex-col" id="contact">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact Me
        </p>

      <div className="w-full p-2 mt-3 px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grid Section */}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={instagram} alt="Instagram" width={50} height={50} />
            <h3 className="mt-2">Instagram</h3>
          </div>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={github} alt="GitHub" width={50} height={50} />
            <h3 className="mt-2">GitHub</h3>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <Image src={linkedin} alt="LinkedIn" width={50} height={50} />
            <h3 className="mt-2">LinkedIn</h3>
          </div>
        </a>

        {/* Contact Form Section */}
        <div className="flex align-center col-span-1 md:col-span-3">
          <form className="bg-white p-6 shadow-xl rounded-xl w-full max-w-full mx-auto">
            <h3 className="text-xl mb-4">Get in Touch</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 p-2 rounded-lg"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#5651e5] text-white p-3 rounded-lg hover:bg-[#4a4aef] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
