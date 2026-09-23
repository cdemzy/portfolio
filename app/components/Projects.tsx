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
		title: 'Dalhousie Forum',
		description: 'A web forum for Dalhousie students to post discussions, connect with peers, and share ideas.',
		tags: ['PHP', 'MySQL', 'JavaScript', 'Server-side Scripting'],
		imageUrl: Forum,
	},
	{
		title: 'Rigify',
		description: 'An AI-powered PC build planner that identifies bottlenecks and estimates per-game performance.',
		tags: ['Next.js', 'Gemini API', 'Supabase', 'Tailwindv4', 'Full-stack AI-powered project'],
		imageUrl: Rigify,
	},
	{
		title: 'Karaoke',
		description: 'An open-source web karaoke player with a collaborative queue and simple session sharing for groups.',
		tags: ['Next.js', 'Gemini API', 'Supabase', 'Tailwindv4', 'Full-stack AI-powered project'],
		imageUrl: Karaoke,
	},
	{
		title: 'Sonetix',
		description: 'A native iOS app that turns Spotify listening history into detailed, interactive insights.',
		tags: ['Swift', 'SwiftUI', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis', 'iOS Development'],
		imageUrl: Sonetix,
	},
	{
		title: 'InfiniteRadar',
		description: 'A real-time map for tracking live Infinite Flight aircraft and flight data.',
		tags: ['Swift', 'SwiftUI', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis', 'iOS Development'],
		imageUrl: Sonetix,
	},
	{
		title: 'DevBoard',
		description: 'A collaborative developer workspace for managing projects, sprints, tasks, and AI automation.',
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
						className="relative overflow-hidden rounded-3xl bg-transparent p-6 transition-[background-color,opacity] duration-400 group-hover:opacity-50 hover:!opacity-100 hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark"
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
