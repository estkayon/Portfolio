import {
    motion
} from "motion/react";

import {
    BrainCircuit,
    Braces,
    ChartNoAxesCombined,
    Cloud,
    Code2,
    Container,
    Database,
    DatabaseZap,
    Eye,
    FileCode2,
    FlaskConical,
    GitBranch,
    Languages,
    Layers3,
    Network,
    Rocket,
    ServerCog,
    Terminal,
    Workflow,
    Wrench
} from "lucide-react";

import {
    FaAws,
    FaBootstrap,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaGitlab,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaLinux,
    FaNodeJs,
    FaPhp,
    FaPython,
    FaReact
} from "react-icons/fa6";

import SectionHeading from "../common/SectionHeading";
import skillCategories from "../../data/skills";

const iconMap = {
    programming: Code2,
    machineLearning: BrainCircuit,
    mlops: Workflow,
    backend: ServerCog,
    frontend: Braces,
    database: Database,
    tools: Wrench,

    python: FaPython,
    cpp: FileCode2,
    csharp: Code2,
    sql: Database,
    javascript: FaJs,
    php: FaPhp,
    r: ChartNoAxesCombined,

    pytorch: BrainCircuit,
    tensorflow: Network,
    scikitLearn: BrainCircuit,
    pandas: Layers3,
    numpy: ChartNoAxesCombined,
    matplotlib:
        ChartNoAxesCombined,
    deepLearning: Network,
    computerVision: Eye,
    nlp: Languages,
    evaluation:
        ChartNoAxesCombined,
    deployment: Rocket,

    docker: FaDocker,
    kubernetes: Container,
    cicd: Workflow,
    dvc: GitBranch,
    dagshub: Cloud,
    mlflow: FlaskConical,
    aws: FaAws,

    nodejs: FaNodeJs,
    django: ServerCog,
    laravel: FaLaravel,
    dotnet: Code2,
    fastapi: Rocket,
    restApi: Network,

    html: FaHtml5,
    css: FaCss3Alt,
    bootstrap: FaBootstrap,
    tailwind: Braces,
    react: FaReact,
    ajax: Workflow,

    mysql: Database,
    postgresql: Database,
    mongodb: DatabaseZap,
    databaseDesign: Layers3,

    git: FaGitAlt,
    github: FaGithub,
    gitlab: FaGitlab,
    linux: FaLinux,

    fallback: Terminal
};

function SkillIcon({
    icon,
    size = 18
}) {
    const Icon =
        iconMap[icon] ||
        iconMap.fallback;

    return (
        <Icon
            size={size}
            aria-hidden="true"
        />
    );
}

function Skills() {
    return (
        <section
            className="content-section skills-section"
            id="skills"
        >
            <div className="section-container">
                <SectionHeading
                    number="05"
                    label="Skills"
                    title="Technical expertise."
                    description="Technologies used across software engineering, machine learning, MLOps and production deployment."
                />

                <div className="skills-category-grid">
                    {skillCategories.map(
                        (
                            category,
                            categoryIndex
                        ) => (
                            <motion.article
                                key={
                                    category.id
                                }
                                className="skill-category-card interactive-card"
                                initial={{
                                    opacity: 0,
                                    y: 30
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.012
                                }}
                                whileTap={{
                                    scale: 0.99
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.12
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay:
                                        (
                                            categoryIndex %
                                            2
                                        ) *
                                        0.07,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                }}
                            >
                                <div className="skill-category-header">
                                    <div className="skill-category-icon">
                                        <SkillIcon
                                            icon={
                                                category.categoryIcon
                                            }
                                            size={
                                                20
                                            }
                                        />
                                    </div>

                                    <div>
                                        <h3>
                                            {
                                                category.category
                                            }
                                        </h3>

                                        <p>
                                            {
                                                category.skills
                                                    .length
                                            }{" "}
                                            skills
                                        </p>
                                    </div>
                                </div>

                                <div className="skill-list">
                                    {category.skills.map(
                                        (
                                            skill,
                                            skillIndex
                                        ) => (
                                            <div
                                                key={
                                                    skill.name
                                                }
                                                className="skill-item"
                                            >
                                                <div className="skill-information">
                                                    <div className="skill-identity">
                                                        <div className="skill-logo">
                                                            <SkillIcon
                                                                icon={
                                                                    skill.icon
                                                                }
                                                                size={
                                                                    18
                                                                }
                                                            />
                                                        </div>

                                                        <span>
                                                            {
                                                                skill.name
                                                            }
                                                        </span>
                                                    </div>

                                                    <strong>
                                                        {
                                                            skill.level
                                                        }
                                                        %
                                                    </strong>
                                                </div>

                                                <div
                                                    className="skill-progress"
                                                    role="progressbar"
                                                    aria-label={`${skill.name} proficiency`}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    aria-valuenow={
                                                        skill.level
                                                    }
                                                >
                                                    <motion.span
                                                        initial={{
                                                            width:
                                                                "0%"
                                                        }}
                                                        whileInView={{
                                                            width:
                                                                `${skill.level}%`
                                                        }}
                                                        viewport={{
                                                            once: true
                                                        }}
                                                        transition={{
                                                            duration:
                                                                0.9,
                                                            delay:
                                                                0.12 +
                                                                skillIndex *
                                                                    0.035,
                                                            ease: [
                                                                0.16,
                                                                1,
                                                                0.3,
                                                                1
                                                            ]
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </motion.article>
                        )
                    )}
                </div>

                <motion.p
                    className="skills-note"
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.6
                    }}
                >
                    90% represents technologies
                    used in projects or
                    professional work. 80%
                    represents technologies
                    currently being learned or
                    explored.
                </motion.p>
            </div>
        </section>
    );
}

export default Skills;