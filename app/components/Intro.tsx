'use client'

import CameraTooltip from './intro/CameraHover'
import PhotoHover from './intro/PhotoHover'
import { motion } from 'framer-motion'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function Intro() {
	return (
		<section className="index-section" id="Intro">
			<h1 className="section-heading">Charles Dela Cruz</h1>
			<article className="text-secondary-foreground dark:text-foreground-dark">
				<p className="text-base secondary-text">
					A software engineer and fourth year computer science student at Dalhousie University, interested in software engineering and product development.
					<br /> <br />
					When I&apos;m not coding, I&apos;m probably playing tennis, working out, or out taking <PhotoHover /> with my <CameraTooltip /> :]
				</p>
			</article>
			<motion.div
				className='flex items-center gap-2'
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, delay: 0.6, ease: 'easeOut' }}
			>
				<span className='group relative inline-flex'>
					<a
						href='https://github.com/cdemzy'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit Charles Dela Cruz on GitHub'
						className='pill-hover secondary-text inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200 hover:text-gray-950 dark:hover:text-stone-50'
					>
						<IoLogoGithub aria-hidden='true' size={20} />
					</a>
					<span role='tooltip' className='pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs font-[Consolas] text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 dark:border-neutral-700'>
						GitHub
					</span>
				</span>
				<span className='group relative inline-flex'>
					<a
						href='https://linkedin.com/in/cdemzyy'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit Charles Dela Cruz on LinkedIn'
						className='pill-hover secondary-text inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200 hover:text-gray-950 dark:hover:text-stone-50'
					>
						<IoLogoLinkedin aria-hidden='true' size={20} />
					</a>
					<span role='tooltip' className='pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs font-[Consolas] text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 dark:border-neutral-700'>
						LinkedIn
					</span>
				</span>
			</motion.div>
		</section>
	)
}
