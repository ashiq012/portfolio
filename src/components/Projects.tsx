'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

// Import your actual project images
import carprice from '@/assets/carprice.jpg';
import hotel from '@/assets/hotel.jpg';
import creditcard from '@/assets/creditcard.jpg';
import olympics from '@/assets/olympics.jpg';
import pan_valid from '@/assets/pan_valid.jpg';
import financial from '@/assets/financial.jpg';
import mart from '@/assets/mart.jpg';
import pizza from '@/assets/pizza.png';

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  tools: string[];
  category:  'analytics' | 'bi' | 'ml';
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Atliq Mart Promotion Analysis & Insights",
    description: "Analyze Promotions and Provide Tangible Insights to Sales Director for Diwali 2025 & Makar Sakranti 2025",
    image: mart,
    tools: ["Excel", "Power BI", "Mysql"],
    category: "bi",
    link: "https://mavenshowcase.com/project/49299"
  },
  {
    id: 2,
    name: "Pizza Runner - SQL Case Study",
    description: "Pizza Runner is a data-driven case study that combines pizza delivery with 'Uberization' concepts.",
    image: pizza,
    tools: ["Mysql"],
    category: "analytics",
    link: "https://mavenshowcase.com/project/49299"
  },
  {
    id: 3,
    name: "Car Price Prediction Model",
    description: "A Machine Learning model built using Python and Scikit-Learn to predict car prices.",
    image: carprice,
    tools: ["Python", "Pandas", "Scikit-Learn"],
    category: "ml",
    link: "https://github.com/MasterMindRomii/Car-Price-Prediction-Model"
  },
  {
    id: 4,
    name: "PAN Number Validation Project using MySQL",
    description: "This project includes SQL scripts to clean, validate, and categorize PAN numbers as Valid or Invalid based on multiple business rules and regex patterns.",
    image: pan_valid,
    tools: ["SQL", "MySQL", "Regex", "View", "Function"],
    category: "analytics",
    link: "https://mavenshowcase.com/project/43854"
  },
  {
    id: 5,
    name: "AtliQ Grands Hospitality Dashboard",
    description: "A BI dashboard using Tableau & Excel to analyze hotel booking performance.",
    image: hotel,
    tools: ["Tableau", "Excel"],
    category: "bi",
    link: "https://mavenshowcase.com/project/16725"
  },
  {
    id: 6,
    name: "Credit Card Usage Analysis Dashboard",
    description: "A Power BI dashboard analyzing credit card usage trends.",
    image: creditcard,
    tools: ["Power BI", "Excel"],
    category: "bi",
    link: "https://mavenshowcase.com/project/15249"
  },
  {
    id: 7,
    name: "Olympics Data Case Study",
    description: "An SQL-based analytics project on Olympics data.",
    image: olympics,
    tools: ["SQL", "MySQL"],
    category: "analytics",
    link: "https://mavenshowcase.com/project/15251"
  },
  {
    id: 8,
    name: "AtliQ Hardware – Finance Analysis & Reporting",
    description: "Finance analytics using Excel and DAX to evaluate company performance.",
    image: financial,
    tools: ["Excel", "DAX", "VBA"],
    category: "analytics",
    link: "https://mavenshowcase.com/project/16717"
  },
  
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ml' | 'bi' | 'analytics'>('all');

  const filteredProjects = projects.filter(project =>
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section className="py-16 w-full max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {["all", "ml", "bi", "analytics"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as any)}
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === type 
                ? 'bg-[#49c5b6] text-white' 
                : 'bg-[#2A2F32] text-gray-300 hover:bg-[#383F42]'
            }`}
          >
            {type === "all" ? "All" : type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2A2F32] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#49c5b6]">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-[#383F42] px-2 py-1 rounded-full text-xs text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
