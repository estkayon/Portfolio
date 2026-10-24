import { useEffect, useState } from "react";

function getInitialTheme() {
    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );

    return savedTheme === "light"
        ? "light"
        : "dark";
}

function useTheme() {
    const [theme, setTheme] = useState(
        getInitialTheme
    );

    useEffect(() => {
        document.documentElement.dataset.theme =
            theme;

        localStorage.setItem(
            "portfolio-theme",
            theme
        );

        const themeColor =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (themeColor) {
            themeColor.setAttribute(
                "content",
                theme === "dark"
                    ? "#03050c"
                    : "#f3f7fb"
            );
        }
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "dark"
                ? "light"
                : "dark"
        );
    }

    return {
        theme,
        toggleTheme
    };
}

export default useTheme;