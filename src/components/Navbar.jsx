import { Sun, Moon } from "lucide-react";

export function Navbar({ mode, setMode, theme, toggleTheme }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/50 dark:border-stone-800/50 bg-white/70 dark:bg-stone-950/70 backdrop-blur-lg">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-stone-800 dark:text-stone-200">
          星野 舜
        </span>

        <div className="flex items-center gap-3">
          {/* Mode toggle */}
          <div className="flex items-center text-sm">
            <button
              onClick={() => setMode("easy")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                mode === "easy"
                  ? "text-stone-900 dark:text-stone-100 font-semibold"
                  : "text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400"
              }`}
            >
              <span className={mode === "easy" ? "underline underline-offset-4 decoration-1" : ""}>
                わかりやすく
              </span>
            </button>
            <span className="text-stone-300 dark:text-stone-600">|</span>
            <button
              onClick={() => setMode("tech")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                mode === "tech"
                  ? "text-stone-900 dark:text-stone-100 font-semibold"
                  : "text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-400"
              }`}
            >
              <span className={mode === "tech" ? "underline underline-offset-4 decoration-1" : ""}>
                技術詳細
              </span>
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 transition-colors"
            aria-label="テーマ切り替え"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
