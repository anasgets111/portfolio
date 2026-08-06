"use client";
import styles from "./dotgrid.module.scss";
import { animate, stagger } from "animejs";
import type { MouseEvent } from "react";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

export const DotGrid = () => {
	const handleDotClick = (event: MouseEvent<HTMLDivElement>) => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
				from: Number(event.currentTarget.dataset.index),
			}),
		});
	};

	return (
		<div
			style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
			className={styles.dotGrid}
			aria-hidden="true">
			{Array.from({ length: GRID_WIDTH * GRID_HEIGHT }, (_, index) => (
				<div
					onClick={handleDotClick}
					className={styles.dotWrapper}
					data-index={index}
					key={index}>
					<div className={`${styles.dot} dot-point`} />
				</div>
			))}
		</div>
	);
};
