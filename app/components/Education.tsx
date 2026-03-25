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
			<h2 className='section-heading'>Education</h2>
			<div className="flex gap-4">
				<a href={education.link} target="_blank" rel="noreferrer" className="shrink-0">
					<div className="relative w-17 h-17 xs:w-20 xs:h-20 overflow-hidden rounded-full">
						<Image
						src={education.imgUrl}
						alt={education.imgAlt}
						fill
						className="object-cover"
						/>
					</div>
				</a>
				<span className="">
				<p className="degree text-sm xs:text-base">Bachelor of Applied Computer Science</p>
				<p className="university secondary-text text-sm xs:text-base">Dalhousie University</p>
				<p className="school-year secondary-text w-[35%] text-sm xs:text-base">Fourth Year</p>
				</span>
			</div>
		</section>
	)
}
