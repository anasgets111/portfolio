"use client";
import styles from "./dotgrid.module.scss";
import { animate, stagger } from "animejs";

export const DotGrid = () => {
	const GRID_WIDTH = 25;
	const GRID_HEIGHT = 20;

	const dots = [];

	const handleDotClick = (e: any) => {
		// In v4, keyframes need to use 'to' instead of 'value'
		animate(".dot-point", {
			scale: [
				{ to: 1.35, ease: "outSine", duration: 250 },
				{ to: 1, ease: "inOutQuad", duration: 500 },
			],
			translateY: [
				{ to: -15, ease: "outSine", duration: 250 },
				{ to: 0, ease: "inOutQuad", duration: 500 },
			],
			opacity: [
				{ to: 0.7, ease: "outSine", duration: 250 },
				{ to: 0.35, ease: "inOutQuad", duration: 500 },
			],
			delay: stagger(100, {
				grid: [GRID_WIDTH, GRID_HEIGHT],
				from: parseInt(e.target.dataset.index),
			}),
		});
	};

	let index = 0;

	for (let i = 0; i < GRID_WIDTH; i++) {
		for (let j = 0; j < GRID_HEIGHT; j++) {
			dots.push(
				<div
					onClick={handleDotClick}
					className={styles.dotWrapper}
					data-index={index}
					key={`${i}-${j}`}>
					<div
						className={`${styles.dot} dot-point`}
						data-index={index}
					/>
				</div>
			);
			index++;
		}
	}

	return (
		<div
			style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
			className={styles.dotGrid}>
			{dots.map((dot) => dot)}
		</div>
	);
};
