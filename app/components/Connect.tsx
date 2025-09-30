"use client";

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const socialLinks = [
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/cdemzyy',
		icon: IoLogoLinkedin
	},
	{
		name: 'GitHub',
		url: 'https://github.com/cdemzy',
		icon: IoLogoGithub
	}
] as const;

export default function Connect() {
	return (
		<section className="index-section" id="connect">
			<h2>Connect</h2>
			<ul className="flex flex-col gap-6">
				{socialLinks.map((link) => {
					const IconComponent = link.icon;
					return (
						<li className="underline underline-offset-4" key={link.name}>
							<a 
								href={link.url} 
								target="_blank" 
								rel="noopener noreferrer"
								className="social-link flex gap-1"
							>
								<IconComponent size={20} />
								{link.name}
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	)
}
