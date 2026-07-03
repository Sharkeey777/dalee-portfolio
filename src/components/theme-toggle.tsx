import { Moon, SunDim } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      aria-label="Переключить тему"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-foreground)] transition hover:scale-[1.03] hover:bg-[var(--color-panel-strong)] active:scale-[0.98]"
    >
      <span data-theme-icon-sun>
        <SunDim size={18} weight="bold" />
      </span>
      <span data-theme-icon-moon hidden>
        <Moon size={18} weight="fill" />
      </span>
    </button>
  );
}
