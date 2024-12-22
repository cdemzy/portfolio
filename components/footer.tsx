import React from 'react'

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className='bg-neutral-800 p-4 flex justify-center'>
            
        <span className="flex gap-4">

            <a
            className="p-4 flex items-center gap-2 text-[1.35rem] w-15 h-15 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-transform duration-400 cursor-pointer borderBlack bg-white/10 hover:bg-white/20 text-white/60"
            href="https://linkedin.com/in/cdemzyy"
            target="_blank"
            >
            <BsLinkedin />
            </a>

            <a
            className="p-4 flex items-center gap-2 text-[1.35rem] w-15 h-15 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-transform duration-400 cursor-pointer borderBlack bg-white/10 hover:bg-white/20 text-white/60"
            href="https://github.com/cdemzy"
            target="_blank"
            >
            <FaGithub />
            </a>
        </span>
    </footer>
  )
}
