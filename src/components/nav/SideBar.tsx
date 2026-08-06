"use client";
import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

const navItems = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Exp." },
	{ id: "contact", label: "Contact" },
];

export const SideBar = () => {
	const [selected, setSelected] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSelected(entry.target.id);
				}
			});
		}, { threshold: 0.3 });

		document
			.querySelectorAll("section[id]")
			.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<motion.nav
			initial={{ x: -70 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.5 }}
			className={styles.sideBar}
			aria-label="Section navigation">
			<a
				className={styles.logo}
				href="#main"
				aria-label="Back to top">
				AK<span>.</span>
			</a>
			{navItems.map(({ id, label }, index) => (
				<motion.a
					key={id}
					initial={{ x: -70 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
					href={`#${id}`}
					aria-current={selected === id ? "location" : undefined}
					className={selected === id ? styles.selected : ""}>
					{label}
				</motion.a>
			))}
		</motion.nav>
	);
};
