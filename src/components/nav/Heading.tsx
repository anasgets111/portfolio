import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { AiFillFilePdf } from "react-icons/ai";

export const Heading = () => {
	return (
		<header className={styles.heading}>
			<MyLinks />
			<a
				className={styles.resumeLink}
				href="/AnasCV.pdf"
				target="_blank"
				rel="noreferrer">
				<AiFillFilePdf
					size="2.4rem"
					aria-hidden="true"
				/>
				<span>My resume</span>
			</a>
		</header>
	);
};
