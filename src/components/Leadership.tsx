import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, BookOpen } from "lucide-react";

const leadership = [
  {
    icon: Users,
    title: "Women in Data Science",
    role: "Active Member & Advocate",
    description: "Promoting diversity and inclusion in the data science community through mentorship and events.",
  },
  {
    icon: Award,
    title: "UBC Statistics Society",
    role: "Executive Member",
    description: "Organizing workshops and networking events for statistics students and professionals.",
  },
  {
    icon: BookOpen,
    title: "UBC Research",
    role: "Research Assistant",
    description: "Contributing to academic research in statistical methodology and data analysis techniques.",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Leadership & Community</h2>
          <p className="section-subtitle mx-auto">
            Giving back and growing with the data community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card-elevated p-8 text-center"
            >
              <div className="w-14 h-14 bg-primary/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-accent font-medium text-sm mb-4">{item.role}</p>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;