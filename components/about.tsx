"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className="max-w-[45rem] text-center leading-8 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-7">
        <span className=''> I&apos;m currently a <span className="italic">CO-OP</span> student that is looking for a career in tech, primarily in the area of Software Development.{" "}</span><span className='underline underline-offset-4'>I have experience on collaborating with a development team</span> and <span className="font-bold">I&apos;m currently seeking internship opportunities</span> to further develop my skills and contribute to meaningful projects. My core stack is{" "}<span className="font-medium">React, Next.js, Tailwind, and Node.js.{" "}</span>
        I am also familiar with TypeScript. I am always looking to
        learn new technologies.
      </p>

      <p className="mb-7">
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, and working out.{" "}
        <span className="font-medium"></span> I am always
        broadening my tech skills and trying learning new tools, especially for{" "}
        <span><span className="font-medium">Web Development</span>, <span className="font-medium">iOS App Development</span>,<span className="font-base"> as well as </span> <span className="font-medium">Game Development</span></span>.
      </p>

    </motion.section>
  );
}
