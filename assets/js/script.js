/* =====================================================
   PROJECT DATA
   ===================================================== */

const projects = [
    {
        title: "Sentiment Analysis System",
        type: "END-TO-END MLOPS PROJECT",
        date: "15 September 2026 – 21 September 2026",
        role: "Machine Learning and MLOps Engineer",

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
        title: "Vehicle Insurance Prediction",
        type: "END-TO-END MLOPS PROJECT",
        date: "1 September 2026 – 14 September 2026",
        role: "Machine Learning and MLOps Engineer",

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
        title: "Inventory Management System",
        type: "FULL-STACK WEB APPLICATION",
        date: "25 April 2026 – 30 April 2026",
        role: "Full-Stack Developer",

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
        title: "Restaurant Management System",
        type: "FULL-STACK WEB APPLICATION",
        date: "1 December 2025 – 7 December 2025",
        role: "Full-Stack Developer",

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
    },

    {
        title: "Aircraft Visualization",
        type: "COMPUTER GRAPHICS PROJECT",
        date: "5 August 2024 – 15 August 2024",
        role: "C++ and OpenGL Developer",

        description:
            "A multi-scene airport visualization featuring aircraft movement and dynamic environmental effects.",

        technologies: [
            "C++",
            "OpenGL",
            "Computer Graphics",
            "Animation"
        ],

        details: [
            "Designed a multi-scene airport animation with aircraft movement.",
            "Implemented interactive camera controls.",
            "Added weather effects and environmental changes.",
            "Synchronized animation events across multiple scenes."
        ],

        github:
            "https://github.com/estkayon/Visualization-of-Aircraft"
    }
];

/* =====================================================
   SKILL DATA

   90 = used in projects or internship
   80 = listed skill without significant project usage
   ===================================================== */

const skillCategories = [
    {
        category: "Programming Languages",
        categoryIcon: "fa-solid fa-code",

        skills: [
            {
                name: "Python",
                icon: "devicon-python-plain colored",
                level: 90
            },
            {
                name: "C++",
                icon: "devicon-cplusplus-plain colored",
                level: 90
            },
            {
                name: "C#",
                icon: "devicon-csharp-plain colored",
                level: 90
            },
            {
                name: "SQL",
                icon: "fa-solid fa-database",
                level: 90
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored",
                level: 90
            },
            {
                name: "PHP",
                icon: "devicon-php-plain colored",
                level: 90
            },
            {
                name: "R",
                icon: "devicon-r-plain colored",
                level: 90
            }
        ]
    },

    {
        category: "Machine Learning & Data Science",
        categoryIcon: "fa-solid fa-brain",

        skills: [
            {
                name: "PyTorch",
                icon: "devicon-pytorch-original colored",
                level: 90
            },
            {
                name: "TensorFlow",
                icon: "devicon-tensorflow-original colored",
                level: 90
            },
            {
                name: "Scikit-learn",
                icon: "devicon-scikitlearn-plain colored",
                level: 90
            },
            {
                name: "Pandas",
                icon: "devicon-pandas-plain colored",
                level: 90
            },
            {
                name: "NumPy",
                icon: "devicon-numpy-plain colored",
                level: 90
            },
            {
                name: "Matplotlib",
                icon: "devicon-matplotlib-plain colored",
                level: 90
            },
            {
                name: "Deep Learning",
                icon: "fa-solid fa-network-wired",
                level: 90
            },
            {
                name: "Computer Vision",
                icon: "fa-solid fa-eye",
                level: 90
            },
            {
                name: "Natural Language Processing",
                icon: "fa-solid fa-language",
                level: 90
            },
            {
                name: "Model Evaluation",
                icon: "fa-solid fa-chart-line",
                level: 90
            },
            {
                name: "Model Deployment",
                icon: "fa-solid fa-rocket",
                level: 90
            }
        ]
    },

    {
        category: "MLOps & Deployment",
        categoryIcon: "fa-solid fa-gears",

        skills: [
            {
                name: "Docker",
                icon: "devicon-docker-plain colored",
                level: 90
            },
            {
                name: "Kubernetes",
                icon: "devicon-kubernetes-plain colored",
                level: 80
            },
            {
                name: "CI/CD",
                icon: "fa-solid fa-arrows-rotate",
                level: 90
            },
            {
                name: "DVC",
                icon: "fa-solid fa-code-branch",
                level: 90
            },
            {
                name: "DagsHub",
                icon: "fa-solid fa-cloud",
                level: 90
            },
            {
                name: "MLflow",
                icon: "fa-solid fa-chart-simple",
                level: 90
            },
            {
                name: "AWS",
                icon: "devicon-amazonwebservices-plain-wordmark colored",
                level: 90
            }
        ]
    },

    {
        category: "Backend Development",
        categoryIcon: "fa-solid fa-server",

        skills: [
            {
                name: "Node.js",
                icon: "devicon-nodejs-plain colored",
                level: 80
            },
            {
                name: "Django",
                icon: "devicon-django-plain colored",
                level: 80
            },
            {
                name: "Laravel",
                icon: "devicon-laravel-original colored",
                level: 80
            },
            {
                name: "ASP.NET",
                icon: "devicon-dot-net-plain colored",
                level: 80
            },
            {
                name: "FastAPI",
                icon: "devicon-fastapi-plain colored",
                level: 90
            },
            {
                name: "RESTful API",
                icon: "fa-solid fa-plug",
                level: 90
            }
        ]
    },

    {
        category: "Frontend Development",
        categoryIcon: "fa-solid fa-display",

        skills: [
            {
                name: "HTML",
                icon: "devicon-html5-plain colored",
                level: 90
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain colored",
                level: 90
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain colored",
                level: 90
            },
            {
                name: "Tailwind CSS",
                icon: "devicon-tailwindcss-original colored",
                level: 80
            },
            {
                name: "React.js",
                icon: "devicon-react-original colored",
                level: 80
            },
            {
                name: "AJAX",
                icon: "fa-solid fa-bolt",
                level: 90
            }
        ]
    },

    {
        category: "Databases",
        categoryIcon: "fa-solid fa-database",

        skills: [
            {
                name: "MySQL",
                icon: "devicon-mysql-original colored",
                level: 90
            },
            {
                name: "MongoDB",
                icon: "devicon-mongodb-plain colored",
                level: 90
            },
            {
                name: "Relational Database Design",
                icon: "fa-solid fa-table-list",
                level: 90
            }
        ]
    },

    {
        category: "Tools",
        categoryIcon: "fa-solid fa-screwdriver-wrench",

        skills: [
            {
                name: "Git",
                icon: "devicon-git-plain colored",
                level: 90
            },
            {
                name: "GitHub",
                icon: "devicon-github-original",
                level: 90
            },
            {
                name: "GitLab",
                icon: "devicon-gitlab-plain colored",
                level: 80
            },
            {
                name: "Linux",
                icon: "devicon-linux-plain colored",
                level: 90
            }
        ]
    }
];

