import React from "react"
import Image from "next/image";
import passportPhoto from "@/components/images/passportPhoto.jpg"

export default function Hero() {
  return (
    <section className="px-24 flex justify-between" id="home">
        <div id="words_left" className="w-[50%] pt-24">
            <h1 className="text-6xl font-bold leading-normal"><span className="underline underline-offset-4 decoration-[#F57906]">Hi</span> There, I am Emmanuel Kigen</h1>
            <div className="pr-10">
                <p className="text-3xl text-[#5651e5] leading-loose pt-3">Think it, Code it, Ship it.</p>
            </div>

        </div>
        <div className="flex justify-center mt-5 relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full md:w-96 md:h-96 w-80 h-80 m-auto hover:scale-105 ease-in duration-300 shadow-xl shadow-[#F57906] cursor-pointer">
          <Image
            src={passportPhoto}
            alt="avatar"
            layout="fill"
            objectFit="cover"
            className="flex rotate-270 mx-auto justify-center rounded-full shadow-lg shadow-gray-400"
          />
        </div>
    </section>
  )
}