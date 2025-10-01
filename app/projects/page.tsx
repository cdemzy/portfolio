"use client";

// import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import NotesApp from '@/public/projects/notes/MB-M1.png'
import Flappy from '@/public/projects/flappybird/Mockup-Flappy1.png'
// import Cafe from '@/public/projects/Cafe/cafe.png'
import Forum from '@/public/projects/dalForum/cover.png'
import Barter from '@/public/projects/barter/cover.png'

export const projectsData = [
    {
      title: "Flappy Bird",
      description:"An open source game project I started on January 2024 to learn unity for an upcoming course that I took on my second year in university, which involved...",
      tags: ["Unity", "C#", "Git"],
      imageUrl: Flappy,
    },
    {
      title: "Notes",
      description:"An open source project that I started on April 2024 to learn the aspects of full-stack development...",
      tags: ["React", "Tailwind", "MongoDB", "Express.js", "RESTful API", "Full-Stack Development"],
      imageUrl: NotesApp,
    },
    {
      title: "Online Barter Trader",
      description:"A semester-long academic mobile application project focused on enabling users to exchange items through a user-centric barter system...",
      tags: ["Android Studio", "Java", "Firebase", "Mobile Development"],
      imageUrl: Barter,
    },
    {
      title: "Dalhousie Forum",
      description:"An academic web application project that I developed, where users can post on a forum and message other users to engage in discussions...",
      tags: ["PHP", "MySQL", "JavaScript", "Server-side Scripting"],
      imageUrl: Forum,
    },
    
  ] as const;

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <main className="flex flex-col gap-12">
      <h1>Projects</h1>
        <ul className="grid grid-cols-1 gap-9 snap-x snap-mandatory">
          {projectsData.slice().reverse().map((project, index) => (
            <motion.li 
              key={project.title} 
              className="transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {/* <Link href={`/projects/${index}`} className="space-y-4"> */}
                <div className="aspect-video overflow-hidden rounded-md">
                  <div 
                    className="image-container relative h-full w-full bg-secondary-bg dark:bg-secondary-bg-dark overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="h-[10px] w-[10px] object-cover mt-3"
                    />
                    <div
                      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        background: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 100%)`,
                      }}
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <p className="font-medium leading-tight">{project.title}</p>
                  <p className="dark:text-secondary-foreground">{project.description}</p>
                </div>
              {/* </Link> */}
            </motion.li>
          ))}
        </ul>
    </main>
  )
}