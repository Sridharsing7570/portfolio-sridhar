import { Github, Linkedin, Mail } from "lucide-react";

// Footer section
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                SS
              </div>
              <span className="text-xl font-bold text-white">Sridhar Sing</span>
            </div>
            <p className="text-slate-400 mt-2">MERN Stack Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Sridharsing7570"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-sky-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sridhar-sing-4b7b8a244/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:sridharsing14@gmail.com"
              aria-label="Email"
              className="hover:text-sky-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} Sridhar Sing. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
