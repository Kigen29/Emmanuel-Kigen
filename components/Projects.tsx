import React, { useState } from "react";
import MediumButton from "@/components/MediumButton";
import Image from "next/image";
import eesti from "@/components/images/eesti.jpg";
import gichohi from "@/components/images/Gichohi.jpg";
import gichohiDesign from "@/components/images/GichohiDesign.jpg";
import soko from "@/components/images/soko.jpg";
import Portfolio1 from "@/components/images/Portfolio1.jpg";
import refugee from "@/components/images/homapage.jpg";
import { Card } from "@/components/ui/card";
import { FaLink } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const projectsData = [
  {
    id: 1,
    category: "development",
    image: eesti,
    title: "Eesti-Explorer ",
    link: "https://github.com/Kigen29/eesti-explorer",
    description:
      "A tourists platform that showcases different destinations in Tallinn,Estonia.",
    languages: ["NextJS", "Vercel", "Supabase", "Figma", "GitHub"],
  },
  {
    id: 2,
    category: "development",
    image: gichohi,
    title: "H.W Gichohi",
    link: "https://github.com/VirginiaWanjiru/GichohiWebsite",
    description: "H. W. GICHOHI is a leading advisory, accountancy, audit & consulting firm (AAAC).",
    languages: ["NextJS", "Freepik", "Figma", "GitHub", "Flaticons"],
  },
  {
    id: 3,
    category: "design",
    image: gichohiDesign,
    title: "H.W Gichohi",
    link: "https://www.figma.com/design/eJE7at6PrEGwvndYzSJGKx/H.W-Gichohi?node-id=13-131&node-type=frame&t=R8Om2PEC5Jai1eTo-0",
    description:
      "H. W. GICHOHI is a leading advisory, accountancy, audit & consulting firm (AAAC).",
    languages: ["Figma", "Flaticons", "Miro", "FreePik", "MyFonts"],
  },
  {
    id: 4,
    category: "design",
    image: soko,
    title: "Soko",
    link: "https://www.figma.com/design/VzwWG3ciXJOYszyUiizL01/Soko-V2?node-id=410-1342&node-type=canvas&t=L4RNN2hqKYsajWvo-0",
    description:
      "A mobile application that connects customers to shop owners via promotions",
    languages: ["Figma", "Dart", "Flutter", "Jira", "Confluence"],
  },
  {
    id: 5,
    category: "development",
    image: Portfolio1,
    title: "Portfolio Website",
    link: "https://github.com/Kigen29/My-Website",
    description:
      "My first portfolio website showcasing my achievements, interests, and proficiency",
    languages: ["HTML", "CSS", "JavaScript", "PHP","Bootstrap"],
  },
  {
    id: 6,
    category: "development",
    image: refugee,
    title: "Riziki -Refugee House Allocation",
    link: "https://github.com/Kigen29/RIZIKI-REFUGEE-HOUSE-ALLOCATION",
    description:
      "A website that allows displaced refugees find a home.",
    languages: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredDestinations =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter(
          (projects) => projects.category === selectedCategory
        );

  return (
    <section id="projects" className="px-10 py-12 flex w-full mt-2 max-w-[1240px] m-auto flex-col">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Our Projects</p>
      <div className="flex items-center justify-center py-4 flex-wrap mt-4">
        {["all", "development", "design"].map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn rounded-lg text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-black hover:bg-[#0C3D48] hover:border-2 border-[#5651e5] ${
              selectedCategory === category
                ? "text-[#0C3D48] bg-[#A4BF9D]"
                : "text-[#0C3D48] bg-[#A4BF9D]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {filteredDestinations.map(
          ({ id, image, title, link, description, languages }) => (
            <div key={id} className="p-5">
              <Card
                className="border-none rounded-3xl"
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="relative group ">
                  <div className="w-full h-[300px] overflow-hidden rounded-t-3xl">
                    <Image
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={300}
                    />
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  >
                    <FaLink className="text-white text-3xl" />
                  </a>
                </div>
                <div className="bg-white pt-5 pb-5 px-5 mt-3 rounded-b-3xl">
                  <div className="flex gap-2 items-center">
                    <p className="text-black font-medium">{title}</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-gray-400 text-sm">{description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-start px-5 pb-5 mt-3">
                    {languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-[#F65B36] text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}