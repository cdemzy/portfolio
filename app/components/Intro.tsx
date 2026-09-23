'use client'

export default function Intro() {
	return (
		<section className="index-section" id="Intro">
			<h1 className="section-heading">Charles Dela Cruz</h1>
			<article className="text-secondary-foreground dark:text-foreground-dark">
				<p className="text-base secondary-text">
					A software engineer and fourth year computer science student at Dalhousie University, interested in software engineering and product development.
					<br /> <br />
					When I&apos;m not coding, I&apos;m probably playing tennis, at the gym, or out taking photos with my{' '}
					<span className="group relative inline-block">
						<span className="cursor-pointer underline decoration-dotted underline-offset-4 decoration-slate-300 dark:decoration-gray-700">
							camera
						</span>
						<span
							role="tooltip"
							className="pointer-events-none absolute top-full left-1/2 z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border dark:border-neutral-700 bg-background px-2 py-1 text-xs text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							style={{ fontFamily: 'Consolas, ui-monospace, monospace' }}
						>
							Fujifilm X100VI
						</span>
					</span>
					{' '}:]
				</p>
			</article>
		</section>
	)
}
