'use client'

import Image, { type StaticImageData } from 'next/image'
import { createElement, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronsUpDown } from 'lucide'
import { DiRedis } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa'
import { MdForum } from 'react-icons/md'
import { RiNextjsFill } from 'react-icons/ri'
import { SiFastapi, SiGooglegemini, SiJavascript, SiPhp, SiPython, SiSpotify, SiSwift, SiVapor } from 'react-icons/si'
import { TbBrandSupabase } from 'react-icons/tb'
import type { IconType } from 'react-icons'

import LogoIconContainer from '@/app/components/logo-icon-container'
import ProjectIconPlaceholder from './project-icon-placeholder'

import Rigify from '@/public/projects/rigify/logo.png'
import Sonetix from '@/public/projects/sonetix/logo.png'
import Karaoke from '@/public/projects/karaoke/logo.png'
import InfiniteRadar from '@/public/projects/infiniteRadar/logo.png'
import DevBoard from '@/public/projects/devboard/logo.png'

interface ProjectDetails {
	title: string
	description: string
	stack: readonly string[]
	platform: readonly string[]
	usesThemedLogoContainer?: boolean
	logoBackgroundColor?: string
}

type Project = ProjectDetails & (
	| {
		imageUrl: StaticImageData
		placeholderIcon?: never
	}
	| {
		imageUrl?: never
		placeholderIcon: IconType
		placeholderIconColor?: string
	}
)

const projectsData: readonly Project[] = [
	{
		title: 'Dalhousie Forum',
		description: 'A web forum for Dalhousie students to post discussions, connect with peers, and share campus ideas.',
		stack: ['PHP', 'JavaScript', 'MySQL'],
		platform: ['Web'],
		placeholderIcon: MdForum,
		placeholderIconColor: '#FFD400',
	},
	{
		title: 'Rigify',
		description: 'An AI-powered PC build planner that identifies likely bottlenecks and estimates per-game performance.',
		stack: ['Next.js', 'Gemini API', 'Supabase'],
		platform: ['Web'],
		imageUrl: Rigify,
	},
	{
		title: 'Karaoke',
		description: 'A web karaoke player with a collaborative queue and seamless session sharing for groups and friends.',
		stack: ['Next.js', 'Gemini API', 'Supabase', 'Redis'],
		platform: ['Web'],
		imageUrl: Karaoke,
	},
	{
		title: 'Sonetix',
		description: 'A native iOS app that turns Spotify listening history into detailed, interactive listening metrics.',
		stack: ['SwiftUI', 'Vapor', 'Redis', 'SpotifyAPI'],
		platform: ['iOS'],
		imageUrl: Sonetix,
	},
	{
		title: 'InfiniteRadar',
		description: 'A real-time flight tracking map visualizing live Infinite Flight aircraft activities and flight data.',
		stack: ['SwiftUI', 'Next.js', 'Python', 'FastAPI','Redis'],
		platform: ['iOS', 'Web'],
		imageUrl: InfiniteRadar,
		logoBackgroundColor: '#FFD400',
	},
	{
		title: 'DevBoard',
		description: 'A developer workspace for personal or team-based projects, sprints, tasks, and AI-powered workflows.',
		stack: ['SwiftUI','Next.js', 'Python', 'FastAPI', 'Gemini API', 'Supabase',],
		platform: ['MacOS', 'iOS', 'Web'],
		imageUrl: DevBoard,
		usesThemedLogoContainer: true,
	},
]

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
	'Vapor': SiVapor,
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
	const [isExpanded, setIsExpanded] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	function handleProjectToggle() {
		setIsExpanded((currentValue) => !currentValue)
	}

	function handleProjectsExpanded() {
		sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<section ref={sectionRef} className="index-section scroll-mt-6" id="projects">
			<h2 className="section-heading">Projects</h2>
			<ul className="group grid grid-cols-1 gap-4" id="project-list">
				{displayedProjects.slice(0, 3).map((project) => (
					<li key={project.title}>
						<ProjectCard
							project={project}
						/>
					</li>
				))}
				<AnimatePresence initial={false}>
					{isExpanded && (
						<motion.li
							animate={{ height: 'auto' }}
							exit={{ height: 0 }}
							initial={{ height: 0 }}
							onAnimationComplete={() => {
								if (isExpanded) {
									handleProjectsExpanded()
								}
							}}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className="col-span-full -mx-7 overflow-hidden px-7"
						>
							<ul className="grid grid-cols-1 gap-4">
								{displayedProjects.slice(3).map((project) => (
									<li key={project.title}>
										<ProjectCard project={project} />
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
	project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div
			className="pill-hover relative -mx-7 h-full overflow-hidden rounded-lg px-7 py-6 transition-[background-color,opacity] duration-400 group-hover:opacity-50 hover:opacity-100!"
		>
			<div className="relative z-10 flex h-full flex-col">
				<div className="flex items-center gap-4">
					<ProjectVisual project={project} />
					<div className="flex flex-wrap items-center gap-2">
						<h3 className="font-medium leading-tight">{project.title}</h3>
						<span aria-hidden="true" className="secondary-text dark:text-secondary-foreground">·</span>
						<ul aria-label="Project platforms" className="flex flex-wrap gap-1.5">
							{project.platform.map((platform) => (
								<li key={platform} className="rounded-l border border-black/10 px-2 py-0.5 text-xs secondary-text dark:border-white/10 dark:text-secondary-foreground">
									{platform}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-3">
					<p className="font-mono text-sm secondary-text dark:text-secondary-foreground pl-1">{project.description}</p>
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
		</div>
	)
}

interface ProjectVisualProps {
	project: Project
}

function ProjectVisual({ project }: ProjectVisualProps) {
	if (hasPlaceholderIcon(project)) {
		return <ProjectIconPlaceholder color={project.placeholderIconColor} icon={project.placeholderIcon} />
	}

	if (project.usesThemedLogoContainer || project.logoBackgroundColor) {
		return <LogoIconContainer alt="" backgroundColor={project.logoBackgroundColor} image={project.imageUrl} />
	}

	return <Image src={project.imageUrl} alt="" className="size-15" />
}

function hasPlaceholderIcon(project: Project): project is ProjectDetails & { placeholderIcon: IconType; placeholderIconColor?: string } {
	return project.placeholderIcon !== undefined
}
