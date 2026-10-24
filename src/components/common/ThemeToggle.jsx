import {
    Moon,
    Sun
} from "lucide-react";

function ThemeToggle({
    theme,
    onToggle
}) {
    const lightTheme =
        theme === "light";

    return (
        <button
            type="button"
            className="theme-toggle interactive"
            onClick={onToggle}
            aria-label={
                lightTheme
                    ? "Switch to dark theme"
                    : "Switch to light theme"
            }
            title={
                lightTheme
                    ? "Dark theme"
                    : "Light theme"
            }
        >
            <Sun
                className="theme-icon theme-sun"
                size={17}
                aria-hidden="true"
            />

            <Moon
                className="theme-icon theme-moon"
                size={17}
                aria-hidden="true"
            />
        </button>
    );
}

export default ThemeToggle;