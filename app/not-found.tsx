import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex min-h-[60vh] flex-col items-start justify-center gap-6'>
			<div className='secondary-bg rounded-full px-3 py-1 text-sm font-medium'>
				404
			</div>
			<div className='space-y-3'>
				<h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
					Page not found
				</h1>
				<p className='secondary-text max-w-xl text-base leading-7'>
					The page you were looking for does not exist, may have moved, or
					was never published.
				</p>
			</div>
			<div className='flex flex-wrap gap-3'>
				<Link
					href='/'
					className='secondary-bg pill-hover rounded-lg px-4 py-2 transition-colors'
				>
					Back to index
				</Link>
				<Link
					href='/projects'
					className='border border-border pill-hover rounded-lg px-4 py-2 transition-colors dark:border-neutral-700'
				>
					View projects
				</Link>
			</div>
		</main>
	)
}
