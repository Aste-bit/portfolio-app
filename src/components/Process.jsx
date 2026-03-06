import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Zap,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Accordion } from "./Accordion";
import { content } from "../data/content";

const iconMap = {
  MessageSquare,
  FileText,
  Zap,
  Rocket,
  RefreshCw,
};

export function Process({ isTech }) {
  const { steps, phases } = content.process;
  const data = isTech ? content.process.tech : content.process.easy;

  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
          Process
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {content.process.sectionTitle}
        </h2>
      </FadeIn>

      {/* Description */}
      <FadeIn className="mt-6">
        <motion.div
          key={isTech ? "tech" : "easy"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
      </FadeIn>

      {/* Process flow */}
      <FadeIn className="mt-12">
        <div className="border-t border-stone-200 dark:border-stone-700 pt-8">
          <motion.div
            key={isTech ? "tech" : "easy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
              {/* Desktop: horizontal */}
              <div className="hidden md:flex items-start justify-between">
                {steps.map((step, i) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center text-center relative">
                      {/* Connector line */}
                      {i < steps.length - 1 && (
                        <div className="absolute top-3 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-px bg-stone-200 dark:bg-stone-700" />
                      )}
                      <div className="relative z-10 w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                        <Icon size={14} className="text-stone-500 dark:text-stone-400" />
                      </div>
                      <p className="text-xs font-medium text-stone-600 dark:text-stone-300 mt-3">
                        {isTech ? step.tech : step.easy}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile: vertical */}
              <div className="md:hidden space-y-4">
                {steps.map((step, i) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                          <Icon size={14} className="text-stone-500 dark:text-stone-400" />
                        </div>
                        {i < steps.length - 1 && (
                          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-px h-4 bg-stone-200 dark:bg-stone-700" />
                        )}
                      </div>
                      <p className="text-sm font-medium text-stone-600 dark:text-stone-300">
                        {isTech ? step.tech : step.easy}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
        </div>
      </FadeIn>

      {/* Tech-only: Phase details */}
      {isTech && (
        <FadeIn className="mt-4">
          <Accordion title="Phase方式の詳細">
            <ul className="space-y-3">
              {phases.map((phase, i) => (
                <li key={i}>
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    {phase.title}
                  </p>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                    {phase.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Accordion>
        </FadeIn>
      )}
    </section>
  );
}
