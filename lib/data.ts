import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { TbBrandUnity   } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";

import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";
import { IoBulb } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

import Dalhousie from '@/public/general-logos/dal-logo.png'
import DalYellow from '@/public/general-logos/dalYellow.png'
import CharlesStudio  from '@/public/general-logos/charlestudio.png'
import NotesApp from '@/public/projects/notes/Cover.png'
import Flappy from '@/public/projects/flappybird/Cover.png'
import Cafe from '@/public/projects/Cafe/cafe.png'


export const links = [
    {
      name: "Home",
      hash: "#home",
      icon: React.createElement(IoHome)
    },
    {
      name: "About",
      hash: "#about",
      icon: React.createElement(IoPerson)
    },
    {
      name: "Projects",
      hash: "#projects",
      icon: React.createElement(IoFolderOpen)
    },
    {
      name: "Skills",
      hash: "#skills",
      icon: React.createElement(IoBulb)
    },
    {
      name: "Experience",
      hash: "#experience",
      icon: React.createElement(IoBriefcase)
    },
    {
      name: "Contact",
      hash: "#contact",
      icon: React.createElement(IoMail)
    },
] as const;

export const experiencesData = [
    {
      title: "Software Developer",
      place: "Freelance", 
      location: "Remote",
      description:"",
      icon: React.createElement(CgWorkAlt),
      date: "May 2024 - Present",
      imageUrl: CharlesStudio,
    },
    {
      title: "Junior Developer",
      place: "Dalhousie University", 
      location: "Halifax, NS",
      description:"",
      icon: React.createElement(TbBrandUnity),
      date: "Jan 2024 - Apr 2024",
      imageUrl: DalYellow,
    },
    {
      title: "Bachelor of Applied Computer Science",
      place: "Dalhousie University", 
      location: "Halifax, NS",
      description:"",
      icon: React.createElement(LuGraduationCap),
      date: "Sep 2022 - Aug 2026 (Present)",
      imageUrl: Dalhousie,
      },
  ] as const;

  export const projectsData = [
    {
      title: "Coffee Shop",
      description:"An open source project to showcase my front-end development skills to potential clients as a freelance developer!",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Mapbox-GL"],
      imageUrl: Cafe,
    },
    {
      title: "Notes",
      description:"An open source project that I started on April 2024 to learn the aspects of full-stack development...",
      tags: ["React", "Tailwind", "MongoDB", "Express.js", "RESTful API"],
      imageUrl: NotesApp,
    },
    {
      title: "Flappy Bird",
      description:"An open source game project I started on January 2024 to learn unity for an upcoming course that I took on my second year in university, which involved...",
      tags: ["Unity", "C#", "Git"],
      imageUrl: Flappy,
    },
    
] as const;

  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MySQL",
    "Java",
    "JUnit5",
    "C#",
    "Unity",
    "Figma",
    "Jira",
    "GitHub",
    "Postman",
    "Data Structures & Algorithms",
    "Technical Documentation",
  ] as const;
