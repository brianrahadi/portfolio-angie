import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Angelique Clara Hanzell. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion for data & design
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;