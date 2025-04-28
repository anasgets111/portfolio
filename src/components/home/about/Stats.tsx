// Stats.tsx
import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

// 1. put all chip labels in an array
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
	"Vue.js",
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

					{/* 2. scrollContainer is the “mask” */}
					<div className={styles.scrollContainer}>
						{/* 3. render chipList twice for seamless looping */}
						<div className={`${styles.statGrid} ${styles.scrollContent}`}>
							{chipList.map((c) => (
								<span
									key={c}
									className="chip">
									{c}
								</span>
							))}
							{chipList.map((c, i) => (
								// second render needs unique keys
								<span
									key={`${c}-${i}`}
									className="chip">
									{c}
								</span>
							))}
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	);
};
