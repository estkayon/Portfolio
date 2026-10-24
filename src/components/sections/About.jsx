import {
    BrainCircuit,
    CodeXml,
    Rocket
} from "lucide-react";

import {
    motion
} from "motion/react";

import SectionHeading from "../common/SectionHeading";

const aboutDetails = [
    {
        title: "Academic Interest",
        description:
            "Artificial Intelligence · Machine Learning · Software Engineering · Data Science",
        icon: BrainCircuit
    },
    {
        title: "Research Interest",
        description:
            "Efficient Deep Learning · Computer Vision · Natural Language Processing · Vision-Language Models",
        icon: CodeXml
    },
    {
        title: "Career Direction",
        description:
            "AI/ML Engineer · MLOps Engineer · Software Engineer",
        icon: Rocket
    }
];

const cardTransition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1]
};

function About() {
    return (
        <section
            className="content-section about-section"
            id="about"
        >
            <div className="section-container">
                <SectionHeading
                    number="01"
                    label="About"
                    title="Engineering with purpose."
                    description="Building useful systems by connecting software engineering, machine learning and reliable deployment."
                />

                <div className="about-layout">
                    <motion.div
                        className="about-story"
                        initial={{
                            opacity: 0,
                            y: 28
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25
                        }}
                        transition={
                            cardTransition
                        }
                    >
                        <p className="about-lead">
                            Computer Science graduate
                            from American
                            International
                            University-Bangladesh
                            with experience in
                            Machine Learning and
                            Software Engineering.
                        </p>

                        <p>
                            I work on practical
                            software and AI projects
                            with hands-on experience
                            in full-stack
                            development, machine
                            learning pipelines and
                            MLOps workflows.
                        </p>

                        <p>
                            I enjoy developing
                            scalable applications,
                            solving real-world
                            engineering problems and
                            exploring modern AI
                            technologies with a
                            focus on building
                            efficient and reliable
                            solutions.
                        </p>

                        <div className="about-signature">
                            <span />

                            <div>
                                <strong>
                                    Md. Estiak
                                    Rahman Ayon
                                </strong>

                                <small>
                                    Software · AI ·
                                    MLOps
                                </small>
                            </div>
                        </div>
                    </motion.div>

                    <div className="about-detail-list">
                        {aboutDetails.map(
                            (
                                detail,
                                index
                            ) => {
                                const Icon =
                                    detail.icon;

                                return (
                                    <motion.article
                                        key={
                                            detail.title
                                        }
                                        className="about-detail-card interactive-card"
                                        initial={{
                                            opacity: 0,
                                            x: 28
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.015
                                        }}

                                        whileTap={{
                                            scale: 0.985
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.3
                                        }}
                                        transition={{
                                            ...cardTransition,
                                            delay:
                                                index *
                                                0.09
                                        }}
                                    >
                                        <div className="about-detail-icon">
                                            <Icon
                                                size={
                                                    20
                                                }
                                                strokeWidth={
                                                    1.7
                                                }
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <span className="about-detail-number">
                                                0
                                                {index +
                                                    1}
                                            </span>

                                            <h3>
                                                {
                                                    detail.title
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    detail.description
                                                }
                                            </p>
                                        </div>
                                    </motion.article>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;