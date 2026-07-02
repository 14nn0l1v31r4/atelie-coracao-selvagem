import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  const nextThemeLabel = isDark ? 'Luz natural' : 'Verde profundo'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle group"
      aria-label={`Ativar tema ${nextThemeLabel}`}
      title={`Ativar tema ${nextThemeLabel}`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          {isDark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
        </span>
      </span>
      <span className="hidden text-xs font-semibold tracking-wide lg:inline">{isDark ? 'Luz natural' : 'Verde profundo'}</span>
    </button>
  )
}
