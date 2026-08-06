"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./projectmodal.module.scss";
import Image from "next/image";

interface Props {
	modalContent: ReactNode;
	projectLink: string;
	onClose: () => void;
	imgSrc: string;
	title: string;
	code?: string;
	tech: string[];
}

export const ProjectModal = ({
	modalContent,
	projectLink,
	onClose,
	imgSrc,
	title,
	code,
	tech,
}: Props) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) dialogRef.current?.showModal();
	}, []);

	return (
		<dialog
			ref={dialogRef}
			className={styles.modal}
			aria-labelledby="project-modal-title"
			onClose={onClose}
			onClick={(event) =>
				event.target === event.currentTarget && event.currentTarget.close()
			}>
			<button
				type="button"
				className={styles.closeModalBtn}
				onClick={() => dialogRef.current?.close()}
				aria-label="Close project details">
				<MdClose />
			</button>

			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className={styles.modalCard}>
				<Image
					src={imgSrc}
					alt={`${title} project preview`}
					width={500}
					height={400}
					className={styles.modalImage}
				/>
				<div className={styles.modalContent}>
					<h4 id="project-modal-title">{title}</h4>
					<div className={styles.modalTech}>{tech.join(" - ")}</div>

					<div className={styles.suppliedContent}>{modalContent}</div>

					<div className={styles.modalFooter}>
						<p className={styles.linksText}>
							Project Links<span>.</span>
						</p>
						<div className={styles.links}>
							{code && (
								<a
									target="_blank"
									rel="noreferrer"
									href={code}>
									<AiFillGithub /> source code
								</a>
							)}
							<a
								target="_blank"
								rel="noreferrer"
								href={projectLink}>
								<AiOutlineExport /> live project
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</dialog>
	);
};
