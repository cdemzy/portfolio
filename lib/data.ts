import React from "react";

// Icons 
import { CgWorkAlt } from "react-icons/cg";
import { TbBrandUnity   } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";

import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";
import { IoBulb } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

// Logos
import Dalhousie from '@/public/general-logos/dal-logo.png'
import ideaLogo from '@/public/general-logos/idea-logo.png'
import GovCan from '@/public/general-logos/gov-canada.png'
import DalYellow from '@/public/general-logos/dalYellow.png'

// Projects
import CharlesStudio  from '@/public/general-logos/charlestudio.png'
import NotesApp from '@/public/projects/notes/Cover.png'
import Flappy from '@/public/projects/flappybird/Cover.png'
import TerrainEng from '@/public/projects/terrain-engineer/terr-mockup.png'
import Cafe from '@/public/projects/Cafe/cafe.png'
import Forum from '@/public/projects/dalForum/dal-forum.png'
import Barter from '@/public/projects/barter/barter-proto.png'


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
      name: "Education",
      hash: "#education",
      icon: React.createElement(IoSchool)
    },
    {
      name: "Contact",
      hash: "#contact",
      icon: React.createElement(IoMail)
    },
] as const;

export const experiencesData = [
    // {
    //   title: "Junior Programmer",
    //   place: "Government of Canada", 
    //   location: "Halifax, NS",
    //   description:"",
    //   icon: React.createElement(CgWorkAlt),
    //   date: "Jan 2025 - Apr 2025",
    //   imageUrl: GovCan,
    // },
    {
      title: "Software Developer",
      place: "Freelance", 
      location: "Remote",
      description:"",
      icon: React.createElement(CgWorkAlt),
      date: "May 2024 - Aug 2024",
      imageUrl: CharlesStudio,
    },
    {
      title: "Junior Student Developer",
      place: "Dalhousie Emera ideaHub", 
      location: "Halifax, NS",
      description:"",
      icon: React.createElement(TbBrandUnity),
      date: "Jan 2024 - Apr 2024",
      imageUrl: ideaLogo,
    },
  ] as const;

export const educationData = [
  {
    title: "Bachelor of Applied Computer Science",
    place: "Dalhousie University", 
    location: "Halifax, NS, Canada",
    description:"Certificate in Web & Mobile Development (In Progress)",
    description2:"Certificate in User Experience Design and Evaluation (In Progress)",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - Aug 2026 (Present)",
    imageUrl: Dalhousie,
    },
] as const;

export const projectsData = [
  {
    title: "Terrain Engineer",
    description:"An open-source video game project that I am developing in collaboration with two other developers to create an engaging and interactive open-world gaming experience...",
    tags: ["Unity", "C#", "Git", "Game Development"],
    imageUrl: TerrainEng,
  },
  {
    title: "Dalhousie Forum",
    description:"An academic web application project that I developed, where users can post on a forum and message other users to engage in discussions...",
    tags: ["PHP", "MySQL", "JavaScript", "Server-side Scripting"],
    imageUrl: Forum,
  },
  {
    title: "Online Barter Trader",
    description:"A semester-long academic mobile application project focused on enabling users to exchange items through a user-centric barter system...",
    tags: ["Android Studio", "Java", "Firebase", "Mobile Development"],
    imageUrl: Barter,
  },
  {
    title: "Notes",
    description:"An open source project that I started on April 2024 to learn the aspects of full-stack development...",
    tags: ["React", "Tailwind", "MongoDB", "Express.js", "RESTful API", "Full-Stack Development"],
    imageUrl: NotesApp,
  },
  // {
  //   title: "Flappy Bird",
  //   description:"An open source game project I started on January 2024 to learn unity for an upcoming course that I took on my second year in university, which involved...",
  //   tags: ["Unity", "C#", "Git"],
  //   imageUrl: Flappy,
  // },
  
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
  "PHP",
  "Java",
  "C#",
  "Unity",
  "Android Studio",
  "Figma",
  "GitHub",
  "Data Structures & Algorithms",
  "Technical Documentation",
] as const;
