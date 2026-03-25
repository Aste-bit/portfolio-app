import { motion } from "framer-motion";
import {
  Monitor,
  LayoutDashboard,
  Database,
  Download,
  Bell,
  RefreshCw,
  Search,
  Wifi,
  Bot,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { content } from "../data/content";
import { Marquee } from "./Animations";

const iconMap = {
  Monitor,
  LayoutDashboard,
  Database,
  Download,
  Bell,
  RefreshCw,
  Search,
  Wifi,
  Bot,
};

export function Capabilities({ isTech }) {
  const { cards, extraText } = content.capabilities;

  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
          Capabilities
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {content.capabilities.sectionTitle}
        </h2>
        <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400 mt-4 whitespace-pre-line">
          {content.capabilities.sectionDescription}
        </p>
      </FadeIn>

      {/* Cards grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {cards.map((card, i) => {
          const Icon = iconMap[card.icon];
          const data = isTech ? card.tech : card.easy;
          return (
            <StaggerItem key={i}>
              <motion.div
                className="group p-5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-200"
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 25px -5px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Icon
                  size={20}
                  className="text-stone-400 dark:text-stone-500 mb-3"
                />
                <motion.div
                  key={isTech ? "tech" : "easy"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                    {data.title}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1.5 leading-relaxed">
                    {data.description}
                  </p>
                </motion.div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Tech stack marquee */}
      <FadeIn className="mt-10">
        <Marquee
          items={[
            "Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase",
            "Google Sheets API", "GAS", "Vercel", "Discord Bot", "Claude Code",
            "PostgreSQL", "OAuth2", "Service Worker", "Chrome Extension",
          ]}
          speed={25}
        />
      </FadeIn>

      {/* Extra text */}
      <FadeIn className="mt-10">
        <div className="border-t border-stone-200 dark:border-stone-700 pt-6">
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
            もう少し広い範囲でも
          </p>
          <motion.p
            key={isTech ? "tech" : "easy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed"
          >
            {isTech ? extraText.tech : extraText.easy}
          </motion.p>
        </div>
      </FadeIn>
    </section>
  );
}
