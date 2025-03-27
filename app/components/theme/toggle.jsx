"use client"

import { useTheme } from "./provider.jsx"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center text-[rgb(var(--color-blauw))] dark:text-[rgb(226_232_240)] rounded-full transition-colors"
            aria-label="Toggle dark mode"
        >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    )
}

