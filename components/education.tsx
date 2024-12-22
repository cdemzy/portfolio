"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="scroll-mt-20 sm:scroll-mt-24 flex flex-col justify-center">
      <SectionHeading>My Education</SectionHeading>

      <div className="flex flex-row gap-10 justify-center items-center">
        
          <ul className="grid grid-cols-1 gap-10">
            {educationData.map((item, index) => (
            <li key={index} className="bg-neutral-100/70 dark:bg-white/10 dark:text-white/80 rounded-lg shadow-md p-4 flex flex-row gap-4 items-center relative"
            >
              
              <Image src={item.imageUrl} alt='Company Logo' className="rounded-full w-[75px] h-[75px]"/>
              
              <span>
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <h3 className="text-sm text-black dark:text-white/70">{item.place}</h3>
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
