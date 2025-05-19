import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState } from "react";
import { useEffect } from "react";
import { WelcomeLoader } from "./components/WelcomeLoader";

function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find which section is currently in view for nav highlighting
      const sections = ["hero", "about", "experience", "projects", "contact"];
      let currentActive = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActive = section;
            break;
          }
        }
      }
      setCurrentSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <WelcomeLoader>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
        <Navbar
          isScrolled={isScrolled}
          currentSection={currentSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </WelcomeLoader>
  );
}

export default App;
