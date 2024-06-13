"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-20 sm:scroll-mt-24 flex flex-col justify-center">
      <SectionHeading>My experience</SectionHeading>

      <div className="flex flex-row gap-10 justify-center items-center">

          <div className="bg-gray-200 dark:bg-white/10 dark:text-white/90 h-[360px] w-1 rounded-full hidden sm:block dark:bg-opacity-20 mr-[62px]"></div>

          <ul className="grid grid-cols-1 gap-10">
            {experiencesData.map((item, index) => (
            <li key={index} className="bg-neutral-100/70 dark:bg-white/10 dark:text-white/80 rounded-lg shadow-md p-4 flex flex-row gap-4 items-center relative"
            >
              <BsTriangleFill className="absolute text-neutral-300 dark:text-white hidden sm:block -rotate-90 left-[-14px] -z-10"/>
              <Image src={item.imageUrl} alt='Company Logo' className="rounded-full w-[75px] h-[75px]"/>
              
              <span className="text-[30pt] absolute bg-white rounded-full p-4 shadow-md -left-[140px] dark:bg-[#2b303c] dark:text-white/80 items-center justify-center text-center hidden sm:flex">{item.icon}</span>
              <span>
              <h3 className="font-semibold">{item.title}</h3>
              <h3 className="text-sm text-black dark:text-white/70 capitalize">{item.place}</h3>
              <p className="text-sm text-gray-700 dark:text-white/60 !mt-0">{item.location}</p>
              <p className="text-sm text-gray-700 dark:text-white/50 !mt-0">{item.date}</p>
              </span>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        </div>
    </section>
  );
}