/* =====================================================
   PROJECT RENDERING
   ===================================================== */

const projectGrid =
    document.getElementById("project-grid");

const projectDialog =
    document.getElementById("project-dialog");

function renderProjects() {
    projects.forEach((project, index) => {
        const projectCard =
            document.createElement("article");

        projectCard.className =
            "project-card interactive-card reveal";

        const technologyTags =
            project.technologies
                .slice(0, 5)
                .map((technology) => {
                    return `<span>${technology}</span>`;
                })
                .join("");

        projectCard.innerHTML = `
            <span class="project-number">
                PROJECT / ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p class="project-date">
                ${project.date}
            </p>

            <div class="tag-list">
                ${technologyTags}
            </div>

            <div class="project-actions">
                <button
                    class="project-action details-button interactive"
                    type="button"
                >
                    <i class="fa-solid fa-circle-info"></i>
                    See Details
                </button>

                <a
                    href="${project.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-action interactive"
                >
                    <i class="fa-brands fa-github"></i>
                    GitHub
                </a>
            </div>
        `;

        projectCard
            .querySelector(".details-button")
            .addEventListener("click", () => {
                openProjectDialog(project);
            });

        projectGrid.appendChild(projectCard);
    });
}

/* =====================================================
   SKILL RENDERING
   ===================================================== */

const skillsGrid =
    document.getElementById("skills-grid");

const skillCategoryGrid =
    document.getElementById("skill-category-grid");

function renderSkills() {
    skillCategories.forEach((category) => {
        const categoryCard =
            document.createElement("article");

        categoryCard.className =
            "skill-category-card interactive-card reveal";

        const skillItems = category.skills
            .map((skill) => {
                return `
                    <div
                        class="skill-item"
                        style="--skill-level: ${skill.level}%"
                    >
                        <div class="skill-main">
                            <div class="skill-identity">
                                <span class="skill-logo">
                                    <i class="${skill.icon}"></i>
                                </span>

                                <span class="skill-name">
                                    ${skill.name}
                                </span>
                            </div>

                            <strong class="skill-value">
                                ${skill.level}%
                            </strong>
                        </div>

                        <div
                            class="skill-progress"
                            role="progressbar"
                            aria-label="${skill.name} proficiency"
                            aria-valuenow="${skill.level}"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <span></span>
                        </div>
                    </div>
                `;
            })
            .join("");

        categoryCard.innerHTML = `
            <div class="skill-category-heading">
                <span class="skill-category-icon">
                    <i class="${category.categoryIcon}"></i>
                </span>

                <h3>${category.category}</h3>

                <span class="skill-count">
                    ${category.skills.length} SKILLS
                </span>
            </div>

            <div class="skill-list">
                ${skillItems}
            </div>
        `;

        skillCategoryGrid.appendChild(categoryCard);
    });
}

