import { useTheme } from "./hooks/useTheme";
import { useMode } from "./hooks/useMode";
import { content } from "./data/content";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Project } from "./components/Project";
import { Capabilities } from "./components/Capabilities";
import { Process } from "./components/Process";
import { Footer } from "./components/Footer";
import { WaveDivider } from "./components/Animations";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  const { mode, setMode, isTech } = useMode();

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0C0A09] transition-colors duration-300">
      <Navbar
        mode={mode}
        setMode={setMode}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="max-w-3xl mx-auto px-6">
        <Intro isTech={isTech} />

        {content.projects.map((project, i) => (
          <Project key={i} project={project} isTech={isTech} />
        ))}

        <WaveDivider className="my-4" />
        <Capabilities isTech={isTech} />
        <WaveDivider className="my-4" />
        <Process isTech={isTech} />
      </main>

      <div className="max-w-3xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  );
}
