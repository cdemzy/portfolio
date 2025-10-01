"use client";
import { motion } from "framer-motion";
import Intro from "./components/Intro"
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Education from "./components/Education";
import Blog from "./components/Blog";

const sections = [
  { Component: Intro, key: 'intro' },
  { Component: Blog, key: 'blog' },
  { Component: Experience, key: 'experience' },
  { Component: Education, key: 'education' },
  { Component: Connect, key: 'connect' },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {sections.map(({ Component, key }, index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <Component />
        </motion.div>
      ))}
    </main>
  );
}
