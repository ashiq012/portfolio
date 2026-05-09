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
          className="text-xl md:text-2xl text-gray-100 leading-relaxed font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.span
            className="block mb-4 text-[#49c5b6] font-semibold text-2xl md:text-3xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I&apos;m Md Ashiq Ilahi!
          </motion.span>

          <motion.span
            className="block mb-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A passionate{' '}
            <span className="text-[#49c5b6] font-semibold">
              Full Stack MERN Developer
            </span>{' '}
            from New Delhi, focused on building scalable, modern, and
            user-friendly web applications using React.js, Node.js,
            Express.js, and MongoDB.
          </motion.span>

          <motion.span
            className="block mb-4 text-gray-200"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Skilled in developing secure authentication systems,
            RESTful APIs, real-time applications, database management,
            and performance optimization while following clean and
            maintainable code practices.
          </motion.span>

          <motion.span
            className="block text-gray-300"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Graduated with a Bachelor&apos;s in Computer Applications from{' '}
            <span className="text-[#49c5b6] font-semibold">
              Institute of Innovation in Technology & Management
            </span>
            , and actively seeking opportunities to contribute to impactful
            products and innovative development teams.
          </motion.span>
        </motion.p>
      </motion.div>
    </div>
  );
}
