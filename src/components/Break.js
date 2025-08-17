'use client';
import { motion } from 'framer-motion';

export default function Break() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeUp}
          >
            Why Choose <span className='font-kadwa font-medium'>pave</span>?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Our platform provides a <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(193,71,233,0.7)]'>secure </span>
            and <span className='font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(193,71,233,0.7)]'>transparent</span> way to manage age verifications,
             acting as a trusted intermediary between users and businesses. 
             With a tamper-evident public registry of verified sources, businesses
              gain confidence and compliance while users enjoy privacy and peace of 
              mind.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
