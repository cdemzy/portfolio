'use client'

import { useEffect, useRef, useState } from 'react'

function isMobileViewport() {
	return window.matchMedia('(max-width: 767px)').matches
}

export default function CameraTooltip() {
	const tooltipRef = useRef<HTMLSpanElement>(null)
	const [isMobileTooltipVisible, setIsMobileTooltipVisible] = useState(false)

	useEffect(() => {
		if (!isMobileTooltipVisible) {
			return
		}

		function handlePointerDown(event: PointerEvent) {
			if (isMobileViewport() && event.target instanceof Node && !tooltipRef.current?.contains(event.target)) {
				setIsMobileTooltipVisible(false)
			}
		}

		document.addEventListener('pointerdown', handlePointerDown)

		return () => document.removeEventListener('pointerdown', handlePointerDown)
	}, [isMobileTooltipVisible])

	function handleClick() {
		if (isMobileViewport()) {
			setIsMobileTooltipVisible((isVisible) => !isVisible)
		}
	}

	return (
		<span ref={tooltipRef} className="group relative inline-block">
			<button
				aria-pressed={isMobileTooltipVisible}
				className={`inline cursor-pointer border-0 bg-transparent p-0 align-baseline font-inherit text-inherit underline decoration-dotted underline-offset-4 decoration-slate-300 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:text-foreground focus-visible:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground dark:focus-visible:decoration-foreground ${isMobileTooltipVisible ? 'text-foreground decoration-foreground dark:decoration-foreground' : ''}`}
				onClick={handleClick}
				type="button"
			>
				camera
			</button>
			<span
				role="tooltip"
				className={`pointer-events-none absolute top-full left-1/2 z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground transition-opacity duration-200 dark:border-neutral-700 ${isMobileTooltipVisible ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`}
				style={{ fontFamily: 'Consolas, ui-monospace, monospace' }}
			>
				Fujifilm X100VI
			</span>
		</span>
	)
}
