'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import img from '@/assets/image.png';
// Import your actual project images

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  tools: string[];
  category:  'full-stack' | 'frontend' | 'backend';
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Real-Time Chat Application",
    description: "Chat Application built with React, Node.js, and Socket.io for real-time communication.",
    image: img,
    tools: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "full-stack",
    link: "https://github.com/ashiq012/chat-application"
  },
  {
    id: 2,
    name: "Crypto Tracker Application",
    description: "A real-time cryptocurrency tracking application built with React and CoinGecko API, featuring interactive charts with Chart.js.",
    image: img,
    tools: ["React", "CoinGecko API", "Chart.js"],
    category: "frontend",
    link: "https://crypto-analyst-nine.vercel.app/"
  },
  {
    id: 3,
    name: "Employee Management System ",
    description: "A full-stack employee management system with React and local storage for data persistence, allowing users to add, edit, and delete employee records & assign tasks.",
    image: img,
    tools: ["React", "Local Storage"],
    category: "full-stack",
    link: "https://ems-react-js-theta.vercel.app/"
  },
  {
    id: 4,
    name: "Pixabay clone - Image Search App",
    description: "A responsive image search application built with React and the Pixabay API.",
    image: img,
    tools: ["React", "Pixabay API"],
    category: "frontend",
    link: "https://pixabay-gray-two.vercel.app/"
  },
  
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend'>('all');

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
        {["all", "frontend", "backend", "full-stack"].map((type) => (
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
