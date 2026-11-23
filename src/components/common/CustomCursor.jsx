import {
    useEffect,
    useRef
} from "react";

import {
    createPortal
} from "react-dom";

function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const finePointer =
            window.matchMedia(
                "(pointer: fine)"
            ).matches;

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (
            !finePointer ||
            reducedMotion
        ) {
            return;
        }

        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) {
            return;
        }

        let mouseX =
            window.innerWidth / 2;

        let mouseY =
            window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        let animationFrame;

        function handleMouseMove(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;

            dot.style.opacity = "1";
            ring.style.opacity = "1";

            // The arrow tip sits 3px inside the SVG, so shift it onto the pointer
            dot.style.transform =
                `translate(
                    ${mouseX - 3}px,
                    ${mouseY - 3}px
                )`;
        }

        function animateRing() {
            ringX +=
                (mouseX - ringX) *
                0.14;

            ringY +=
                (mouseY - ringY) *
                0.14;

            ring.style.transform =
                `translate(
                    ${ringX}px,
                    ${ringY}px
                )
                translate(-50%, -50%)`;

            animationFrame =
                window.requestAnimationFrame(
                    animateRing
                );
        }

        function handlePointerOver(
            event
        ) {
            const interactiveElement =
                event.target.closest?.(
                    "a, button, " +
                    ".interactive, " +
                    ".interactive-card"
                );

            if (interactiveElement) {
                ring.classList.add(
                    "cursor-hover"
                );
                dot.classList.add(
                    "cursor-hover"
                );
            }
        }

        function handlePointerOut(
            event
        ) {
            const currentElement =
                event.target.closest?.(
                    "a, button, " +
                    ".interactive, " +
                    ".interactive-card"
                );

            if (!currentElement) {
                return;
            }

            const nextElement =
                event.relatedTarget
                    ?.closest?.(
                        "a, button, " +
                        ".interactive, " +
                        ".interactive-card"
                    );

            if (!nextElement) {
                ring.classList.remove(
                    "cursor-hover"
                );
                dot.classList.remove(
                    "cursor-hover"
                );
            }
        }

        function hideCursor() {
            dot.style.opacity = "0";
            ring.style.opacity = "0";
        }

        function showCursor() {
            dot.style.opacity = "1";
            ring.style.opacity = "1";
        }

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        document.addEventListener(
            "pointerover",
            handlePointerOver
        );

        document.addEventListener(
            "pointerout",
            handlePointerOut
        );

        document.addEventListener(
            "mouseleave",
            hideCursor
        );

        document.addEventListener(
            "mouseenter",
            showCursor
        );

        animateRing();

        return () => {
            window.cancelAnimationFrame(
                animationFrame
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            document.removeEventListener(
                "pointerover",
                handlePointerOver
            );

            document.removeEventListener(
                "pointerout",
                handlePointerOut
            );

            document.removeEventListener(
                "mouseleave",
                hideCursor
            );

            document.removeEventListener(
                "mouseenter",
                showCursor
            );
        };
    }, []);

    return createPortal(
        <>
            <div
                ref={dotRef}
                className="cursor-arrow"
                aria-hidden="true"
            >
                {/* Fixed colors with a dark outer and white inner outline,
                    so the arrow stays visible on both light and dark backgrounds */}
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                >
                    <path
                        d="M3 3 L25 11.5 L14.2 14.2 L11.5 25 Z"
                        stroke="#0b1220"
                        strokeWidth="3.2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 3 L25 11.5 L14.2 14.2 L11.5 25 Z"
                        stroke="#ffffff"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 3 L25 11.5 L14.2 14.2 Z"
                        fill="#14b8a6"
                    />
                    <path
                        d="M3 3 L14.2 14.2 L11.5 25 Z"
                        fill="#0f766e"
                    />
                    <path
                        d="M8.2 7.2 L16.4 10.6 L12.1 11.9 Z"
                        fill="#5eead4"
                    />
                </svg>
            </div>

            <div
                ref={ringRef}
                className="cursor-ring"
                aria-hidden="true"
            />
        </>,
        document.body
    );
}

export default CustomCursor;