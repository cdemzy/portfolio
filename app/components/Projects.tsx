'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

import NotesApp from '@/public/projects/notes/MB-M1.png'
import Forum from '@/public/projects/dalForum/cover.png'
import Barter from '@/public/projects/barter/cover.png'
import Rigify from '@/public/projects/rigify/cover.png'
import Sonetix from '@/public/projects/sonetix/cover.png'
import Karaoke from '@/public/projects/karaoke/cover.png'

const projectsData = [
	{
		title: 'Notes',
		description: 'An open source project that I started on April 2024 to learn the aspects of full-stack development...',
		tags: ['React', 'Tailwind', 'MongoDB', 'Express.js', 'RESTful API', 'Full-Stack Development'],
		imageUrl: NotesApp,
	},
	{
		title: 'Online Barter Trader',
		description: 'A semester-long academic mobile application project focused on enabling users to exchange items through a user-centric barter system...',
		tags: ['Android Studio', 'Java', 'Firebase', 'Mobile Development'],
		imageUrl: Barter,
	},
	{
		title: 'Dalhousie Forum',
		description: 'An academic web application project that I developed, where users can post on a forum and message other users to engage in discussions...',
		tags: ['PHP', 'MySQL', 'JavaScript', 'Server-side Scripting'],
		imageUrl: Forum,
	},
	{
		title: 'Sonetix',
		description: 'A native iOS application delivering real-time Spotify analytics, with advanced metrics, and interactive dashboards built from listening data...',
		tags: ['Swift', 'SwiftUI', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis', 'iOS Development'],
		imageUrl: Sonetix,
	},
	{
		title: 'Rigify',
		description: 'A full-stack AI-driven platform for PC build optimization, integrating the Gemini API to generate performance metrics, detect bottlenecks, project per-game FPS, and deliver intelligent hardware upgrade recommendations...',
		tags: ['Next.js', 'Gemini API', 'Supabase', 'Tailwindv4', 'Full-stack AI-powered project'],
		imageUrl: Rigify,
	},
	{
		title: 'Karaoke',
		description: 'An open-source web karaoke player for groups and gatherings, with a real-time collaborative queue and seamless session sharing across devices...',
		tags: ['Next.js', 'Gemini API', 'Supabase', 'Tailwindv4', 'Full-stack AI-powered project'],
		imageUrl: Karaoke,
	},
] as const

export default function Projects() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
		const rect = event.currentTarget.getBoundingClientRect()
		setMousePosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		})
		setHoveredIndex(index)
	}

	function handleMouseLeave() {
		setHoveredIndex(null)
	}

	return (
		<section className="index-section" id="projects">
			<h2 className="section-heading">Projects</h2>
			<ul className="group grid grid-cols-1 gap-4 sm:grid-cols-2">
				{projectsData.slice().reverse().map((project, index) => (
					<motion.li
						key={project.title}
						className="relative min-h-72 overflow-hidden rounded-3xl bg-transparent p-6 transition-[background-color,opacity] duration-400 group-hover:opacity-50 hover:!opacity-100 hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
						onMouseMove={(event) => handleMouseMove(event, index)}
						onMouseLeave={handleMouseLeave}
					>
						<div className="relative z-10 flex h-full flex-col">
							<div className="flex items-center gap-4">
								<div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-black/10 bg-background shadow-sm dark:border-white/10">
									<Image src={project.imageUrl} alt="" fill sizes="56px" className="object-cover" />
								</div>
								<h3 className="font-medium leading-tight">{project.title}</h3>
							</div>
							<div className="mt-6">
								<p className="mt-3 text-sm secondary-text dark:text-secondary-foreground">{project.description}</p>
							</div>
						</div>
						<div
							aria-hidden="true"
							className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
							style={{ background: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 100%)` }}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}
