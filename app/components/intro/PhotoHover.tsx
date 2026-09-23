'use client'

import Image from 'next/image'
import type { MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function isMobileViewport() {
	return window.matchMedia('(max-width: 639px)').matches
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
			setPreviewMode((currentMode) => currentMode === 'mobile' ? null : 'mobile')
		}
	}

	return (
		<>
			<button
				ref={photoRef}
				aria-pressed={isMobilePreview}
				className="inline cursor-pointer border-0 bg-transparent p-0 align-baseline font-inherit text-inherit underline decoration-dotted underline-offset-4 decoration-slate-300 dark:decoration-gray-700"
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
					className={`pointer-events-none fixed z-50 rounded-lg bg-white p-1 shadow-xl sm:p-2 ${isMobilePreview ? 'left-1/2 top-1/2 sm:w-[85vw] -translate-x-1/2 -translate-y-1/2' : ''}`}
					style={isMobilePreview ? undefined : { left: cursorPosition.x + 16, top: cursorPosition.y + 16 }}
				>
					<Image alt="" className="h-auto w-[40rem] max-w-[70vw] sm:w-[32rem] rounded-lg" height={5152} loading="eager" src="/other-images/half-dome.JPG" width={6864} />
					<figcaption className="mt-2 text-xs leading-5 text-stone-600" style={{ fontFamily: 'Consolas, ui-monospace, monospace' }}>
						<span className="hidden sm:block">Half Dome from Glacier Point</span>
						<span className="hidden sm:block">Yosemite National Park, California, USA · 2026</span>
						<span className="block sm:hidden">Yosemite National Park · 2026</span>
						<span className="block">© Charles Dela Cruz</span>
					</figcaption>
				</figure>,
				document.body,
			)}
		</>
	)
}
