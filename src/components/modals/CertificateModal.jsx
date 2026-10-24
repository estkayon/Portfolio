import {
    useEffect
} from "react";

import {
    createPortal
} from "react-dom";

import {
    AnimatePresence,
    motion
} from "motion/react";

import {
    X
} from "lucide-react";

function CertificateModal({
    certificate,
    onClose
}) {
    const baseUrl =
        import.meta.env.BASE_URL;

    useEffect(() => {
        if (!certificate) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            "hidden";

        function handleEscape(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.body.style.overflow =
                previousOverflow;

            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [certificate, onClose]);

    return createPortal(
        <AnimatePresence>
            {certificate && (
                <motion.div
                    className="certificate-modal-backdrop"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.25
                    }}
                    onMouseDown={
                        onClose
                    }
                >
                    <motion.div
                        className="certificate-modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${certificate.title} preview`}
                        initial={{
                            opacity: 0,
                            scale: 0.78,
                            y: 25
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.86,
                            y: 15
                        }}
                        transition={{
                            duration: 0.42,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ]
                        }}
                        onMouseDown={(
                            event
                        ) =>
                            event.stopPropagation()
                        }
                    >
                        <img
                            src={`${baseUrl}${certificate.image}`}
                            alt={
                                certificate.title
                            }
                        />
                    </motion.div>

                    <button
                        type="button"
                        className="certificate-modal-close interactive"
                        aria-label="Close certificate preview"
                        onClick={
                            onClose
                        }
                    >
                        <X
                            size={21}
                            aria-hidden="true"
                        />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

export default CertificateModal;