import { motion } from "framer-motion";
import { Code, Brain, Rocket, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

// Custom hook for number animation
const useCountUp = (
  end,
  duration = 2000,
  decimals = 0,
  shouldStart = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(end * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
};

const About = () => {
  const { ref, isInView, baseAnimationProps, staggerAnimationProps } =
    useScrollAnimation();

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Expertise in React, TypeScript, Redux, Node.js, and modern web technologies",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Experience with TensorFlow and Python, applying AI to projects like video analysis, IoT optimization, and data insights.",
    },
    {
      icon: Rocket,
      title: "Innovation & Problem-Solving",
      description:
        "Curious and creative — exploring new tech, streamlining workflows, and solving real-world challenges.",
    },
    {
      icon: Heart,
      title: "Craftsmanship & Growth",
      description:
        "Committed to writing clean, efficient code and continuous learning",
    },
  ];

  const stats = [
    { number: 8.91, label: "GPA", decimals: 2 },
    { number: 3, label: "Years Experience", suffix: "+" },
    { number: 10, label: "Projects Completed", suffix: "+" },
    { number: 1, label: "Research Paper" },
  ];

  // Call hooks at component level
  const animatedGPA = useCountUp(8.91, 2000, 2, isInView);
  const animatedYears = useCountUp(3, 2000, 0, isInView);
  const animatedProjects = useCountUp(10, 2000, 0, isInView);
  const animatedPapers = useCountUp(1, 2000, 0, isInView);

  const animatedNumbers = [
    animatedGPA,
    animatedYears,
    animatedProjects,
    animatedPapers,
  ];

  return (
    <section id="about" className="bg-section-bg py-20">
      <div className="section-container" ref={ref}>
        <motion.div {...baseAnimationProps}>
          <h2 className="section-title">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div {...staggerAnimationProps(1)} className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm a passionate Software Developer with a strong foundation
                  in both web development and machine learning. Currently
                  working at{" "}
                  <span className="text-primary font-semibold">FactWise</span>,
                  I specialize in creating scalable applications using modern
                  technologies like React and TypeScript.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  My journey in tech has been driven by curiosity and a desire
                  to solve real-world problems. From developing AI-based video
                  analysis tools to building real-time applications, I enjoy
                  tackling challenges that push the boundaries of what's
                  possible.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest in AI
                  research, contributing to open-source projects, or
                  participating in competitive programming challenges. I believe
                  in continuous learning and sharing knowledge with the
                  developer community.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              {...staggerAnimationProps(2)}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  {...staggerAnimationProps(3 + index, 0.1)}
                  className="portfolio-card group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-electric-blue/20 to-electric-purple/20">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fun Facts with Animated Numbers */}
          <motion.div
            {...staggerAnimationProps(7)}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  {...staggerAnimationProps(8 + index, 0.1)}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
                    {animatedNumbers[index]}
                    {stat.suffix || ""}
                  </div>
                  <div className="text-muted-foreground text-sm mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
