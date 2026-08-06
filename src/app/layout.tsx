import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "400", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anas Khalifa Portfolio",
	description: "Hi, I'm Anas, and I'm a FrontEnd Developer",
	keywords: [
		"Frontend",
		"Backend",
		"GitHub",
		"Vercel",
		"Web Development",
		"React",
		"NextJS",
		"TailwindCSS",
		"NodeJS",
		"ExpressJS",
		"MongoDB",
		"JavaScript",
		"TypeScript",
	],
	publisher: "Anas Khalifa",
	twitter: {
		card: "summary_large_image",
		title: "Anas Khalifa",
		description: "Hi, I'm Anas, and I'm a FrontEnd Developer",
		creator: "@anasgets111",
		images: ["/ak.jpg"],
	},
	openGraph: {
		title: "Anas Khalifa",
		description: "Hi, I'm Anas, and I'm a FrontEnd Developer",
		url: "https://anas-portfolio-black.vercel.app/",
		siteName: "Anas Khalifa Portfolio",
		images: [
			{
				url: "/ak.jpg",
				width: 960,
				height: 960,
				alt: "Anas Khalifa Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://anas-portfolio-black.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<MotionConfig reducedMotion="user">{children}</MotionConfig>
			</body>
		</html>
	);
}
