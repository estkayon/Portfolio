import {
    useCallback,
    useState
} from "react";

import {
    motion
} from "motion/react";

import {
    ZoomIn
} from "lucide-react";

import SectionHeading from "../common/SectionHeading";
import CertificateModal from "../modals/CertificateModal";
import certificates from "../../data/certificates";

function Certificates() {
    const [
        selectedCertificate,
        setSelectedCertificate
    ] = useState(null);

    const baseUrl =
        import.meta.env.BASE_URL;

    const closeModal =
        useCallback(() => {
            setSelectedCertificate(null);
        }, []);

    function openCertificate(
        certificate
    ) {
        setSelectedCertificate(
            certificate
        );
    }

    function renderCertificateGroup(
        groupIndex
    ) {
        const duplicateGroup =
            groupIndex === 1;

        return (
            <div
                className="certificate-group"
                key={groupIndex}
                aria-hidden={
                    duplicateGroup
                        ? "true"
                        : undefined
                }
            >
                {certificates.map(
                    (certificate) => (
                        <motion.article
                            key={`${groupIndex}-${certificate.id}`}
                            className="certificate-card interactive-card"
                            whileHover={{
                                y: -13,
                                scale: 1.055
                            }}
                            whileTap={{
                                scale: 0.98
                            }}
                            transition={{
                                duration: 0.38,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            }}
                        >
                            <img
                                src={`${baseUrl}${certificate.image}`}
                                alt={
                                    duplicateGroup
                                        ? ""
                                        : certificate.title
                                }
                                loading={
                                    duplicateGroup
                                        ? "lazy"
                                        : "eager"
                                }
                                draggable="false"
                            />

                            <button
                                type="button"
                                className="certificate-view-button interactive"
                                aria-label={`View ${certificate.title}`}
                                tabIndex={
                                    duplicateGroup
                                        ? -1
                                        : 0
                                }
                                onClick={() =>
                                    openCertificate(
                                        certificate
                                    )
                                }
                            >
                                <ZoomIn
                                    size={21}
                                    aria-hidden="true"
                                />

                                <span>
                                    View details
                                </span>
                            </button>
                        </motion.article>
                    )
                )}
            </div>
        );
    }

    return (
        <>
            <section
                className="content-section certificates-section"
                id="certificates"
            >
                <div className="section-container">
                    <SectionHeading
                        number="07"
                        label="Certificates"
                        title="Credentials and learning."
                        description="Selected certificates from academic, technical and professional learning experiences."
                    />
                </div>

                <div className="certificate-slider">
                    <div className="certificate-track">
                        {[0, 1].map(
                            renderCertificateGroup
                        )}
                    </div>
                </div>
            </section>

            <CertificateModal
                certificate={
                    selectedCertificate
                }
                onClose={
                    closeModal
                }
            />
        </>
    );
}

export default Certificates;