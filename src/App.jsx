import CustomCursor from "./components/common/CustomCursor";
import SpaceBackground from "./components/effects/SpaceBackground";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import About from "./components/sections/About";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Publications from "./components/sections/Publications";
import Skills from "./components/sections/Skills";
import Volunteering from "./components/sections/Volunteering";

import useTheme from "./hooks/useTheme";

function App() {
    const {
        theme,
        toggleTheme
    } = useTheme();

    return (
        <>
            <SpaceBackground />

            <CustomCursor />

            <Navbar
                theme={theme}
                onThemeToggle={toggleTheme}
            />

            <main className="site-shell">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Publications />
                <Skills />
                <Education />
                <Certificates />
                <Volunteering />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;