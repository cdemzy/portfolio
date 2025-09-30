"use client";

import Image from "next/image";
import QuestLogo from "@/public/general-logos/quest-logo.png";
import EmeraLogo from "@/public/general-logos/idea-logo.png";
import CStudioLogo from "@/public/general-logos/charles-studio.png";
import PSCLogo from "@/public/general-logos/gov-canada.png";

const experience = [
  {
    imgUrl: EmeraLogo,
    imgAlt: "Emera Idea Hub Logo",
    title: "Junior Student Developer",
    company: "Dalhousie Emera ideaHUB",
    date: "Jan 2024 - Apr 2024",
  },
  {
    imgUrl: CStudioLogo,
    imgAlt: "Charles Studio Logo",
    title: "Software Developer",
    company: "Charles Studio",
    date: "May 2024 - Aug 2024",
  },
  {
    imgUrl: PSCLogo,
    imgAlt: "Public Service Comission of Canada Logo",
    title: "Junior Programmer",
    company: "Public Service Comission of Canada",
    date: "Jan 2024 - Apr 2024",
  },
  {
    imgUrl: QuestLogo,
    imgAlt: "Quest Logo",
    title: "Software Developer Intern",
    company: "Quest Software",
    date: "Sep 2025 - Present",
  },
] as const;

export default function Experience() {
  return (
    <section className="index-section" id="experience">
      <h2>Experience</h2>
      <ul className="text-secondary-foreground flex flex-col gap-6 group">
        {experience.slice().reverse().map((exp) => (
          <li key={exp.company} className="flex justify-between items-center gap-4 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-400">
            <Image
              className="exp-img"
              src={exp.imgUrl}
              alt={exp.imgAlt}
            />
            <span className="w-[65%]">
              <p className="exp-title">{exp.title}</p>
              <p className="">{exp.company}</p>
            </span>
            <p className="w-[35%]">{exp.date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
