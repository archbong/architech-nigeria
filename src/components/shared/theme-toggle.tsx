import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/components/shared/theme-provider'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else if (theme === 'light') setTheme('system')
    else setTheme('dark')
  }

  const nextTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
  const nextLabel = nextTheme === 'dark' ? 'Dark' : nextTheme === 'light' ? 'Light' : 'System'

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-lg transition-all duration-300 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-90"
      title={`Theme: ${theme}. Click for ${nextLabel}`}
    >
      <Sun className={cn(
        'h-4 w-4 transition-all duration-300',
        theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0 absolute'
      )} />
      <Moon className={cn(
        'h-4 w-4 transition-all duration-300',
        theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0 absolute'
      )} />
      <Monitor className={cn(
        'h-4 w-4 transition-all duration-300',
        theme === 'system' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0 absolute'
      )} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}