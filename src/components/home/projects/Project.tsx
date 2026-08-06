"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

interface Props {
	modalContent: ReactNode;
	description: string;
	projectLink: string;
	imgSrc: string;
	tech: string[];
	title: string;
	code?: string;
}

export const Project = ({
	modalContent,
	projectLink,
	description,
	imgSrc,
	title,
	code,
	tech,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.75 }}>
				<motion.button
					type="button"
					whileHover={{ scale: 1.1 }}
					onClick={() => setIsOpen(true)}
					className={styles.projectImage}
					aria-label={`Learn more about ${title}`}>
					<Image
						src={imgSrc}
						alt={`${title} project preview`}
						width={1900}
						height={900}
					/>
				</motion.button>
				<div className={styles.projectCopy}>
					<Reveal width="100%">
						<div className={styles.projectTitle}>
							<h4>{title}</h4>
							<div className={styles.projectTitleLine} />

							{code && (
								<a
									href={code}
									target="_blank"
									rel="noreferrer"
									aria-label={`${title} source code`}>
									<AiFillGithub size="2.8rem" />
								</a>
							)}

							<a
								href={projectLink}
								target="_blank"
								rel="noreferrer"
								aria-label={`Open ${title}`}>
								<AiOutlineExport size="2.8rem" />
							</a>
						</div>
					</Reveal>
					<Reveal>
						<div className={styles.projectTech}>{tech.join(" - ")}</div>
					</Reveal>
					<Reveal>
						<p className={styles.projectDescription}>
							{description} <br />
							<button
								type="button"
								onClick={() => setIsOpen(true)}>
								Learn more {">"}
							</button>
						</p>
					</Reveal>
				</div>
			</motion.div>
			{isOpen && (
				<ProjectModal
					modalContent={modalContent}
					projectLink={projectLink}
					onClose={() => setIsOpen(false)}
					imgSrc={imgSrc}
					title={title}
					code={code}
					tech={tech}
				/>
			)}
		</>
	);
};
