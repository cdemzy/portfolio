'use client'

import CameraTooltip from './intro/CameraTooltip'
import PhotoHover from './intro/PhotoHover'

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
		</section>
	)
}
