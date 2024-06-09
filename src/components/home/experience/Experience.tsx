import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BasicsEngage",
    position: "FrontEnd Developer",
    time: "Dec 2023 - Now",
    location: "Cairo, Egypt",
    description:
      "Redesign the website, including adding pricing, locales support, and improving the user interface and dashboard.",
    tech: ["Next JS", "React", "MongoDB", "Git", "Github"],
  },
];
