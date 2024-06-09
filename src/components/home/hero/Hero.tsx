"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <motion.h1
              className={styles.title}
              initial={{ y: 0 }}
              whileHover={{
                y: "10%",
                transition: { duration: 0.5, delay: 0.1 },
              }}
            >
              Hi, I&apos;m <span>Anas</span>.
            </motion.h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Frontend Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              From blueprints to bytes! 🏡💻 I traded my architect&apos;s ruler
              for a keyboard 4 months ago and I&apos;m loving the journey so
              far. HTML, CSS, JavaScript, TypeScript, React, Next.js,
              Tailwind... I&apos;m diving deep into the world of web
              development. Let&apos;s connect and see what we can build
              together! 🚀
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src="/ak.jpg"
            alt="Anas Khalifa | Frontend Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
