import {
    useEffect,
    useRef
} from "react";

function SpaceBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context =
            canvas.getContext("2d");

        let stars = [];
        let animationFrameId;

        const pointer = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            active: false
        };

        function createStar() {
            return {
                x:
                    Math.random() *
                    window.innerWidth,

                y:
                    Math.random() *
                    window.innerHeight,

                radius:
                    Math.random() * 1.4 +
                    0.25,

                speedX:
                    (Math.random() - 0.5) *
                    0.08,

                speedY:
                    (Math.random() - 0.5) *
                    0.08,

                alpha:
                    Math.random() * 0.75 +
                    0.2,

                pulse:
                    Math.random() *
                    Math.PI *
                    2
            };
        }

        function resizeCanvas() {
            const pixelRatio = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            canvas.width =
                window.innerWidth *
                pixelRatio;

            canvas.height =
                window.innerHeight *
                pixelRatio;

            canvas.style.width =
                `${window.innerWidth}px`;

            canvas.style.height =
                `${window.innerHeight}px`;

            context.setTransform(
                pixelRatio,
                0,
                0,
                pixelRatio,
                0,
                0
            );

            const starCount = Math.min(
                380,
                Math.floor(
                    (
                        window.innerWidth *
                        window.innerHeight
                    ) / 3500
                )
            );

            stars = Array.from(
                {
                    length: starCount
                },
                createStar
            );
        }

        function handlePointerMove(event) {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            pointer.active = true;
        }

        function handlePointerLeave() {
            pointer.active = false;
        }

        function drawSpace() {
            context.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            const lightTheme =
                document.documentElement
                    .dataset.theme ===
                "light";

            stars.forEach((star) => {
                star.x += star.speedX;
                star.y += star.speedY;
                star.pulse += 0.018;

                if (star.x < -20) {
                    star.x =
                        window.innerWidth +
                        20;
                }

                if (
                    star.x >
                    window.innerWidth + 20
                ) {
                    star.x = -20;
                }

                if (star.y < -20) {
                    star.y =
                        window.innerHeight +
                        20;
                }

                if (
                    star.y >
                    window.innerHeight + 20
                ) {
                    star.y = -20;
                }

                if (pointer.active) {
                    const distanceX =
                        star.x - pointer.x;

                    const distanceY =
                        star.y - pointer.y;

                    const distance =
                        Math.sqrt(
                            distanceX *
                                distanceX +
                            distanceY *
                                distanceY
                        );

                    const interactionRadius =
                        150;

                    if (
                        distance <
                            interactionRadius &&
                        distance > 0
                    ) {
                        const force =
                            (
                                interactionRadius -
                                distance
                            ) /
                            interactionRadius;

                        star.x +=
                            (
                                distanceX /
                                distance
                            ) *
                            force *
                            2.6;

                        star.y +=
                            (
                                distanceY /
                                distance
                            ) *
                            force *
                            2.6;
                    }
                }

                const pulseOpacity =
                    star.alpha +
                    Math.sin(
                        star.pulse
                    ) *
                        0.15;

                const starOpacity =
                    lightTheme
                        ? Math.max(
                              0.12,
                              pulseOpacity *
                                  0.55
                          )
                        : Math.max(
                              0.08,
                              pulseOpacity
                          );

                context.beginPath();

                context.arc(
                    star.x,
                    star.y,
                    star.radius,
                    0,
                    Math.PI * 2
                );

                context.fillStyle =
                    lightTheme
                        ? `rgba(
                            26,
                            93,
                            145,
                            ${starOpacity}
                        )`
                        : `rgba(
                            205,
                            230,
                            255,
                            ${starOpacity}
                        )`;

                context.fill();
            });

            animationFrameId =
                window.requestAnimationFrame(
                    drawSpace
                );
        }

        resizeCanvas();
        drawSpace();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        window.addEventListener(
            "pointermove",
            handlePointerMove
        );

        document.addEventListener(
            "mouseleave",
            handlePointerLeave
        );

        return () => {
            window.cancelAnimationFrame(
                animationFrameId
            );

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            window.removeEventListener(
                "pointermove",
                handlePointerMove
            );

            document.removeEventListener(
                "mouseleave",
                handlePointerLeave
            );
        };
    }, []);

    return (
        <div
            className="space-background"
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="space-canvas"
            />

            <div className="space-overlay" />
        </div>
    );
}

export default SpaceBackground;