"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { MdOutlineEmail } from "react-icons/md";

import memoji from '@/public/other-images/me-moji.png';
import handWave from '@/public/emojis/hand_emoji.png';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] mt-12 text-center scroll-mt-[24rem] sm:scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
          >
            <Image
              src={memoji}
              alt="Memoji"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-52 w-52 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src={handWave}
              alt="Hand Waving Emoji"
              width="60"
              height="60"
            />
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Charles.</span> A{" "}
        <span className="font-bold">Software Developer</span> and a{" "}
        <span className="font-bold">Computer Science Student</span> at{" "}
        <span className="font-bold">Dalhousie University</span>
        , and I enjoy building sites & apps!
      </motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-100 border dark:bg-gradient-to-tr dark:from-purple-800 dark:hover:to-white/30 dark:border-black/20 transition-colors"
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        </motion.div>
        
        <span className="flex gap-2">
          <a
            className="bg-white hover:border-black/50 p-4 text-gray-700 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-transform duration-400 cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/60"
            href="mailto:cdelacruz@dal.ca"
          >
            <MdOutlineEmail />
          </a>

          <a
            className="bg-white hover:border-black/50 p-4 text-gray-700 flex items-center gap-2 text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-transform duration-400 cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/60"
            href="https://linkedin.com/in/cdemzyy"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white hover:border-black/50 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-transform duration-400 cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/60"
            href="https://github.com/cdemzy"
            target="_blank"
          >
            <FaGithub />
          </a>
        </span>
      </motion.div>
    </section>
  );
}