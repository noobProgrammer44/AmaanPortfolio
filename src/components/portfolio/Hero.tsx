import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/interactive/TypingAnimation";

const Hero = () => {
  const typingPhrases = [
    "Software Engineer",
    "Frontend Developer",
    "React & TypeScript Specialist",
    "Machine Learning Explorer",
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/noobProgrammer44",
      label: "GitHub",
      delay: 0.6,
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/amaan-khan-328044212",
      label: "LinkedIn",
      delay: 0.7,
    },
    {
      icon: Mail,
      href: "mailto:kamaan551@gmail.com",
      label: "Email",
      delay: 0.8,
    },
    {
      icon: FileDown,
      href: "/Amaan_SDE_Resume.pdf", // put your resume file in public/resume.pdf
      label: "Resume",
      delay: 0.9,
      download: true,
    },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Hi there! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-title"
          >
            Amaan Khan
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TypingAnimation
              phrases={typingPhrases}
              className="hero-subtitle"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Passionate about creating innovative solutions with React,
            TypeScript, and Machine Learning. Currently building scalable
            applications at FactWise.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                target={link.download ? "_self" : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download ? true : undefined}
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: link.delay }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button className="btn-primary" onClick={() => scrollToAbout()}>
              Learn More About Me
            </Button>
            <Button
              variant="outline"
              className="btn-ghost"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
