import { motion } from "framer-motion";
import { content } from "../data/content";
import { TextReveal } from "./Animations";

export function Intro({ isTech }) {
  const data = isTech ? content.intro.tech : content.intro.easy;

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        <TextReveal text={content.intro.name} delay={0.2} />
      </h1>

      <motion.div
        key={isTech ? "tech" : "easy"}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        {data.body.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="text-lg leading-relaxed text-stone-600 dark:text-stone-400 mt-4 first:mt-0 whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
