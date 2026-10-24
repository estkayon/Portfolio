import {
    CalendarDays,
    HandHeart,
    MapPin
} from "lucide-react";

import {
    motion
} from "motion/react";

import SectionHeading from "../common/SectionHeading";
import volunteeringData from "../../data/volunteering";

function Volunteering() {
    const baseUrl =
        import.meta.env.BASE_URL;

    return (
        <section
            className="content-section volunteering-section"
            id="volunteering"
        >
            <div className="section-container">
                <SectionHeading
                    number="08"
                    label="Volunteering"
                    title="Community involvement."
                    description="Community service through environmental initiatives, blood donation and public awareness."
                    align="center"
                />

                <div className="volunteering-list">
                    {volunteeringData.map(
                        (
                            volunteering,
                            index
                        ) => (
                            <motion.article
                                key={
                                    volunteering.id
                                }
                                className="volunteering-card interactive-card"
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
                                <div className="volunteering-logo-column">
                                    <div className="volunteering-logo">
                                        <img
                                            src={`${baseUrl}${volunteering.logo}`}
                                            alt={`${volunteering.organization} logo`}
                                            loading="lazy"
                                        />
                                    </div>

                                    <span className="volunteering-index">
                                        Volunteer /{" "}
                                        {String(
                                            index +
                                                1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>
                                </div>

                                <div className="volunteering-content">
                                    <div className="volunteering-header">
                                        <div>
                                            <div className="volunteering-date">
                                                <CalendarDays
                                                    size={
                                                        14
                                                    }
                                                    aria-hidden="true"
                                                />

                                                <span>
                                                    {
                                                        volunteering.date
                                                    }
                                                </span>
                                            </div>

                                            <h3>
                                                {
                                                    volunteering.role
                                                }
                                            </h3>

                                            <h4>
                                                {
                                                    volunteering.organization
                                                }
                                            </h4>
                                        </div>

                                        <div className="volunteering-symbol">
                                            <HandHeart
                                                size={
                                                    21
                                                }
                                                strokeWidth={
                                                    1.7
                                                }
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>

                                    <div className="volunteering-location">
                                        <MapPin
                                            size={
                                                14
                                            }
                                            aria-hidden="true"
                                        />

                                        {
                                            volunteering.location
                                        }
                                    </div>

                                    <div className="volunteering-divider" />

                                    <ul className="volunteering-responsibilities">
                                        {volunteering.responsibilities.map(
                                            (
                                                responsibility
                                            ) => (
                                                <li
                                                    key={
                                                        responsibility
                                                    }
                                                >
                                                    <span />

                                                    <p>
                                                        {
                                                            responsibility
                                                        }
                                                    </p>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </motion.article>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default Volunteering;