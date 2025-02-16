"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, type PanInfo, AnimatePresence } from "motion/react"
import Image from "next/image"

interface PolaroidItem {
	title: string
	date: string
	src: string
	alt: string
}

interface PolaroidProps {
  	items: PolaroidItem[]
}

const Polaroid: React.FC<PolaroidProps> = ({ items }) => {
	const [stack, setStack] = useState(items)
	const [rotations, setRotations] = useState<number[]>([])

	useEffect(() => {
		setRotations(items.map((_, index) => (index % 2 === 0 ? Math.random() * 5 + 2 : Math.random() * -5 - 2)))
	}, [items])

	const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const swipeThreshold = 100
		if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.offset.y) > swipeThreshold) {
		setStack((prevStack) => {
			const newStack = [...prevStack]
			const [removed] = newStack.splice(0, 1)
			newStack.push(removed)
			return newStack
		})
		setRotations((prevRotations) => {
			const newRotations = [...prevRotations]
			// const [removed] = newRotations.splice(0, 1)
			const lastRotation = newRotations[newRotations.length - 1]
			newRotations.push(lastRotation > 0 ? Math.random() * -5 - 2 : Math.random() * 5 + 2)
			return newRotations
		})
		}
	}

	return (
		<div className="relative w-full max-w-md mx-auto h-[600px]">
			<AnimatePresence>
				{stack.map((item, index) => (
					<motion.div
						key={item.src}
						style={{
							zIndex: stack.length - index,
						}}
						initial={index === 0 ? { scale: 1 } : { scale: 0.95 }}
						animate={{
							scale: index === 0 ? 1 : 0.95 - index * 0.05,
							top: `${index * 10}px`,
							left: `${index * 5}px`,
							rotate: `${rotations[index]}deg`,
						}}
						transition={{ duration: 0.2 }}
						drag={index === 0}
						dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						onDragEnd={handleDragEnd}
						className={`absolute w-72 h-96 bg-white p-4 shadow-lg rounded-sm ${index === 0 ? "cursor-grab active:cursor-grabbing" : ""}`}
					>
						<div className="w-full h-64 overflow-hidden mb-2 relative">
							<Image src={item.src || "/placeholder.svg"} alt={item.alt} layout="fill" objectFit="cover" quality={90} />
						</div>
						<h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
						<p className="text-sm text-gray-600 mb-2">{item.date}</p>
						<p className="text-xs text-gray-500">{item.alt}</p>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}


const polaroidData: PolaroidItem[] = [
	{
		title: "North Sydney",
		date: "Aug 2023 at 8:17PM",
		src: "/images/sydney1.webp",
		alt: "Stunning morning view of North Sydney oceanfront",
	},
	{
		title: "Opera House",
		date: "Aug 2023 at 2:45PM",
		src: "/images/sydney2.webp",
		alt: "Sydney Opera House during ,night",
	},
	{
		title: "Bondi Beach",
		date: "Aug 2023 at 11:30AM",
		src: "/images/sydney3.webp",
		alt: "Beautiful Bondi Beach with surfers and sunbathers",
	},
	{
		title: "Harbour Bridge",
		date: "Aug 2023 at 7:05PM",
		src: "/images/sydney4.webp",
		alt: "Sydney Harbour Bridge at sunset with boats passing underneath",
	},
];

export default function PolaroidStack() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<Polaroid items={polaroidData} />
		</div>
	)
}