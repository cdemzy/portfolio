import Image, { type StaticImageData } from 'next/image'

interface LogoIconContainerProps {
	image: StaticImageData
	alt: string
}

export default function LogoIconContainer({ image, alt }: LogoIconContainerProps) {
	return (
		<div className="size-15 shrink-0 rounded-xl bg-background p-2 transition-colors duration-200">
			<Image src={image} alt={alt} className="size-full object-contain" />
		</div>
	)
}
