import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, isInView, baseAnimationProps, staggerAnimationProps } =
    useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_gago7an";
  const EMAILJS_TEMPLATE_ID = "template_qwllrfh";
  const EMAILJS_PUBLIC_KEY = "bNMnwr5YW27B-ROZH";

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kamaan551@gmail.com",
      href: "mailto:kamaan551@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8291192358",
      href: "tel:+918291192358",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/noobprogrammer44",
      username: "@noobprogrammer44",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/amaan-khan-328044212",
      username: "Amaan Khan",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you can also do this once in your app)
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "kamaan551@gmail.com",
        }
      );

      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative: Mailto fallback
  const handleMailtoFallback = () => {
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Amaan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.open(`mailto:kamaan551@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="bg-section-bg py-20">
      <div className="section-container" ref={ref}>
        <motion.div {...baseAnimationProps}>
          <h2 className="section-title">Get In Touch</h2>

          <div className="max-w-4xl mx-auto">
            <motion.p
              {...staggerAnimationProps(1)}
              className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
            >
              I'm always interested in new opportunities, collaborations, and
              interesting projects. Whether you have a question or just want to
              say hi, feel free to reach out!
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div {...staggerAnimationProps(2)} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        {...staggerAnimationProps(3 + index, 0.1)}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-electric-blue/20 to-electric-purple/20">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...staggerAnimationProps(6 + index, 0.1)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="portfolio-card p-4 flex items-center space-x-3 group hover:scale-105 transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {social.label}
                          </p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {social.username}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div {...staggerAnimationProps(8)}>
                <div className="portfolio-card">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Send me a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px] resize-none"
                        placeholder="Tell me about your project or just say hi!"
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 btn-primary"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Fallback mailto button */}
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleMailtoFallback}
                        className="px-4"
                        title="Open in email client"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
