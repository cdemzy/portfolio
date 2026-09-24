'use client'

import Image from 'next/image'
import type { MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function isMobileViewport() {
	return window.matchMedia('(max-width: 767px)').matches
}

export default function PhotoHover() {
	const photoRef = useRef<HTMLButtonElement>(null)
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
	const [previewMode, setPreviewMode] = useState<'cursor' | 'mobile' | null>(null)
	const isMobilePreview = previewMode === 'mobile'

	useEffect(() => {
		if (!isMobilePreview) {
			return
		}

		function handlePointerDown(event: PointerEvent) {
			if (isMobileViewport() && event.target instanceof Node && !photoRef.current?.contains(event.target)) {
				setPreviewMode(null)
			}
		}

		document.addEventListener('pointerdown', handlePointerDown)

		return () => document.removeEventListener('pointerdown', handlePointerDown)
	}, [isMobilePreview])

	function handleMouseEnter() {
		if (!isMobileViewport()) {
			setPreviewMode('cursor')
		}
	}

	function handleMouseLeave() {
		if (!isMobileViewport()) {
			setPreviewMode(null)
		}
	}

	function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
		if (!isMobileViewport()) {
			setCursorPosition({ x: event.clientX, y: event.clientY })
		}
	}

	function handleClick() {
		if (isMobileViewport()) {
			setPreviewMode((currentMode) => {
				if (currentMode === 'mobile') {
					return null
				}

				const photoBounds = photoRef.current?.getBoundingClientRect()

				if (photoBounds) {
					setCursorPosition({ x: window.innerWidth / 2, y: photoBounds.bottom + 12 })
				}

				return 'mobile'
			})
		}
	}

	return (
		<>
			<button
				ref={photoRef}
				aria-pressed={isMobilePreview}
				className={`inline cursor-pointer border-0 bg-transparent p-0 align-baseline font-inherit text-inherit underline decoration-dotted underline-offset-4 decoration-slate-300 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:text-foreground focus-visible:decoration-foreground dark:decoration-gray-700 dark:hover:decoration-foreground dark:focus-visible:decoration-foreground ${previewMode ? 'text-foreground decoration-foreground dark:decoration-foreground' : ''}`}
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
				type="button"
			>
				photos
			</button>
			{previewMode && createPortal(
				<figure
					aria-hidden="true"
					className={`pointer-events-none fixed z-50 rounded-lg bg-white p-2 shadow-xl md:p-2 ${isMobilePreview ? 'left-1/2 -translate-x-1/2' : '-translate-x-full'}`}
					style={isMobilePreview ? { top: cursorPosition.y } : { left: cursorPosition.x - 16, top: cursorPosition.y + 16 }}
				>
					<Image alt="" className="h-auto w-160 max-w-[60vw] rounded-lg md:w-100" height={5152} loading="eager" src="/other-images/half-dome.JPG" width={6864} />
					<figcaption className="mt-1 pl-1 text-xs leading-5 text-stone-600" style={{ fontFamily: 'Consolas, ui-monospace, monospace' }}>
						<span className="hidden md:block">Half Dome from Glacier Point</span>
						<span className="hidden md:block">Yosemite National Park, California, USA · 2026</span>
						<span className="block text-xs md:hidden">Yosemite National Park · 2026</span>
						<span className="block text-xs md:hidden">© Charles Dela Cruz</span>
						<span className="hidden md:block">© Charles Dela Cruz</span>
					</figcaption>
				</figure>,
				document.body,
			)}
		</>
	)
}
