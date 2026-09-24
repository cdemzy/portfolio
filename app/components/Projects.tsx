'use client'

import Image from 'next/image'
import { createElement, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronsUpDown } from 'lucide'
import { DiRedis } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiFastapi, SiGooglegemini, SiJavascript, SiPhp, SiPython, SiSpotify, SiSwift } from 'react-icons/si'
import { TbBrandSupabase } from 'react-icons/tb'
import type { IconType } from 'react-icons'

import Forum from '@/public/projects/dalForum/cover.png'
import Rigify from '@/public/projects/rigify/logo.png'
import Sonetix from '@/public/projects/sonetix/logo.png'
import Karaoke from '@/public/projects/karaoke/logo.png'
import InfiniteRadar from '@/public/projects/infiniteRadar/logo.png'
import DevBoard from '@/public/projects/devboard/logo.png'

const projectsData = [
	{
		title: 'Dalhousie Forum',
		description: 'A web forum for Dalhousie students to post discussions, connect with peers, and share ideas.',
		stack: ['PHP', 'JavaScript', 'MySQL'],
		platform: ['Web'],
		imageUrl: Forum,
	},
	{
		title: 'Rigify',
		description: 'An AI-powered PC build planner that identifies bottlenecks and estimates per-game performance.',
		stack: ['Next.js', 'Gemini API', 'Supabase'],
		platform: ['Web'],
		imageUrl: Rigify,
	},
	{
		title: 'Karaoke',
		description: 'An open-source web karaoke player with a collaborative queue and simple session sharing for groups.',
		stack: ['Next.js', 'Gemini API', 'Supabase', 'Redis'],
		platform: ['Web'],
		imageUrl: Karaoke,
	},
	{
		title: 'Sonetix',
		description: 'A native iOS app that turns Spotify listening history into detailed, interactive insights.',
		stack: ['SwiftUI', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis'],
		platform: ['iOS'],
		imageUrl: Sonetix,
	},
	{
		title: 'InfiniteRadar',
		description: 'A real-time flight tracking map visualizing live Infinite Flight aircraft activities and flight data.',
		stack: ['SwiftUI', 'Next.js', 'SpotifyAPI', 'Python', 'FastAPI', 'Redis'],
		platform: ['iOS', 'Web'],
		imageUrl: InfiniteRadar,
	},
	{
		title: 'DevBoard',
		description: 'A developer workspace for personal or team projects, sprints, tasks, and AI-powered workflows.',
		stack: ['SwiftUI','FastAPI', 'Next.js', 'Gemini API', 'Supabase',],
		platform: ['MacOS', 'iOS', 'Web'],
		imageUrl: DevBoard,
	},
] as const

const stackIcons: Partial<Record<string, IconType>> = {
	'Gemini API': SiGooglegemini,
	'FastAPI': SiFastapi,
	'JavaScript': SiJavascript,
	'MySQL': FaDatabase,
	'Next.js': RiNextjsFill,
	'PHP': SiPhp,
	'Python': SiPython,
	'SpotifyAPI': SiSpotify,
	'SwiftUI': SiSwift,
	'Redis': DiRedis,
	'Supabase': TbBrandSupabase,
}

const displayedProjects = projectsData.slice().reverse()

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
	const sectionRef = useRef<HTMLElement>(null)

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
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

	function handleProjectToggle() {
		setIsExpanded((currentValue) => !currentValue)
	}

	function handleProjectsExpanded() {
		sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<section ref={sectionRef} className="index-section" id="projects">
			<h2 className="section-heading">Projects</h2>
			<ul className="group grid grid-cols-1 gap-4" id="project-list">
				{displayedProjects.slice(0, 3).map((project, index) => (
					<li key={project.title}>
						<ProjectCard
							index={index}
							mousePosition={mousePosition}
							onMouseLeave={handleMouseLeave}
							onMouseMove={(event) => handleMouseMove(event, index)}
							project={project}
							hoveredIndex={hoveredIndex}
						/>
					</li>
				))}
				<AnimatePresence initial={false}>
					{isExpanded && (
						<motion.li
							animate={{ clipPath: 'inset(0% 0 0 0)', height: 'auto', opacity: 1, paddingTop: 16 }}
							exit={{ clipPath: 'inset(100% 0 0 0)', height: 0, opacity: 0, paddingTop: 0 }}
							initial={{ clipPath: 'inset(100% 0 0 0)', height: 0, opacity: 0, paddingTop: 0 }}
							onAnimationComplete={() => {
								if (isExpanded) {
									handleProjectsExpanded()
								}
							}}
							transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							className="col-span-full -mx-7 overflow-hidden px-7"
						>
							<ul className="grid grid-cols-1 gap-4">
								{displayedProjects.slice(3).map((project, index) => (
									<li key={project.title}>
										<ProjectCard
											index={index + 3}
											mousePosition={mousePosition}
											onMouseLeave={handleMouseLeave}
											onMouseMove={(event) => handleMouseMove(event, index + 3)}
											project={project}
											hoveredIndex={hoveredIndex}
										/>
									</li>
								))}
							</ul>
						</motion.li>
					)}
				</AnimatePresence>
			</ul>
			<button
				aria-label={isExpanded ? 'Collapse projects' : 'Expand projects'}
				aria-controls="project-list"
				aria-expanded={isExpanded}
				className="pill-hover secondary-bg mx-auto mt-4 flex size-10 items-center justify-center rounded-full"
				onClick={handleProjectToggle}
				type="button"
			>
				<ChevronIcon icon={ChevronsUpDown} />
			</button>
		</section>
	)
}

interface ProjectCardProps {
	hoveredIndex: number | null
	index: number
	mousePosition: { x: number, y: number }
	onMouseLeave: () => void
	onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void
	project: (typeof projectsData)[number]
}

function ProjectCard({ hoveredIndex, index, mousePosition, onMouseLeave, onMouseMove, project }: ProjectCardProps) {
	return (
		<div
			className="relative -mx-7 h-full overflow-hidden rounded-3xl bg-transparent px-7 py-6 transition-[background-color,opacity] duration-400 group-hover:opacity-50 hover:opacity-100! hover:bg-secondary-bg dark:hover:bg-secondary-bg-dark"
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			<div className="relative z-10 flex h-full flex-col">
				<div className="flex items-center gap-4">
					
						<Image src={project.imageUrl} alt="" className="size-15" />
					
					<div className="flex flex-wrap items-center gap-2">
						<h3 className="font-medium leading-tight">{project.title}</h3>
						<span aria-hidden="true" className="secondary-text dark:text-secondary-foreground">·</span>
						<ul aria-label="Project platforms" className="flex flex-wrap gap-1.5">
							{project.platform.map((platform) => (
								<li key={platform} className="rounded-full border border-black/10 px-2 py-0.5 text-xs secondary-text dark:border-white/10 dark:text-secondary-foreground">
									{platform}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-3">
					<p className="text-sm secondary-text dark:text-secondary-foreground">{project.description}</p>
					<ul aria-label="Project technologies" className="mt-3 flex flex-wrap gap-2">
						{project.stack.map((tag) => {
							const Icon = stackIcons[tag]

							return (
								<li key={tag} className="flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1 text-xs secondary-text dark:border-white/10 dark:text-secondary-foreground">
									{Icon && <Icon aria-hidden="true" className="size-3.5" />}
									{tag}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			<div
				aria-hidden="true"
				className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
				style={{ background: `radial-gradient(circle 550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 100%)` }}
			/>
		</div>
	)
}
