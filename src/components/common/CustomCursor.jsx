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

            dot.style.transform =
                `translate(
                    ${mouseX}px,
                    ${mouseY}px
                )
                translate(-50%, -50%)`;
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
                className="cursor-dot"
                aria-hidden="true"
            />

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