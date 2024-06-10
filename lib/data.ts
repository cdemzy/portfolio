import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaUnity } from "react-icons/fa";
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
      title: "Web Developer",
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
      icon: React.createElement(FaUnity),
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
    // {
    //   title: "Portfolio Website",
    //   description:"This Website!",
    //   tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    //   imageUrl: NotesApp,
    // },
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
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "MySQL",
    "Java",
    "JUnit5",
    "C#",
    "Unity",
    "Framer Motion",
    "Figma",
    "Jira",
    "RESTful APIs",
  ] as const;

