import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Accordion } from "./Accordion";
import { SquishCard } from "./Animations";

function Screenshot({ src, alt }) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const noImage = !src || hasError;

  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-sm">
      {!noImage && (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      {(noImage || !loaded) && (
        <div
          className={`w-full h-full flex flex-col items-center justify-center gap-2 ${
            loaded && !noImage ? "hidden" : ""
          }`}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300 dark:text-stone-600">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span className="text-xs font-medium tracking-wide text-stone-400 dark:text-stone-500 uppercase">Image not available</span>
        </div>
      )}
    </div>
  );
}

export function Project({ project, isTech }) {
  const data = isTech ? project.tech : project.easy;

  return (
    <FadeIn>
      <section className="py-12 md:py-16">
        {/* Number & Title */}
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500">
          {project.number}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 mt-2">
          {project.title}
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
          {project.service}
        </p>

        {/* Screenshot with reveal animation */}
        <motion.div
          className="mt-8"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SquishCard>
            <Screenshot src={project.screenshot} alt={project.title} />
          </SquishCard>
        </motion.div>

        {/* Description */}
        <motion.div
          key={isTech ? "tech" : "easy"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {data.description.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-stone-600 dark:text-stone-400 mt-4 first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Tags */}
        <div className="mt-8 border-t border-stone-200 dark:border-stone-700 pt-6">
          <motion.div
            key={isTech ? "tech-tags" : "easy-tags"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Tech-only sections */}
        {isTech && data.stack && (
          <div className="mt-6 border-t border-stone-200 dark:border-stone-700 pt-6">
            <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              技術スタック
            </p>
            <p className="text-sm font-mono text-stone-600 dark:text-stone-400">
              {data.stack}
            </p>
          </div>
        )}

        {isTech && data.decisions && (
          <div className="mt-2">
            <Accordion title="設計で考えたこと">
              <ul className="space-y-3">
                {data.decisions.map((d, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {d.title}
                    </p>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                      {d.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        )}
      </section>
    </FadeIn>
  );
}
