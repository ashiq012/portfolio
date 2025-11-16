'use client';

import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Programming & Analysis",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Basic ML"]
  },
  {
    category: "Databases & SQL",
    items: [
      "MySQL",
      "Subqueries",
      "Joins",
      "Window Functions",
      "CTEs",
      "Aggregate Functions",
      "Normalization"
    ]
  },
  {
    category: "Business Intelligence",
    items: [
      "Power BI",
      "Power Query",
      "DAX Functions",
      "Data Modeling",
      "Time Intelligence"
    ]
  },
  {
    category: "Excel & Spreadsheet Tools",
    items: [
      "Pivot Table",
      "Power Pivot",
      "Charts & Graphs",
      "Conditional Formatting",
      "Advanced Excel Functions"
    ]
  },
  {
    category: "Data Engineering Basic",
    items: [
      "Snowflake",
      "Airflow",
      "PySpark",
      "ETL Pipeline Processes",
      "Azure Cloud Platform"
    ]
  },
  {
    category: "Soft Skills",
    items: [
      "Stakeholder Management",
      "Data Driven Solutions",
      "Problem Solving",
      "Communication & Presentation",
      "Critical Thinking"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Skills() {
  return (
    <section className="py-16 w-full max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            className="bg-[#2A2F32] p-6 rounded-lg w-full"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#49c5b6] text-center">
              {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-[#383F42] px-3 py-1 rounded-full text-sm text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
