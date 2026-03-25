import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── 1. 文字単位のスタガーアニメーション（yui540のテキスト出現風） ─── */
export function TextReveal({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── 2. 数字カウントアップ（yui540のカウンターモーション風） ─── */
export function CountUp({ to, duration = 1.5, suffix = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}

/* ─── 3. 無限マーキー（yui540のinfinite scrollスタイル） ─── */
export function Marquee({ items, speed = 30, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: items.length * (60 / speed),
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {/* 2回繰り返してループを作る */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── 4. ホバーでぐにゃっと動くカード（yui540のmicrointeraction風） ─── */
export function SquishCard({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        rotate: 0.5,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── 5. セクションデバイダー（yui540のwave風） ─── */
export function WaveDivider({ className = "" }) {
  return (
    <div className={`relative overflow-hidden h-8 ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1200 40"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,20 C200,5 400,35 600,20 C800,5 1000,35 1200,20"
            fill="none"
            strokeWidth="1"
            className="stroke-stone-200 dark:stroke-stone-700"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

/* ─── 6. プログレスバー（Cortex View / ロードマップ用にも使える） ─── */
export function AnimatedProgress({ value, color = "#4f46e5", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${value}%` } : {}}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      />
    </div>
  );
}

/* ─── 7. パルスドット（ステータスインジケーター用） ─── */
export function PulseDot({ color = "#22c55e", size = 8 }) {
  return (
    <span className="relative inline-flex">
      <motion.span
        className="absolute inline-flex rounded-full opacity-75"
        style={{ width: size, height: size, background: color }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span
        className="relative inline-flex rounded-full"
        style={{ width: size, height: size, background: color }}
      />
    </span>
  );
}
