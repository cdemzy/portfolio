import type { IconType } from 'react-icons'

interface ProjectIconPlaceholderProps {
	icon: IconType
	color?: string
}

export default function ProjectIconPlaceholder({ icon: Icon, color }: ProjectIconPlaceholderProps) {
	return (
		<div aria-hidden="true" className="flex size-15 shrink-0 items-center justify-center rounded-xl bg-background text-primary transition-colors duration-200">
			<Icon className="size-8" color={color} />
		</div>
	)
}
