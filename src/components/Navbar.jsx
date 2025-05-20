import { Briefcase, ChevronRight, Code, FileText, Menu, MessageSquare, User, X } from "lucide-react";
import { Button } from "./ui/button";

// Navbar component with animations
const Navbar = ({
  isScrolled,
  currentSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const navLinks = [
    { href: "#hero", label: "Home", icon: <User className="h-4 w-4" /> },
    { href: "#about", label: "About", icon: <FileText className="h-4 w-4" /> },
    {
      href: "#experience",
      label: "Experience",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <Code className="h-4 w-4" />,
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${
                  isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleNavLinkClick(e, "#hero")}
          className="flex items-center space-x-2 group"
        >
          <div className="h-9 w-9 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xl transform group-hover:rotate-12 transition-transform">
            SS
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Sridhar Sing
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant={
                currentSection === link.href.substring(1) ? "default" : "ghost"
              }
              size="sm"
              className={
                currentSection === link.href.substring(1)
                  ? "bg-sky-500 hover:bg-sky-600 text-white"
                  : "text-slate-700 hover:text-sky-500 hover:bg-sky-50"
              }
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              <span className="flex items-center">
                {link.icon}
                <span className="ml-1">{link.label}</span>
              </span>
            </Button>
          ))}

          <div className="ml-2 pl-2 border-l border-slate-200">
            <Button
              variant="outline"
              size="sm"
              className="border-sky-500 text-sky-500 hover:bg-sky-50"
              onClick={(e) => handleNavLinkClick(e, "#contact")}
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-slate-800"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col items-start p-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                currentSection === link.href.substring(1)
                  ? "bg-sky-50 text-sky-600"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              <span>{link.label}</span>
              {currentSection === link.href.substring(1) && (
                <ChevronRight className="ml-auto h-4 w-4 text-sky-500" />
              )}
            </a>
          ))}

          <Button
            className="w-full mt-4 bg-sky-500 hover:bg-sky-600"
            onClick={(e) => handleNavLinkClick(e, "#contact")}
          >
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
