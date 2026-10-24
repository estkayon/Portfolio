import {
    BookOpenText,
    ChartNoAxesCombined,
    Cpu,
    Gauge
} from "lucide-react";

import {
    motion
} from "motion/react";

import {
    FaGithub
} from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";
import publications from "../../data/publications";

const detailIcons = {
    research: BookOpenText,
    architecture: Cpu,
    efficiency: Gauge,
    performance:
        ChartNoAxesCombined
};

function Publications() {
    return (
        <section
            className="content-section publication-section"
            id="publication"
        >
            <div className="section-container">
                <SectionHeading
                    number="04"
                    label="Publication"
                    title="Research work."
                    description="Research focused on efficient AI systems for healthcare and low-resource language applications."
                />

                <div className="publication-list">
                    {publications.map(
                        (
                            publication,
                            index
                        ) => (
                            <motion.article
                                key={
                                    publication.id
                                }
                                className="publication-card interactive-card"
                                initial={{
                                    opacity: 0,
                                    y: 32
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
                                    amount: 0.18
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay:
                                        index *
                                        0.08,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                }}
                            >
                                <div className="publication-top">
                                    <div className="publication-status">
                                        <span />

                                        <p>
                                            {
                                                publication.status
                                            }
                                            {" · "}
                                            {
                                                publication.stage
                                            }
                                        </p>
                                    </div>

                                    <span className="publication-index">
                                        Research /{" "}
                                        {String(
                                            index +
                                            1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                </div>

                                <h3>
                                    {
                                        publication.title
                                    }
                                </h3>

                                <p className="publication-description">
                                    {
                                        publication.description
                                    }
                                </p>

                                <div className="publication-details">
                                    {publication.details.map(
                                        (
                                            detail
                                        ) => {
                                            const Icon =
                                                detailIcons[
                                                detail
                                                    .icon
                                                ];

                                            return (
                                                <div
                                                    key={
                                                        detail.label
                                                    }
                                                    className="publication-detail"
                                                >
                                                    <div className="publication-detail-icon">
                                                        <Icon
                                                            size={
                                                                18
                                                            }
                                                            strokeWidth={
                                                                1.7
                                                            }
                                                            aria-hidden="true"
                                                        />
                                                    </div>

                                                    <div>
                                                        <span>
                                                            {
                                                                detail.label
                                                            }
                                                        </span>

                                                        <p>
                                                            {
                                                                detail.value
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>

                                {publication.github && (
                                    <div className="publication-footer">
                                        <a
                                            href={
                                                publication.github
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="publication-github interactive"
                                        >
                                            <FaGithub
                                                aria-hidden="true"
                                            />

                                            View GitHub
                                            repository
                                        </a>
                                    </div>
                                )}
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Publications;