/* =====================================================
   PROJECT DIALOG
   ===================================================== */

function openProjectDialog(project) {
    document.getElementById(
        "dialog-project-type"
    ).textContent = project.type;

    document.getElementById(
        "dialog-project-title"
    ).textContent = project.title;

    document.getElementById(
        "dialog-project-description"
    ).textContent = project.description;

    document.getElementById(
        "dialog-project-date"
    ).textContent = project.date;

    document.getElementById(
        "dialog-project-role"
    ).textContent = project.role;

    document.getElementById(
        "dialog-project-technologies"
    ).textContent =
        project.technologies.join(" · ");

    document.getElementById(
        "dialog-project-details"
    ).innerHTML =
        project.details
            .map((detail) => `<li>${detail}</li>`)
            .join("");

    projectDialog.showModal();
    moveCursorInside(projectDialog);

    document.body.classList.add(
        "dialog-open"
    );
}

function closeProjectDialog() {
    projectDialog.close();

    document.body.classList.remove(
        "dialog-open"
    );

    moveCursorBackToBody();
}

document
    .getElementById("dialog-close-button")
    .addEventListener(
        "click",
        closeProjectDialog
    );

projectDialog.addEventListener(
    "click",
    (event) => {
        if (event.target === projectDialog) {
            closeProjectDialog();
        }
    }
);

projectDialog.addEventListener(
    "close",
    () => {
        document.body.classList.remove(
            "dialog-open"
        );
    }
);

/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

const menuButton =
    document.getElementById("menu-button");

const mobileNavigation =
    document.getElementById("mobile-navigation");

menuButton.addEventListener("click", () => {
    const navigationIsOpen =
        mobileNavigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(navigationIsOpen)
    );
});

mobileNavigation
    .querySelectorAll("a")
    .forEach((link) => {
        link.addEventListener("click", () => {
            mobileNavigation.classList.remove(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });

/* =====================================================
   FIXED HEADER
   ===================================================== */

const siteHeader =
    document.getElementById("site-header");

window.addEventListener(
    "scroll",
    () => {
        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );
    },
    {
        passive: true
    }
);

/* =====================================================
   ACTIVE NAVIGATION LINK
   ===================================================== */

const pageSections = [
    ...document.querySelectorAll(
        "main section[id]"
    )
];

const desktopNavigationLinks = [
    ...document.querySelectorAll(
        ".desktop-navigation a"
    )
];

const activeSectionObserver =
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                desktopNavigationLinks.forEach(
                    (link) => {
                        link.classList.toggle(
                            "active",
                            link.hash ===
                                `#${entry.target.id}`
                        );
                    }
                );
            });
        },
        {
            rootMargin: "-40% 0px -50%",
            threshold: 0
        }
    );

pageSections.forEach((section) => {
    activeSectionObserver.observe(section);
});

/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

const revealObserver =
    new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );
                }
            });
        },
        {
            threshold: 0.12
        }
    );

function observeRevealElements() {
    document
        .querySelectorAll(".reveal")
        .forEach((element) => {
            revealObserver.observe(element);
        });
}

/* =====================================================
   CUSTOM CURSOR
   ===================================================== */

const cursorDot =
    document.getElementById("cursor-dot");

const cursorRing =
    document.getElementById("cursor-ring");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

const customCursorEnabled =
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

if (customCursorEnabled) {
    window.addEventListener(
        "mousemove",
        (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.transform = `
                translate(
                    ${mouseX}px,
                    ${mouseY}px
                )
                translate(-50%, -50%)
            `;
        }
    );

    function animateCursorRing() {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;

        cursorRing.style.transform = `
            translate(
                ${ringX}px,
                ${ringY}px
            )
            translate(-50%, -50%)
        `;

        window.requestAnimationFrame(
            animateCursorRing
        );
    }

    animateCursorRing();

    function initializeCursorHover() {
        document
            .querySelectorAll(
                "a, button, .interactive, " +
                ".interactive-card, .certificate-item"
            )
            .forEach((element) => {
                element.addEventListener(
                    "mouseenter",
                    () => {
                        cursorRing.classList.add(
                            "cursor-hover"
                        );
                    }
                );

                element.addEventListener(
                    "mouseleave",
                    () => {
                        cursorRing.classList.remove(
                            "cursor-hover"
                        );
                    }
                );
            });
    }

    window.initializeCursorHover =
        initializeCursorHover;
}

