import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

const chipList = [
	"CSS",
	"HTML",
	"JavaScript",
	"TypeScript",
	"GitHub",
	"Tailwind",
	"React",
	"Nextjs",
	"NodeJS",
	"Kinde Auth",
	"Stripe",
	"AWS",
	"PrismaDB",
	"Sass",
	"MongoDB",
	"Docker",
	"ArchLinux",
	"Ubuntu",
	"Bash",
	"Fish Shell",
	"MySQL",
	"Livewire",
	"PHP",
	"VueJs",
	"Filament",
	"Laravel",
	"Nova",
	"SSH",
];

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillCode
							size="2.4rem"
							color="var(--brand)"
						/>
						<span>Skills</span>
					</h4>

					<div className={styles.scrollContainer}>
						<div className={`${styles.statGrid} ${styles.scrollContent}`}>
							{[...chipList, ...chipList].map((skill, index) => (
								<span
									key={`${skill}-${index}`}
									aria-hidden={index >= chipList.length}
									className="chip">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	);
};
