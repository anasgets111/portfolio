import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";

export const Contact = () => {
	return (
		<section
			className="section-wrapper"
			id="contact">
			<div className={styles.contactWrapper}>
				<Reveal width="100%">
					<h3 className={styles.contactTitle}>
						Contact<span>.</span>
					</h3>
				</Reveal>
				<Reveal width="100%">
					<p className={styles.contactCopy}>
						Have an idea to discuss? Shoot me an email if you want to connect!
						You can also find me on{" "}
						<a
							href="https://www.linkedin.com/in/anasgets111/"
							target="_blank"
							rel="noreferrer">
							Linkedin
						</a>{" "}
						or{" "}
						<a
							href="https://api.whatsapp.com/send?phone=201011423350"
							target="_blank"
							rel="noreferrer">
							WhatsApp
						</a>{" "}
						if that&apos;s more your speed.
					</p>
				</Reveal>
				<Reveal width="100%">
					<a
						href="mailto:anasgets111@gmail.com"
						className={styles.contactEmail}>
						<AiFillMail size="2.4rem" />
						<span>Send Email</span>
					</a>
				</Reveal>
			</div>
		</section>
	);
};
