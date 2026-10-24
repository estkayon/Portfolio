
const projects = [
    {
        id: 1,

        image:
            "assets/images/projects/electricity-forecasting.jpg",

        title:
            "Bangladesh Electricity Demand Forecasting",

        type:
            "End-to-End MLOps Project",

        date:
            "September 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A production-oriented electricity demand forecasting system for Bangladesh with automated data pipelines, national and regional forecasting, model tracking, API serving and a live dashboard.",

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

        image:
            "assets/images/projects/shopsphere.jpg",
        title:
            "ShopSphere — E-commerce Management System",

        type:
            "Full-Stack E-commerce Application",

        date:
            "October 2026",

        role:
            "Full-Stack Developer",

        description:
            "A full-stack single-vendor e-commerce platform with a responsive storefront, protected admin dashboard, inventory control, verified payments and automated order fulfillment workflows.",

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
            "https://github.com/estkayon/Ecommerce-Management-System"
    },

    {
        id: 3,

        image:
            "assets/images/projects/fileo.gif",

        title:
            "Fileo: Private In-Browser File Converter and PDF Editor",

        type:
            "Client-Side Web Application",

        date:
            "October 2026",

        role:
            "Frontend Developer and UI Designer",

        description:
            "A free file converter and PDF editor that runs entirely in the browser, so files never leave the user's device. It converts images, PDFs, Word and Markdown files, edits and signs PDFs, and previews every result before download.",

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
        id: 4,
        image:
            "assets/images/projects/sentiment-analysis.jpg",

        title:
            "Sentiment Analysis System",

        type:
            "End-to-End MLOps Project",

        date:
            "15 September 2026 – 21 September 2026",

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
            "https://github.com/estkayon/MLOps-Capstone-Project"
    },

    {
        id: 5,
        image:
            "assets/images/projects/vehicle-insurance.jpg",

        title:
            "Vehicle Insurance Prediction",

        type:
            "End-to-End MLOps Project",

        date:
            "1 September 2026 – 14 September 2026",

        role:
            "Machine Learning and MLOps Engineer",

        description:
            "A modular machine-learning system for predicting customer interest in vehicle insurance.",

        technologies: [
            "Python",
            "MongoDB",
            "FastAPI",
            "Docker",
            "AWS S3",
            "AWS ECR",
            "AWS EC2",
            "GitHub Actions"
        ],

        details: [
            "Built a modular training pipeline covering MongoDB ingestion, data validation, transformation, model training and evaluation.",

            "Served the trained model through a FastAPI application.",

            "Containerized the application using Docker.",

            "Versioned model artifacts using AWS S3 and stored container images in Amazon ECR.",

            "Automated deployment to AWS EC2 using GitHub Actions and a self-hosted runner."
        ],

        github:
            "https://github.com/estkayon/MLOps-Project---Vehicle-Insurance-Domain"
    },

    {
        id: 6,

        image:
            "assets/images/projects/inventory-management.jpg",
        title:
            "Inventory Management System",

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
            "https://github.com/estkayon/Inventory-Management-System"
    },

    {
        id: 7,
        image:
            "assets/images/projects/restaurant-management.jpg",

        title:
            "Restaurant Management System",

        type:
            "Full-Stack Web Application",

        date:
            "1 December 2025 – 7 December 2025",

        role:
            "Full-Stack Developer",

        description:
            "A multi-role restaurant ordering and delivery platform for customers, riders and administrators.",

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "AJAX"
        ],

        details: [
            "Built a full-stack restaurant platform using PHP and MySQL.",

            "Developed separate interfaces for administrators, customers and delivery riders.",

            "Implemented authentication, menu management, shopping cart and order placement.",

            "Used AJAX to provide dynamic updates.",

            "Added delivery tracking and order-status management."
        ],

        github:
            "https://github.com/estkayon/Restaurant-Management-System"
    }
];

export default projects;