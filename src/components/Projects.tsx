import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built a machine learning pipeline to predict customer churn with 92% accuracy, enabling proactive retention strategies.",
    tags: ["Python", "Scikit-learn", "Pandas", "Tableau"],
    github: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Designed an interactive Power BI dashboard tracking $50M+ in annual sales across multiple product lines.",
    tags: ["Power BI", "SQL", "DAX", "Azure SQL"],
    github: "#",
  },
  {
    title: "ETL Pipeline Framework",
    description: "Developed a scalable ETL framework using Airflow, processing 10M+ records daily with 99.9% reliability.",
    tags: ["Python", "Airflow", "GCP", "BigQuery"],
    github: "#",
  },
  {
    title: "A/B Testing Platform",
    description: "Created a statistical analysis tool for A/B testing, reducing analysis time by 60% for the product team.",
    tags: ["R", "Shiny", "Statistical Analysis"],
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of work that demonstrates my approach to data problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-elevated p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;