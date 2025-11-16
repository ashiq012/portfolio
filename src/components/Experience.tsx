'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Statistical Analyst – Internship",
    company: "Indian Sugar & Bio-energy Association (ISMA), New Delhi (On-Site)",
    duration: "Jul 2024 - Jan 2025",
    description: [
      "Delivered pan-India sugar and ethanol data analysis for 150+ mills, driving strategic decisions for manager & director-level stakeholders.",
      "Co-developed the Statistics Handbook 2023-24 (150+ pages), ensuring error-free delivery to 500+ industry stakeholders.",
      "Established robust validation protocols, reducing reporting errors by 25%.",
      "Automated 5+ reporting processes using Advanced Excel and Python, reducing manual work by 40%."
    ],
    skills: ["Advanced Excel", "Data Analysis", "Python (Automation)"]
  },
  {
    title: "Machine Learning Engineer – Internship",
    company: "CodSoft, New Delhi (Remote)",
    duration: "Oct 2023 - Nov 2023",
    description: [
      "Completed hands-on projects to gain real-world ML experience.",
      "Applied preprocessing, visualization, and modeling techniques on datasets."
    ],
    skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
  },
  {
    title: "Teacher of Mathematics",
    company: "Vijay Institute and Learning, New Delhi (Part-time)",
    duration: "May 2022 - Apr 2023",
    description: [
      "Taught mathematics with a focus on problem-solving and conceptual clarity.",
      "Developed and presented mathematical solutions to students.",
      "Maintained high engagement levels in class, fostering a love for math."
    ],
    skills: ["Mathematical Analysis", "Teaching", "Presenting Solutions"]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 w-full max-w-4xl mx-auto px-4">
      <motion.h2 
        className="text-4xl font-extrabold text-center mb-16 text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#1E2326] border border-gray-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-[#49c5b6] font-semibold text-lg hover:bg-[#2a2f32] transition"
            >
              <span>{exp.title} — <span className="text-gray-400 text-sm">{exp.company} | {exp.duration}</span></span>
              <span className="text-gray-400">{openIndex === index ? '−' : '+'}</span>
            </button>

            {/* Body */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <ul className="list-disc list-inside text-gray-300 text-sm mb-4 space-y-1 mt-3">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-[#49c5b6] to-[#3a9f92] px-3 py-1 rounded-full text-xs text-gray-900 font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
