// Builds the bot's knowledge from the same data files the portfolio uses.
// Update the portfolio data, run `npx wrangler deploy`, and the bot is updated too.
import projects from "../../src/data/projects.js";
import skillCategories from "../../src/data/skills.js";
import experience from "../../src/data/experience.js";
import education from "../../src/data/education.js";
import publications from "../../src/data/publications.js";
import volunteering from "../../src/data/volunteering.js";
import contact from "../../src/data/contact.js";

// Facts that are not in the data files. Keep this to things that are true and public.
const profile = `
PROFILE
- Full name: Md. Estiak Rahman Ayon (goes by Ayon)
- Name in Bangla script: মোঃ ইসতিয়াক রহমান অয়ন (short name: অয়ন)
- Location: ${contact.location}
- Titles: Software Engineer, AI/ML Engineer, MLOps Engineer
- Summary: Computer Science graduate from AIUB with experience in machine learning, MLOps, vision-language systems and full-stack software development. I like building practical, efficient and reliable systems, from data to deployment.
- Academic interests: Artificial Intelligence, Machine Learning, Software Engineering, Data Science
- Research interests: Efficient Deep Learning, Computer Vision, Natural Language Processing, Vision-Language Models, AI for low-resource languages such as Bangla
- Career direction: AI/ML Engineer, MLOps Engineer, Software Engineer
- Looking for: entry-level, internship and junior roles, remote or in Bangladesh, in AI/ML, AI automation, MLOps, backend/API and full-stack development
- Availability: ${contact.availability}
- Relevant coursework: Machine Learning, Computer Vision and Pattern Recognition, Natural Language Processing, Data Mining and Warehousing, Research Methodology, Introduction to Data Science, Computational Statistics and Probability
- Kubernetes: currently learning only, no production experience

CONTACT (share these freely)
- Email: ${contact.email}
- LinkedIn: ${contact.socials.linkedin}
- GitHub: ${contact.socials.github}
- Facebook: ${contact.socials.facebook}
- Instagram: ${contact.socials.instagram}
- Portfolio: https://estkayon.github.io/Portfolio/
- CV: available as a PDF download (use the [[CV]] token)
`;

// Extra education facts that are not in education.js
const educationExtra = {
    1: "Major in Information Systems. CGPA 3.54 out of 4.00.",
    2: "Science group. GPA 5.00 out of 5.00."
};

const list = (items) => items.map((item) => `  - ${item}`).join("\n");

const experienceText = experience
    .map(
        (job) => `- ${job.role} at ${job.organization} (${job.date}, ${job.location}, ${job.status})
${list(job.responsibilities)}
  Tech: ${job.technologies.join(", ")}`
    )
    .join("\n");

const educationText = education
    .map(
        (item) =>
            `- ${item.degree}, ${item.institution} (${item.date}, ${item.status}). ${educationExtra[item.id] || ""}`
    )
    .join("\n");

const projectsText = projects
    .map(
        (project) => `- ${project.title}
  Type: ${project.type} | Date: ${project.date} | My role: ${project.role}
  Summary: ${project.description}
  Tech: ${project.technologies.join(", ")}
  Details:
${list(project.details)}
  GitHub: ${project.github}${project.liveDemo ? `\n  Live demo: ${project.liveDemo}` : ""}`
    )
    .join("\n\n");

const researchText = publications
    .map(
        (paper) => `- ${paper.title}
  Status: ${paper.status} (${paper.stage}). Do not describe it as published.
  Summary: ${paper.description}
${list(paper.details.map((detail) => `${detail.label}: ${detail.value}`))}${paper.github ? `\n  GitHub: ${paper.github}` : ""}`
    )
    .join("\n\n");

const skillsText = skillCategories
    .map((category) => {
        const used = category.skills.filter((skill) => skill.level >= 90).map((skill) => skill.name);
        const learning = category.skills.filter((skill) => skill.level < 90).map((skill) => skill.name);
        return `- ${category.category}: ${used.join(", ")}${learning.length ? ` (currently learning: ${learning.join(", ")})` : ""}`;
    })
    .join("\n");

const volunteeringText = volunteering
    .map(
        (item) => `- ${item.role}, ${item.organization} (${item.date}, ${item.location})
${list(item.responsibilities)}`
    )
    .join("\n");

const knowledge = `
${profile}
EXPERIENCE
${experienceText}

EDUCATION
${educationText}

PROJECTS (most important first)
${projectsText}

RESEARCH
${researchText}

SKILLS
${skillsText}

VOLUNTEERING
${volunteeringText}
`.trim();

export default knowledge;