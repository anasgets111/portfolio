import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey, I&apos;m Anas! 👋 I recently traded blueprints for code,
              channeling my passion for design and problem-solving into the
              world of web development.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Over the past months, I&apos;ve been building a strong foundation
              in HTML, CSS, and JavaScript, React and Next.JS.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My background in architecture instilled in me a keen eye for
              detail and a user-centric approach, which I bring to every line of
              code I write.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m excited to collaborate on projects where I can leverage
              my design thinking and growing technical skills to craft beautiful
              and intuitive user experiences. 🌳✏️ I&apos;m always up for a chat
              about design, technology, or anything in-between - let&apos;s
              connect! 😊
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
