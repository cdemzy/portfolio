'use client'

import { useState, type ComponentPropsWithoutRef, type MouseEvent } from 'react'

interface HoverHaloProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onMouseMove'> {
	haloColor?: string
	haloRadius?: number
}

export default function HoverHalo({ children, className, haloColor = 'rgba(255, 255, 255, 0.08)', haloRadius = 550, onMouseLeave, ...props }: HoverHaloProps) {
	const [isHovered, setIsHovered] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
		const rect = event.currentTarget.getBoundingClientRect()

		setMousePosition({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		})
		setIsHovered(true)
	}

	function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
		setIsHovered(false)
		onMouseLeave?.(event)
	}

	return (
		<div {...props} className={className} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
			{children}
			<div
				aria-hidden="true"
				className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{ background: `radial-gradient(circle ${haloRadius}px at ${mousePosition.x}px ${mousePosition.y}px, ${haloColor}, transparent 100%)` }}
			/>
		</div>
	)
}
