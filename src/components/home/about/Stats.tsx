import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">CSS</span>
            <span className="chip">HTML</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">GitHub</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Kinde Auth</span>
            <span className="chip">Stripe</span>
            <span className="chip">AWS</span>
            <span className="chip">PrismaDB</span>
            <span className="chip">Sass</span>
            <span className="chip">PrismaDB</span>
            <span className="chip">MongoDB</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
