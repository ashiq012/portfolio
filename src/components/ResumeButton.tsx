'use client';

import { motion } from 'framer-motion';

export default function ResumeButton() {
  return (
    <div className="flex justify-center py-16 ">
      <motion.a
        href="mailto: romigupta1875@gmail.com" // Replace with your resume link
        target="_blank"
        rel="noopener noreferrer"
        className="backdrop-blur-md bg-white/10 px-8 py-4 rounded-full border border-white/20 shadow-lg 
                 text-gray-200 hover:text-[#49c5b6] font-medium transition-all duration-300 
                 hover:scale-105 hover:shadow-xl hover:border-[#49c5b6]/50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Request Resume
      </motion.a>
    </div>
  );
}