function moveCursorInside(element) {
    if (!customCursorEnabled || !element) {
        return;
    }

    element.appendChild(cursorDot);
    element.appendChild(cursorRing);

    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
}

function moveCursorBackToBody() {
    if (!customCursorEnabled) {
        return;
    }

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
    cursorRing.classList.remove("cursor-hover");
}

/* =====================================================
   CARD LIGHT AND TILT
   ===================================================== */

function initializeCardEffects() {
    document
        .querySelectorAll(".interactive-card")
        .forEach((card) => {
            card.addEventListener(
                "mousemove",
                (event) => {
                    if (
                        !window.matchMedia(
                            "(pointer: fine)"
                        ).matches
                    ) {
                        return;
                    }

                    const rectangle =
                        card.getBoundingClientRect();

                    const relativeX =
                        event.clientX -
                        rectangle.left;

                    const relativeY =
                        event.clientY -
                        rectangle.top;

                    const centerX =
                        rectangle.width / 2;

                    const centerY =
                        rectangle.height / 2;

                    const rotateY =
                        ((relativeX - centerX) /
                            centerX) *
                        2.5;

                    const rotateX =
                        ((centerY - relativeY) /
                            centerY) *
                        2.5;

                    card.style.setProperty(
                        "--pointer-x",
                        `${relativeX}px`
                    );

                    card.style.setProperty(
                        "--pointer-y",
                        `${relativeY}px`
                    );

                    card.style.setProperty(
                        "--rotate-x",
                        `${rotateX}deg`
                    );

                    card.style.setProperty(
                        "--rotate-y",
                        `${rotateY}deg`
                    );
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.style.setProperty(
                        "--rotate-x",
                        "0deg"
                    );

                    card.style.setProperty(
                        "--rotate-y",
                        "0deg"
                    );
                }
            );
        });
}

/* =====================================================
   INTERACTIVE SPACE BACKGROUND
   ===================================================== */

const spaceCanvas =
    document.getElementById("space-canvas");

const spaceContext =
    spaceCanvas.getContext("2d");

let stars = [];

const spacePointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    active: false
};

function resizeSpaceCanvas() {
    const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2
    );

    spaceCanvas.width =
        window.innerWidth * pixelRatio;

    spaceCanvas.height =
        window.innerHeight * pixelRatio;

    spaceCanvas.style.width =
        `${window.innerWidth}px`;

    spaceCanvas.style.height =
        `${window.innerHeight}px`;

    spaceContext.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );

    const starCount = Math.min(
        260,
        Math.floor(
            (window.innerWidth *
                window.innerHeight) /
                5500
        )
    );

    stars = Array.from(
        {
            length: starCount
        },
        () => createStar()
    );
}

function createStar() {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        originX:
            Math.random() * window.innerWidth,

        originY:
            Math.random() * window.innerHeight,

        radius:
            Math.random() * 1.4 + 0.25,

        speedX:
            (Math.random() - 0.5) * 0.08,

        speedY:
            (Math.random() - 0.5) * 0.08,

        alpha:
            Math.random() * 0.75 + 0.2,

        pulse:
            Math.random() * Math.PI * 2
    };
}

function drawSpace() {
    spaceContext.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;
        star.pulse += 0.018;

        if (star.x < -20) {
            star.x = window.innerWidth + 20;
        }

        if (star.x > window.innerWidth + 20) {
            star.x = -20;
        }

        if (star.y < -20) {
            star.y = window.innerHeight + 20;
        }

        if (star.y > window.innerHeight + 20) {
            star.y = -20;
        }

        if (spacePointer.active) {
            const distanceX =
                star.x - spacePointer.x;

            const distanceY =
                star.y - spacePointer.y;

            const distance =
                Math.sqrt(
                    distanceX * distanceX +
                    distanceY * distanceY
                );

            const interactionRadius = 150;

            if (
                distance < interactionRadius &&
                distance > 0
            ) {
                const force =
                    (interactionRadius - distance) /
                    interactionRadius;

                star.x +=
                    (distanceX / distance) *
                    force *
                    2.6;

                star.y +=
                    (distanceY / distance) *
                    force *
                    2.6;
            }
        }

        const pulseOpacity =
            star.alpha +
            Math.sin(star.pulse) * 0.15;

        spaceContext.beginPath();

        spaceContext.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        spaceContext.fillStyle =
            `rgba(
                205,
                230,
                255,
                ${Math.max(
                    0.08,
                    pulseOpacity
                )}
            )`;

        spaceContext.fill();
    });

    window.requestAnimationFrame(drawSpace);
}

