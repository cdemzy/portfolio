'use client'

import CameraTooltip from './intro/CameraTooltip'
import PhotoHover from './intro/PhotoHover'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

export default function Intro() {
	return (
		<section className="index-section" id="Intro">
			<h1 className="section-heading">Charles Dela Cruz</h1>
			<article className="text-secondary-foreground dark:text-foreground-dark">
				<p className="text-base secondary-text">
					A software engineer and fourth year computer science student at Dalhousie University, interested in software engineering and product development.
					<br /> <br />
					When I&apos;m not coding, I&apos;m probably playing tennis, at the gym, or out taking <PhotoHover /> with my <CameraTooltip /> :]
				</p>
			</article>
			<div className="mt-6 flex items-center gap-3">
				<a
					href='https://github.com/cdemzy'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visit Charles Dela Cruz on GitHub'
					className='secondary-bg pill-hover inline-flex size-10 items-center justify-center rounded-lg transition-colors'
				>
					<IoLogoGithub aria-hidden='true' size={20} />
				</a>
				<a
					href='https://linkedin.com/in/cdemzyy'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Visit Charles Dela Cruz on LinkedIn'
					className='secondary-bg pill-hover inline-flex size-10 items-center justify-center rounded-lg transition-colors'
				>
					<IoLogoLinkedin aria-hidden='true' size={20} />
				</a>
			</div>
		</section>
	)
}
