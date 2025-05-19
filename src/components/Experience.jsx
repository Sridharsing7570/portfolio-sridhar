import { Badge, Briefcase, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Experience section with enhanced styling and animations
const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Daya Consultancy Services (DCS)",
      period: "August 2024 – Present",
      location: "Onsite, Bhubaneshwar, Odisha",
      responsibilities: [
        "Developing full-stack web applications using MongoDB, Express, React, and Node.js",
        "Building RESTful APIs to ensure efficient data flow between frontend and backend",
        "Creating responsive and interactive user interfaces with React and modern CSS frameworks",
        "Collaborating with project teams to implement features based on client requirements",
        "Participating in code reviews and implementing best practices for web development",
        "Working with version control systems (Git) to maintain clean, functional codebases",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Previous Experience",
      period: "December 2023 to August 2024",
      location: "Onsite, Bhubaneshwar, Odisha",
      responsibilities: [
        "Built foundational skills in HTML, CSS, and JavaScript",
        "Worked on small web projects to develop practical experience",
        "Completed training in React.js and Node.js development",
        "Collaborated on team projects to build portfolio work",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gradient-to-br from-sky-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-6 py-2 text-sky-600 border-sky-200 bg-white rounded-full text-sm font-medium shadow-sm transform transition-all hover:scale-105 hover:shadow-md"
          >
            Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-3">
            Professional Journey
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web
            technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`shadow-lg border-none overflow-hidden transition-all duration-300 ${
                hoveredIndex === index
                  ? "transform -translate-y-1 shadow-xl"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600"></div>
              <CardHeader className="bg-white border-b pb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-xl">
                    <Briefcase className="h-8 w-8 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-slate-800 mb-1">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-md text-slate-600 font-medium">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-sky-500" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 pb-8 bg-gradient-to-br from-white to-sky-50">
                <ul className="space-y-3 text-slate-700">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-gradient-to-r from-sky-200 to-blue-200 p-1.5 rounded-full mr-3 mt-1 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
