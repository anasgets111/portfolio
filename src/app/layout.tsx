import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
    "Backend ",
    "GitHub",
    "Vercel",
    "Web Development",
    " React",
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
    title: "Anas Portfolio",
    description: "Hi, I'm Anas, and I'm a FrontEnd Developer.",
    creator: "Anas Khalifa",
    images: ["test.com/screenshot.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/faviconL.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />

      <body id="root" className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
