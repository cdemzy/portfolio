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
			<ul className="w-min flex flex-col gap-6 group">
				{socialLinks.map((link) => {
					const IconComponent = link.icon;
					return (
						<li className="group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-400 cursor-pointer hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark rounded-lg p-2" key={link.name}>
							<a 
								href={link.url} 
								target="_blank" 
								rel="noopener noreferrer"
								className="social-link flex gap-1"
							>
								<IconComponent size={20} />
								<span className="underline underline-offset-4 dark:decoration-gray-700 hover:decoration-foreground duration-400">{link.name}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	)
}