window.addEventListener(
    "pointermove",
    (event) => {
        spacePointer.x = event.clientX;
        spacePointer.y = event.clientY;
        spacePointer.active = true;
    }
);

document.addEventListener(
    "mouseleave",
    () => {
        spacePointer.active = false;

        if (cursorDot && cursorRing) {
            cursorDot.style.opacity = "0";
            cursorRing.style.opacity = "0";
        }
    }
);

document.addEventListener(
    "mouseenter",
    () => {
        spacePointer.active = true;

        if (cursorDot && cursorRing) {
            cursorDot.style.opacity = "1";
            cursorRing.style.opacity = "1";
        }
    }
);

window.addEventListener(
    "resize",
    resizeSpaceCanvas
);

/* =====================================================
   CURRENT YEAR
   ===================================================== */

document.getElementById(
    "current-year"
).textContent =
    new Date().getFullYear();

/* =====================================================
   INITIALIZE
   ===================================================== */

renderProjects();
renderSkills();

observeRevealElements();
initializeCardEffects();

if (window.initializeCursorHover) {
    window.initializeCursorHover();
}

resizeSpaceCanvas();

if (
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {
    drawSpace();
}

/* =====================================================
   CERTIFICATE HOVER AND LIGHTBOX
   ===================================================== */

const certificateTrack =
    document.getElementById("certificate-track");

const certificateLightbox =
    document.getElementById("certificate-lightbox");

const certificateLightboxImage =
    document.getElementById("certificate-lightbox-image");

const certificateLightboxClose =
    document.getElementById("certificate-lightbox-close");

const certificateItems =
    document.querySelectorAll(".certificate-item");

let lastCertificateTrigger = null;

function pauseCertificateSlider() {
    certificateTrack.classList.add(
        "certificate-paused"
    );
}

function restartCertificateSlider() {
    certificateTrack.classList.remove(
        "certificate-paused"
    );

    certificateTrack.style.animationPlayState =
        "running";
}

function openCertificateLightbox(
    certificateItem,
    trigger
) {
    const image =
        certificateItem.querySelector("img");

    if (!image) {
        return;
    }

    lastCertificateTrigger = trigger;

    certificateLightboxImage.src =
        image.currentSrc || image.src;

    certificateLightboxImage.alt =
        image.alt || "Certificate preview";

    certificateLightbox.classList.add("open");

    certificateLightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "certificate-lightbox-open"
    );

    pauseCertificateSlider();

    certificateLightboxClose.focus();
}

function closeCertificateLightbox() {
    certificateLightbox.classList.remove("open");

    certificateLightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "certificate-lightbox-open"
    );

    restartCertificateSlider();

    window.setTimeout(() => {
        certificateLightboxImage.src = "";
        certificateLightboxImage.alt = "";
    }, 300);
}

certificateItems.forEach((certificateItem) => {
    const viewButton =
        certificateItem.querySelector(
            ".certificate-view-button"
        );

    certificateItem.addEventListener(
        "mouseenter",
        pauseCertificateSlider
    );

    certificateItem.addEventListener(
        "mouseleave",
        () => {
            if (
                !certificateLightbox.classList.contains(
                    "open"
                )
            ) {
                restartCertificateSlider();
            }
        }
    );

    if (viewButton) {
        viewButton.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                openCertificateLightbox(
                    certificateItem,
                    viewButton
                );
            }
        );
    }

    certificateItem.addEventListener(
        "click",
        (event) => {
            if (
                event.target.closest(
                    ".certificate-view-button"
                )
            ) {
                return;
            }

            openCertificateLightbox(
                certificateItem,
                certificateItem
            );
        }
    );
});

certificateLightboxClose.addEventListener(
    "click",
    (event) => {
        event.stopPropagation();
        closeCertificateLightbox();
    }
);

certificateLightbox.addEventListener(
    "click",
    (event) => {
        if (
            event.target === certificateLightbox
        ) {
            closeCertificateLightbox();
        }
    }
);

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            certificateLightbox.classList.contains(
                "open"
            )
        ) {
            closeCertificateLightbox();
        }
    }
);

