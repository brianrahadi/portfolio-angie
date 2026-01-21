import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Lirvana Labs",
    role: "Quality Assurance Manager",
    period: "Remote, Canada · May 2025 – Present",
    description: "Lead QA and analytics workflows for AI-driven learning systems used by 33k+ learners in 70+ languages. Build dashboards, track release quality across 14+ releases, and use data to cut recurring issues by 30%.",
  },
  {
    company: "University of British Columbia",
    role: "Data Science Teaching Assistant",
    period: "Vancouver, BC · Sep 2022 – May 2025",
    description: "Supported 3,000+ students in data science and statistics courses, teaching data wrangling, visualization, and machine learning concepts. Guided students on applying concepts to projects while consistently receiving high teaching evaluations.",
  },
  {
    company: "Samsung Electronics",
    role: "Data Analyst · Co-op",
    period: "Vancouver, BC · Jan 2024 – Aug 2024",
    description: "Led an independent analytics project on Samsung Knox Suite data, identifying risks and performance gaps. Improved and standardized 100+ dashboards while optimizing ETL pipelines, increasing efficiency by 30%.",
  },
  {
    company: "TELUS",
    role: "Business Intelligence Engineer · Co-op",
    period: "Vancouver, BC · Jan 2023 – Aug 2023",
    description: "Optimized cloud ETL pipelines processing millions of records, cutting data processing time by 50%. Enhanced forecasting tools & produced recurring reports to support business decisions.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-secondary/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">experience</h2>
          <p className="section-subtitle mx-auto">
            {/* Building expertise across analytics, engineering, and leadership */}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-accent" />
              </div>

              <div className="card-elevated p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-accent font-medium mb-3">{exp.role}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;