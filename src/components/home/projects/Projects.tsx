import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
	return (
		<section
			className="section-wrapper"
			id="projects">
			<SectionHeader
				title="Projects"
				dir="r"
			/>

			<div className={styles.projects}>
				{projects.map((project) => {
					return (
						<Project
							key={project.title}
							{...project}
						/>
					);
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: "Sacredcube",
		imgSrc: "/project-imgs/sacredcube.png",
		code: "#",
		projectLink: "https://sacredcube.co",
		tech: ["PHP", "Laravel", "Nova", "Filament", "Vue.js", "MySQL", "Livewire"],
		description:
			"Contributed to a multi-tenant ERP & app-builder SaaS platform handling over 900,000 files (5 GB) with strict tenant isolation.",
		modalContent: (
			<>
				<p>
					Supported the core team in architecting and maintaining a large-scale
					SaaS platform.
				</p>
				<p>
					Collaborated on backend API endpoints and data models, implementing
					global search and optimizing MySQL queries. Migrating to and extending
					Filament form resources.
				</p>
				<p>
					Developed Vue.js components with Tailwind UI for data entry, real-time
					notifications, and role-based permissions.And maintained CI/CD
					pipelines while documenting setup procedures and creating tenant
					onboarding seeders.
				</p>
			</>
		),
	},
	{
		title: "BasicsEngage",
		imgSrc: "/project-imgs/basicsengage.png",
		code: "#",
		projectLink: "https://www.basicsengage.com/",
		tech: ["React", "Nextjs", "Tailwind", "MongoDB"],
		description: `Developed a fully functional e-commerce website using incorporating advanced UI design principles,
          secure payment processing, and a comprehensive admin dashboard.`,
		modalContent: (
			<>
				<p>
					Designed and implemented a modern e-commerce platform with a focus on
					creating an intuitive and visually appealing user interface. Developed
					custom components for product display, shopping cart functionality,
					and checkout process.
				</p>
				<p>
					Integrated a secure payment gateway for seamless transactions and
					built an admin dashboard to manage orders, inventory, and customer
					data. Implemented data fetching patterns and followed best practices
					for writing clean and maintainable code.
				</p>
			</>
		),
	},
	{
		title: "CasePenguin",
		imgSrc: "/project-imgs/casepenguin.png",
		code: "https://github.com/anasgets111/casepenguin",
		projectLink: "https://casepenguin.vercel.app",
		tech: [
			"React",
			"Nextjs",
			"Tailwind",
			"Prisma DB",
			"Kinde Auth",
			"Stripe Payments",
			"NeonTech DB",
		],
		description: `Developed a fully functional e-commerce website using incorporating advanced UI design principles,
          secure payment processing, and a comprehensive admin dashboard.`,
		modalContent: (
			<>
				<p>
					Designed and implemented a modern e-commerce platform with a focus on
					creating an intuitive and visually appealing user interface. Developed
					custom components for product display, shopping cart functionality,
					and checkout process.
				</p>
				<p>
					Integrated a secure payment gateway for seamless transactions and
					built an admin dashboard to manage orders, inventory, and customer
					data. Implemented data fetching patterns and followed best practices
					for writing clean and maintainable code.
				</p>
			</>
		),
	},
	{
		title: "Game Hub",
		imgSrc: "/project-imgs/gamehub.png",
		code: "https://github.com/anasgets111/game-hub",
		projectLink: "https://game-hub-vert-ten.vercel.app",
		tech: [
			"React",
			"Nextjs",
			"Sytled Components",
			"Kinde Auth",
			"Stripe Payments",
			"Prisma",
			"uploadthing",
			"neon DB",
		],
		description: "Built a single-page game hub application using React.",
		modalContent: (
			<>
				<p>
					Users can browse a curated list of online games, filter by genre, and
					access them directly within the application.
				</p>
				<p>
					This project helped me solidify my understanding of React component
					structure, state management, server api calls, and user interface
					development.
				</p>
			</>
		),
	},
	{
		title: "Amazon Mockup",
		imgSrc: "/project-imgs/amazon.png",
		code: "https://github.com/anasgets111/javascript-amazon-project",
		projectLink: "https://anasgets111.github.io/javascript-amazon-project/",
		tech: ["HTML", "CSS", "JavaScript"],
		description:
			"Developed an interactive product page mockup simulating the Amazon shopping experience using JavaScript.",
		modalContent: (
			<>
				<p>
					The project incorporated features like product selection, adding items
					to a shopping cart, and basic quantity adjustments.
				</p>
				<p>
					This project helped me grasp core JavaScript concepts like DOM
					manipulation, event handling, and user interaction.
				</p>
			</>
		),
	},
	{
		title: "YouTube Mockup",
		imgSrc: "/project-imgs/youtube.png",
		code: "https://github.com/anasgets111/Youtube-Mockup",
		projectLink: "https://anasgets111.github.io/Youtube-Mockup",
		tech: ["HTML", "CSS"],
		description:
			"Built a responsive YouTube mockup website replicating core functionalities using HTML and CSS..",
		modalContent: (
			<>
				<p>
					The mockup included features like a search bar, video listings, and a
					navigation menu.
				</p>
				<p>
					This project helped me solidify my understanding of HTML structure,
					CSS styling, and responsive web design principles.
				</p>
			</>
		),
	},
];
