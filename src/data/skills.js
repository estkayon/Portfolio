// level: 90 = used in projects or professional work, 80 = currently learning
const skillCategories = [
    {
        id: 1,
        category: "Programming Languages",
        categoryIcon: "programming",
        skills: [
            { name: "Python", icon: "python", level: 90 },
            { name: "TypeScript", icon: "typescript", level: 90 },
            { name: "JavaScript", icon: "javascript", level: 90 },
            { name: "C++", icon: "cpp", level: 90 },
            { name: "C#", icon: "csharp", level: 90 },
            { name: "SQL", icon: "sql", level: 90 },
            { name: "PHP", icon: "php", level: 90 },
            { name: "R", icon: "r", level: 90 }
        ]
    },

    {
        id: 2,
        category: "Machine Learning & Data Science",
        categoryIcon: "machineLearning",
        skills: [
            { name: "PyTorch", icon: "pytorch", level: 90 },
            { name: "TensorFlow", icon: "tensorflow", level: 90 },
            { name: "Scikit-learn", icon: "scikitLearn", level: 90 },
            { name: "XGBoost", icon: "xgboost", level: 90 },
            { name: "Pandas", icon: "pandas", level: 90 },
            { name: "NumPy", icon: "numpy", level: 90 },
            { name: "Matplotlib", icon: "matplotlib", level: 90 },
            { name: "Deep Learning", icon: "deepLearning", level: 90 },
            { name: "Computer Vision", icon: "computerVision", level: 90 },
            { name: "Natural Language Processing", icon: "nlp", level: 90 },
            { name: "Time-Series Forecasting", icon: "timeSeries", level: 90 },
            { name: "Model Evaluation", icon: "evaluation", level: 90 }
        ]
    },

    {
        id: 3,
        category: "AI & LLM Engineering",
        categoryIcon: "ai",
        skills: [
            { name: "RAG", icon: "rag", level: 90 },
            { name: "LangChain", icon: "langchain", level: 90 },
            { name: "ChromaDB", icon: "chromadb", level: 90 },
            { name: "Sentence Transformers", icon: "sentenceTransformers", level: 90 },
            { name: "LLM APIs", icon: "llmApi", level: 90 },
            { name: "AI Agents", icon: "aiAgents", level: 90 },
            { name: "AI Automation", icon: "aiAutomation", level: 90 }
        ]
    },

    {
        id: 4,
        category: "MLOps & Deployment",
        categoryIcon: "mlops",
        skills: [
            { name: "Docker", icon: "docker", level: 90 },
            { name: "CI/CD", icon: "cicd", level: 90 },
            { name: "DVC", icon: "dvc", level: 90 },
            { name: "MLflow", icon: "mlflow", level: 90 },
            { name: "DagsHub", icon: "dagshub", level: 90 },
            { name: "Streamlit", icon: "streamlit", level: 90 },
            { name: "AWS", icon: "aws", level: 90 },
            { name: "Cloudflare", icon: "cloudflare", level: 90 },
            { name: "Render", icon: "render", level: 90 },
            { name: "Model Deployment", icon: "deployment", level: 90 },
            { name: "Kubernetes", icon: "kubernetes", level: 80 }
        ]
    },

    {
        id: 5,
        category: "Backend Development",
        categoryIcon: "backend",
        skills: [
            { name: "FastAPI", icon: "fastapi", level: 90 },
            { name: "Laravel", icon: "laravel", level: 90 },
            { name: "RESTful API", icon: "restApi", level: 90 },
            { name: "WebRTC & WebSockets", icon: "webrtc", level: 90 },
            { name: "Node.js", icon: "nodejs", level: 80 },
            { name: "Django", icon: "django", level: 80 },
            { name: "ASP.NET", icon: "dotnet", level: 80 }
        ]
    },

    {
        id: 6,
        category: "Frontend Development",
        categoryIcon: "frontend",
        skills: [
            { name: "React.js", icon: "react", level: 90 },
            { name: "Next.js", icon: "nextjs", level: 90 },
            { name: "Angular", icon: "angular", level: 90 },
            { name: "Tailwind CSS", icon: "tailwind", level: 90 },
            { name: "HTML", icon: "html", level: 90 },
            { name: "CSS", icon: "css", level: 90 },
            { name: "Bootstrap", icon: "bootstrap", level: 90 },
            { name: "AJAX", icon: "ajax", level: 90 }
        ]
    },

    {
        id: 7,
        category: "Databases",
        categoryIcon: "database",
        skills: [
            { name: "PostgreSQL", icon: "postgresql", level: 90 },
            { name: "MySQL", icon: "mysql", level: 90 },
            { name: "MongoDB", icon: "mongodb", level: 90 },
            { name: "SQLite", icon: "sqlite", level: 90 },
            { name: "Relational Database Design", icon: "databaseDesign", level: 90 }
        ]
    },

    {
        id: 8,
        category: "Tools",
        categoryIcon: "tools",
        skills: [
            { name: "Git", icon: "git", level: 90 },
            { name: "GitHub", icon: "github", level: 90 },
            { name: "Linux", icon: "linux", level: 90 },
            { name: "GitLab", icon: "gitlab", level: 80 }
        ]
    }
];

export default skillCategories;