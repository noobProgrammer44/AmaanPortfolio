import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Brain, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isInView, baseAnimationProps, staggerAnimationProps } =
    useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Development",
      icon: Smartphone,
      skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "Pandas",
        "NumPy",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["VS Code", "Postman", "Figma", "Jira", "Firebase", "Vercel"],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const achievements = [
    {
      title: "Competitive Programming",
      description:
        "Secured 3rd place in Codertine among 600+ participants and hold an All-Time Institute Rank of #3 on GeeksforGeeks",
      icon: "🏆",
    },
    {
      title: "Research Publication",
      description:
        "Depression Detection Using Machine Learning \n Transformer-DQN for Dynamic Task Offloading in 6G-MEC",
      icon: "📚",
    },
    {
      title: "Academic Excellence",
      description: "8.91 GPA in Computer Engineering",
      icon: "🎓",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.div {...baseAnimationProps}>
          <h2 className="section-title">Skills & Expertise</h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                {...staggerAnimationProps(index, 0.1)}
                className="portfolio-card group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      {...staggerAnimationProps(index * 6 + skillIndex, 0.05)}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div {...staggerAnimationProps(skillCategories.length)}>
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Achievements & Recognition
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  {...staggerAnimationProps(
                    skillCategories.length + 1 + index,
                    0.1
                  )}
                  className="portfolio-card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            {...staggerAnimationProps(
              skillCategories.length + achievements.length + 1
            )}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
              Education
            </h3>

            <div className="max-w-2xl mx-auto">
              <div className="portfolio-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-electric-blue/20 to-electric-purple/20">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Bachelor of Engineering in Computer Engineering
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      Rajiv Gandhi Institute of Technology
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground">
                      <span>2020 - 2024</span>
                      <span className="font-semibold text-primary">
                        GPA: 8.91/10.0
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Specialized in software development, machine learning, and
                      data structures. Completed advanced coursework in
                      algorithms, database systems, and AI/ML technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
