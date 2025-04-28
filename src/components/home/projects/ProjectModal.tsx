"use client";
import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./projectmodal.module.scss";
import Image from "next/image";

interface Props {
	modalContent: React.ReactNode;
	projectLink: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	isOpen: boolean;
	imgSrc: string;
	title: string;
	code: string;
	tech: string[];
}

export const ProjectModal = ({
	modalContent,
	projectLink,
	setIsOpen,
	isOpen,
	imgSrc,
	title,
	code,
	tech,
}: Props) => {
	useEffect(() => {
		const body = document.querySelector("body");

		if (isOpen) {
			body!.style.overflowY = "hidden";
		} else {
			body!.style.overflowY = "scroll";
		}
	}, [isOpen]);

	const content = (
		<div
			className={styles.modal}
			onClick={() => setIsOpen(false)}>
			<button className={styles.closeModalBtn}>
				<MdClose />
			</button>

			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				onClick={(e) => e.stopPropagation()}
				className={styles.modalCard}>
				<Image
					src={imgSrc}
					alt={`An image of the ${title} project.`}
					width={500}
					height={400}
					className={styles.modalImage}
				/>
				<div className={styles.modalContent}>
					<h4>{title}</h4>
					<div className={styles.modalTech}>{tech.join(" - ")}</div>

					<div className={styles.suppliedContent}>{modalContent}</div>

					<div className={styles.modalFooter}>
						<p className={styles.linksText}>
							Project Links<span>.</span>
						</p>
						<div className={styles.links}>
							<Link
								target="_blank"
								rel="nofollow"
								href={code}>
								<AiFillGithub /> source code
							</Link>
							<Link
								target="_blank"
								rel="nofollow"
								href={projectLink}>
								<AiOutlineExport /> live project
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);

	if (!isOpen) return <></>;

	// @ts-ignore
	return ReactDOM.createPortal(content, document.getElementById("root"));
};
