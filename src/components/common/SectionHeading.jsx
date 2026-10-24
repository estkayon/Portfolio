import {
    motion
} from "motion/react";

function SectionHeading({
    number,
    label,
    title,
    description,
    align = "left"
}) {
    return (
        <motion.div
            className={`section-heading ${
                align === "center"
                    ? "section-heading-center"
                    : ""
            }`}
            initial={{
                opacity: 0,
                y: 24
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: 0.3
            }}
            transition={{
                duration: 0.65,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }}
        >
            <div className="section-heading-label">
                <span>{number}</span>

                <p>{label}</p>
            </div>

            <div className="section-heading-content">
                <h2>{title}</h2>

                {description && (
                    <p className="section-heading-description">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default SectionHeading;