'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const line1 = ["The", "future", "of"];
  const line2 = ["age", "verification"];

  const container = {
    hidden: { opacity: 0 },
    visible: (stagger = 0.2) => ({
      opacity: 1,
      transition: { staggerChildren: stagger },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Optional floating blobs for subtle motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </div>

      {/* Centered card */}
      <motion.div
        className="relative z-10 rounded-2xl px-[200px] py-[108px] text-center shadow-xl bg-gradient-to-r from-[#C147E9] via-[#C147E9] to-blue-500 bg-[length:200%_200%]"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        {/* Heading - line 1 */}
        <motion.h1
          className="text-6xl md:text-7xl text-black mb-2 font-inter"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {line1.map((word, i) => (
            <motion.span key={i} variants={child} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Heading - line 2 */}
        <motion.h1
          className="text-4xl md:text-7xl text-black mb-6 font-inter"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {line2.map((word, i) => (
            <motion.span key={i} variants={child} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-xl text-gray-900 max-w-xl mx-auto leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Your go-to registry for verifiable, privacy-safe age checks - ensuring trust and transparency between users and businesses.
        </motion.p>
      </motion.div>
    </section>
  );
}
