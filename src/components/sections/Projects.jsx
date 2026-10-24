import {
    useCallback,
    useState
} from "react";

import {
    motion
} from "motion/react";

import {
    ArrowUpRight,
    ExternalLink,
    Info
} from "lucide-react";

import {
    FaGithub
} from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";
import ProjectModal from "../modals/ProjectModal";
import projects from "../../data/projects";

function Projects() {
    const [
        selectedProject,
        setSelectedProject
    ] = useState(null);

    const baseUrl =
        import.meta.env.BASE_URL;

    const closeModal =
        useCallback(() => {
            setSelectedProject(null);
        }, []);

    return (
        <>
            <section
                className="content-section projects-section"
                id="projects"
            >
                <div className="section-container">
                    <SectionHeading
                        number="03"
                        label="Selected Projects"
                        title="Things I’ve built."
                        description="Production-oriented machine learning, MLOps and full-stack software projects."
                    />

                    <div className="projects-grid">
                        {projects.map(
                            (
                                project,
                                index
                            ) => (
                                <motion.article
                                    key={
                                        project.id
                                    }
                                    className="project-card interactive-card"
                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    whileHover={{
                                        y: -9,
                                        scale: 1.012
                                    }}
                                    whileTap={{
                                        scale: 0.99
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.1
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay:
                                            (
                                                index %
                                                2
                                            ) *
                                            0.08,
                                        ease: [
                                            0.16,
                                            1,
                                            0.3,
                                            1
                                        ]
                                    }}
                                >
                                    <div className="project-image-wrapper">
                                        <img
                                            src={`${baseUrl}${project.image}`}
                                            alt={`${project.title} preview`}
                                            loading="lazy"
                                            className="project-image"
                                        />

                                        <div className="project-image-overlay" />

                                        <span className="project-image-number">
                                            {String(
                                                index +
                                                    1
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>
                                    </div>

                                    <div className="project-card-body">
                                        <div className="project-card-top">
                                            <span className="project-number">
                                                Project /{" "}
                                                {String(
                                                    index +
                                                        1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <ArrowUpRight
                                                className="project-arrow"
                                                size={
                                                    20
                                                }
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div className="project-card-content">
                                            <p className="project-type">
                                                {
                                                    project.type
                                                }
                                            </p>

                                            <h3>
                                                {
                                                    project.title
                                                }
                                            </h3>

                                            <p className="project-description">
                                                {
                                                    project.description
                                                }
                                            </p>

                                            <p className="project-date">
                                                {
                                                    project.date
                                                }
                                            </p>

                                            <div className="project-tags">
                                                {project.technologies
                                                    .slice(
                                                        0,
                                                        5
                                                    )
                                                    .map(
                                                        (
                                                            technology
                                                        ) => (
                                                            <span
                                                                key={
                                                                    technology
                                                                }
                                                            >
                                                                {
                                                                    technology
                                                                }
                                                            </span>
                                                        )
                                                    )}

                                                {project
                                                    .technologies
                                                    .length >
                                                    5 && (
                                                    <span>
                                                        +
                                                        {project
                                                            .technologies
                                                            .length -
                                                            5}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className={`project-actions ${
                                                project.liveDemo
                                                    ? "project-actions-three"
                                                    : ""
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                className="project-action interactive"
                                                onClick={() =>
                                                    setSelectedProject(
                                                        project
                                                    )
                                                }
                                            >
                                                <Info
                                                    size={
                                                        15
                                                    }
                                                    aria-hidden="true"
                                                />

                                                See details
                                            </button>

                                            <a
                                                href={
                                                    project.github
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-action interactive"
                                            >
                                                <FaGithub
                                                    aria-hidden="true"
                                                />

                                                GitHub
                                            </a>

                                            {project.liveDemo && (
                                                <a
                                                    href={
                                                        project.liveDemo
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-action project-live-action interactive"
                                                >
                                                    <ExternalLink
                                                        size={
                                                            15
                                                        }
                                                        aria-hidden="true"
                                                    />

                                                    Live demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        )}
                    </div>
                </div>
            </section>

            <ProjectModal
                project={
                    selectedProject
                }
                onClose={closeModal}
            />
        </>
    );
}

export default Projects;