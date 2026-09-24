'use client'

import CameraTooltip from './intro/CameraTooltip'
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
				<a
					href='https://github.com/cdemzy'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visit Charles Dela Cruz on GitHub'
					className='pill-hover secondary-text inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200'
				>
					<IoLogoGithub aria-hidden='true' size={20} />
				</a>
				<a
					href='https://linkedin.com/in/cdemzyy'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visit Charles Dela Cruz on LinkedIn'
					className='pill-hover secondary-text inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200'
				>
					<IoLogoLinkedin aria-hidden='true' size={20} />
				</a>
			</motion.div>
		</section>
	)
}
