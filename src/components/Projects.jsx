import { Badge, ExternalLink, Github, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

// Projects section with ongoing projects indicators
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "AI Mock Interview Platform",
      description:
        "A platform designed to help users practice for interviews by providing AI-driven feedback on their responses and performance.",
      image: "/api/placeholder/400/250",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "OpenAI API",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/yourusername/mock-interview-ai",
      liveLink: "https://your-mock-interview-app.com",
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
      status: "In Development",
      completion: 65,
    },
    {
      id: 2,
      title: "Video Summarization Tool",
      description:
        "An application that uses AI to analyze and create concise summaries of long-form video content with key points extraction.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Redux", "Node.js", "Express.js", "AI APIs", "MongoDB"],
      githubLink: "https://github.com/yourusername/video-summarizer",
      liveLink: null, // No live link yet
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      status: "Early Stage",
      completion: 30,
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce businesses to manage products, orders, and gain insights through analytics.",
      image: "/api/placeholder/400/250",
      tags: ["React", "MongoDB", "Express.js", "Node.js", "Chart.js", "Redux"],
      githubLink: "https://github.com/yourusername/ecommerce-dashboard",
      liveLink: null, // No live link yet
      color: "bg-gradient-to-r from-emerald-500 to-teal-400",
      status: "Planning Phase",
      completion: 15,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-indigo-600 bg-indigo-50 rounded-full text-sm font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Ongoing Projects
          </h2>
          <div className="h-1 w-24 bg-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my current projects in development. I'm actively working on these to showcase my skills in web development and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-none"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 opacity-90 ${project.color}`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full mix-blend-overlay transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                {/* Project status badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-90 text-sm font-medium text-slate-800">
                    <Clock className="mr-1 h-3 w-3" />
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-90 text-sm font-medium text-slate-800">
                    #{project.id}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="min-h-[60px] text-slate-600 text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow pb-4">
                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4">
                  <div 
                    className={`h-2.5 rounded-full ${project.color}`}
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  {project.completion}% completed
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-slate-100 text-slate-700 border-none px-3 py-1 rounded-full font-medium text-xs hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge
                        variant="outline"
                        className="bg-slate-100 text-slate-700 border-none px-3 py-1 rounded-full font-medium text-xs"
                      >
                        +{project.tags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between gap-4 pt-0 pb-6 px-6">
                {project.githubLink && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 font-medium transition-all duration-200"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
                {project.liveLink ? (
                  <Button
                    asChild
                    size="sm"
                    className={`flex-1 text-white font-medium transition-all duration-200 ${
                      hoveredProject === project.id
                        ? project.color
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    className="flex-1 bg-slate-300 text-slate-600 font-medium cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Coming Soon</span>
                    </span>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-lg font-medium text-lg transition-all duration-200 shadow-md hover:shadow-xl">
            Follow My Progress
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;