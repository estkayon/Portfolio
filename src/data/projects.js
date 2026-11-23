const projects = [
    {
        id: 1,
        featured: true,

        image:
            "assets/images/projects/electricity-forecasting.jpg",

        title:
            "Bangladesh Electricity Demand Forecasting",

        category:
            "MLOps",

        type:
            "End-to-End MLOps Project",

        date:
            "September 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A production-oriented electricity demand forecasting system for Bangladesh with automated data pipelines, national and regional forecasting, model tracking, API serving and a live dashboard.",

        metrics: [
            { value: "4.89%", label: "Mean CV MAPE, national" },
            { value: "5.68%", label: "Holdout MAPE" }
        ],

        technologies: [
            "Python",
            "Scikit-learn",
            "DVC",
            "MLflow",
            "DagsHub",
            "FastAPI",
            "Streamlit",
            "Docker",
            "GitHub Actions",
            "Render"
        ],

        details: [
            "Built national and regional electricity demand forecasting pipelines using BPDB demand data and Open-Meteo weather data.",

            "Developed and evaluated time-series ML models, achieving 4.89% mean CV MAPE and 5.68% holdout MAPE for national forecasting.",

            "Implemented automated data collection, preprocessing, feature engineering, DVC versioning and scheduled forecast refresh workflows.",

            "Deployed the forecasting API with FastAPI and Render, along with a public Streamlit dashboard for live, extended and historical forecasts."
        ],

        github:
            "https://github.com/estkayon/Bangladesh-Electricity-Demand-Forecasting-MLOps",

        liveDemo:
            "https://bd-electricity-demand-forecast.streamlit.app/"
    },

    {
        id: 2,
        featured: true,

        image:
            "assets/images/projects/hidden-hire.jpg",

        title:
            "Hidden Hire: Local-First AI Job Search Agent",

        category:
            "AI Agent",

        type:
            "AI Job Search Agent",

        date:
            "November 2026",

        role:
            "AI and Full-Stack Developer",

        description:
            "A personal job search agent for tech roles. It collects fresh jobs from company career pages, remote and country job boards, Bangladeshi company sites and Hacker News, scores each job against the user's CV on their own computer, and builds truthful, ATS-friendly CVs for the jobs they choose.",

        metrics: [
            { value: "28", label: "Job source connectors" },
            { value: "2", label: "Scoring stages: local and LLM" }
        ],

        technologies: [
            "Python",
            "FastAPI",
            "React",
            "TypeScript",
            "Vite",
            "SQLite",
            "SQLAlchemy",
            "Sentence Transformers",
            "LiteLLM",
            "GitHub Actions",
            "LaTeX"
        ],

        details: [
            "Built 28 job source connectors covering ATS career pages (Greenhouse, Lever, Ashby, Workable and more), remote boards, country boards, Bangladeshi company sites and Hacker News, each isolated so one failing source does not stop the others.",

            "Set up a scheduled GitHub Actions fetcher that collects, filters and de-duplicates fresh intern to mid-level tech roles into a public data repo, with a local fetch as backup when the cloud run is late.",

            "Designed two-stage match scoring: a local Stage 1 that combines skill overlap, sentence-embedding similarity, role, seniority and location, and an on-demand LLM recruiter view with a requirement checklist, ATS keyword coverage and an Apply, Stretch or Skip verdict.",

            "Added eligibility labels for applying from Bangladesh, counting a blocker only when the job post contains a matching quote.",

            "Generated tailored LaTeX CVs from a master CV, with a fact check that flags any added number or skill and falls back to the original wording.",

            "Kept personal data on the user's machine: the server listens on 127.0.0.1 only, contact details are removed before LLM calls, job posts are treated as untrusted input, and a gitleaks pre-commit hook blocks leaked keys."
        ],

        github:
            "https://github.com/estkayon/Hidden-Hire",

        liveDemo: null
    },

    {
        id: 3,
        featured: true,

        image:
            "assets/images/projects/shopsphere.jpg",

        title:
            "ShopSphere — E-commerce Management System",

        category:
            "Full-Stack",

        type:
            "Full-Stack E-commerce Application",

        date:
            "October 2026",

        role:
            "Full-Stack Developer",

        description:
            "A full-stack single-vendor e-commerce platform with a responsive storefront, protected admin dashboard, inventory control, verified payments and automated order fulfillment workflows.",

        metrics: [
            { value: "104", label: "Passing backend tests" },
            { value: "2", label: "Apps: storefront and admin" }
        ],

        technologies: [
            "Laravel 13",
            "Next.js 16",
            "React",
            "TypeScript",
            "PostgreSQL",
            "Laravel Sanctum",
            "Tailwind CSS",
            "SSLCommerz",
            "Laravel Queue"
        ],

        details: [
            "Built a responsive customer storefront with product search, product details, persistent cart, checkout and verified payment-status tracking.",

            "Developed a protected admin dashboard for product CRUD, inventory adjustments, stock-movement history, orders, payments and delivery management.",

            "Implemented transactional checkout and inventory reservation to prevent invalid prices, insufficient stock and inconsistent order data.",

            "Integrated SSLCommerz sandbox with server-side callback verification, payment reconciliation and secure per-order status access.",

            "Added asynchronous fulfillment using Laravel events, queued jobs and a mock CarryBee delivery adapter with retry support.",

            "Used Laravel Sanctum and HttpOnly cookies to secure administrator authentication and server-side API communication.",

            "Validated the backend with 104 passing feature and unit tests covering authentication, checkout, inventory, payments, order cancellation and delivery workflows."
        ],

        github:
            "https://github.com/estkayon/Ecommerce-Management-System",

        liveDemo: null
    },

    {
        id: 4,

        image:
            "assets/images/projects/floodcast.jpg",

        title:
            "FloodCast BD: Physics-Informed Flood Nowcasting",

        category:
            "ML + MLOps",

        type:
            "Physics-Informed ML Pipeline",

        date:
            "November 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A physics-informed machine learning pipeline that predicts flood events 1 to 3 days ahead for the Jamuna River at Sirajganj, Bangladesh, using ERA5-Land reanalysis data from 2000 to 2025 and 27 tracked experiments.",

        metrics: [
            { value: "0.963", label: "Best holdout AUC, 1-day lead" },
            { value: "27", label: "Tracked experiments" }
        ],

        technologies: [
            "Python",
            "PyTorch",
            "XGBoost",
            "Scikit-learn",
            "xarray",
            "DVC",
            "MLflow",
            "FastAPI",
            "Streamlit",
            "Docker",
            "GitHub Actions"
        ],

        details: [
            "Built a data pipeline that downloads ERA5-Land weather and runoff reanalysis for the Jamuna basin (2000 to 2025) through the Copernicus CDS API, then processes, validates and engineers features, including physics-based ones.",

            "Compared XGBoost, LSTM and a physics-constrained LSTM across 3 feature sets and 3 lead times, giving 27 experiments tracked in MLflow and evaluated on a 2023 to 2025 holdout.",

            "Added monotonicity and correlation penalties to the LSTM loss so predictions stay consistent with expected hydrological behaviour.",

            "Found and fixed label leakage by shifting flood labels forward, so features from day T predict floods on day T plus the lead time.",

            "Reached a best holdout AUC of 0.963 and F1 of 0.627 with XGBoost and physics features at a 1-day lead.",

            "Served results through FastAPI and a Streamlit dashboard, containerized with Docker, tested with pytest and checked by GitHub Actions CI. Documented as a research prototype, not an operational warning system."
        ],

        github:
            "https://github.com/estkayon/FloodCast-BD-Jamuna",

        liveDemo:
            "https://floodcast-bd-jamuna.streamlit.app/"
    },

    {
        id: 5,

        image:
            "assets/images/projects/banglalaw.jpg",

        title:
            "BanglaLaw: AI-Powered Legal Information Assistant",

        category:
            "RAG + MLOps",

        type:
            "End-to-End RAG + MLOps Project",

        date:
            "October 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A bilingual legal information assistant that answers questions about Bangladeshi law in Bangla and English using RAG, with source citations from official government legislation scraped from bdlaws.minlaw.gov.bd.",

        technologies: [
            "Python",
            "FastAPI",
            "Streamlit",
            "ChromaDB",
            "LangChain",
            "Groq API",
            "Sentence Transformers",
            "DVC",
            "GitHub Actions",
            "Ruff"
        ],

        details: [
            "Built a custom scraper for bdlaws.minlaw.gov.bd with SHA-256 change detection and automated weekly re-scraping via GitHub Actions.",

            "Designed a legal text chunker that splits by ধারা (section) boundaries instead of arbitrary token counts, preserving legal context integrity.",

            "Implemented cross-lingual retrieval using multilingual MiniLM-L12-v2 embeddings (384d) with ChromaDB, enabling Bangla and English queries against a Bangla legal corpus.",

            "Built a confidence-scored RAG pipeline with Groq LLM, bilingual prompt templates, automatic language detection, and a Streamlit chat UI with law category navigation and WhatsApp sharing."
        ],

        github:
            "https://github.com/estkayon/BanglaLaw-Ai-Legal-Assistant",

        liveDemo: null
    },

    {
        id: 6,

        image:
            "assets/images/projects/inventory-management.jpg",

        title:
            "Inventory Management System",

        category:
            "Full-Stack",

        type:
            "Full-Stack Web Application",

        date:
            "25 April 2026 – 30 April 2026",

        role:
            "Full-Stack Developer",

        description:
            "A barcode-based inventory system for tracking products throughout their operational lifecycle.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Bootstrap",
            "AJAX",
            "Barcode Tracking"
        ],

        details: [
            "Built a full-stack inventory system using PHP, MySQL and Bootstrap.",

            "Tracked products through their complete lifecycle using unique barcodes.",

            "Implemented a five-role access-control system with stage-specific permissions.",

            "Added automatic stock-in and stock-out updates.",

            "Designed a normalized nine-table relational database schema.",

            "Implemented activity logging, stock reports and barcode-wise history reports."
        ],

        github:
            "https://github.com/estkayon/Inventory-Management-System",

        liveDemo: null
    },

    {
        id: 7,

        image:
            "assets/images/projects/fileo.gif",

        title:
            "Fileo: Private In-Browser File Converter and PDF Editor",

        category:
            "Web App",

        type:
            "Client-Side Web Application",

        date:
            "October 2026",

        role:
            "Frontend Developer and UI Designer",

        description:
            "A free file converter and PDF editor that runs entirely in the browser, so files never leave the user's device. It converts images, PDFs, Word and Markdown files, edits and signs PDFs, and previews every result before download.",

        metrics: [
            { value: "15", label: "In-browser tools" },
            { value: "0", label: "Files sent to a server" }
        ],

        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "pdf-lib",
            "PDF.js",
            "Mammoth",
            "docx",
            "fflate",
            "Cloudflare Workers",
            "ESLint",
            "Prettier"
        ],

        details: [
            "Built 15 tools across images, PDF, documents and PDF editing, including PDF to Word, merge, split, compress, resize and Markdown or Word to PDF, with all processing done on the client.",

            "Developed a PDF editor to reorder, rotate and delete pages and to add text, freehand drawing, highlights, images and signatures, with correct placement on rotated pages.",

            "Added batch conversion with ZIP download and an in-app preview for every output type, using lazy-loaded libraries to keep the first page load small.",

            "Designed a responsive green-themed UI with light and dark modes, accessible navigation and a two-column converter layout, deployed on Cloudflare Workers with automatic builds from GitHub."
        ],

        github:
            "https://github.com/estkayon/fileo",

        liveDemo:
            "https://fileo.estiakayon.workers.dev"
    },

    {
        id: 8,

        image:
            "assets/images/projects/quickdrop.jpg",

        title:
            "QuickDrop: Anonymous P2P File Sharing and Chat",

        category:
            "Web App",

        type:
            "Real-Time Web Application",

        date:
            "November 2026",

        role:
            "Full-Stack Developer",

        description:
            "A no-signup web app for sharing files and chatting in password-protected rooms. Files travel directly between browsers over WebRTC, so they never touch the server, and empty rooms are deleted automatically.",

        metrics: [
            { value: "1 GB", label: "Max file, browser to browser" },
            { value: "0", label: "Accounts needed" }
        ],

        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Zustand",
            "WebRTC",
            "WebSocket",
            "Cloudflare Workers",
            "Durable Objects",
            "Cloudflare Pages",
            "GitHub Actions"
        ],

        details: [
            "Built password-protected rooms with server-generated room IDs, hashed passwords, shareable links, a public room lobby with live user counts and a limit of 4 users per room.",

            "Implemented direct browser-to-browser file transfer over WebRTC data channels with chunked streaming and progress tracking for files up to 1 GB, encrypted in transit by DTLS.",

            "Wrote the signaling and chat server on Cloudflare Workers, using one Durable Object per room for reliable peer discovery and a KV namespace as the room registry.",

            "Added in-browser previews for received files, session persistence across page refreshes, and automatic deletion of a room 20 seconds after the last user leaves.",

            "Designed dark and light themes with a responsive layout for desktop and mobile, deployed on Cloudflare Pages with GitHub Actions auto-deploy."
        ],

        github:
            "https://github.com/estkayon/QuickDrop-Anonymous-File-Sharing",

        liveDemo:
            "https://quickdrop-d7a.pages.dev"
    },
        

    {
        id: 9,

        image:
            "assets/images/projects/restaurant-management.jpg",

        title:
            "Fresco & Flame: Restaurant Management System",

        category:
            "Full-Stack",

        type:
            "Full-Stack Web Application",

        date:
            "June 2025",

        role:
            "Full-Stack Developer",

        description:
            "A role-based restaurant ordering and delivery system where customers browse the menu and place orders, admins manage the menu, orders and riders, and riders update delivery status.",

        technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "AJAX",
            "HTML",
            "CSS"
        ],

        details: [
            "Built three separate roles (admin, customer and rider), each with its own login, dashboard and permissions.",

            "Developed customer features for registration, menu browsing, cart management, order placement and order tracking.",

            "Created an admin panel to add, update and delete menu items, manage riders and monitor orders and deliveries.",

            "Implemented a rider dashboard to view assigned orders, accept deliveries and update delivery status until completion.",

            "Secured database access with prepared statements, hashed passwords and session-based authentication, with client-side form validation."
        ],

        github:
            "https://github.com/estkayon/Restaurant-Management-System",

        liveDemo: null
    },

    {
        id: 10,

        image:
            "assets/images/projects/sentiment-analysis.jpg",

        title:
            "Sentiment Analysis System",

        category:
            "MLOps",

        type:
            "End-to-End MLOps Project",

        date:
            "September 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A text sentiment-classification system supported by a reproducible automated MLOps workflow.",

        technologies: [
            "Python",
            "DVC",
            "MLflow",
            "DagsHub",
            "AWS S3",
            "Flask",
            "Docker",
            "GitHub Actions"
        ],

        details: [
            "Built a reproducible DVC pipeline covering data ingestion, preprocessing, feature engineering, model training and evaluation.",

            "Tracked experiments and registered trained models using MLflow hosted through DagsHub.",

            "Versioned datasets using DVC with AWS S3 remote storage.",

            "Containerized the Flask model-serving application using Docker.",

            "Automated application builds, tests and container pushes to Amazon ECR through GitHub Actions."
        ],

        github:
            "https://github.com/estkayon/MLOps-Capstone-Project",

        liveDemo: null
    }
];


export default projects;