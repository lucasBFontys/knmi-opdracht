"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "light" }) {
    const [theme, setTheme] = useState(defaultTheme)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Set mounted to true after initial render
        setMounted(true)

        // Check for saved theme
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    useEffect(() => {
        // Skip if not mounted yet
        if (!mounted) return

        // Apply theme class to html element
        const root = document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)

        // Save theme to localStorage
        localStorage.setItem("theme", theme)
    }, [theme, mounted])

    // Prevent hydration mismatch
    if (!mounted) {
        return <>{children}</>
    }

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

