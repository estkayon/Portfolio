import { motion } from "motion/react";

import {
    Bot,
    BrainCircuit,
    Braces,
    ChartLine,
    ChartNoAxesCombined,
    Cloud,
    Code2,
    Container,
    Cpu,
    Database,
    DatabaseZap,
    Eye,
    FileCode2,
    FlaskConical,
    GitBranch,
    Languages,
    Layers3,
    Network,
    Radio,
    Rocket,
    Search,
    ServerCog,
    Sparkles,
    Terminal,
    Workflow,
    Wrench,
    Zap
} from "lucide-react";

import {
    FaAngular,
    FaAws,
    FaBootstrap,
    FaCloudflare,
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
import projects from "../../data/projects";

const iconMap = {
    programming: Code2,
    machineLearning: BrainCircuit,
    mlops: Workflow,
    backend: ServerCog,
    frontend: Braces,
    database: Database,
    tools: Wrench,
    ai: Sparkles,

    python: FaPython,
    typescript: FileCode2,
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
    matplotlib: ChartNoAxesCombined,
    xgboost: Network,
    timeSeries: ChartLine,
    deepLearning: Network,
    computerVision: Eye,
    nlp: Languages,
    evaluation: ChartNoAxesCombined,
    deployment: Rocket,

    rag: Search,
    langchain: Workflow,
    chromadb: DatabaseZap,
    sentenceTransformers: Languages,
    llmApi: Cpu,
    aiAgents: Bot,
    aiAutomation: Zap,

    docker: FaDocker,
    kubernetes: Container,
    cicd: Workflow,
    dvc: GitBranch,
    dagshub: Cloud,
    mlflow: FlaskConical,
    aws: FaAws,
    streamlit: ChartLine,
    cloudflare: FaCloudflare,
    render: Cloud,

    nodejs: FaNodeJs,
    django: ServerCog,
    laravel: FaLaravel,
    dotnet: Code2,
    fastapi: Rocket,
    restApi: Network,
    webrtc: Radio,

    html: FaHtml5,
    css: FaCss3Alt,
    bootstrap: FaBootstrap,
    tailwind: Braces,
    react: FaReact,
    nextjs: Layers3,
    angular: FaAngular,
    ajax: Workflow,

    mysql: Database,
    postgresql: Database,
    mongodb: DatabaseZap,
    sqlite: Database,
    databaseDesign: Layers3,

    git: FaGitAlt,
    github: FaGithub,
    gitlab: FaGitlab,
    linux: FaLinux,

    fallback: Terminal
};

function SkillIcon({ icon, size = 18 }) {
    const Icon = iconMap[icon] || iconMap.fallback;

    return <Icon size={size} aria-hidden="true" />;
}

// Skill name -> how it appears in project technology lists.
// Anything not listed here is matched by its exact name.
const techAliases = {
    "React.js": ["react"],
    "Next.js": ["next.js 16"],
    Cloudflare: ["cloudflare workers", "cloudflare pages", "durable objects"],
    "LLM APIs": ["groq api", "litellm"],
    RAG: ["chromadb"],
    "AI Agents": ["litellm"],
    "WebRTC & WebSockets": ["webrtc", "websocket"],
    "CI/CD": ["github actions"],
    AWS: ["aws s3", "aws ecr", "aws ec2"],
    Laravel: ["laravel 13", "laravel sanctum", "laravel queue"],
    "Tailwind CSS": ["tailwind css"],
    PostgreSQL: ["postgresql"]
};

// Skills where a project count would be misleading or meaningless.
const skipUsage = new Set(["Git", "GitHub", "GitLab", "Linux"]);

function countProjects(skillName) {
    if (skipUsage.has(skillName)) return 0;

    const names = (techAliases[skillName] || [skillName]).map((name) =>
        name.toLowerCase()
    );

    return projects.filter((project) =>
        project.technologies.some((tech) =>
            names.includes(tech.toLowerCase())
        )
    ).length;
}

const ease = [0.16, 1, 0.3, 1];

function Skills() {
    const categories = skillCategories.map((category) => ({
        ...category,
        skills: category.skills.map((skill) => ({
            ...skill,
            learning: skill.level < 90,
            projects: countProjects(skill.name)
        }))
    }));

    const mostUsed = categories
        .flatMap((category) => category.skills)
        .filter((skill) => skill.projects > 0)
        .sort((a, b) => b.projects - a.projects)
        .slice(0, 6);

    return (
        <section className="content-section skills-section" id="skills">
            <div className="section-container">
                <SectionHeading
                    number="05"
                    label="Skills"
                    title="Technical expertise."
                    description="Technologies used across software engineering, machine learning, MLOps and production deployment."
                />

                {mostUsed.length > 0 && (
                    <motion.div
                        className="sk-summary"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <p className="sk-summary-label">
                            Most used across
                            <br />
                            {projects.length} listed projects
                        </p>

                        <ol className="sk-summary-list">
                            {mostUsed.map((skill) => (
                                <li key={skill.name}>
                                    <span className="sk-summary-count">
                                        {skill.projects}
                                    </span>
                                    <span className="sk-summary-name">
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </motion.div>
                )}

                <div className="sk-table">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="sk-row"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease }}
                        >
                            <div className="sk-head">
                                <span className="sk-no">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3>{category.category}</h3>
                                    <p>{category.skills.length} items</p>
                                </div>
                            </div>

                            <ul className="sk-items">
                                {category.skills.map((skill) => (
                                    <li key={skill.name} className="sk-item">
                                        <span className="sk-icon">
                                            <SkillIcon icon={skill.icon} size={15} />
                                        </span>

                                        <span className="sk-name">{skill.name}</span>

                                        {skill.learning ? (
                                            <span className="sk-tag sk-tag-learning">
                                                Learning
                                            </span>
                                        ) : (
                                            skill.projects > 0 && (
                                                <span
                                                    className="sk-tag"
                                                    title={`Used in ${skill.projects} of the projects listed above`}
                                                >
                                                    {skill.projects}{" "}
                                                    {skill.projects === 1 ? "project" : "projects"}
                                                </span>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <p className="sk-note">
                    Project counts come from the work listed in the Projects
                    section. Items marked Learning are being actively studied
                    and explored.
                </p>
            </div>
        </section>
    );
}

export default Skills;