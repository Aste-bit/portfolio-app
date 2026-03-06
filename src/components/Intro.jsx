import { motion } from "framer-motion";
import { content } from "../data/content";

export function Intro({ isTech }) {
  const data = isTech ? content.intro.tech : content.intro.easy;

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 dark:text-stone-50"
      >
        {content.intro.name}
      </motion.h1>

      <motion.div
        key={isTech ? "tech" : "easy"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
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
