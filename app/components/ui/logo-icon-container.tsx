import Image, { type StaticImageData } from 'next/image'

interface LogoIconContainerProps {
	image: StaticImageData
	alt: string
	backgroundColor?: string
}

export default function LogoIconContainer({ image, alt, backgroundColor }: LogoIconContainerProps) {
	return (
		<div className="size-15 shrink-0 rounded-xl bg-background p-2 transition-colors duration-200" style={backgroundColor ? { backgroundColor } : undefined}>
			<Image src={image} alt={alt} className="size-full object-contain" />
		</div>
	)
}
