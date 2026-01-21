import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:angelique@example.com",
    username: "angelique@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/angelique",
    username: "linkedin.com/in/angelique",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/angelique",
    username: "github.com/angelique",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto">
            I'm always open to discussing data, analytics, or new opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="card-elevated p-6 flex items-center gap-4 min-w-[260px] group"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                <link.icon className="w-5 h-5 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{link.label}</p>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;