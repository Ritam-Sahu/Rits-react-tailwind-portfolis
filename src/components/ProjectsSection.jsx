import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Redux Blog",
    description: "Blog application built using React, Redux and Appwrite as backend.",
    image: "#",
    tags: ["React", "Redux", "TailwindCSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Backend Video Streaming",
    description: "Backend-focused video streaming platform with scalable architecture.",
    image: "#",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio built with modern React and Tailwind CSS.",
    image: "#",
    tags: ["React", "TailwindCSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Ritam-Sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
