import { content } from "../data/content";

export function Footer() {
  return (
    <footer className="py-16 md:py-20 text-center">
      <p className="text-sm font-medium text-stone-400 dark:text-stone-500">
        {content.footer.name}
      </p>
      <p className="text-xs text-stone-300 dark:text-stone-600 mt-1">
        {content.footer.year}
      </p>
    </footer>
  );
}
