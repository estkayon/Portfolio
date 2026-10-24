import {
    ArrowDown,
    ArrowUpRight,
    Download,
    Eye,
    Mail
} from "lucide-react";

import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa6";

import {
    motion
} from "motion/react";

const socialLinks = [
    {
        label: "GitHub",
        href:
            "https://github.com/estkayon",
        icon: FaGithub,
        className: "github"
    },
    {
        label: "LinkedIn",
        href:
            "https://www.linkedin.com/in/md-estiak-rahman-ayon/",
        icon: FaLinkedinIn,
        className: "linkedin"
    },
    {
        label: "Facebook",
        href:
            "https://www.facebook.com/estkayon",
        icon: FaFacebookF,
        className: "facebook"
    },
    {
        label: "Instagram",
        href:
            "https://www.instagram.com/_ayooonx7/",
        icon: FaInstagram,
        className: "instagram"
    },
    {
        label: "Email",
        href:
            "mailto:estiakayon@gmail.com",
        icon: Mail,
        className: "email"
    }
];

const entranceTransition = {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1]
};

function Hero() {
    const baseUrl =
        import.meta.env.BASE_URL;

    const cvPath =
        `${baseUrl}assets/files/` +
        "Md_Estiak_Rahman_Ayon_CV.pdf";

    const profilePath =
        `${baseUrl}assets/images/` +
        "profile/ayon-profile.png";

    return (
        <section
            className="hero-section"
            id="home"
        >
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{
                        opacity: 0,
                        y: 28
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={
                        entranceTransition
                    }
                >
                    <div className="hero-eyebrow">
                        <span />

                        <p>
                            Software Engineer ·
                            AI/ML Engineer ·
                            MLOps Engineer
                        </p>
                    </div>

                    <h1>
                        Building intelligent
                        systems from
                        <em>
                            {" "}
                            data to
                            deployment.
                        </em>
                    </h1>

                    <p className="hero-description">
                        I&apos;m{" "}
                        <strong>
                            Md. Estiak Rahman
                            Ayon
                        </strong>
                        , a Computer Science
                        graduate from AIUB with
                        experience in machine
                        learning, MLOps,
                        vision-language systems
                        and full-stack software
                        development.
                    </p>

                    <div className="hero-actions">
                        <a
                            href="#projects"
                            className="hero-button hero-primary-button interactive"
                        >
                            Explore projects

                            <ArrowUpRight
                                size={17}
                                aria-hidden="true"
                            />
                        </a>

                        <a
                            href={cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-button hero-secondary-button interactive"
                        >
                            <Eye
                                size={17}
                                aria-hidden="true"
                            />

                            Preview CV
                        </a>

                        <a
                            href={cvPath}
                            download
                            className="hero-download-button interactive"
                            aria-label="Download CV"
                            title="Download CV"
                        >
                            <Download
                                size={18}
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <div className="hero-bottom">
                        <div className="hero-socials">
                            {socialLinks.map(
                                (social) => {
                                    const Icon =
                                        social.icon;

                                    const external =
                                        social.href.startsWith(
                                            "http"
                                        );

                                    return (
                                        <a
                                            key={
                                                social.label
                                            }
                                            href={
                                                social.href
                                            }
                                            className={`hero-social-link ${social.className} interactive`}
                                            aria-label={
                                                social.label
                                            }
                                            target={
                                                external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                        >
                                            <Icon
                                                size={
                                                    17
                                                }
                                                aria-hidden="true"
                                            />
                                        </a>
                                    );
                                }
                            )}
                        </div>

                        <div className="hero-location">
                            <span />

                            Gazipur, Bangladesh
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{
                        opacity: 0,
                        scale: 0.92
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        ...entranceTransition,
                        delay: 0.16
                    }}
                >
                    <div className="profile-system">
                        <div className="profile-glow" />

                        <div className="solar-orbit orbit-one">
                            <span className="planet planet-one" />
                        </div>

                        <div className="solar-orbit orbit-two">
                            <span className="planet planet-two" />
                        </div>

                        <div className="solar-orbit orbit-three">
                            <span className="planet planet-three" />
                        </div>

                        <div className="profile-photo-frame">
                            <div className="profile-photo-inner">
                                <img
                                    src={
                                        profilePath
                                    }
                                    alt="Md. Estiak Rahman Ayon"
                                />
                            </div>
                        </div>

                        <div className="profile-availability">
                            <span />

                            Available for
                            opportunities
                        </div>
                    </div>
                </motion.div>
            </div>

            <a
                href="#about"
                className="hero-scroll-indicator interactive"
                aria-label="Scroll to about section"
            >
                <span>
                    Scroll to discover
                </span>

                <ArrowDown
                    size={16}
                    aria-hidden="true"
                />
            </a>
        </section>
    );
}

export default Hero;