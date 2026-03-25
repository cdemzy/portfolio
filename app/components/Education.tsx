"use client";

import Image from "next/image";
import DalLogo from "@/public/general-logos/dal-logo-yellow.png"

const education = {
	imgUrl: DalLogo,
	imgAlt: 'Dalhousie University Logo',
	link: 'https://dal.ca',
} as const

export default function Education() {
	return (
		<section className="index-section" id="education">
			<h2>Education</h2>
			<div className="flex gap-4 text-secondary-foreground">
				<a href={education.link} target="_blank" rel="noreferrer">
					<Image
					className="w-17 h-17 rounded-full xs:w-20 xs:h-20"
					src={education.imgUrl}
					alt={education.imgAlt}
					/>
				</a>
				<span className="">
				<p className="degree text-foreground text-sm xs:text-base">Bachelor of Applied Computer Science</p>
				<p className="university text-sm xs:text-base">Dalhousie University</p>
				<p className="school-year w-[35%] text-sm xs:text-base">Fourth Year</p>
				</span>
			</div>
		</section>
	)
}
