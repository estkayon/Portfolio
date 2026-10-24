import {
    ArrowUpRight,
    CalendarDays,
    MapPin
} from "lucide-react";

import {
    motion
} from "motion/react";

import SectionHeading from "../common/SectionHeading";
import experienceData from "../../data/experience";

function Experience() {
    const baseUrl =
        import.meta.env.BASE_URL;

    return (
        <section
            className="content-section experience-section"
            id="experience"
        >
            <div className="section-container">
                <SectionHeading
                    number="02"
                    label="Experience"
                    title="Industry experience."
                    description="Practical software engineering experience in manufacturing operations and internal business systems."
                    align="center"
                />

                <div className="experience-list">
                    {experienceData.map(
                        (
                            experience,
                            index
                        ) => (
                            <motion.article
                                key={
                                    experience.id
                                }
                                className="experience-card interactive-card"
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
                                    amount: 0.2
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
                                <div className="experience-logo-column">
                                    <div className="experience-logo">
                                        <img
                                            src={`${baseUrl}${experience.logo}`}
                                            alt={`${experience.organization} logo`}
                                        />
                                    </div>

                                    <span className="experience-index">
                                        {String(
                                            index +
                                                1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                </div>

                                <div className="experience-content">
                                    <div className="experience-header">
                                        <div>
                                            <div className="experience-date">
                                                <CalendarDays
                                                    size={
                                                        14
                                                    }
                                                    aria-hidden="true"
                                                />

                                                <span>
                                                    {
                                                        experience.date
                                                    }
                                                </span>
                                            </div>

                                            <h3>
                                                {
                                                    experience.role
                                                }
                                            </h3>

                                            <h4>
                                                {
                                                    experience.organization
                                                }
                                            </h4>
                                        </div>

                                        <span className="experience-status">
                                            {
                                                experience.status
                                            }
                                        </span>
                                    </div>

                                    <div className="experience-location">
                                        <MapPin
                                            size={
                                                14
                                            }
                                            aria-hidden="true"
                                        />

                                        {
                                            experience.location
                                        }
                                    </div>

                                    <div className="experience-divider" />

                                    <ul className="experience-responsibilities">
                                        {experience.responsibilities.map(
                                            (
                                                item
                                            ) => (
                                                <li
                                                    key={
                                                        item
                                                    }
                                                >
                                                    <span />

                                                    <p>
                                                        {
                                                            item
                                                        }
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className="experience-footer">
                                        <div className="experience-technologies">
                                            {experience.technologies.map(
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
                                        </div>

                                        <a
                                            href={
                                                experience.website
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="experience-link interactive"
                                        >
                                            Visit organization

                                            <ArrowUpRight
                                                size={
                                                    15
                                                }
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Experience;