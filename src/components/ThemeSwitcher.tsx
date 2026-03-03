"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // eslint-disable-next-line
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
        >
            {theme === "dark" ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
            ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
            )}
        </button>
    );
}
