import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isInView, baseAnimationProps, staggerAnimationProps } =
    useScrollAnimation();

  const experiences = [
    {
      company: "FactWise",
      position: "Software Developer",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Built an end-to-end procurement tool automating 20+ workflows (lead capture, RFQ generation, negotiation, contract management), boosting efficiency by 40% and supporting 1000+ users with a scalable, API-integrated architecture.",
        "Enhanced performance and workflows with efficient API integrations, state management, and modern frontend practices (Redux, lazy loading, testing), while improving network efficiency and Core Web Vitals for smoother user experiences.",
        "Implemented role-based access control for dashboards and reports while developing B2B procurement modules with React and TypeScript",
        "Improved architecture and code quality by driving design decisions, refactoring legacy modules, and performing in-depth code reviews.",
      ],

      technologies: [
        "React",
        "TypeScript",
        "Material-UI",
        "Redux",
        "RTK Query",
        "React Hook Form",
        "Jest",
        "Webpack",
        "ESLint",
        "Lighthouse",
      ],
      current: true,
    },
    {
      company: "IIT Patna",
      position: "Machine Learning Intern",
      period: "2023 - 2024",
      location: "Patna, India (Remote)",
      description: [
        "Designed a task-offloading strategy for IoT edge devices using LSTMs and deep reinforcement learning",
        "Reduced task drop rates by 22% and lowered computational costs by 18%",
        "Enhanced IoT decision-making efficiency by optimizing task delays, energy consumption, and network congestion",
        "Improved system throughput by 20% and reduced latency by 15%",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Q-Learning",
        "Deep Q-Networks (DQN)",
        "LSTM",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      current: false,
    },
    {
      company: "Feynn AI",
      position: "Machine Learning Intern",
      period: "2023",
      location: "India (Remote)",
      description: [
        "Performed market and customer segmentation using machine learning for targeted marketing.",
        "Improved campaign accuracy by 25% through data-driven insights",
        "OIdentified key trends and correlations via advanced data analysis",
        "Optimized marketing strategies, boosting quarterly sales by 15% globally and locally.",
      ],
      technologies: [
        "Python",
        "scikit-learn",
        "KNN",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SQL",
        "AWS",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div {...baseAnimationProps}>
          <h2 className="section-title">Professional Experience</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-electric-purple"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  {...staggerAnimationProps(index, 0.2)}
                  className="timeline-item group"
                >
                  <div className="portfolio-card ml-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Building2 className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-electric-blue to-electric-purple text-white">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          {exp.position}
                        </h4>
                      </div>

                      <div className="flex flex-col md:items-end space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 text-muted-foreground"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievement Highlight */}
          <motion.div
            {...staggerAnimationProps(experiences.length)}
            className="mt-16 text-center"
          >
            <div className="portfolio-card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Research & Publications
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">
                  "Depression Detection Using Machine Learning"
                </strong>{" "}
                - Published research focusing on mental health analysis using
                advanced ML techniques. This work demonstrates the application
                of artificial intelligence in healthcare, achieving significant
                accuracy improvements in depression detection algorithms.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
