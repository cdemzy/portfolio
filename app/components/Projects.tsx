'use client'

import Image from 'next/image'
import { createElement, useState } from 'react'
import { ChevronsUpDown } from 'lucide'

import Forum from '@/public/projects/dalForum/cover.png'
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
		description: 'A real-time flight tracking map visualizing live Infinite Flight aircraft activities and flight data.',
		tags: ['Swift', 'SwiftUI', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis', 'iOS Development'],
		imageUrl: Sonetix,
	},
	{
		title: 'DevBoard',
		description: 'A developer workspace for personal or team projects, sprints, tasks, and AI-powered workflows.',
		tags: ['Next.js', 'Gemini API', 'Supabase', 'Tailwindv4', 'Full-stack AI-powered project'],
		imageUrl: Karaoke,
	},
] as const

interface ChevronIconProps {
	icon: typeof ChevronsUpDown
}

function ChevronIcon({ icon }: ChevronIconProps) {
	return (
		<svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
			{icon.map(([element, attributes]) => createElement(element, { ...attributes, key: attributes.d }))}
		</svg>
	)
}

export default function Projects() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [isExpanded, setIsExpanded] = useState(false)

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
			<ul className="group grid grid-cols-1 gap-4 sm:grid-cols-2" id="project-list">
				{projectsData.slice().reverse().map((project, index) => (
					<li
						key={project.title}
						className={`relative overflow-hidden rounded-3xl bg-transparent p-6 transition-[background-color,opacity] duration-400 group-hover:opacity-50 hover:!opacity-100 hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark ${index >= 3 && !isExpanded ? 'hidden sm:list-item' : ''}`}
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
							<div className="mt-3">
								<p className="text-sm secondary-text dark:text-secondary-foreground">{project.description}</p>
							</div>
						</div>
						<div
							aria-hidden="true"
							className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
							style={{ background: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 100%)` }}
						/>
					</li>
				))}
			</ul>
			<button
				aria-label={isExpanded ? 'Collapse projects' : 'Expand projects'}
				aria-controls="project-list"
				aria-expanded={isExpanded}
				className="pill-hover secondary-bg mx-auto mt-4 flex size-10 items-center justify-center rounded-full sm:hidden"
				onClick={() => setIsExpanded((currentValue) => !currentValue)}
				type="button"
			>
				<ChevronIcon icon={ChevronsUpDown} />
			</button>
		</section>
	)
}
