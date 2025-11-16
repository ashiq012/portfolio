'use client';

import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20 text-center overflow-hidden">
      <motion.div 
        className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#49c5b6]/20 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-xl md:text-2xl text-gray-100 leading-relaxed font-poppins space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
        <motion.span
          className="block mb-3 text-[#49c5b6] font-medium"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hi, I&apos;m Romi Gupta!
        </motion.span>
        <motion.span
          className="block mb-3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
           Graduated from <span className="text-[#49c5b6] font-semibold">Maharaja Surajmal Institute</span> with a Bachelor&apos;s in Computer Applications, currently pursuing <span className="text-[#49c5b6] font-semibold">MCA in Data Science & Analytics from IGNOU</span>.
        </motion.span>
        {/* <motion.span
          className="block text-gray-200"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Passionate about <span className="text-[#49c5b6] font-semibold">Data Science & Analytics</span>, seeking opportunities to create meaningful impact through data-driven solutions.
        </motion.span> */}
        </motion.p>
      </motion.div>
    </div>
  );
}