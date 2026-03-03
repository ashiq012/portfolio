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
    title: "Full stack web developer - training & internship",
    company: "MakeInterns, New Delhi (Remote)",
    duration: "Jun 2024 - Aug 2024",
    description: [
      "Developed 3+ full stack projects using React, Node.js, and MongoDB, showcasing proficiency in front-end and back-end development.",
      "Built and integrated 10+ RESTful APIs with structured routing and middleware improving backend maintainability and debugging efficiency",
      "Applied Git-based collaborative workflows within Agile sprint cycles ensuring structured version control and deployment consistency",
      "Optimized performance tuning and debugging practices reducing runtime errors and improving application stability"
    ],
    skills: ["React", "Node.js", "MongoDB","Express", "Git"]
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
