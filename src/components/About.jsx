import {
  Badge,
  Code,
  Calendar,
  Github,
  Workflow,
  Database,
  Laptop,
} from "lucide-react";
import { useState } from "react";

// About section with skills
const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skills = {
    Languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    Frontend: ["React", "Redux (Toolkit)", "Tailwind CSS", "Shadcn/ui"],
    Backend: ["Node.js", "Express.js"],
    Databases: ["MongoDB (Mongoose)"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel/Netlify",
      "AWS",
    ],
    "AI/Concepts": [
      "AI Integration",
      "NLP Basics (Conceptual)",
      "API Consumption (e.g., OpenAI, Gemini AI)",
    ],
  };

  const categoryIcons = {
    Languages: <Code className="h-4 w-4" />,
    Frontend: <Laptop className="h-4 w-4" />,
    Backend: <Workflow className="h-4 w-4" />,
    Databases: <Database className="h-4 w-4" />,
    "Tools & Platforms": <Github className="h-4 w-4" />,
    "AI/Concepts": <Calendar className="h-4 w-4" />,
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative bg-gradient-to-b from-white to-sky-50"
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-sky-500 opacity-5 transform -skew-y-6"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sky-500 border-sky-200 bg-sky-50 rounded-full text-sm font-medium animate-pulse"
            >
              About Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              My Journey & <span className="text-sky-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 bg-sky-600 p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="bg-white rounded-full p-3 mr-4">
                    <Code className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
                </div>

                <ul className="space-y-4">
                  <li
                    className="flex items-center cursor-pointer hover:bg-sky-700 p-3 rounded-lg transition-colors"
                    onClick={() => setActiveTab("about")}
                    style={{
                      backgroundColor:
                        activeTab === "about"
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                    }}
                  >
                    <div className="mr-3 bg-sky-500 p-2 rounded-lg">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <span className="font-medium">About Me</span>
                  </li>
                  <li
                    className="flex items-center cursor-pointer hover:bg-sky-700 p-3 rounded-lg transition-colors"
                    onClick={() => setActiveTab("skills")}
                    style={{
                      backgroundColor:
                        activeTab === "skills"
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                    }}
                  >
                    <div className="mr-3 bg-sky-500 p-2 rounded-lg">
                      <Code className="h-5 w-5" />
                    </div>
                    <span className="font-medium">My Skills</span>
                  </li>
                </ul>

                <div className="mt-12 pt-8 border-t border-sky-500">
                  <p className="italic text-sky-100">
                    "Building innovative web solutions with passion and
                    precision"
                  </p>
                </div>
              </div>

              <div className="w-full md:w-2/3 p-8">
                {activeTab === "about" ? (
                  <div className="space-y-6 p-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">
                      Professional Background
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Hello! I'm a passionate{" "}
                      <span className="font-semibold text-sky-600">
                        MERN Stack Developer
                      </span>{" "}
                      with over 1 year and 6 months of professional experience
                      at{" "}
                      <span className="font-semibold text-sky-600">
                        Daya Consultancy Services (DCS)
                      </span>
                      . I thrive on building efficient, scalable, and
                      user-friendly web applications from concept to deployment.
                    </p>
                    <div className="bg-sky-50 p-6 rounded-xl border-l-4 border-sky-500 my-8">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        At DCS, I've had the opportunity to contribute to a
                        variety of client projects, enhancing my skills in
                        full-stack development, API integration, and
                        collaborative teamwork. Beyond my professional work, I'm
                        deeply interested in the potential of{" "}
                        <span className="font-semibold text-sky-600">
                          Artificial Intelligence
                        </span>
                        .
                      </p>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      I'm currently channeling this interest into personal
                      projects like an AI-powered mock interview platform and a
                      video summarization tool. I'm always eager to learn new
                      technologies and take on challenging projects that push my
                      abilities.
                    </p>
                  </div>
                ) : (
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8">
                      Technical Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(skills).map(([category, skillList]) => (
                        <div
                          key={category}
                          className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                        >
                          <h4 className="text-md font-medium mb-4 text-sky-600 flex items-center">
                            <div className="bg-sky-100 p-2 rounded-lg text-sky-600 mr-3">
                              {categoryIcons[category]}
                            </div>
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => {
                              console.log(skill);
                              return (
                                <div
                                  key={skill}
                                  className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
