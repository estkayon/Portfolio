import {
    ArrowUp
} from "lucide-react";

function Footer() {
    const currentYear =
        new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="site-footer">
            <div className="section-container footer-container">
                <div className="footer-copy">
                    <p>
                        © {currentYear} Estiak
                        Rahman Ayon.
                    </p>

                    <span>
                        Designed and developed
                        with purpose.
                    </span>
                </div>

                <button
                    type="button"
                    className="footer-top-button interactive"
                    onClick={scrollToTop}
                    aria-label="Scroll back to top"
                >
                    <span>Back to top</span>

                    <ArrowUp
                        size={17}
                        aria-hidden="true"
                    />
                </button>
            </div>
        </footer>
    );
}

export default Footer;