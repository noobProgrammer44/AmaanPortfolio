import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isInView, baseAnimationProps, staggerAnimationProps } =
    useScrollAnimation();

  const projects = [
    {
      title: "FoodHub",
      description:
        "A real-time food ordering app with dynamic restaurant search, menu browsing, and secure payment integration. Features include cart management, live order tracking, and multi-role authentication. Optimized for performance with lazy loading and full test coverage.",
      image: "/images/FoodHub.png",
      technologies: [
        "React",
        "Node.js",
        "TailwindCSS",
        "Redux",
        "Stripe",
        "JWT",
      ],
      features: [
        "Real-time restaurant menus",
        "Payment gateway integration",
        "Order analytics",
      ],
      githubUrl: "https://github.com/noobProgrammer44/FoodHub",
      liveUrl: "https://foodhub-demo.com",
      status: "Completed",
    },
    {
      title: "Grow More",
      description:
        "AI-based video optimization tool with YouTube API integration, competitor analysis, and audience behavior tracking. Features include content analysis, personalized recommendations, and a unified analytics dashboard for engagement growth.",

      image: "/images/WeGrow.png",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "FastAPI",
        "React",
        "PostgreSQL",
      ],
      features: [
        "Computer vision analysis",
        "Disease detection",
        "Growth tracking",
        "Automated reporting",
        "ML-powered insights",
      ],
      githubUrl: "https://github.com/noobProgrammer44/We_Grow",
      liveUrl: "https://grow-more-demo.com",
      status: "Completed",
    },
    {
      title: "TalentFlow",
      description:
        "AI-powered Resume Analyzer built with React & Puter.js. Includes seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. All wrapped in a clean, reusable UI.",
      image: "/images/TalentFlow.png",
      technologies: [
        "DockerFile",
        "TypeScript",
        "React",
        "Puter-JS",
        "Tailwind",
        "Zustand",
      ],
      features: [
        "Easy & convenient auth ",
        "Resume upload & storage",
        "AI resume matching",
        "SEO optimized",
        "Performance focused",
      ],
      githubUrl: "https://github.com/noobProgrammer44/TalentFlow",
      liveUrl: "https://amaankhan.dev",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="bg-section-bg py-20">
      <div className="section-container" ref={ref}>
        <motion.div {...baseAnimationProps}>
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                {...staggerAnimationProps(index, 0.2)}
                className="portfolio-card group h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-electric-blue/10 to-electric-purple/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Status Badge */}
                  {/* <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-success/20 text-success"
                          : "bg-warning/20 text-warning"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div> */}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3">
                      {/* <Button
                        size="sm"
                        className="btn-primary"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button> */}
                      {/* <Button
                        size="sm"
                        variant="outline"
                        className="btn-ghost"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button> */}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex mt-auto">
                    <Button
                      size="sm"
                      className="btn-primary w-full"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                  {/* <div className="flex space-x-3 mt-auto">
                    <Button
                      size="sm"
                      className="btn-primary flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="btn-ghost"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            {...staggerAnimationProps(projects.length)}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub for additional
              projects and contributions.
            </p>
            <Button
              className="btn-primary"
              onClick={() =>
                window.open("https://github.com/noobprogrammer44", "_blank")
              }
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
