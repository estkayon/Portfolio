import {
    ArrowUpRight,
    CalendarDays,
    GraduationCap
} from "lucide-react";

import {
    motion
} from "motion/react";

import SectionHeading from "../common/SectionHeading";
import educationData from "../../data/education";

function Education() {
    const baseUrl =
        import.meta.env.BASE_URL;

    return (
        <section
            className="content-section education-section"
            id="education"
        >
            <div className="section-container">
                <SectionHeading
                    number="06"
                    label="Education"
                    title="Academic foundation."
                    description="Academic preparation in computer science, information systems and applied artificial intelligence."
                    align="center"
                />

                <div className="education-list">
                    {educationData.map(
                        (
                            education,
                            index
                        ) => (
                            <motion.article
                                key={
                                    education.id
                                }
                                className="education-card interactive-card"
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
                                <div className="education-logo-column">
                                    <div className="education-logo">
                                        <img
                                            src={`${baseUrl}${education.logo}`}
                                            alt={`${education.institution} logo`}
                                            loading="lazy"
                                        />
                                    </div>

                                    <span className="education-index">
                                        Education /{" "}
                                        {String(
                                            index +
                                                1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                </div>

                                <div className="education-content">
                                    <span className="education-status">
                                        {
                                            education.status
                                        }
                                    </span>

                                    <div className="education-date">
                                        <CalendarDays
                                            size={
                                                14
                                            }
                                            aria-hidden="true"
                                        />

                                        <span>
                                            {
                                                education.date
                                            }
                                        </span>
                                    </div>

                                    <h3>
                                        {
                                            education.degree
                                        }
                                    </h3>

                                    <h4>
                                        {
                                            education.institution
                                        }
                                    </h4>

                                    <a
                                        href={
                                            education.website
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="education-link interactive"
                                    >
                                        <GraduationCap
                                            size={
                                                16
                                            }
                                            aria-hidden="true"
                                        />

                                        Visit institution

                                        <ArrowUpRight
                                            size={
                                                15
                                            }
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Education;