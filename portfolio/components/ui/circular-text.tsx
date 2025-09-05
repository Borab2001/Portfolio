"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface CircularTextProps {
	text: string;
	spinDuration?: number;
	onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
	className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
	from,
	to: from + 360,
	ease: 'linear' as const,
	duration,
	type: 'tween' as const,
	repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
	rotate: getRotationTransition(duration, from),
	scale: {
		type: 'spring' as const,
		damping: 20,
		stiffness: 300
	}
});

const CircularText: React.FC<CircularTextProps> = ({
	text,
	spinDuration = 20,
	onHover = 'speedUp',
	className = ''
}) => {
	const letters = Array.from(text);
	const controls = useAnimation();
	const arrowControls = useAnimation();
	const rotation: MotionValue<number> = useMotionValue(0);

	useEffect(() => {
		const start = rotation.get();
		controls.start({
			rotate: start + 360,
			scale: 1,
			transition: getTransition(spinDuration, start)
		});
		arrowControls.start({
			rotate: -(start + 360),
			transition: getTransition(spinDuration, -start),
		});
	}, [spinDuration, text, onHover, controls, arrowControls, rotation]);

	const handleHoverStart = () => {
		const start = rotation.get();

		if (!onHover) return;

		let transitionConfig: ReturnType<typeof getTransition> | Transition;
		let scaleVal = 1;

		switch (onHover) {
			case 'slowDown':
				transitionConfig = getTransition(spinDuration * 2, start);
				break;
			case 'speedUp':
				transitionConfig = getTransition(spinDuration / 4, start);
				break;
			case 'pause':
				transitionConfig = {
					rotate: { type: 'spring', damping: 20, stiffness: 300 },
					scale: { type: 'spring', damping: 20, stiffness: 300 }
				};
				break;
			case 'goBonkers':
				transitionConfig = getTransition(spinDuration / 20, start);
				scaleVal = 0.8;
				break;
			default:
				transitionConfig = getTransition(spinDuration, start);
		}

		controls.start({
			rotate: start + 360,
			scale: scaleVal,
			transition: transitionConfig
		});
	};

	const handleHoverEnd = () => {
		const start = rotation.get();
		controls.start({
			rotate: start + 360,
			scale: 1,
			transition: getTransition(spinDuration, start)
		});
		arrowControls.start({
			rotate: -(start + 360),
			transition: getTransition(spinDuration, -start),
		});
	};

	return (
		<div>
			<motion.div
				initial={{ rotate: 0 }}
				className={`pointer-events-none relative mx-auto rounded-full w-[130px] h-[130px] text-primary font-semibold text-center origin-center ${className}`}
				animate={controls}
				onUpdate={(latest) => rotation.set(Number(latest.rotate))}
				onMouseEnter={handleHoverStart}
				onMouseLeave={handleHoverEnd}
			>
				{letters.map((letter, i) => {
					const rotation = (360 / letters.length) * i;
					const factor = Number((Math.PI / letters.length).toFixed(0));
					const x = factor * i;
					const y = factor * i;
					const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;


					return (
						<span
							key={i}
							className="scale-50 sm:scale-100  absolute inline-block inset-0 text-lg transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
							style={{ transform, WebkitTransform: transform }}
						>
							{letter}
						</span>
					);
				})}
				<motion.span className="absolute inset-0 flex items-center justify-center" animate={arrowControls}>
					<ArrowDown className="text-2xl" />
				</motion.span>
			</motion.div>
		</div>
	);
};

export default CircularText;