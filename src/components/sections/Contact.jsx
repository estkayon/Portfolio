import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import {
    motion
} from "motion/react";

import SectionHeading from "../common/SectionHeading";
import contact from "../../data/contact";

const contactMethods = [
    {
        id: "email",
        label: "Email",
        value: contact.email,
        href: `mailto:${contact.email}`,
        icon: Mail
    },
    {
        id: "phone",
        label: "Phone",
        value: contact.phone,
        href: `tel:${contact.phone.replace(/\s+/g, "")}`,
        icon: Phone
    },
    {
        id: "location",
        label: "Location",
        value: contact.location,
        href: null,
        icon: MapPin
    }
];

const socialLinks = [
    {
        id: "github",
        label: "GitHub",
        href: contact.socials.github,
        icon: FaGithub,
        className: "github"
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: contact.socials.linkedin,
        icon: FaLinkedinIn,
        className: "linkedin"
    },
    {
        id: "facebook",
        label: "Facebook",
        href: contact.socials.facebook,
        icon: FaFacebookF,
        className: "facebook"
    },
    {
        id: "instagram",
        label: "Instagram",
        href: contact.socials.instagram,
        icon: FaInstagram,
        className: "instagram"
    }
];

function Contact() {
    return (
        <section
            className="content-section contact-section"
            id="contact"
        >
            <div className="section-container">
                <SectionHeading
                    number="09"
                    label="Contact"
                    title="Let’s build something meaningful."
                    description="Have a project, research idea or opportunity in mind? Feel free to reach out."
                />

                <div className="contact-layout">
                    <motion.div
                        className="contact-intro interactive-card"
                        initial={{
                            opacity: 0,
                            y: 35
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25
                        }}
                        whileHover={{
                            y: -8
                        }}
                        transition={{
                            duration: 0.55,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        }}
                    >
                        <span className="contact-eyebrow">
                            OPEN TO OPPORTUNITIES
                        </span>

                        <h3>
                            Have an idea?
                            <br />
                            Let&apos;s talk.
                        </h3>

                        <p>
                            {contact.availability}
                        </p>

                        <a
                            className="contact-primary-button interactive"
                            href={`mailto:${contact.email}`}
                        >
                            <span>Send me an email</span>

                            <ArrowUpRight
                                size={19}
                                aria-hidden="true"
                            />
                        </a>
                    </motion.div>

                    <div className="contact-information">
                        <div className="contact-methods">
                            {contactMethods.map(
                                (
                                    method,
                                    index
                                ) => {
                                    const Icon =
                                        method.icon;

                                    const content = (
                                        <>
                                            <span className="contact-method-icon">
                                                <Icon
                                                    size={
                                                        21
                                                    }
                                                    aria-hidden="true"
                                                />
                                            </span>

                                            <span className="contact-method-copy">
                                                <small>
                                                    {
                                                        method.label
                                                    }
                                                </small>

                                                <strong>
                                                    {
                                                        method.value
                                                    }
                                                </strong>
                                            </span>

                                            {method.href && (
                                                <ArrowUpRight
                                                    className="contact-method-arrow"
                                                    size={
                                                        18
                                                    }
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </>
                                    );

                                    const animationProps = {
                                        className:
                                            "contact-method interactive-card",
                                        initial: {
                                            opacity: 0,
                                            x: 25
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true,
                                            amount: 0.25
                                        },
                                        whileHover: {
                                            y: -6,
                                            scale: 1.01
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay:
                                                index *
                                                0.08,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1
                                            ]
                                        }
                                    };

                                    if (method.href) {
                                        return (
                                            <motion.a
                                                {...animationProps}
                                                key={
                                                    method.id
                                                }
                                                href={
                                                    method.href
                                                }
                                            >
                                                {
                                                    content
                                                }
                                            </motion.a>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            {...animationProps}
                                            key={
                                                method.id
                                            }
                                        >
                                            {content}
                                        </motion.div>
                                    );
                                }
                            )}
                        </div>

                        <div className="contact-socials">
                            <p>
                                Find me online
                            </p>

                            <div className="contact-social-list">
                                {socialLinks.map(
                                    (social) => {
                                        const Icon =
                                            social.icon;

                                        return (
                                            <a
                                                key={
                                                    social.id
                                                }
                                                className={`contact-social-link ${social.className} interactive`}
                                                href={
                                                    social.href
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={
                                                    social.label
                                                }
                                                title={
                                                    social.label
                                                }
                                            >
                                                <Icon
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;