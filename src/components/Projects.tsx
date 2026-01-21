import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Spiral COVID-19 Data Visualizer",
    description: "Created spiral graph visualizations with ggplot2 to show real-time COVID-19 time-series data.",
    tags: ["Java", "R", "CSS", "HTML", "Node.js", "ggplot2"],
    github: "https://github.com/YellowPrawn/Spiral-Data-Visualizer",
    link: "https://yellowprawn.github.io/Spiral-Data-Visualizer/",
  },
  {
    title: "Credit Card Default Analysis",
    description: "Built ML models (Logistic Regression, Random Forest, CatBoost, k-NN) to predict credit card defaults, achieving ~85% accuracy. Used SHAP and eli5 for feature importance and model explainability.",
    tags: ["Python", "Scikit-learn", "Pandas", "SHAP", "eli5"],
    github: "https://github.com/angieclra/credit_card_ML_analysis/tree/main",
    link: "https://github.com/angieclra/credit_card_ML_analysis/blob/main/project.ipynb",
  },
  {
    title: "Vancouver Airbnb Market Insights",
    description: "Explored Airbnb listings, pricing, and host behaviors in Vancouver using interactive dashboards. Highlighted patterns in neighborhood distribution, pricing, and guest experiences to inform hosts, travelers, and researchers.",
    tags: ["Python","Pandas", "Altair"],
    github: "https://github.com/ubc-dsci320-2024w2/project-team_fantasticfour/blob/main/analysis/Angelique/analysis2.ipynb",
    link: "https://github.com/ubc-dsci320-2024w2/project-team_fantasticfour/pull/4",
  },

  {
    title: "Celebrity Life Expectancy Analysis",
    description: "Analyzed celebrity ages at death using random and stratified sampling, finding the median aligns with the global average (72.6 years) and highlighting differences across gender groups.",
    tags: ["R", "Statistics", "Data Analysis", "Sampling Methods"],
    github: "https://github.com/jjadeb/STAT334-Project/blob/master/STAT344%20Group%20Project-Copy1.ipynb",
    link: "https://github.com/jjadeb/STAT334-Project/blob/master/STAT344%20Group%20Project-Copy1.ipynb"
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
          <h2 className="section-title">featured projects</h2>
          <p className="section-subtitle mx-auto">
            {/* A selection of work that demonstrates my approach to data problems */}
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
                    href={project.link}
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