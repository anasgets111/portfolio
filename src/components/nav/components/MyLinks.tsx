"use client";

import styles from "./headinglinks.module.scss";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";

const links = [
	{
		href: "https://www.linkedin.com/in/anasgets111/",
		label: "LinkedIn",
		Icon: AiFillLinkedin,
		external: true,
	},
	{
		href: "tel:+201011423350",
		label: "Call Anas",
		Icon: FaMobileScreen,
		external: false,
	},
	{
		href: "https://api.whatsapp.com/send?phone=201011423350",
		label: "WhatsApp",
		Icon: FaWhatsapp,
		external: true,
	},
	{
		href: "https://github.com/anasgets111",
		label: "GitHub",
		Icon: AiFillGithub,
		external: true,
	},
];

export const MyLinks = () => {
	return (
		<div className={styles.links}>
			{links.map(({ href, label, Icon, external }, index) => (
				<motion.a
					key={href}
					href={href}
					aria-label={label}
					target={external ? "_blank" : undefined}
					rel={external ? "noreferrer" : undefined}
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}>
					<Icon
						size="2.4rem"
						aria-hidden="true"
					/>
				</motion.a>
			))}
		</div>
	);
};
