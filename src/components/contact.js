'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-20 px-6">
      <motion.div
        className="w-full max-w-2xl bg-gradient-to-br from-purple-700 via-purple-600 to-blue-500 rounded-3xl shadow-xl p-10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-6 text-center"
          variants={fadeUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-gray-200 mb-8 text-center"
          variants={fadeUp}
        >
          Send us a message and we’ll get back to you as soon as possible.
        </motion.p>

        <motion.form className="space-y-6" variants={container}>
          {/* Name */}
          <motion.div variants={fadeUp}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl border border-gray-400 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeUp}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl border border-gray-400 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp}>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-3 rounded-xl border border-gray-400 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeUp} className="text-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>

        {/* Optional subtle floating blobs for background vibe */}
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </section>
  );
}
