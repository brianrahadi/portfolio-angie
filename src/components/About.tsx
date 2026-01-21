import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Database, BarChart3 } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    // {
    //   icon: TrendingUp,
    //   title: "33k+ Learners",
    //   description: "QA + analytics for AI systems used globally",
    // },
    // {
    //   icon: Database,
    //   title: "ETL at Scale",
    //   description: "Airflow + SQL pipelines in production",
    // },
    // {
    //   icon: BarChart3,
    //   title: "100+ Dashboards",
    //   description: "Standardized across Tableau & Power BI",
    // },
  ];

  return (
    <section id="about" className="bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">👋🏻 About Me</h2>
          <p className="section-subtitle mx-auto">
            {/* Passionate about transforming raw data into meaningful stories */}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
          I work with data and statistics to help teams make better decisions. I’ve built pipelines, dashboards, and QA systems, and I like owning the full process - from raw data to insights. <br /><br />
          
  Outside of work, you’ll probably find me crocheting 🧶, sketching digital art 🎨, or exploring new ways to make data more understandable and fun.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-14 h-14 bg-primary/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;