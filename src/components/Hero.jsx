import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Code, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import image from "../assets/sridhar.png"; // Ensure you have the correct path to your image

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div
        className={`relative transform transition-all duration-1000 ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0 scale-95"
        }`}
      >
        {/* Profile image with animated glow */}
        <div className="inline-block mb-6 relative group">
          <div className="absolute inset-0 transform scale-110 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 animate-pulse blur-xl opacity-70 group-hover:opacity-80 transition-opacity"></div>
          <div className="relative border-4 border-white rounded-full p-1 bg-gradient-to-r from-sky-500 to-indigo-500">
            <img
              src={image}
              alt="Sridhar Sing"
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Name with animated gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
          Hi, I'm Sridhar Sing
        </h1>

        {/* Role badge */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full mb-8 inline-block shadow-lg">
          <p className="text-xl md:text-2xl font-medium text-slate-800">
            <span className="text-sky-600">MERN Stack Developer</span> |{" "}
            <span className="text-indigo-600">AI Solutions</span>
          </p>
        </div>

        {/* Bio with better typography */}
        <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-700 leading-relaxed font-medium backdrop-blur-sm bg-white/30 p-4 rounded-xl">
          Passionate developer with{" "}
          <span className="font-semibold text-indigo-600">1.5 years</span> of
          experience at
          <span className="font-semibold text-sky-600">
            {" "}
            Daya Consultancy Services
          </span>
          , specializing in full-stack web applications and exploring the
          cutting-edge potential of artificial intelligence.
        </p>

        {/* Call to action buttons with enhanced hover effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-6 shadow-lg shadow-blue-200/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
          >
            <Code className="mr-2 h-5 w-5" /> View My Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-sky-500 text-sky-600 bg-white/80 backdrop-blur-sm hover:bg-sky-50 hover:border-sky-600 px-8 py-6 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 rounded-xl"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Get In Touch
          </Button>
        </div>

        {/* Social media links with enhanced interactions */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Sridharsing7570"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-white p-4 rounded-full shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:bg-slate-50 border border-slate-100"
          >
            <Github className="h-6 w-6 text-slate-800 hover:text-sky-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/sridhar-sing-4b7b8a244/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white p-4 rounded-full shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:bg-slate-50 border border-slate-100"
          >
            <Linkedin className="h-6 w-6 text-slate-800 hover:text-sky-500 transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
