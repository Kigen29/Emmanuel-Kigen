import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import cloudComputingImg from "@/components/images/cloudcomputing.png";
import machineLearningImg from "@/components/images/machinelearning.png";
import aiRoboticsImg from "@/components/images/robotics.png";
import testingImg from "@/components/images/softwaretesting.png";
import gameDesignImg from "@/components/images/unrealengine.png";

const interests = [
  {
    src: cloudComputingImg,
    title: "Cloud Computing",
    description:
      "I am interested in cloud computing because it enables scalable, flexible, and cost-efficient solutions for managing and processing data. It is crucial for developing robust applications and services, allowing me to leverage powerful infrastructure without the need for physical hardware.",
  },
  {
    src: machineLearningImg,
    title: "Machine Learning",
    description:
      "Machine learning fascinates me due to its potential to analyze and interpret complex data patterns. It is a powerful tool for building intelligent systems that can make predictions and improve over time, which aligns with my passion for solving problems and creating impactful solutions.",
  },
  {
    src: aiRoboticsImg,
    title: "AI and Robotics",
    description:
      "AI and robotics captivate me because they represent the frontier of technology, combining advanced algorithms with physical systems to create autonomous machines and smart systems. The potential applications, from enhancing daily life to solving complex challenges, drive my enthusiasm for these fields.",
  },
  {
    src: testingImg,
    title: "Testing",
    description:
      "I am drawn to testing as it ensures the reliability and quality of software. It is a critical step in the development process, allowing me to identify and fix issues before deployment, which ultimately enhances user experience and system stability.",
  },
  {
    src: gameDesignImg,
    title: "Game Design",
    description:
      "Game design excites me because it merges creativity with technology, allowing me to craft immersive and interactive experiences. The process of designing and developing games taps into my passion for storytelling, problem-solving, and creating engaging digital environments.",
  },
];

export default function Interests() {
  return (
    <section
      className="px-10 py-12 flex w-full mt-2 max-w-[1240px] m-auto flex-col"
      id="interests"
    >
      <p className="text-xl tracking-widest uppercase text-[#5651e5] mb-6">
        My Interests
      </p>
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {interests.map((interest, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center p-6 shadow-xl rounded-xl h-full">
                  <div className="relative w-40 h-40 mb-4">
                    <Image
                      src={interest.src}
                      alt={interest.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-center text-sm">{interest.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}