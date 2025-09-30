"use client";

import Image from "next/image";
import DalLogo from "@/public/general-logos/dal-logo-yellow.png"

export default function Education() {
	return (
		<section className="index-section" id="education">
			<h2>Education</h2>
			<div className="flex gap-4 text-secondary-foreground">
				<Image
				className="w-20 h-20 rounded-full"
				src={DalLogo}
				alt="Dalhousie University Logo"
				/>
				<span className="">
				<p className="degree text-foreground">Bachelor of Applied Computer Science</p>
				<p className="university">Dalhousie University</p>
				<p className="school-year w-[35%]">Third Year</p>
				</span>
			</div>
		</section>
	)
}
