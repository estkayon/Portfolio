import {
    useEffect
} from "react";

import {
    createPortal
} from "react-dom";

import {
    AnimatePresence,
    motion
} from "motion/react";

import {
    CalendarDays,
    ExternalLink,
    Layers3,
    UserRound,
    X
} from "lucide-react";

import {
    FaGithub
} from "react-icons/fa6";

function ProjectModal({
    project,
    onClose
}) {
    useEffect(() => {
        if (!project) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            "hidden";

        function handleEscape(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.body.style.overflow =
                previousOverflow;

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [project, onClose]);

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    className="project-modal-backdrop"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.25
                    }}
                    onMouseDown={
                        onClose
                    }
                >
                    <motion.div
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        initial={{
                            opacity: 0,
                            y: 35,
                            scale: 0.96
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.97
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        }}
                        onMouseDown={(
                            event
                        ) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            className="project-modal-close interactive"
                            aria-label="Close project details"
                            onClick={
                                onClose
                            }
                        >
                            <X
                                size={20}
                                aria-hidden="true"
                            />
                        </button>

                        <p className="project-modal-type">
                            {project.type}
                        </p>

                        <h2 id="project-modal-title">
                            {project.title}
                        </h2>

                        <p className="project-modal-description">
                            {
                                project.description
                            }
                        </p>

                        <div className="project-modal-meta">
                            <div>
                                <CalendarDays
                                    size={17}
                                    aria-hidden="true"
                                />

                                <span>Date</span>

                                <p>
                                    {
                                        project.date
                                    }
                                </p>
                            </div>

                            <div>
                                <UserRound
                                    size={17}
                                    aria-hidden="true"
                                />

                                <span>Role</span>

                                <p>
                                    {
                                        project.role
                                    }
                                </p>
                            </div>

                            <div>
                                <Layers3
                                    size={17}
                                    aria-hidden="true"
                                />

                                <span>
                                    Technologies
                                </span>

                                <p>
                                    {project.technologies.join(
                                        ", "
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="project-modal-details">
                            <h3>
                                Project details
                            </h3>

                            <ul>
                                {project.details.map(
                                    (
                                        detail
                                    ) => (
                                        <li
                                            key={
                                                detail
                                            }
                                        >
                                            <span />

                                            <p>
                                                {
                                                    detail
                                                }
                                            </p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="project-modal-actions">
                            <a
                                href={
                                    project.github
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal-link interactive"
                            >
                                <FaGithub
                                    aria-hidden="true"
                                />

                                View GitHub
                            </a>

                            {project.liveDemo && (
                                <a
                                    href={
                                        project.liveDemo
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-modal-link project-modal-live interactive"
                                >
                                    <ExternalLink
                                        size={
                                            16
                                        }
                                        aria-hidden="true"
                                    />

                                    Live demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

export default ProjectModal;