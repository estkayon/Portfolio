import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";
import ProjectModal from "../modals/ProjectModal";
import projects from "../../data/projects";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, ease }
};

// "Fileo: Private In-Browser ..." -> ["Fileo", "Private In-Browser ..."]
function splitTitle(title) {
    const [name, ...rest] = title.split(/\s*[:—]\s+/);
    return [name, rest.join(" ")];
}

function getYear(date) {
    const match = String(date).match(/(\d{4})(?!.*\d{4})/);
    return match ? match[1] : "";
}

function pad(number) {
    return String(number).padStart(2, "0");
}

function FeaturedProject({ project, index, baseUrl, onOpen }) {
    const [name, subtitle] = splitTitle(project.title);

    return (
        <motion.article
            className={`pf-feature ${index % 2 ? "pf-feature-reverse" : ""}`}
            {...reveal}
        >
            <button
                type="button"
                className="pf-media interactive"
                onClick={() => onOpen(project)}
                aria-label={`Open details for ${name}`}
            >
                <img src={`${baseUrl}${project.image}`} alt="" loading="lazy" />
            </button>

            <div className="pf-body">
                <div className="pf-meta">
                    <span className="pf-index">{pad(index + 1)}</span>
                    <span>{project.category}</span>
                    <span>{getYear(project.date)}</span>
                </div>

                <h3 className="pf-title">{name}</h3>

                {subtitle && <p className="pf-subtitle">{subtitle}</p>}

                <p className="pf-description">{project.description}</p>

                {project.metrics?.length > 0 && (
                    <dl className="pf-metrics">
                        {project.metrics.map((metric) => (
                            <div key={metric.label}>
                                <dt>{metric.label}</dt>
                                <dd>{metric.value}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                <p className="pf-stack">{project.technologies.join("  /  ")}</p>

                <div className="pf-links">
                    <button
                        type="button"
                        className="pf-link pf-link-primary interactive"
                        onClick={() => onOpen(project)}
                    >
                        Read case study
                        <ArrowRight size={15} aria-hidden="true" />
                    </button>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-link interactive"
                    >
                        <FaGithub aria-hidden="true" />
                        Source
                    </a>

                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pf-link interactive"
                        >
                            <span className="pf-live-dot" aria-hidden="true" />
                            Live
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

function ArchiveRow({ project, number, baseUrl, onOpen }) {
    const [name] = splitTitle(project.title);

    return (
        <li className="pf-row">
            <span className="pf-row-no">{pad(number)}</span>

            <div className="pf-row-thumb" aria-hidden="true">
                <img src={`${baseUrl}${project.image}`} alt="" loading="lazy" />
            </div>

            <div className="pf-row-main">
                <h4>
                    <button
                        type="button"
                        className="pf-row-open interactive"
                        onClick={() => onOpen(project)}
                    >
                        {name}
                    </button>
                </h4>
                <p>{project.description}</p>
            </div>

            <span className="pf-row-cat">{project.category}</span>
            <span className="pf-row-year">{getYear(project.date)}</span>

            <div className="pf-row-links">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-icon-link interactive"
                    aria-label={`${name} source code on GitHub`}
                >
                    <FaGithub aria-hidden="true" />
                </a>

                {project.liveDemo && (
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-icon-link interactive"
                        aria-label={`${name} live demo`}
                    >
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                )}
            </div>
        </li>
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const baseUrl = import.meta.env.BASE_URL;

    const closeModal = useCallback(() => setSelectedProject(null), []);

    const featured = projects.filter((project) => project.featured);
    const archive = projects.filter((project) => !project.featured);

    return (
        <>
            <section className="content-section projects-section" id="projects">
                <div className="section-container">
                    <SectionHeading
                        number="03"
                        label="Selected Projects"
                        title="Things I’ve built."
                        description="Production-oriented machine learning, MLOps and full-stack software projects."
                    />

                    <div className="pf-featured">
                        {featured.map((project, index) => (
                            <FeaturedProject
                                key={project.id}
                                project={project}
                                index={index}
                                baseUrl={baseUrl}
                                onOpen={setSelectedProject}
                            />
                        ))}
                    </div>

                    {archive.length > 0 && (
                        <motion.div className="pf-archive" {...reveal}>
                            <div className="pf-archive-head">
                                <h3>More projects</h3>
                                <span>{pad(archive.length)} entries</span>
                            </div>

                            <ul className="pf-rows">
                                {archive.map((project, index) => (
                                    <ArchiveRow
                                        key={project.id}
                                        project={project}
                                        number={featured.length + index + 1}
                                        baseUrl={baseUrl}
                                        onOpen={setSelectedProject}
                                    />
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </section>

            <ProjectModal project={selectedProject} onClose={closeModal} />
        </>
    );
}

export default Projects;