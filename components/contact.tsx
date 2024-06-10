"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,38rem)] text-center scroll-mt-28 mb-36"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        
        <SectionHeading>Contact Me</SectionHeading>
      <form
        className="flex flex-col p-4 border rounded-xl mt-10 gap-3 bg-white/80 dark:bg-white/10 dark:border-white/20 dark:text-white/80 backdrop-blur-[0.05rem] dark:border-g-1"
      >
        <label className="select-none font-medium text-xl">Contact Form</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contact-input capitalize"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-input"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          className="contact-input min-h-64 max-h-72"
          required
        />
        <button
          type="submit"
          className="font-medium select-none rounded-lg bg-neutral-800 dark:bg-neutral-200 p-3 active:bg-L-2 hover:bg-L-1 dark:hover:bg-w-2 text-white dark:text-black/80"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
}
