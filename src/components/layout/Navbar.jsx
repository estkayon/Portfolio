import {
    Menu,
    X
} from "lucide-react";

import {
    useEffect,
    useState
} from "react";

import ThemeToggle from "../common/ThemeToggle";

const navigationLinks = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Experience",
        href: "#experience"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Publication",
        href: "#publication"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Education",
        href: "#education"
    },
    {
        label: "Certificates",
        href: "#certificates"
    },
    {
        label: "Volunteering",
        href: "#volunteering"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];

function Navbar({
    theme,
    onThemeToggle
}) {
    const [menuOpen, setMenuOpen] =
        useState(false);

    const [
        headerScrolled,
        setHeaderScrolled
    ] = useState(false);

    const [
        activeSection,
        setActiveSection
    ] = useState("");

    useEffect(() => {
        function handleScroll() {
            setHeaderScrolled(
                window.scrollY > 20
            );
        }

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true
            }
        );

        handleScroll();

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow =
            menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow =
                "";
        };
    }, [menuOpen]);

    useEffect(() => {
        function handleResize() {
            if (
                window.innerWidth >
                1180
            ) {
                setMenuOpen(false);
            }
        }

        function handleEscape(event) {
            if (
                event.key === "Escape"
            ) {
                setMenuOpen(false);
            }
        }

        window.addEventListener(
            "resize",
            handleResize
        );

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    useEffect(() => {
        const sections =
            navigationLinks
                .map((link) =>
                    document.querySelector(
                        link.href
                    )
                )
                .filter(Boolean);

        if (!sections.length) {
            return;
        }

        const observer =
            new IntersectionObserver(
                (entries) => {
                    const visibleEntry =
                        entries.find(
                            (entry) =>
                                entry.isIntersecting
                        );

                    if (visibleEntry) {
                        setActiveSection(
                            `#${
                                visibleEntry
                                    .target.id
                            }`
                        );
                    }
                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px",
                    threshold: 0
                }
            );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header
            className={`site-header ${
                headerScrolled
                    ? "header-scrolled"
                    : ""
            }`}
        >
            <div className="navbar-container">
                <a
                    href="#home"
                    className="navbar-brand interactive"
                    aria-label="Go to homepage"
                    onClick={closeMenu}
                >
                    <span className="brand-symbol">
                        ER
                    </span>

                    <span className="brand-copy">
                        <strong>
                            Ayon
                        </strong>

                        <small>
                            Software · AI ·
                            MLOps
                        </small>
                    </span>
                </a>

                <nav
                    className="desktop-navigation"
                    aria-label="Main navigation"
                >
                    {navigationLinks.map(
                        (link) => (
                            <a
                                key={
                                    link.href
                                }
                                href={
                                    link.href
                                }
                                className={
                                    activeSection ===
                                    link.href
                                        ? "active"
                                        : ""
                                }
                            >
                                {
                                    link.label
                                }
                            </a>
                        )
                    )}
                </nav>

                <div className="navbar-actions">
                    <ThemeToggle
                        theme={theme}
                        onToggle={
                            onThemeToggle
                        }
                    />

                    <a
                        href="#contact"
                        className="navbar-contact interactive"
                    >
                        Let&apos;s talk
                    </a>

                    <button
                        type="button"
                        className="mobile-menu-button interactive"
                        aria-label={
                            menuOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={
                            menuOpen
                        }
                        onClick={() =>
                            setMenuOpen(
                                (
                                    currentState
                                ) =>
                                    !currentState
                            )
                        }
                    >
                        {menuOpen ? (
                            <X
                                size={20}
                                aria-hidden="true"
                            />
                        ) : (
                            <Menu
                                size={20}
                                aria-hidden="true"
                            />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`mobile-menu ${
                    menuOpen
                        ? "mobile-menu-open"
                        : ""
                }`}
            >
                <nav
                    className="mobile-navigation"
                    aria-label="Mobile navigation"
                >
                    {navigationLinks.map(
                        (link, index) => (
                            <a
                                key={
                                    link.href
                                }
                                href={
                                    link.href
                                }
                                className={
                                    activeSection ===
                                    link.href
                                        ? "active"
                                        : ""
                                }
                                onClick={
                                    closeMenu
                                }
                            >
                                <span>
                                    {String(
                                        index +
                                            1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                {
                                    link.label
                                }
                            </a>
                        )
                    )}
                </nav>

                <div className="mobile-menu-footer">
                    <p>
                        Based in Gazipur,
                        Bangladesh
                    </p>

                    <a
                        href="mailto:estiakayon@gmail.com"
                        onClick={closeMenu}
                    >
                        estiakayon@gmail.com
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;