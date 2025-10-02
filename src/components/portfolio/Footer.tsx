import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Scroll to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-muted-foreground flex items-center justify-center space-x-2">
              <span>© 2024 Amaan Khan.</span>
              {/* <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> */}
              {/* <span>using React & Tailwind CSS</span> */}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center max-w-md"
          >
            <p className="text-sm text-muted-foreground italic">
              "Code is like humor. When you have to explain it, it's bad." -
              Cory House
            </p>
          </motion.div>

          {/* Version */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-xs text-muted-foreground/60">v1.0.0</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
