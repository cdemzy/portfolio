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
    link: 'https://dalideahub.ca/',
    title: "Junior Student Developer",
    company: "Dalhousie Emera ideaHUB",
    date: "Jan 2024 - Apr 2024",
  },
  {
    imgUrl: CStudioLogo,
    imgAlt: "Charles Studio Logo",
    link: 'https://cdemzy.dev/',
    title: "Software Developer",
    company: "Charles Studio",
    date: "May 2024 - Aug 2024",
  },
  {
    imgUrl: PSCLogo,
    imgAlt: "Public Service Comission of Canada Logo",
    link: 'https://www.canada.ca/en/public-service-commission.html',
    title: "Junior Programmer",
    company: "Public Service Comission of Canada",
    date: "Jan 2025 - Apr 2025",
  },
  {
    imgUrl: QuestLogo,
    imgAlt: "Quest Logo",
    link: 'https://www.quest.com/',
    title: "Software Engineer Intern",
    company: "Quest Software",
    date: "Sep 2025 - Dec 2025",
  },
] as const;

export default function Experience() {
  return (
    <section className="index-section" id="experience">
      <h2 className='section-heading'>Experience</h2>
      <ul className="secondary-text flex flex-col gap-6 group">
        {experience.slice().reverse().map((exp) => (
          <li key={exp.company} className="group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-400">
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="flex xs:justify-between items-center gap-4 rounded-lg p-2 -m-2 hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark duration-400"
            >
              <div className="relative w-15 h-15 overflow-hidden rounded-full shrink-0">
                <Image
                  src={exp.imgUrl}
                  alt={exp.imgAlt}
                  fill
                  className="rounded-full"
                />
              </div>
              <span className="w-[65%]">
                <p className="primary-text">{exp.title}</p>
                <p className="exp-company text-[13px] xs:text-base">{exp.company}</p>
                <p className="xs:hidden text-[13px] xs:text-base">{exp.date}</p>
              </span>
              <p className="w-[35%] xs:block hidden">{exp.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
